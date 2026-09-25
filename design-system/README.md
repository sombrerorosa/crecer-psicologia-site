# Handoff: Crecer Psicología — Design System, dirección Minimal

## Overview
Sistema visual de **Crecer Psicología** (consultorio de psicología, Canning) en su dirección **Minimal**: crema + slate + mauve, tipografía Fraunces/Work Sans, radios chicos, sin sombras, densidad un poco mayor que las otras direcciones. Sirve como base para el sitio web y cualquier UI de la marca.

## About the Design Files
Los archivos en `reference/` son **referencias de diseño hechas en HTML/CSS/JSX** — muestran look y comportamiento esperados, no son código de producción para copiar tal cual. La tarea es **recrear este sistema en el entorno del codebase destino** (React, Next, Astro, etc.) con sus patrones y librerías. Si no hay codebase todavía, elegí el framework más adecuado (sugerido: React/Next o Astro + CSS variables).

- `tokens.minimal.css` — **fuente de verdad**: todos los tokens ya resueltos para Minimal. Empezá por acá.
- `reference/Design System.html` — guía viva, abre en Minimal (`data-dir="minimal"` en `<html>`). Abrila en el navegador para ver cada componente.
- `reference/components/*/` — cada componente con `.jsx` (referencia de markup/props), `.d.ts` (API), `.prompt.md` (reglas de uso) y `.card.html` (demo).
- `reference/styles/components.css` — CSS de todos los componentes (consume las variables).
- `reference/tokens/directions.css` — las 3 direcciones; **solo implementar `minimal`**. Ignorar editorial y cálida.

## Fidelity
**High-fidelity.** Colores, tipografía, espaciado, radios y estados son finales. Recrear pixel-perfect.

## Reglas de marca (no negociables)
- **Fraunces** (serif) solo para: hero/H1, H2 de sección, H3 ≥20px, nombre de marca, citas. **Pesos 300/400, nunca bold.** Itálica permitida en *una* palabra clave del hero y en citas.
- **Work Sans** (sans) para todo lo demás: body (400, line-height 1.5–1.6), nav y botones (**MAYÚSCULAS**, tracking 0.12–0.14em, peso 500), eyebrows (11–13px, MAYÚSCULAS, tracking 0.16em), formularios, microcopy, footer.
- Nunca Fraunces en textos chicos (<20px) salvo el nombre de marca.
- Texto sobre crema: `#142531` (14:1) o `#4A5A66` (6,4:1). `#A47678` (mauve) es **solo decorativo** (3,4:1) — nunca texto chico ni fondo de botón; para CTA usar `#906062`.
- `#E4D7D0` (blush) casi no se ve sobre crema: no usarlo como línea/detalle sobre fondos claros.
- Logo (`assets/logo/crecer-simbolo.svg`): sobre crema, blanco cálido o mauve profundo (`#7F5456`). Mantener área de protección. No recolorear.

## Design Tokens

### Color
| Token | Hex | Uso |
|---|---|---|
| slate | #142531 | Texto principal, títulos; fondo de footer, banda destacada, card de testimonio |
| ink-soft | #4A5A66 | Texto secundario, nav, cuerpo de cards |
| muted | #8C979F | Placeholders, deshabilitado, metadatos (no texto esencial) |
| mauve | #A47678 | Decorativo: borde de citas, subrayado nav activo |
| mauve-strong | #906062 | Fondo botón primario, badges, checkbox/toggle activos, acordeón abierto (texto blanco 5,2:1) |
| mauve-deep | #7F5456 | Hover de CTA, texto mauve sobre blush |
| blush | #E4D7D0 | Superficies suaves (botón/badge soft, ícono de card), texto suave sobre slate |
| cream | #F6F1EE | Fondo de página |
| white (cálido) | #FDFBFA | Texto sobre mauve/slate |
| surface | #FFFFFF | Cards, header, inputs |
| surface-2 | #FBF8F6 | Bloques de apoyo, hover de celdas (en Minimal reemplaza al blush) |
| success / bg | #4E7A5E / #E4EFE7 | Confirmaciones |
| error / bg | #A6513E / #F3E2DB | Errores, requeridos |
| info / bg | #6E7E8C / #E6EAEC | Notas |
| line | rgba(20,37,49,.12) | Hairlines, bordes de cards |
| line-strong | rgba(20,37,49,.22) | Bordes de inputs, badge outline |

Nota: el CSS de referencia usa nombres heredados — `--c-forest` = mauve-strong, `--c-green` = mauve-deep, `--c-green-soft` = blush, `--c-sand` = mauve, `--c-ink` = slate. En la implementación usá los nombres nuevos.

### Tipografía
| Estilo | Familia | Tamaño / LH | Peso | Extra |
|---|---|---|---|---|
| Hero / H1 | Fraunces | 60px (≈56px en Minimal) / 1.08 | 300 | tracking -0.02em |
| H2 | Fraunces | 36px / 1.2 | 300 | tracking -0.015em |
| H3 | Fraunces | 22px / 1.3 | 400 | — |
| H4 (acordeón, título card) | Fraunces | 1.05rem–1.3rem | 400 | — |
| Cita | Fraunces italic | 28px / 1.4 | 300 | — |
| Lead | Work Sans | 19px / 1.55 | 400 | — |
| Body | Work Sans | **15px** (Minimal) / 1.6 | 400 | — |
| Body small | Work Sans | 14px / 1.55 | 400 | — |
| Eyebrow | Work Sans | 12px / 1.4 | 500 | MAYÚSCULAS, tracking 0.16em |
| Nav | Work Sans | 12.5px | 500 | MAYÚSCULAS, tracking 0.14em |
| Botón | Work Sans | 13px (sm 12, lg 14.5) | 500 | MAYÚSCULAS, tracking 0.12em |
| Label form | Work Sans | 13px | 500 | — |
| Microcopy | Work Sans | 12.5px / 1.5 | 400 | — |

