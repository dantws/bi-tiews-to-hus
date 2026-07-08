import './globals.css';

export const metadata = {
  title: 'Bi Tiews to Hus — Ein Ort zum Ankommen an der Ostsee',
  description:
    'Eine helle Ferienwohnung in einer historischen Villa in Seebad Ahlbeck auf Usedom. Fünf Minuten später beginnt der Sand. Direkt beim Eigentümer buchen.',
  openGraph: {
    title: 'Bi Tiews to Hus — Seebad Ahlbeck',
    description: 'Ein heller Rückzugsort zwischen Ostsee und historischer Bäderarchitektur.',
    locale: 'de_DE',
    type: 'website',
  },
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
      </head>
      <body>{children}</body>
    </html>
  );
}
