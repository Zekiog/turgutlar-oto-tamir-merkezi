import { useEffect } from 'react';
import { CONTACT_INFO } from '../data';

/**
 * Injects the LocalBusiness / AutoRepair JSON-LD schema into <head> on page load for SEO.
 * All contact details come from a single source (data.ts), so the schema always stays
 * in sync with the header, hero and footer.
 */
export default function SchemaOrg() {
  useEffect(() => {
    const id = 'localbusiness-schema';
    if (document.getElementById(id)) return;

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'AutoRepair',
      name: 'Turgutlar Oto Tamir ve Hasar Onarım Merkezi',
      image: `${CONTACT_INFO.siteUrl}/og-cover.svg`,
      '@id': `${CONTACT_INFO.siteUrl}/#localbusiness`,
      url: CONTACT_INFO.siteUrl,
      telephone: CONTACT_INFO.phone,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: CONTACT_INFO.streetAddress,
        addressLocality: CONTACT_INFO.city,
        addressRegion: CONTACT_INFO.region,
        postalCode: CONTACT_INFO.postalCode,
        addressCountry: CONTACT_INFO.country
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: CONTACT_INFO.coordinates.lat,
        longitude: CONTACT_INFO.coordinates.lng
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:30',
          closes: '18:30'
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '08:30',
          closes: '16:30'
        }
      ],
      sameAs: [CONTACT_INFO.social.facebook, CONTACT_INFO.social.instagram]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById(id);
      if (el) el.remove();
    };
  }, []);

  return null;
}
