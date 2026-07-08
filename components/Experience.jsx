'use client';

import { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SiteNav from './SiteNav';
import Hero from './Hero';
import SceneIntro from './SceneIntro';
import SceneDetail from './SceneDetail';
import SceneGalerie from './SceneGalerie';
import SceneOrtLage from './SceneOrtLage';
import SceneGeschichte from './SceneGeschichte';
import Footer from './Footer';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const [loaded, setLoaded] = useState(false);
  const lenisRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduce) {
      const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 0.9, smoothWheel: true });
      lenisRef.current = lenis;
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    }
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.to(el, {
          opacity: 1, y: 0, duration: 1.2, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        });
      });
    });
    const t = setTimeout(() => setLoaded(true), 600);
    return () => { clearTimeout(t); ctx.revert(); lenisRef.current?.destroy(); };
  }, []);

  return (
    <>
      <div className={`preloader${loaded ? ' is-done' : ''}`} aria-hidden={loaded}>
        <span>Bi Tiews to Hus</span>
      </div>
      <SiteNav />
      <main id="top">
        <Hero />
        <SceneIntro />
        <SceneGalerie />
        <SceneDetail />
        <SceneOrtLage />
        <SceneGeschichte />
      </main>
      <Footer />
    </>
  );
}