Minimal escala la tipografía display a ~0.94× respecto de la base (`--scale: .94`).

### Espaciado, radios, sombras, movimiento
- Escala: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 px. Padding de sección: 64px vertical.
- Radios Minimal: sm 5px · base 7px · lg 10px · pill 999px.
- **Sombras: ninguna.** La separación se hace con bordes `1px solid rgba(20,37,49,.12)`.
- Easing `cubic-bezier(.22,.61,.36,1)`; rápido 160ms (hover, color), estándar 280ms (acordeón, cards).

## Componentes
Ver `reference/components/<familia>/*.prompt.md` para reglas completas y `.d.ts` para props.

**Botones** (`Button`) — variantes: primary (bg #906062, texto #FDFBFA, hover #7F5456), secondary (borde + texto #906062, hover relleno), soft (bg blush, texto #7F5456), sand (bg blush, texto slate), ghost (transparente, texto #4A5A66, hover veil). Padding 13×26px (sm 9×16, lg 16×32), radio 7px, gap ícono 9px (ícono 17px). Estados: :active translateY(1px); focus-visible ring 3px mauve-strong al 32%; disabled opacidad .42; loading = spinner 16px, texto transparente.

**Formularios** (`Field`, `Checkbox`, `Toggle`) — label 13px/500 slate, gap 7px, hint 12px muted, asterisco requerido en #A6513E. Input 15px, padding 12×14, borde line-strong, radio 7px, bg #FFF; hover borde mauve-deep; focus borde mauve-strong + ring 3px al 16%. Error: borde + mensaje #A6513E con ícono, fondo tinte error. Válido: borde #4E7A5E. Textarea min-height 110px. Checkbox 20px radio 6px (radio: círculo), activo bg mauve-strong con check blanco. Toggle 44×25, knob 19px, off #8C979F, on mauve-strong.

**Badges** — pill, 11px/600, MAYÚSCULAS, tracking .1em, padding 4×11. Variantes: forest (mauve-strong/blanco), soft (blush/mauve-deep), sand, outline, success, error; punto opcional 6px. **Tag pill**: 13px, borde line, padding 7×15, hover borde mauve-deep.

**Cards** (`Card`) — bg #FFF, borde line, radio 10px, sin sombra; body padding 24px, gap 12px. Variantes: media (4:3), especialidad (ícono 52px en bg blush, padding 32px), equipo (media 1:1, rol 12px MAYÚS mauve-deep), testimonio (bg slate, comilla Fraunces 56px blush, texto blanco cálido). Hover opcional: translateY(-4px).

**Acordeón** (`Accordion`) — contenedor bg #FFF, borde line, radio 10px; ítems separados por hairline. Header Fraunces 400 ~1.05rem, padding 16×24; ícono circular 26px con chevron, abierto: bg mauve-strong + rotate(180°). Panel anima max-height 280ms; texto 15px/1.7 ink-soft, max 64ch. **Solo un ítem abierto a la vez.**

**Citas** (`Pullquote`) — borde izquierdo 3px mauve (#A47678), padding-left 24px; texto Fraunces italic 300 tamaño H2, color mauve-strong; cite Work Sans 13px MAYÚS tracking .12em ink-soft. **Feature band**: bg slate, radio 10px, padding 48px, centrado, H3 blanco tamaño H1, texto blush max 50ch.

**Navegación** (`Header`, `Footer`) — Header alto 72px, bg #FFF, borde line; logo 38px + nombre Fraunces 400 1.15rem; links nav 12.5px MAYÚS, activo con subrayado 2px mauve. <640px: nav oculto, hamburguesa 42px. Footer bg slate, texto blush, padding 48/32/24; logo 44px, nombre Fraunces blanco; títulos de columna 11px MAYÚS blancos; links 14px blush → hover blanco; bottom 12px.

## Interactions & Behavior
- Hover/color: 160ms; acordeón, cards: 280ms, mismo easing.
- Acordeón exclusivo (abrir uno cierra el resto).
- Validación de formulario: mostrar error al blur o al enviar; mensaje con ícono, nunca solo color.
- Responsive: breakpoint principal 640px (header → hamburguesa). Grillas de cards colapsan a 1 columna en mobile.
- Respetar `prefers-reduced-motion` (desactivar translate/rotate).

## State Management
Sin estado global. Estado local: ítem abierto del acordeón, menú mobile abierto/cerrado, valores y errores de formulario.

## Assets
- `assets/logo/crecer-simbolo.svg` — símbolo 2026, vectorial. Único logo vigente.
- Fuentes: Google Fonts (Fraunces variable con eje opsz, Work Sans). URL en `tokens.minimal.css`.
- Íconos: trazo lineal 1.6px, 24px viewBox (ver sección Íconos en la guía). Usar Lucide o similar con ese grosor.

## Files
- `tokens.minimal.css`
- `assets/logo/crecer-simbolo.svg`
- `reference/Design System.html` (+ `styles/`, `scripts/`, `tokens/`, `styles.css`)
- `reference/components/` — accordion, badges, buttons, cards, forms (Field, Checkbox, Toggle), navigation (Header, Footer), quotes (Pullquote)
