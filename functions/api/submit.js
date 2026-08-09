const HS_API = 'https://api.hubapi.com';
const RESEND_API = 'https://api.resend.com/emails';
const NOTIFY_TO = ['patolramirez@gmail.com', 'slutz1982@gmail.com'];

const CORS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

async function upsertContact(token, props) {
  const res = await fetch(`${HS_API}/crm/v3/objects/contacts/batch/upsert`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      inputs: [{ idProperty: 'email', id: props.email, properties: props }],
    }),
  });
  if (!res.ok) throw new Error(`Contact upsert failed: ${await res.text()}`);
  return res.json();
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

async function sendNotificationEmail(apiKey, fields) {
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
          <td style="padding:6px 0;">${escapeHtml(value)}</td>
        </tr>`).join('')}
    </table>`;

  const res = await fetch(RESEND_API, {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: 'Crecer Psicología <notificaciones@crecerpsicologia.com.ar>',
      to: NOTIFY_TO,
      subject: `Nueva consulta de ${firstname || 'un visitante'}`,
      html,
    }),
  });
  if (!res.ok) throw new Error(`Resend failed: ${await res.text()}`);
}

export async function onRequestPost({ request, env }) {
  const token = env.HUBSPOT_TOKEN;
  if (!token) {
    return new Response(JSON.stringify({ error: 'Missing HUBSPOT_TOKEN' }), { status: 500, headers: CORS });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400, headers: CORS });
  }

  const { firstname, lastname, email, phone, country, message, pageUri, pageName } = body;
  if (!firstname || !email) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400, headers: CORS });
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
    await upsertContact(token, contactProps);
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), { status: 502, headers: CORS });
  }

  // El aviso por mail es un "nice to have": si Resend falla o no está
  // configurado, no hacemos fallar el submit — el contacto ya quedó
  // guardado en HubSpot, que es la fuente de verdad.
  if (env.RESEND_API_KEY) {
    try {
      await sendNotificationEmail(env.RESEND_API_KEY, { firstname, lastname, email, phone, country, message, pageName });
    } catch (err) {
      console.error('[submit] notification email failed', err);
    }
  } else {
    console.warn('[submit] RESEND_API_KEY not set — skipping notification email');
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200, headers: CORS });
}

export function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
