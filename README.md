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

## Cloudflare Pages

Ya deployado — 2 proyectos, sitio y Studio, conectados al repo. GTM (`GTM-KNQ37RW`) instalado en `Base.astro` (head + noscript en body) en todas las páginas.

## Fotos y logo

Reemplazados todos los placeholders con material real (`site/public/assets/`): `crecer-psicologia-hero.webp` (hero de Home e Internacional), `psicologia-online-hero.webp` (hero propio de esa página), `jovenes.webp` / `adultos.webp` / `pareja.webp` (cards de "a quiénes atendemos"), `nuestro-enfoque.webp`. Logo del header pasado a `crecer-psicologia-logo.svg` (vector, fondo transparente).

## Micro-animaciones

Entrada por scroll (`[data-animate]` + `IntersectionObserver`, ya montado en `Base.astro`) aplicada a: encabezados de sección (fade+up), primera fila de cards en grillas de 3 (izquierda/arriba/derecha), la sección "Nuestro enfoque" (texto desde la izquierda, foto desde la derecha), la cita de Carl Jung, y el bloque de FAQ. El hero no anima porque ya es lo primero que se ve al cargar.

## Pendientes antes de producción

1. **Contenido en Sanity**: las 3 páginas (Home, Online, Internacional) ya estaban publicadas en Sanity con el contenido viejo — los cambios de este commit (FAQ real, sin "Adultos mayores" en Online) están en los defaults del código, pero **hay que repetirlos también en el Studio** para que el sitio (que prioriza Sanity sobre los defaults) los refleje.
2. **Dominio**: migrar `crecerpsicologia.com.ar` de WordPress a Cloudflare Pages cuando el sitio esté aprobado (ver sección 8 de `sombrero-rosa-site/SETUP.md` para el procedimiento sin downtime) — ahí también se verifica el sitio en Search Console (TXT record en el DNS de Cloudflare).
