export default {
  name: 'siteSettings',
  title: 'Configuración general',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    { name: 'siteTitle',   title: 'Nombre del sitio',       type: 'string', initialValue: 'Crecer Psicología' },
    { name: 'description', title: 'Descripción SEO',        type: 'text', rows: 2 },
    { name: 'whatsapp',    title: 'Link de WhatsApp',       type: 'url' },
    { name: 'address',     title: 'Dirección / ciudad',     type: 'string', initialValue: 'Canning, Buenos Aires' },
    { name: 'instagram',   title: 'Link de Instagram',      type: 'url' },
  ],
  preview: { prepare: () => ({ title: 'Configuración general' }) },
};
