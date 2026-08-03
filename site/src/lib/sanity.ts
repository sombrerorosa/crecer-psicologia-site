import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

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

const builder = client ? createImageUrlBuilder(client) : null;
export const urlFor = (source: any) => builder?.image(source);

/* ---- typed fetchers -------------------------------------------
   Cualquier falla de red o de configuración de Sanity se traga acá:
   una consulta que no resuelve no debe tirar abajo el build estático
   ni la carga de la página — simplemente cae a los defaults de cada
   página, igual que cuando no hay proyecto conectado. ------------- */

async function safeFetch<T>(query: string): Promise<T | null> {
  if (!client) return null;
  try {
    return await client.fetch<T>(query);
  } catch (err) {
    console.warn('[sanity] fetch failed, using page defaults:', (err as Error).message);
    return null;
  }
}

const PAGE_PROJECTION = `hero, audiences, specialties, approach, contactForm, howItWorks, faq`;

export function getSiteSettings() {
  return safeFetch(`*[_type == "siteSettings"][0]`);
}

export function getHomePage() {
  return safeFetch(`*[_type == "homePage"][0]{ ${PAGE_PROJECTION} }`);
}

export function getOnlinePage() {
  return safeFetch(`*[_type == "onlinePage"][0]{ ${PAGE_PROJECTION} }`);
}

export function getInternationalPage() {
  return safeFetch(`*[_type == "internationalPage"][0]{ ${PAGE_PROJECTION} }`);
}
