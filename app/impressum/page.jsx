import SiteNav from '../../components/SiteNav';
import Footer from '../../components/Footer';

export const metadata = { title: 'Impressum — Bi Tiews to Hus' };

export default function Impressum() {
  return (
    <>
    <SiteNav />
    <main className="container" style={{ paddingBlock: '8rem', maxWidth: '46rem' }}>
      <span className="eyebrow">Rechtliches</span>
      <h1 className="display-md">Impressum</h1>
      <div style={{ marginTop: '2.5rem', lineHeight: 1.8 }}>
        <p><strong>Angaben gemäß § 5 TMG</strong></p>
        <p style={{ marginTop: '1rem' }}>
          [Vor- und Nachname des Eigentümers]<br />
          Friedrichstraße 2<br />
          17419 Seebad Ahlbeck
        </p>
        <p style={{ marginTop: '1rem' }}>
          Telefon: [Telefonnummer]<br />
          E-Mail: [E-Mail-Adresse]
        </p>
        <p style={{ marginTop: '1rem' }}>
          Umsatzsteuer-ID gemäß § 27a UStG: [falls vorhanden]
        </p>
        <p className="muted" style={{ marginTop: '2rem', fontSize: '0.9rem' }}>
          Hinweis: Die Platzhalter in eckigen Klammern müssen vor dem Launch
          mit den vollständigen Angaben des Betreibers ersetzt werden.
        </p>
      </div>
      <p style={{ marginTop: '3rem' }}><a href="/" style={{ color: 'var(--baltic)' }}>← Zurück zur Startseite</a></p>
    </main>
    <Footer />
    </>
  );
}
