import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = import.meta.env.SANITY_PROJECT_ID;

// Sin SANITY_PROJECT_ID configurado (todavía no se creó el proyecto en
// sanity.io) el sitio sigue funcionando: cada página cae en sus valores
// por defecto hardcodeados. Ver README de site/ para el paso de conectar
// Sanity de verdad.
export const client = projectId
  ? createClient({
      projectId,
      dataset: import.meta.env.SANITY_DATASET ?? 'production',
      apiVersion: '2024-01-01',
      useCdn: true,
    })
  : null;

const builder = client ? imageUrlBuilder(client) : null;
export const urlFor = (source: any) => builder?.image(source);

/* ---- typed fetchers ------------------------------------------ */

const PAGE_PROJECTION = `hero, audiences, specialties, approach, contactForm, howItWorks, faq`;

export async function getSiteSettings() {
  return client?.fetch(`*[_type == "siteSettings"][0]`) ?? null;
}

export async function getHomePage() {
  return client?.fetch(`*[_type == "homePage"][0]{ ${PAGE_PROJECTION} }`) ?? null;
}

export async function getOnlinePage() {
  return client?.fetch(`*[_type == "onlinePage"][0]{ ${PAGE_PROJECTION} }`) ?? null;
}

export async function getInternationalPage() {
  return client?.fetch(`*[_type == "internationalPage"][0]{ ${PAGE_PROJECTION} }`) ?? null;
}
