import { audiencesField, specialtiesField, approachField, howItWorksField, faqField, contactFormField } from './sharedFields';

const HUBSPOT_EXTERIOR_FORM_ID = '369f0579-f050-44d1-b339-0e9bcfdee7a0';

export default {
  name: 'internationalPage',
  title: 'Página: Psicología Online Internacional',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        { name: 'headline', title: 'Titular', type: 'string', initialValue: 'Tu bienestar emocional, nuestro compromiso' },
        { name: 'lead',     title: 'Bajada',  type: 'string', initialValue: 'Psicología online para adultos y parejas, desde cualquier país' },
        { name: 'ctaText',  title: 'Texto CTA', type: 'string', initialValue: 'Contactanos' },
        { name: 'photo',    title: 'Foto de fondo', type: 'image' },
      ],
    },
    audiencesField([{ title: 'Jóvenes adultos' }, { title: 'Adultos' }, { title: 'Parejas' }]),
    specialtiesField,
    approachField,
    contactFormField(HUBSPOT_EXTERIOR_FORM_ID, true),
    howItWorksField,
    faqField,
  ],
  preview: { prepare: () => ({ title: 'Página: Psicología Online Internacional' }) },
};
