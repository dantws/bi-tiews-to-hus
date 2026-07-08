/** INTRO — Beschreibung links, Adressspalte mit Routen-Button rechts. */
export default function SceneIntro() {
  return (
    <section className="section" id="apartment">
      <div className="container">
        <div className="intro-head">
          <h2 className="intro-title">Bi Tiews to Hus — Seebad Ahlbeck</h2>
          <p className="intro-subtitle">Helle Ferienwohnung in einem Haus mit Geschichte</p>
        </div>
      </div>
      <div className="container intro-grid">
        <div className="intro-text">
          <p>
            Im Obergeschoss des Hauses liegt die helle Ferienwohnung: ein
            gemütliches Wohnzimmer mit Sofa und Essplatz, eine offene Küchenzeile,
            ein Schlafzimmer mit Doppelbett sowie ein Bad mit Dusche und WC. Der
            Balkon zur Ostseite gehört zu den schönsten Plätzen des Hauses —
            morgens Kaffee, abends Ruhe.
          </p>
          <p>
            Nach 350 Metern und etwa fünf Minuten zu Fuß beginnt der Strandurlaub:
            Der Weg führt vorbei an den alten Villen der Bäderarchitektur sowie
            vielen Restaurants, Cafés und Shops. Ein kostenfreier Parkplatz am Haus
            und WLAN sind selbstverständlich.
          </p>
          <p>
            <strong>
              Erholsamer Urlaub und ein Gefühl von einem Zuhause. Dafür steht Bi
              Tiews to Hus – Plattdeutsch für „bei Tiews zu Hause".
            </strong>
          </p>
        </div>
        <aside className="intro-side">
          <h4>Adresse</h4>
          <p>Friedrichstraße 2<br />17419 Seebad Ahlbeck<br />Insel Usedom</p>
          <a
            className="btn btn--fill intro-route"
            href="https://www.google.com/maps/dir/?api=1&destination=Friedrichstra%C3%9Fe%202%2C%2017419%20Seebad%20Ahlbeck%2C%20Deutschland"
            target="_blank"
            rel="noopener noreferrer"
          >
            Route planen
          </a>
        </aside>
      </div>
    </section>
  );
}
