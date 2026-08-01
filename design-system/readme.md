# Crecer Psicología — Design System

Consultorio de psicología en Canning, Buenos Aires. Marca cálida y orgánica construida alrededor de la idea de **crecer**: un isotipo de C en verde bosque que abraza una hoja, sobre una paleta cálida (crema, arena, marrón). Este sistema unifica sitio web, redes y material clínico.

Origen: construido directamente en este proyecto (no hay codebase/Figma externo importado). El archivo `Design System.html` (raíz) es la guía viva navegable con 3 direcciones visuales intercambiables — Editorial, Minimal, Cálida —, con **Cálida fijada como dirección de producción**; las otras dos quedan disponibles para comparar tratamiento.

## Índice
- `styles.css` — entry point, importa todo `tokens/*.css` + `styles/components.css`.
- `tokens/` — colores, tipografía, espaciado, y las 3 direcciones visuales (`[data-dir]`).
- `styles/components.css` — clases de componentes (usadas por los .jsx de `components/`).
- `components/` — primitivas React: `buttons/`, `forms/`, `badges/`, `cards/`, `accordion/`, `quotes/`, `navigation/`.
- `guidelines/` — specimen cards de fundamentos (Colors, Type, Spacing, Brand).
- `assets/` — logo principal + 3 variantes monocromáticas + reverse.
- `Design System.html` — guía viva original (HTML/CSS/JS, no React) con las 3 direcciones y todos los componentes documentados con más detalle narrativo.

## Direcciones visuales
Tres tratamientos sobre la misma marca. **Cálida es la dirección de producción confirmada** — es el default en `Design System.html` (`scripts/app.js`) y en los `.card.html` de `components/`. Editorial y Minimal siguen disponibles vía el switcher para comparar:
- **Editorial**: serif protagónico, alto contraste de escala, hairlines, sombras casi planas.
- **Minimal**: sans protagónica, muchísimo blanco, sin sombras, acentos puntuales.
- **Cálida** _(producción)_: crema dominante, esquinas redondeadas, sombras difusas, sensación cercana.

Aplicar con `data-dir="editorial|minimal|calida"` en `<html>` o cualquier contenedor. Sin atributo, cae en `calida`.

## Fundamentos de contenido (voz & tono)
- Tono cercano, profesional sin ser clínico-frío. Habla en segunda persona ("vos"), nunca en tercera distante.
- Evita jerga clínica cuando se dirige al paciente; prioriza calidez sobre precisión técnica.
- Sin emojis. La calidez viene del lenguaje y el color, no de íconos decorativos.
- Frases cortas, afirmativas. Ejemplo real usado en el sistema: "El crecimiento no es lineal, y está bien que así sea."

## Fundamentos visuales
- **Color**: verde bosque (#3B5C45) como primario de marca; crema/arena como cálidos dominantes; nunca frío ni azul clínico. Máximo 1-2 colores de fondo por pieza.
- **Tipografía**: Playfair Display (serif, títulos/display, incluye itálica para citas) + Lato (sans, cuerpo/UI) + IBM Plex Mono (datos, hex, código).
- **Espaciado**: escala 4pt (`--sp-1` a `--sp-9`).
- **Bordes/sombras**: varían por dirección — Editorial usa hairlines casi sin sombra; Cálida usa sombras difusas y radios grandes; Minimal casi no usa sombra.
- **Imágenes**: sin fotografía de stock genérica importada aún — cards de equipo/testimonios usan slots de imagen a completar con material real del consultorio.
- **Iconografía**: set de líneas propio (stroke 1.6–1.8px, sin relleno) dibujado a mano para conceptos de marca (hoja, corazón, escudo); nunca emoji.
- **Animación**: transiciones suaves 0.16–0.28s con easing propio (`--ease`), sin bounces ni efectos llamativos.

## Componentes (inventario completo)
Botones · Formularios (Field/Input/Textarea/Select, Checkbox/Radio, Toggle) · Badges & etiquetas (Badge, Tag) · Cards (default, especialidad, equipo, testimonio) · Acordeón · Citas & bloques (Pullquote, FeatureBand) · Header & footer.

Namespace global del bundle: `window.CrecerPsicologia` (verificar contra el bundle real generado; si difiere, actualizar los `<script type="text/babel">` de cada `.card.html`).

## Decisiones confirmadas
- **Dirección de producción**: Cálida. Editorial y Minimal quedan como alternativas comparables vía el switcher, no se eliminan.
- **Logo monocromático oficial**: versión outline/filete (`logo-mono-black.png`, `logo-mono-white.png`). La variante tonal/sombra (`logo-mono-black-tint.png`, `logo-mono-white-tint.png`) queda documentada en la sección Logo como exploración descartada — el filete se lee mejor a tamaños chicos (favicon, sellos).

## Caveats / pendientes
- No hay fotografía real todavía; cards de equipo/testimonios muestran placeholders de color.

**Para que otros en tu organización puedan ver este sistema**, recordá poner el tipo de archivo en **Design System** desde el menú Compartir.
