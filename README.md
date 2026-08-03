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

Portal `21499646`. Envío directo por fetch a la Forms API (mismo patrón que sombrero-rosa-site), sin depender de un iframe embebido de HubSpot:
- Home y Psicología Online → form Argentina (`568a344c-97b3-4c3e-aef8-031cd330363a`)
- Psicología Online Internacional → form Exterior (`369f0579-f050-44d1-b339-0e9bcfdee7a0`)

## Pendientes antes de producción

1. **Sanity**: crear el proyecto en sanity.io/manage y reemplazar `xxxxxxxxx` por el Project ID real en `site/sanity.config.ts`, `site/sanity.cli.ts` y `site/sanity/sanity.config.ts`, más `SANITY_PROJECT_ID` en las variables de entorno de Cloudflare Pages. Sin esto el sitio funciona igual — cada página usa los valores por defecto hardcodeados que ves ahora — pero el contenido no es editable desde un Studio todavía.
2. **WhatsApp**: el número usado (`+54 9 11 0000-0000` / `wa.me/5491100000000`) es un placeholder. Reemplazar en Sanity (`siteSettings.whatsapp`) una vez creado el proyecto, o directamente en `site/src/components/FloatingActions.astro` y `site/src/pages/gracias.astro` mientras tanto.
3. **Fotos reales**: todos los espacios de imagen (hero, cards de "a quiénes atendemos", enfoque) son placeholders rayados, a propósito — reemplazar cuando haya material fotográfico del consultorio.
4. **Respuestas de FAQ**: 3 de las 4 preguntas frecuentes tienen texto simulado ("Contenido a confirmar…") a pedido — completarlas en `sanity/schemas/sharedFields.ts` (`faqField`) o desde el Studio una vez conectado.
5. **Cloudflare Pages**: configurar 2 proyectos (sitio y Studio) igual que en `sombrero-rosa-site/SETUP.md` — build command `cd site && npm install && npm run build`, output `site/dist`; Studio con `npx sanity build studio-dist`.
6. **Dominio**: migrar `crecerpsicologia.com.ar` de WordPress a Cloudflare Pages cuando el sitio esté aprobado (ver sección 8 de `sombrero-rosa-site/SETUP.md` para el procedimiento sin downtime).
