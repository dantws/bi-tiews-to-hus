'use client';

/**
 * HERO — Drohnenflug, scrollgesteuert.
 * FIX: Der Pin startet exakt unter dem fixierten Header
 * (Höhe wird zur Laufzeit gemessen — kein hartkodierter Wert).
 */
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { heroVideo } from '../lib/assets';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const rootRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const v = videoRef.current;
    if (reduce || !v || window.innerWidth < 760) return;

    let st;
    const setup = () => {
      const dur = v.duration || 6;
      // Header-Höhe live messen, damit der Pin nicht unter der Navbar klebt
      const headerH = document.querySelector('.header')?.offsetHeight ?? 124;
      
      const claim = rootRef.current.querySelector('.hero-claim');
      
      st = ScrollTrigger.create({
    trigger: rootRef.current,
    start: "top top",
    end: "+=220%",
    pin: true,
    pinSpacing: true,
    scrub: 0.5,
        onUpdate: (self) => {
  // Claim wird zwischen 50% und 75% des Scrolls eingeblendet
  const p = Math.min(Math.max((self.progress - 0.5) / 0.25, 0), 1);

  if (claim) {
    claim.style.opacity = String(p);
    claim.style.transform = `translateY(${30 * (1 - p)}px)`;
  }

  const t = Math.min(self.progress * dur, dur - 0.05);
  if (Math.abs(v.currentTime - t) > 0.02) {
    v.currentTime = t;
  }
},
      });
    };

    v.pause();
    if (v.readyState >= 1) setup();
    else v.addEventListener('loadedmetadata', setup, { once: true });
    v.load();

    return () => st?.kill();
  }, []);

  return (
    <section ref={rootRef} className="hero">
      <div className="hero-media">
        <video ref={videoRef} src={heroVideo.src} poster={heroVideo.poster}
          muted playsInline preload="metadata"
          aria-label="Drohnenflug über Ahlbeck zum Haus" />
      </div>
      <div className="hero-inner">
        <div className="hero-claim">
          <h1>Bi Tiews to Hus</h1>
        </div>
        <div className="hero-cta">
          <a className="hero-cta-banner" href="/buchen">Direkt buchen</a>
          <p className="hero-cta-sub">Zum Bestpreis direkt beim Eigentümer.</p>
        </div>
      </div>
    </section>
  );
}
