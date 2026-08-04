/* Grupos de campos reutilizados entre homePage, onlinePage e internationalPage —
   las tres son variantes de la misma landing con hero y form propios. */

export const audiencesField = (initialItems: { title: string }[]) => ({
  name: 'audiences',
  title: 'A quiénes atendemos',
  type: 'object',
  fields: [
    { name: 'title', title: 'Título de sección', type: 'string', initialValue: 'A quiénes atendemos' },
    { name: 'lead',  title: 'Bajada', type: 'string', initialValue: 'Nos enfocamos en la atención de personas adultas y parejas' },
    {
      name: 'items',
      title: 'Tarjetas',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', title: 'Título', type: 'string' },
          { name: 'photo', title: 'Foto', type: 'image' },
        ],
        preview: { select: { title: 'title' } },
      }],
      initialValue: initialItems,
    },
  ],
});

export const specialtiesField = {
  name: 'specialties',
  title: 'Especialidades',
  type: 'object',
  fields: [
    { name: 'title', title: 'Título de sección', type: 'string', initialValue: 'Especialidades' },
    {
      name: 'items',
      title: 'Tarjetas',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'icon',  title: 'Ícono (sprout, heart, star, compass…)', type: 'string' },
          { name: 'title', title: 'Título', type: 'string' },
          { name: 'desc',  title: 'Descripción', type: 'text', rows: 2 },
        ],
        preview: { select: { title: 'title' } },
      }],
      initialValue: [
        { icon: 'compass', title: 'Ansiedad y estrés', desc: 'Acompañamos procesos relacionados con preocupación excesiva, tensión emocional, ataques de pánico y dificultades para gestionar las demandas del día a día.' },
        { icon: 'heart',   title: 'Vínculos y relaciones', desc: 'Exploramos los patrones relacionales que se repiten en parejas, familia y entorno social, favoreciendo vínculos más sanos y satisfactorios.' },
        { icon: 'star',    title: 'Autoestima y desarrollo personal', desc: 'Trabajamos sobre la relación que cada persona tiene consigo misma, promoviendo el autoconocimiento y el crecimiento en las distintas áreas de la vida.' },
      ],
    },
  ],
};

export const approachField = {
  name: 'approach',
  title: 'Nuestro enfoque',
  type: 'object',
  fields: [
    { name: 'eyebrow', title: 'Eyebrow', type: 'string', initialValue: 'Cómo trabajamos' },
    { name: 'title',   title: 'Título', type: 'string', initialValue: 'Nuestro enfoque' },
    {
      name: 'paragraphs',
      title: 'Párrafos',
      type: 'array',
      of: [{ type: 'text', rows: 2 }],
      initialValue: [
        'Nos dedicamos a co-crear un espacio cálido, de apoyo y respeto que favorezca el cambio para alcanzar tus objetivos.',
        'Durante la terapia te facilitamos herramientas que te ayuden a crecer y aprender nuevas formas de pensar, sentir y actuar para que puedas desarrollarte en diversos ámbitos.',
        'Trabajamos con variadas técnicas psicoterapéuticas que nos permiten adaptar el proceso de trabajo a la situación de cada paciente.',
      ],
    },
    { name: 'quote',       title: 'Cita', type: 'text', rows: 2, initialValue: 'Hasta que lo inconsciente no se haga consciente, seguirá dirigiendo tu vida y tú lo llamarás destino.' },
    { name: 'quoteAuthor', title: 'Autor de la cita', type: 'string', initialValue: 'Carl Jung' },
  ],
};

export const howItWorksField = {
  name: 'howItWorks',
  title: '¿Cómo funciona?',
  type: 'object',
  fields: [
    { name: 'title', title: 'Título de sección', type: 'string', initialValue: '¿Cómo funciona?' },
    {
      name: 'items',
      title: 'Pasos',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'icon',  title: 'Ícono (calendar, video, clock)', type: 'string' },
          { name: 'title', title: 'Título', type: 'string' },
          { name: 'desc',  title: 'Descripción', type: 'text', rows: 2 },
        ],
        preview: { select: { title: 'title' } },
      }],
      initialValue: [
        { icon: 'calendar', title: 'Coordiná tu turno', desc: 'Dejanos tus datos para coordinar un horario para tu primer consulta.' },
        { icon: 'video',    title: 'Sesiones por videollamada', desc: 'Las sesiones se realizan a través de videollamadas. Fijaremos un día y horario semanal.' },
        { icon: 'clock',    title: 'Duración', desc: 'Tendrás una sesión una vez por semana con una duración de 50 minutos.' },
      ],
    },
  ],
};

export const faqField = {
  name: 'faq',
  title: 'Preguntas frecuentes',
  type: 'object',
  fields: [
    { name: 'title', title: 'Título de sección', type: 'string', initialValue: 'Preguntas frecuentes' },
    {
      name: 'items',
      title: 'Preguntas',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'question', title: 'Pregunta', type: 'string' },
          { name: 'answer',   title: 'Respuesta', type: 'text', rows: 3 },
        ],
        preview: { select: { title: 'question' } },
      }],
      initialValue: [
        { question: '¿Cualquiera puede hacer terapia online?', answer: 'La terapia online es un canal eficaz para la comunicación terapéutica. Como el canal es audiovisual se asemeja muchísimo a las terapias presenciales. La mayoría de los casos pueden ser tratados mediante esta modalidad.' },
        { question: '¿Qué necesito para poder hacer terapia online?', answer: 'Las sesiones se realizan a través de videollamadas. Para poder tener tu sesión solo tenés que tener un espacio de privacidad, buena conexión a Internet y alguna aplicación de videollamadas (Meet, WhatsApp). Cuando coordines la consulta podrás acordar la aplicación a utilizar.' },
        { question: '¿Cuánto tiempo dura la sesión?', answer: 'Las sesiones tienen una duración de 50 minutos.' },
        { question: '¿Cómo se realiza el pago?', answer: 'El pago puede hacerse a través de transferencia bancaria o Mercado Pago. El mismo deberá realizarse previo a cada sesión.' },
      ],
    },
  ],
};

export const contactFormField = (initialHubspotFormId: string, showCountryField = false) => ({
  name: 'contactForm',
  title: 'Formulario de contacto',
  type: 'object',
  fields: [
    { name: 'title', title: 'Título', type: 'string', initialValue: 'Coordiná tu primer consulta' },
    { name: 'lead',  title: 'Bajada', type: 'string', initialValue: 'Dejanos tus datos y nos contactaremos con vos para coordinar una consulta.' },
    { name: 'hubspotFormId', title: 'HubSpot Form ID', type: 'string', initialValue: initialHubspotFormId,
      description: 'Portal 21499646. UUID del formulario en app.hubspot.com/submissions.' },
    { name: 'showCountryField', title: '¿Mostrar campo País/región?', type: 'boolean', initialValue: showCountryField },
  ],
});
