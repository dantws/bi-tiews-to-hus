/** UNTERSEITE /buchen — nur das Buchungstool, ruhig gerahmt. */
import SiteNav from '../../components/SiteNav';
import Footer from '../../components/Footer';
import BuchungsWidget from '../../components/BuchungsWidget';
import { booking } from '../../lib/assets';

export const metadata = {
  title: 'Direkt buchen — Bi Tiews to Hus',
  description: 'Verfügbarkeit prüfen und zum Bestpreis direkt beim Eigentümer buchen.',
};

export default function BuchenPage() {
  return (
    <>
      <SiteNav />
      <main className="section">
        <div className="container">
          <span className="eyebrow">Ihr Aufenthalt</span>
          <h1>Direkt <em className="accent">buchen</em></h1>
          <p style={{ marginTop: '1rem', maxWidth: '36em' }}>
            Zum Bestpreis direkt beim Eigentümer — ohne Plattformgebühren,
            mit persönlichem Kontakt und sofortiger Verfügbarkeit.
          </p>
          <div className="buchen-widget">
            <BuchungsWidget
              src={booking.widgetUrl}
              title="Verfügbarkeit prüfen und direkt buchen — Bi Tiews to Hus"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
