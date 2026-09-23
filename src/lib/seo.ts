import { AppView } from './routeCookies';

export interface ViewSeoMetadata {
  title: string;
  description: string;
  canonicalPath: string;
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
}

export const SEO_CONFIG: Record<AppView, ViewSeoMetadata> = {
  home: {
    title: 'TerraSat Impact | Earth Observation & Climate Resilience Intelligence',
    description:
      'TerraSat Impact (terraxat.com) turns satellite and IoT data into action across Africa — featuring Terra Farm for agricultural MRV and NEWIS for flood early warning.',
    canonicalPath: '/',
    ogTitle: 'TerraSat Impact — Earth Observation & Climate Resilience Intelligence',
    ogDescription:
      'TerraSat Impact turns satellite and IoT data into action across Africa — featuring Terra Farm for agricultural MRV and NEWIS for flood early warning.',
    twitterTitle: 'TerraSat Impact | Earth Observation & Climate Resilience Intelligence',
    twitterDescription:
      'TerraSat Impact delivers Earth observation intelligence across Africa with Terra Farm and NEWIS.',
  },
  terrafarm: {
    title: 'Terra Farm by TerraSat Impact | Continuous Satellite MRV & EUDR Compliance',
    description:
      'Continuous satellite-to-ground agricultural verification, automated EUDR Due Diligence Statements, and crop vigor diagnostics for African farming cooperatives.',
    canonicalPath: '/terrafarm',
    ogTitle: 'Terra Farm by TerraSat Impact — Continuous Satellite MRV & EUDR Compliance',
    ogDescription:
      'Continuous satellite Earth observation and ground truth intelligence for smallholder cooperatives, ensuring 100% EUDR compliance and harvest resilience.',
    twitterTitle: 'Terra Farm | Satellite MRV & EUDR Compliance by TerraSat Impact',
    twitterDescription:
      'Automated satellite vegetative tracking and EUDR compliance for agricultural cooperatives across Africa.',
  },
  newis: {
    title: 'NEWIS by TerraSat Impact | Urban Flood Early Warning & Safe Route Dispatch',
    description:
      'Nairobi Early Warning Information System (NEWIS): Street-level flood hydrodynamic modeling, SMS/USSD alerts, and safe evacuation routing for informal settlements.',
    canonicalPath: '/newis',
    ogTitle: 'NEWIS — Urban Flood Early Warning & Safe Route Dispatch',
    ogDescription:
      'Live hydrodynamic flood risk modeling, community shelter dispatch, and zero-app USSD early warning across Nairobi informal settlements.',
    twitterTitle: 'NEWIS | Urban Flood Early Warning & Route Dispatch',
    twitterDescription:
      'Real-time urban flood risk mapping and community evacuation dispatch by TerraSat Impact.',
  },
};

const BASE_DOMAIN = 'https://terraxat.com';

/**
 * Dynamically updates document head metadata (title, meta description,
 * canonical link, OpenGraph, and Twitter tags) for the active view.
 */
export function updateDocumentSeo(view: AppView): void {
  if (typeof document === 'undefined') return;

  const metadata = SEO_CONFIG[view] || SEO_CONFIG.home;

  // 1. Update Document Title
  document.title = metadata.title;

  // 2. Helper to set or create a meta tag
  const setMetaTag = (selector: string, attrName: string, attrVal: string, content: string) => {
    let tag = document.querySelector(selector) as HTMLMetaElement | null;
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute(attrName, attrVal);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  };

  // Standard Meta Description
  setMetaTag('meta[name="description"]', 'name', 'description', metadata.description);

  // OpenGraph Tags
  setMetaTag('meta[property="og:title"]', 'property', 'og:title', metadata.ogTitle);
  setMetaTag('meta[property="og:description"]', 'property', 'og:description', metadata.ogDescription);
  setMetaTag('meta[property="og:url"]', 'property', 'og:url', `${BASE_DOMAIN}${metadata.canonicalPath}`);
  setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', 'TerraSat Impact');

  // Twitter Tags
  setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', metadata.twitterTitle);
  setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', metadata.twitterDescription);

  // 3. Update or Create Canonical Link
  let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', `${BASE_DOMAIN}${metadata.canonicalPath}`);
}
