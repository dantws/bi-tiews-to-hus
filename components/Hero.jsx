'use client';

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

    if (reduce || !v) return;

    let st;

    const setup = () => {
      const dur = v.duration || 6;
      const claim = rootRef.current?.querySelector('.hero-claim');
      const isMobile = window.innerWidth < 760;

      v.pause();

      st = ScrollTrigger.create({
        trigger: rootRef.current,
        start: 'top top',
        end: isMobile ? 'bottom top' : '+=220%',
        pin: !isMobile,
        pinSpacing: !isMobile,
        scrub: isMobile ? false : 0.5,
        onUpdate: (self) => {
          // Claim ist sofort sichtbar und blendet erst gegen Ende aus.
          const p = 1 - Math.min(Math.max((self.progress - 0.6) / 0.35, 0), 1);

          if (claim) {
            claim.style.opacity = String(p);
            claim.style.transform = `translateY(${-24 * (1 - p)}px)`;
          }

          if (!isMobile) {
            const t = Math.min(self.progress * dur, dur - 0.05);
            if (Math.abs(v.currentTime - t) > 0.02) {
              v.currentTime = t;
            }
          }
        },
      });
    };

    if (v.readyState >= 1) {
      setup();
    } else {
      v.addEventListener('loadedmetadata', setup, { once: true });
      v.load();
    }

    return () => st?.kill();
  }, []);

  return (
    <section ref={rootRef} className="hero">
      <div className="hero-media">
        <video
          ref={videoRef}
          src={heroVideo.src}
          poster={heroVideo.poster}
          muted
          playsInline
          preload="metadata"
          aria-label="Drohnenflug über Ahlbeck zum Haus"
        />
      </div>

      <div className="hero-inner">
        <div className="hero-claim">
          <h1><span className="hero-welcome">Willkommen</span>Bi Tiews to Hus</h1>
          <div className="hero-cta">
            <a className="hero-cta-banner" href="/buchen">Direkt buchen</a>
          </div>
           <p className="hero-cta-sub">Zum Bestpreis direkt beim Eigentümer.</p>
        </div>
      </div>
    </section>
  );
}
