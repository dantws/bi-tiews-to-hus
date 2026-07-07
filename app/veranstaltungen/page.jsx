/**
 * UNTERSEITE /veranstaltungen — „Veranstaltungen in den Kaiserbädern".
 * Versucht serverseitig, aktuelle Einträge aus dem offiziellen Kalender
 * zu lesen (Cache: 6 h). Der Kalender ist ein dynamisches Widget — schlägt
 * das Parsen fehl, tragen die kuratierten Highlights die Seite. Quelle
 * wird stets verlinkt und genannt.
 */
import SiteNav from '../../components/SiteNav';
import Footer from '../../components/Footer';
import { eventHighlights, officialCalendarUrl } from '../../lib/events';

export const metadata = {
  title: 'Veranstaltungen in den Kaiserbädern — Bi Tiews to Hus',
  description: 'Konzerte, Feste und Highlights in Ahlbeck, Heringsdorf und Bansin — direkt vor der Tür von Bi Tiews to Hus.',
};

export const revalidate = 21600; // 6 Stunden

async function fetchLiveEvents() {
  try {
    const res = await fetch(officialCalendarUrl, {
      next: { revalidate: 21600 },
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; BiTiewsToHus/1.0)' },
    });
    if (!res.ok) return null;
    const html = await res.text();
    // Tolerantes Parsen: Titel-Überschriften + Datumsmuster in der Nähe
    const items = [];
    const re = /<h([23])[^>]*>([\s\S]*?)<\/h\1>[\s\S]{0,400}?(\d{2}\.\d{2}\.\d{4})/g;
    let m;
    while ((m = re.exec(html)) && items.length < 12) {
      const titel = m[2].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
      if (titel.length > 3 && titel.length < 120) items.push({ titel, datum: m[3] });
    }
    return items.length >= 3 ? items : null;
  } catch {
    return null;
  }
}

export default async function VeranstaltungenPage() {
  const live = await fetchLiveEvents();

  return (
    <>
      <SiteNav />
      <main className="section">
        <div className="container" style={{ maxWidth: '980px' }}>
          <span className="eyebrow">Ahlbeck · Heringsdorf · Bansin</span>
          <h1>Veranstaltungen in den <em className="accent">Kaiserbädern</em></h1>
          <p style={{ marginTop: '1.25rem', maxWidth: '38em' }}>
            Barfußkonzerte am Strand, Sommerkino an der Seebrücke, Märkte auf
            der Promenade: Die drei Kaiserbäder bespielen das ganze Jahr —
            vieles davon in Gehweite der Friedrichstraße.
          </p>

          {live ? (
            <>
              <h3 style={{ marginTop: '3.5rem' }}>Aktuelle Termine</h3>
              <ul className="event-list">
                {live.map((e, i) => (
                  <li key={i}>
                    <span className="event-date">{e.datum}</span>
                    <span className="event-title">{e.titel}</span>
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          <h3 style={{ marginTop: '3.5rem' }}>Die Highlights im Jahreslauf</h3>
          <div className="event-grid">
            {eventHighlights.map((e) => (
              <article className="event-card" key={e.titel}>
                <span className="eyebrow" style={{ marginBottom: '0.5rem' }}>{e.monat} · {e.ort}</span>
                <h4>{e.titel}</h4>
                <p>{e.text}</p>
              </article>
            ))}
          </div>

          <p className="event-source">
            Alle Termine und das vollständige Programm:{' '}
            <a href={officialCalendarUrl} target="_blank" rel="noopener noreferrer">
              Offizieller Veranstaltungskalender der Kaiserbäder →
            </a>
            <br />
            <span className="muted">Quelle: kaiserbaeder-auf-usedom.de — Angaben ohne Gewähr, Termine variieren jährlich.</span>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
