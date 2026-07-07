/** INTRO — Beschreibung links, Kontakt-/Anfahrtsspalte rechts (Referenz-Anatomie). */
export default function SceneIntro() {
  return (
    <section className="section" id="apartment">
      <div className="container">
        <div className="intro-head">
          <h1>Bi Tiews to Hus — Seebad Ahlbeck</h1>
          <h3 style={{ marginTop: '0.75rem', color: 'var(--steel)' }}>
            Helle Ferienwohnung in einem Haus mit Geschichte
          </h3>
        </div>
      </div>
      <div className="container intro-grid">
        <div className="intro-text">
          <p>
            Im Obergeschoss des Hauses liegt die helle Ferienwohnung:
            ein gemütliches Wohnzimmer mit Sofa und
            Essplatz, eine offene Küchenzeile , ein Schlafzimmer mit Doppelbett sowie ein Bad mit
            Dusche und WC. Der Balkon zur Ostseite gehört zu den schönsten Plätzen des
            Hauses — morgens Kaffee, abends Ruhe.
          </p>
          <p>
            Nach 350 Metern und etwa fünf Minuten zu Fuß beginnt der Strandurlaub:
            Der Weg führt vorbei an den alten Villen der Bäderarchitektur sowie vielen Restaurants, Cafés und Shops.
            Ein kostenfreier Parkplatz am Haus und WLAN sind selbstverständlich.
          </p>
          <p>
            <strong>Erholsamer Urlaub und ein Gefühl von einem Zuhause. Dafür steht Bi Tiews to Hus – Plattdeutsch für „bei Tiews zu Hause"</strong>{' '}
            
          </p>
        </div>
        <aside className="intro-side">
          <h4>Kontakt</h4>
          {/* TODO: echte Kontaktdaten eintragen */}
          <p>Direkt beim Eigentümer<br />Antwort meist am selben Tag</p>
          <h4>Anfahrt</h4>
          <p>Friedrichstraße 2<br />17419 Seebad Ahlbeck<br />Insel Usedom</p>
          
        </aside>
      </div>
    </section>
  );
}
