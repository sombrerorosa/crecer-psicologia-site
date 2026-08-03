import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'crecer-psicologia',
  title: 'Crecer Psicología',
  projectId: 'xxxxxxxxx', // TODO: reemplazar por el Project ID real (sanity.io/manage)
  dataset: 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenido')
          .items([
            S.listItem().title('Configuración general').id('siteSettings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.listItem().title('Página de inicio').id('homePage')
              .child(S.document().schemaType('homePage').documentId('homePage')),
            S.listItem().title('Página: Psicología Online').id('onlinePage')
              .child(S.document().schemaType('onlinePage').documentId('onlinePage')),
            S.listItem().title('Página: Psicología Online Internacional').id('internationalPage')
              .child(S.document().schemaType('internationalPage').documentId('internationalPage')),
          ]),
    }),
  ],
  schema: { types: schemaTypes },
});
