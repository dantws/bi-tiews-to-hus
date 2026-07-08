import './globals.css';

const SITE_URL = 'https://bi-tiews-to-hus.de';
const DESCRIPTION =
  'Helle Ferienwohnung in einer historischen Villa im Seebad Ahlbeck auf Usedom — 350 Meter zum Ostseestrand, Balkon zur Ostseite, WLAN und Parkplatz. Zum Bestpreis direkt beim Eigentümer buchen.';
const OG_IMAGE = '/assets/img/villa.jpg';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Bi Tiews to Hus — Ferienwohnung im Seebad Ahlbeck auf Usedom',
    template: '%s — Bi Tiews to Hus',
  },
  description: DESCRIPTION,
  keywords: [
    'Ferienwohnung Ahlbeck',
    'Ferienwohnung Usedom',
    'Seebad Ahlbeck',
    'Ostsee Ferienwohnung',
    'Ferienwohnung Kaiserbäder',
    'Unterkunft Usedom',
    'Bi Tiews to Hus',
    'Urlaub Ostsee',
  ],
  authors: [{ name: 'Bi Tiews to Hus' }],
  creator: 'Bi Tiews to Hus',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: SITE_URL,
    siteName: 'Bi Tiews to Hus',
    title: 'Bi Tiews to Hus — Ferienwohnung im Seebad Ahlbeck auf Usedom',
    description: DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Bi Tiews to Hus — historische Villa im Seebad Ahlbeck',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bi Tiews to Hus — Ferienwohnung im Seebad Ahlbeck auf Usedom',
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: { icon: '/assets/img/logo.png', apple: '/assets/img/logo.png' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: 'Bi Tiews to Hus',
  description: DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}${OG_IMAGE}`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Friedrichstraße 2',
    postalCode: '17419',
    addressLocality: 'Seebad Ahlbeck',
    addressRegion: 'Mecklenburg-Vorpommern',
    addressCountry: 'DE',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 53.9401, longitude: 14.1899 },
  petsAllowed: false,
  numberOfRooms: 2,
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Balkon zur Ostseite', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Kostenfreies WLAN', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Kostenfreier Parkplatz', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Strandnähe (350 m)', value: true },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Infant:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Outfit:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
