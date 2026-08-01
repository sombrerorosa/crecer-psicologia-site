Envoltorio de campo de formulario: label, hint, mensaje de error/éxito. Se combina con `Input`, `Textarea` o `Select`.

```jsx
<Field label="Email" required error={touched && !valid ? 'Ingresá un email válido' : undefined} valid={touched && valid}>
  <Input type="email" placeholder="vos@email.com" />
</Field>
```

Validar en vivo (on blur o on change tras el primer submit), nunca solo al enviar. El estado de error tiñe el borde y el fondo del input en rojo terracota; el éxito, verde.
