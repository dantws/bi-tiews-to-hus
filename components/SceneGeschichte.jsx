/**
 * DIE GESCHICHTE — Nacherzählung in Fragmenten.
 * Nach: „Von Herrn Behrens, seiner Frau und anderen Leuten".
 * Bewusst eigene Worte; nur ein kurzes Originalzitat.
 * Falls die Rechte am Buchtext vorliegen und der volle Wortlaut
 * gewünscht ist: Absätze unten einfach ersetzen.
 */
import { photos } from '../lib/assets';

const fragments = [
  'In Ahlbeck geboren, in eine alteingesessene Fischerfamilie. Der Vater, im Ort nur „Tucker" genannt, nahm den Jungen früh mit hinaus aufs Meer.',
  'September 1962. Nachts legt die „Seestern" ab — das hölzerne Fischerboot des Vaters, Kennung AHL 20. Am Ruder: Jürgen Tiews, siebzehn Jahre alt. An Bord: zwei Freunde, ein alter norwegischer Kompass. Keine Seekarte.',
  'Neunzig Meilen offene Ostsee. Dreizehn Stunden. Sturm, ein stotternder Motor, Suchscheinwerfer über dem Wasser. Am Morgen taucht aus dem Dunst ein kleiner Hafen auf: Schweden. Freiheit.',
  'Der originale Rettungsring der „Seestern" hängt heute im Haus — in der kleinen Kellerbar.',
];

export default function SceneGeschichte() {
  return (
    <section className="section geschichte" id="geschichte">
      <div className="container">
        <div className="geschichte-grid">
          <div >
            <span className="eyebrow reveal">Die Geschichte</span>
            <h2 className="reveal">Über die Ostsee aus der DDR<br />in die Freiheit.</h2>
            {fragments.map((f, i) => (
              <p key={i} className="reveal geschichte-frag">{f}</p>
            ))}
            <blockquote className="reveal geschichte-zitat">
              „Wir waren halt noch unheimlich jung."
              <cite>Jürgen Tiews — nach „Von Herrn Behrens, seiner Frau und anderen Leuten"</cite>
            </blockquote>
            <p className="reveal" style={{ marginTop: '2rem' }}>
              Das Meer bestimmte in diesem Haus schon immer den Tag.
              Das tut es hier noch heute.
            </p>
          </div>
          <figure className="reveal geschichte-figure" style={{ alignSelf: 'start' }}>
            <img src={photos.juergenJung} alt="Jürgen Tiews als Junge vor dem Fischerschuppen seines Vaters, 1955" loading="lazy" />
            <figcaption>
              1955: Jürgen Tiews vor dem Fischerschuppen seines Vaters.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
