const HS_API = 'https://api.hubapi.com';
const RESEND_API = 'https://api.resend.com/emails';
// Destinatarios del aviso. Se pueden cambiar sin tocar el código cargando
// la variable NOTIFY_TO en Cloudflare (emails separados por coma).
const DEFAULT_NOTIFY_TO = ['patolramirez@gmail.com', 'slutz1982@gmail.com'];

const MAX_BODY_BYTES = 10_000;
const LIMITS = { firstname: 80, lastname: 80, email: 254, phone: 40, country: 80, message: 4000, pageName: 150 };
const EMAIL_RE = /^[^\s@<>"',;]+@[^\s@<>"',;]+\.[a-z]{2,}$/i;

const JSON_HEADERS = { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' };

function json(body, status) {
  return new Response(JSON.stringify(body), { status, headers: JSON_HEADERS });
}

// El formulario vive en el mismo sitio que esta función, así que el único
// origen legítimo es el propio. Sin esto, cualquier página o script podía
// postear acá; un navegador siempre manda Origin en un POST con fetch.
function isSameOrigin(request) {
  const origin = request.headers.get('Origin');
  if (!origin) return false;
  try {
    return new URL(origin).host === new URL(request.url).host;
  } catch {
    return false;
  }
}

// Texto plano de una sola línea (o varias, para el mensaje), sin caracteres
// de control y recortado al máximo de cada campo.
function clean(value, max, multiline = false) {
  if (typeof value !== 'string') return '';
  const stripped = multiline
    ? value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    : value.replace(/[\u0000-\u001F\u007F]/g, ' ');
  return stripped.trim().slice(0, max);
}

async function hubspot(token, method, path, body) {
  return fetch(`${HS_API}${path}`, {
    method,
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

// Crea el contacto. Si el email ya existe NO se pisan sus datos (nombre,
// teléfono, país): este endpoint es público, y con un upsert cualquiera que
// conociera el email de un contacto podía reescribirle la ficha. Para un
// contacto existente solo se actualiza el mensaje de la consulta; los datos
// que escribió en el formulario llegan igual en el mail de aviso.
async function saveContact(token, props) {
  const created = await hubspot(token, 'POST', '/crm/v3/objects/contacts', { properties: props });
  if (created.ok) return;
  if (created.status !== 409) {
    throw new Error(`Contact create failed (${created.status}): ${await created.text()}`);
  }
  if (!props.message) return;
  const updated = await hubspot(
    token,
    'PATCH',
    `/crm/v3/objects/contacts/${encodeURIComponent(props.email)}?idProperty=email`,
    { properties: { message: props.message } },
  );
  if (!updated.ok) {
    throw new Error(`Contact update failed (${updated.status}): ${await updated.text()}`);
  }
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function notifyRecipients(env) {
  const configured = (env.NOTIFY_TO || '').split(',').map((s) => s.trim()).filter((s) => EMAIL_RE.test(s));
  return configured.length ? configured : DEFAULT_NOTIFY_TO;
}

async function sendNotificationEmail(apiKey, to, fields) {
  const { firstname, lastname, email, phone, country, message, pageName } = fields;
  const rows = [
    ['Nombre', [firstname, lastname].filter(Boolean).join(' ')],
    ['Email', email],
    ['Teléfono', phone],
    ['País', country],
    ['Página', pageName],
    ['Mensaje', message],
  ].filter(([, v]) => v);

  const html = `
    <h2 style="font-family:sans-serif;color:#3B5C45;">Nueva consulta desde el sitio</h2>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;">
      ${rows.map(([label, value]) => `
        <tr>
          <td style="padding:6px 12px 6px 0;color:#6B5E55;vertical-align:top;"><b>${escapeHtml(label)}</b></td>
          <td style="padding:6px 0;white-space:pre-wrap;">${escapeHtml(value)}</td>
        </tr>`).join('')}
    </table>`;

  const res = await fetch(RESEND_API, {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: 'Crecer Psicología <notificaciones@crecerpsicologia.com.ar>',
      to,
      subject: `Nueva consulta de ${firstname || 'un visitante'}`,
      html,
    }),
  });
  if (!res.ok) throw new Error(`Resend failed: ${await res.text()}`);
}

export async function onRequestPost({ request, env }) {
  if (!isSameOrigin(request)) {
    return json({ error: 'Forbidden' }, 403);
  }
  if (!(request.headers.get('Content-Type') || '').toLowerCase().startsWith('application/json')) {
    return json({ error: 'Unsupported content type' }, 415);
  }

  const token = env.HUBSPOT_TOKEN;
  if (!token) {
    console.error('[submit] HUBSPOT_TOKEN not set');
    return json({ error: 'Server error' }, 500);
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) {
    return json({ error: 'Payload too large' }, 413);
  }

  let body;
  try {
    body = JSON.parse(raw);
  } catch {
    return json({ error: 'Invalid JSON' }, 400);
  }
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return json({ error: 'Invalid JSON' }, 400);
  }

  // Campo trampa: está oculto en el formulario, una persona nunca lo
  // completa. Si viene con algo, es un bot: se responde OK y no se hace nada.
  if (typeof body.website === 'string' && body.website.trim() !== '') {
    return json({ ok: true }, 200);
  }

  const firstname = clean(body.firstname, LIMITS.firstname);
  const lastname = clean(body.lastname, LIMITS.lastname);
  const email = clean(body.email, LIMITS.email).toLowerCase();
  const phone = clean(body.phone, LIMITS.phone);
  const country = clean(body.country, LIMITS.country);
  const message = clean(body.message, LIMITS.message, true);
  const pageName = clean(body.pageName, LIMITS.pageName);

  if (!firstname || !EMAIL_RE.test(email)) {
    return json({ error: 'Missing or invalid required fields' }, 400);
  }

  const source = pageName ? `[${pageName}] ` : '';
  const contactProps = {
    firstname,
    email,
    ...(lastname && { lastname }),
    ...(phone && { phone }),
    ...(country && { country }),
    // "message" es una propiedad custom — ver README para el paso de
    // crearla en HubSpot antes de que este campo se guarde de verdad.
    ...(message && { message: source + message }),
  };

  try {
    await saveContact(token, contactProps);
  } catch (err) {
    // El detalle queda en los logs de Cloudflare; al visitante no se le
    // devuelve la respuesta cruda de HubSpot.
    console.error('[submit] HubSpot failed', err);
    return json({ error: 'No pudimos registrar la consulta' }, 502);
  }

  // El aviso por mail es un "nice to have": si Resend falla o no está
  // configurado, no hacemos fallar el submit — el contacto ya quedó
  // guardado en HubSpot, que es la fuente de verdad.
  if (env.RESEND_API_KEY) {
    try {
      await sendNotificationEmail(env.RESEND_API_KEY, notifyRecipients(env), { firstname, lastname, email, phone, country, message, pageName });
    } catch (err) {
      console.error('[submit] notification email failed', err);
    }
  } else {
    console.warn('[submit] RESEND_API_KEY not set — skipping notification email');
  }

  return json({ ok: true }, 200);
}
