import { audiencesField, specialtiesField, approachField, howItWorksField, faqField, contactFormField } from './sharedFields';

const HUBSPOT_ARGENTINA_FORM_ID = '568a344c-97b3-4c3e-aef8-031cd330363a';

export default {
  name: 'onlinePage',
  title: 'Página: Psicología Online',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        { name: 'headline', title: 'Titular', type: 'string', initialValue: 'Psicología Online' },
        { name: 'lead',     title: 'Bajada',  type: 'string', initialValue: 'Tu momento, en cualquier lugar' },
        { name: 'ctaText',  title: 'Texto CTA', type: 'string', initialValue: 'Contactanos' },
        { name: 'photo',    title: 'Foto de fondo', type: 'image' },
      ],
    },
    audiencesField([{ title: 'Jóvenes adultos' }, { title: 'Adultos' }, { title: 'Adultos mayores' }, { title: 'Parejas' }]),
    specialtiesField,
    approachField,
    contactFormField(HUBSPOT_ARGENTINA_FORM_ID, false),
    howItWorksField,
    faqField,
  ],
  preview: { prepare: () => ({ title: 'Página: Psicología Online' }) },
};
