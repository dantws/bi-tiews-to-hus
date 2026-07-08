const SITE_URL = 'https://bi-tiews-to-hus.de';

export default function sitemap() {
  const lastModified = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/buchen`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/veranstaltungen`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/impressum`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/datenschutz`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
