import SiteNav from '../../components/SiteNav';
import Footer from '../../components/Footer';

export const metadata = { title: 'Datenschutz', alternates: { canonical: '/datenschutz' } };

export default function Datenschutz() {
  return (
    <>
    <SiteNav />
    <main className="container" style={{ paddingBlock: '8rem', maxWidth: '46rem' }}>
      <span className="eyebrow">Rechtliches</span>
      <h1>Datenschutzerklärung</h1>
      <div style={{ marginTop: '2.5rem', lineHeight: 1.8 }}>
        <p><strong>Verantwortlicher</strong></p>
        <p>[Name und Kontaktdaten des Eigentümers, siehe Impressum]</p>

        <p style={{ marginTop: '2rem' }}><strong>Eingebundene Dienste</strong></p>
        <p>Diese Website bindet folgende Dienste ein, bei deren Nutzung
        personenbezogene Daten (insbesondere die IP-Adresse) an Dritte
        übertragen werden können:</p>
        <p style={{ marginTop: '1rem' }}>
          · <strong>Mapbox GL JS</strong> (Mapbox Inc., USA) — Darstellung der Umgebungskarte.<br />
          · <strong>Buchungswidget</strong> (im-web.de) — Verfügbarkeitsanzeige und Direktbuchung.<br />
          · <strong>Google Fonts</strong> — Schriftarten. Für den Launch wird Self-Hosting empfohlen.<br />
          · <strong>Video-/Bild-CDN</strong> (CloudFront) — Auslieferung der Medien. Für den Launch wird lokales Hosting empfohlen.
        </p>
        <p className="muted" style={{ marginTop: '2rem', fontSize: '0.9rem' }}>
          Hinweis: Diese Erklärung ist ein Gerüst und muss vor dem Launch von
          einer fachkundigen Stelle vervollständigt und geprüft werden
          (Rechtsgrundlagen, Speicherdauern, Betroffenenrechte, ggf. Consent-Lösung).
        </p>
      </div>
      <p style={{ marginTop: '3rem' }}><a href="/" style={{ color: 'var(--ocean-700)' }}>← Zurück zur Startseite</a></p>
    </main>
    <Footer />
    </>
  );
}
