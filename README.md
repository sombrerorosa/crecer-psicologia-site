# Crecer Psicología — sitio + design system

- `design-system/` — design system vivo (`Design System.html`, tokens, componentes React de referencia). Dirección de producción: **Cálida**. Marca v2 (rebrand, ver sección abajo): lockup horizontal positivo/negativo, sin versión monocromática.
- `site/` — sitio de producción: **Astro** (estático) + **Sanity** (CMS) + **Cloudflare Pages** (hosting), mismo stack que `sombrero-rosa-site`.
- `functions/` — Cloudflare Pages Functions (API serverless), en la raíz del repo (Root directory del proyecto de Pages quedó vacío/`/`).

## Páginas migradas desde crecerpsicologia.com.ar

- `/` — Home (one-pager: hero, a quiénes atendemos, especialidades, enfoque, contacto, cómo funciona, FAQ)
- `/psicologia-online` — mejorada: unificada a la misma dirección visual Cálida, 3 audiencias (se sacó "Adultos mayores")
- `/psicologia-online-internacional` — tono alineado: campo País/región, sin default "Argentina" en el teléfono
- `/gracias` — mejorada visualmente; es el destino post-envío del formulario (dispara conversión de medios)
- `/politica-de-privacidad` — migrada tal cual

Por pedido explícito: **no hay sección "Nuestro Equipo"**.

## Formulario de contacto → `functions/api/submit.js`

El HubSpot de Crecer tiene el CAPTCHA anti-spam activado en sus formularios, y HubSpot **no permite enviar por API a un formulario con CAPTCHA** (`FORM_HAS_RECAPTCHA_ENABLED`). Por eso el form no le pega a la Forms API de HubSpot — el fetch del cliente (`ContactForm.astro`) va a `/api/submit` (esta función), que:

1. **Hace upsert del contacto en HubSpot** vía CRM API (`/crm/v3/objects/contacts/batch/upsert`), autenticado con un **Private App token** guardado en Cloudflare Pages como variable secreta `HUBSPOT_TOKEN`. Usa `email` como `idProperty` (crea o actualiza el contacto existente). La propiedad `message` es custom pero ya existe en esta cuenta de HubSpot.
2. **Manda un mail de aviso** a `patolramirez@gmail.com` y `slutz1982@gmail.com` vía **Resend** (`RESEND_API_KEY`, otra variable secreta en Cloudflare Pages) — si falla o no está configurada la key, no rompe el submit, solo no llega el aviso (HubSpot ya tiene el dato).

Al terminar OK, el cliente redirige a `/gracias` (para la conversión de Meta/Google Ads).

**Pendiente para que el mail de aviso funcione**: crear cuenta en resend.com, verificar el dominio `crecerpsicologia.com.ar` (agrega unos registros DNS en Cloudflare, análogo a lo que ya hicimos con Sanity/HubSpot), generar un API key y cargarlo en Cloudflare Pages → Settings → Variables and Secrets → `RESEND_API_KEY` (tipo Secret). El `from` que usa el código es `notificaciones@crecerpsicologia.com.ar` — tiene que coincidir con el dominio verificado en Resend.

Los dos form IDs de HubSpot (Argentina `568a344c-...`, Exterior `369f0579-...`) quedaron en el código como referencia pero **ya no se usan para el submit** — todo pasa por el mismo endpoint.

## Sanity

Proyecto: **`98goghrf`**, dataset `production`. Cableado en `site/sanity.config.ts`, `site/sanity.cli.ts`, `site/sanity/sanity.config.ts` y `site/.env.example`. Los fetchers (`src/lib/sanity.ts`) atrapan cualquier error de red/config y caen a los defaults hardcodeados — nunca rompen el build.

Pendiente: las 3 páginas ya estaban publicadas en el Studio con contenido viejo (FAQ con placeholders, 4 audiencias en Online) — como Sanity tiene prioridad sobre los defaults del código, **hay que repetir ahí** los cambios de FAQ y sacar "Adultos mayores" (texto exacto ya se le pasó al cliente por chat).

## Cloudflare Pages

2 proyectos deployados: sitio y Studio, ambos con Root directory vacío (`/`) y build command `cd site && npm install && npm run build` (Studio: `cd site && npm ci && npx sanity build studio-dist`).

