Botón de acción, usado en CTAs, formularios y navegación.

```jsx
<Button variant="primary">Reservar sesión</Button>
<Button variant="secondary" size="sm">Ver más</Button>
<Button variant="soft" icon={<CheckIcon/>}>Confirmar</Button>
```

Variantes: `primary` (mauve de CTA sólido, acción principal), `secondary` (outline mauve), `soft` (blush con texto mauve, secundario tranquilo), `sand` (blush con texto slate, acento cálido), `ghost` (transparente, acciones terciarias). Usar `loading` para estados async; nunca deshabilitar sin indicar por qué (usar `.hint` cercano).
