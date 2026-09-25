# Crecer Psicología — notas para Claude

- Antes de tocar estilos del sitio, leé `design-system/README.md` y `design-system/tokens.minimal.css`: son la fuente de verdad del diseño (dirección **Minimal**). Si llega una versión nueva del design system, reemplazá `design-system/` completo y aplicá al sitio solo las diferencias.
- Los tokens del sitio viven en `site/src/styles/tokens.css` y deben coincidir con `tokens.minimal.css`. Los nombres heredados (`--c-forest`, `--c-green`, `--c-green-soft`, `--c-sand`, `--c-ink`) son alias de los nuevos (mauve-strong, mauve-deep, blush, mauve, slate); en código nuevo usá los nombres nuevos.
- Reglas de marca clave: Fraunces solo ≥20px (títulos, marca, citas), pesos 300/400, nunca bold; Work Sans para todo lo demás (nav/botones en mayúsculas con tracking). Mauve `#A47678` solo decorativo; CTA en `#906062`. Logo `crecer-simbolo.svg` sin recolorear, nunca sobre slate.
- Cambios de diseño se trabajan en una rama aparte (borrador/preview de Cloudflare Pages) y se publican al fusionar a `main`.
- Más contexto del proyecto (stack, formulario, Sanity, dominio, pendientes): `README.md`.