**Migración de dominio — en curso**: `crecerpsicologia.com.ar` y `www.crecerpsicologia.com.ar` ya están agregados como Custom domains en el proyecto del sitio. Nameservers ya delegados a Cloudflare desde NIC.ar, DNS revisado (los subdominios de cPanel/mail se dejaron en "DNS only" para no romper webmail/FTP/email — ver historial de chat para el detalle). Falta:
- Confirmar que terminó de propagar y el dominio quedó "Active" con SSL emitido.
- Elegir cuál de los dos (`crecerpsicologia.com.ar` o `www`) es el dominio primario en Cloudflare Pages, y actualizar `site: '...'` en `site/astro.config.mjs` para que coincida (hoy dice `https://www.crecerpsicologia.com.ar`).
- Verificar el sitio en Search Console (TXT record en el DNS de Cloudflare) una vez el dominio esté activo.

El email (`consultas@crecerpsicologia.com.ar`) se queda en el hosting cPanel actual — no migra a ningún lado. Si en el futuro dan de baja ese hosting, la idea acordada es Cloudflare Email Routing (gratis) reenviando a Gmail + "Enviar como" en Gmail, en vez de Google Workspace.

## Rebrand (marca v2)

Cambio de marca aplicado tanto a `site/` (producción) como a `design-system/`, a partir de un kit (`crecer-kit-web.zip`) con logo nuevo, paleta y fuentes nuevas, favicons, OG image y una plantilla de schema.org.

- **Paleta**: mauve/blush (`#8A5F61` primario, `#E9DAD5` superficie suave) con tinta (`#142531`) y slate (`#354752`) como neutros, rosa (`#CDAEAE`) como acento decorativo (nunca con texto blanco encima). Reemplaza la v1 (verde bosque/crema/arena/marrón). Los **nombres** de variable CSS (`--c-forest`, `--c-ink`, etc.) se mantuvieron iguales a propósito — solo cambiaron los valores — para no tener que tocar cada componente.
- **Tipografía**: Cormorant Garamond (display/títulos) + DM Sans (cuerpo/UI), reemplazan Playfair Display + Lato.
- **Logo**: la marca provee un lockup horizontal ya armado (isotipo + wordmark), en `crecer-horizontal-positivo.svg` (fondos claros) y `crecer-horizontal-negativo.svg` (fondos oscuros) — ya no se recompone a mano combinando un ícono cuadrado + texto aparte. Para espacios reducidos (favicon, avatar) se usa el isotipo solo, `icon-512.png` (incluye su propio fondo crema). **No hay versión monocromática** en la marca nueva.
- **Botones**: ahora siempre con forma de píldora (`--radius-pill: 999px`), independiente de la dirección visual.
- **Favicons / OG image**: set completo (`favicon.ico`, 16/32px, `apple-touch-icon.png`) y `og-crecer-1200x630.png`, cableados en `site/src/layouts/Base.astro`.
- **schema.org**: JSON-LD `MedicalClinic` agregado en `Base.astro`. Los campos que venían como `"COMPLETAR"` en la plantilla del kit se completaron con datos que ya teníamos: teléfono = el mismo número de WhatsApp del sitio (`settings.whatsapp` en Sanity, o el default `+5491132950452`), dirección = Canning, Buenos Aires, AR, e Instagram = `settings.instagram` de Sanity si está publicado (si no, se omite `sameAs`).
- **Archivos viejos eliminados**: `logo-crecer.png`, `logo-crecer-inverted.png`, `crecer-psicologia-logo.svg` (y sus variantes mono) — ya no quedaba ninguna referencia activa.

## Fotos y logo

Todo en `site/public/assets/`: `crecer-psicologia-hero.webp` (hero Home/Internacional), `psicologia-online-hero.webp` (hero propio), `jovenes.webp` / `adultos.webp` / `pareja.webp` (cards de audiencia), `nuestro-enfoque.webp`, `crecer-horizontal-positivo.svg` / `crecer-horizontal-negativo.svg` (logo del header/footer, vector).

## Micro-animaciones

Entrada por scroll (`[data-animate]` + `IntersectionObserver`, montado en `Base.astro`) en: encabezados de sección, primera fila de cards (izquierda/arriba/derecha), "Nuestro enfoque" (texto/foto desde lados opuestos), cita de Carl Jung, bloque de FAQ. El hero no anima (ya visible al cargar).

## Pendientes

1. **Sanity**: repetir en el Studio los cambios de FAQ / audiencias que están en el código (ver sección Sanity arriba).
2. **Resend**: crear cuenta, verificar dominio, cargar `RESEND_API_KEY` en Cloudflare (ver sección del formulario arriba) para que el aviso por mail funcione.
3. **Dominio primario**: definir apex vs `www` y actualizar `astro.config.mjs`.
4. **Search Console**: TXT record una vez el dominio esté activo en Cloudflare.
5. **WhatsApp de notificación**: descartado por ahora (requiere alta en Meta Business + aprobación de plantilla); si lo quieren más adelante, retomar.
