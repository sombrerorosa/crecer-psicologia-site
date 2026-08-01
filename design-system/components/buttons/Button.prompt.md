Botón de acción, usado en CTAs, formularios y navegación.

```jsx
<Button variant="primary">Reservar sesión</Button>
<Button variant="secondary" size="sm">Ver más</Button>
<Button variant="soft" icon={<CheckIcon/>}>Confirmar</Button>
```

Variantes: `primary` (verde bosque, sólido — acción principal), `secondary` (outline verde), `soft` (verde suave, secundario tranquilo), `sand` (arena, acento cálido), `ghost` (transparente, acciones terciarias). Usar `loading` para estados async; nunca deshabilitar sin indicar por qué (usar `.hint` cercano).
