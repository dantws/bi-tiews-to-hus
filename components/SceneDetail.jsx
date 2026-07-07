/** DETAIL — grauer Verlauf, Überschrift links, Text rechts, Key Facts (Referenz-Anatomie). */
import { keyFacts, features } from '../lib/assets';

export default function SceneDetail() {
  return (
    <section className="section detail">
      <div className="container">
        <div className="detail-head">
          <h2 className="reveal">Das Apartment</h2>
          <p className="reveal" style={{ alignSelf: 'center', maxWidth: '40em' }}>
            Auf rund 50 m² erwartet Sie eine komfortabel ausgestattete Wohnung für zwei Personen. Reisen Sie mit bis zu vier Personen, steht Ihnen ein separates Doppelzimmer (ca. 10 m²) auf derselben Etage mit eigener Dusche und WC zur Verfügung.
          </p>
        </div>
        <div className="detail-card reveal">
          <div className="keyfacts" role="list" aria-label="Merkmale der Wohnung">
            {keyFacts.map((f) => (
              <div className="keyfact" role="listitem" key={f.label}>
                <span className="keyfact-value">{f.value}</span>
                <span className="keyfact-label">{f.label}</span>
              </div>
            ))}
          </div>
          <ul className="features">
            {features.map((f) => <li key={f}>{f}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
