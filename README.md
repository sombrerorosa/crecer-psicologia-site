# Crecer Psicología — sitio + design system

- `design-system/` — design system vivo (`Design System.html`, tokens, componentes React de referencia). Dirección de producción: **Cálida**. Logo monocromático oficial: versión outline (`logo-mono-black.png` / `logo-mono-white.png`).
- `site/` — sitio de producción: **Astro** (estático) + **Sanity** (CMS) + **Cloudflare Pages** (hosting), mismo stack que `sombrero-rosa-site`.

## Páginas migradas desde crecerpsicologia.com.ar

- `/` — Home (one-pager: hero, a quiénes atendemos, especialidades, enfoque, contacto, cómo funciona, FAQ)
- `/psicologia-online` — mejorada: unificada a la misma dirección visual Cálida (el sitio actual usaba un tratamiento azul marino e íconos distintos, inconsistente con el resto)
- `/psicologia-online-internacional` — tono alineado: agrega campo País/región, saca el default "Argentina" del teléfono, manda al formulario de HubSpot "Exterior"
- `/gracias` — mejorada visualmente (antes era texto centrado sin marca)
- `/politica-de-privacidad` — migrada tal cual (texto genérico, sin cambios de marca)

Por pedido explícito: **no hay sección "Nuestro Equipo"** — el sitio actual no tiene perfiles individuales y se decidió no agregarlos por ahora.

## Formulario de contacto (HubSpot)

Portal `21499646`, cuenta propia de Crecer (**distinta** de la de sombrero-rosa-site). Envío directo por fetch a la Forms API pública (no requiere API key / Private App token — a diferencia del enfoque de upsert a CRM que usa `sombrero-rosa-site/functions/api/submit.js`):
- Home y Psicología Online → form Argentina (`568a344c-97b3-4c3e-aef8-031cd330363a`)
- Psicología Online Internacional → form Exterior (`369f0579-f050-44d1-b339-0e9bcfdee7a0`)

## Sanity

Proyecto creado: **`98goghrf`**, dataset `production`. Ya está cableado en `site/sanity.config.ts`, `site/sanity.cli.ts` y `site/sanity/sanity.config.ts`, y en `site/.env.example`. Los fetchers (`src/lib/sanity.ts`) atrapan cualquier error de red/config y caen a los defaults hardcodeados de cada página — nunca rompen el build.

Falta:
- Correr el Studio (`npx sanity dev` dentro de `site/`, o deployarlo a Cloudflare Pages) y crear los documentos singleton (`siteSettings`, `homePage`, `onlinePage`, `internationalPage`) — los `initialValue` de cada campo ya traen precargado el contenido real migrado, así que es solo abrir cada uno y publicarlo.
- Agregar `SANITY_PROJECT_ID=98goghrf` y `SANITY_DATASET=production` como variables de entorno en Cloudflare Pages.
- Agregar el dominio del Studio a los CORS Origins del proyecto (sanity.io/manage → API) una vez deployado.

## Pendientes antes de producción

1. **Fotos reales**: todos los espacios de imagen (hero, cards de "a quiénes atendemos", enfoque) son placeholders rayados, a propósito — reemplazar cuando haya material fotográfico del consultorio.
2. **Respuestas de FAQ**: 3 de las 4 preguntas frecuentes tienen texto simulado ("Contenido a confirmar…") a pedido — completarlas en `sanity/schemas/sharedFields.ts` (`faqField`) o desde el Studio una vez conectado.
3. **Cloudflare Pages**: configurar 2 proyectos (sitio y Studio) igual que en `sombrero-rosa-site/SETUP.md` — build command `cd site && npm install && npm run build`, output `site/dist`; Studio con `npx sanity build studio-dist`.
4. **Dominio**: migrar `crecerpsicologia.com.ar` de WordPress a Cloudflare Pages cuando el sitio esté aprobado (ver sección 8 de `sombrero-rosa-site/SETUP.md` para el procedimiento sin downtime).
