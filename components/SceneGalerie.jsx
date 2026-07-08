'use client';

/**
 * GALERIE — kompakt und einheitlich:
 * fünf gleichförmige Rechtecke mit abgerundeten Ecken, zwei ruhige Reihen.
 */
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import { photos } from '../lib/assets';

export default function SceneGalerie() {
  const [index, setIndex] = useState(-1);

  const slides = [
    { src: photos.villaReal },
    { src: photos.bedroom },
    { src: photos.living1 },
    { src: photos.living2 },
    { src: photos.bath },
  ];

  return (
    <section className="section galerie">
      <div className="container">
        <h2 className="reveal">Bildergalerie</h2>

        <div className="galerie-grid reveal">
          <figure className="gal g3"><img src={photos.villaReal} alt="Die weiße Villa in der Friedrichstraße" loading="lazy" onClick={() => setIndex(0)} /></figure>
          <figure className="gal g3"><img src={photos.bedroom} alt="Schlafzimmer mit Doppelbett" loading="lazy" onClick={() => setIndex(1)} /></figure>
          <figure className="gal g3"><img src={photos.living1} alt="Wohnzimmer mit Sofa und Essplatz" loading="lazy" onClick={() => setIndex(2)} /></figure>
          <figure className="gal g2"><img src={photos.living2} alt="Essbereich am Fenster" loading="lazy" onClick={() => setIndex(3)} /></figure>
          <figure className="gal g2"><img src={photos.bath} alt="Bad mit Dusche und WC" loading="lazy" onClick={() => setIndex(4)} /></figure>
        </div>

        <Lightbox open={index >= 0} index={index} close={() => setIndex(-1)} slides={slides} />
      </div>
    </section>
  );
}
