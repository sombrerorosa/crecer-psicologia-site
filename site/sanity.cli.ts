import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: 'xxxxxxxxx', // TODO: reemplazar por el Project ID real (sanity.io/manage)
    dataset: 'production',
  },
});
