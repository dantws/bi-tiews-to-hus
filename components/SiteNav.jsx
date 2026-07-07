'use client';

/**
 * NAVIGATION — minimal: zwei schwebende Chips.
 * Burger (immer sichtbar) links · „Direkt buchen" rechts (erst nach dem Hero).
 * Kein Logo in der Leiste — es lebt groß im geöffneten Menü.
 */
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function SiteNav() {
  const pathname = usePathname();
  const overlay = pathname === '/';
  const [past, setPast] = useState(!overlay);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!overlay) { setPast(true); return; }
    const onScroll = () => {
      // Unterkante des Hero messen — funktioniert auch mit ScrollTrigger-Pin
      const hero = document.querySelector('.hero');
      if (hero) setPast(hero.getBoundingClientRect().bottom <= 80);
      else setPast(window.scrollY > window.innerHeight * 0.85);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [overlay]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    return () => { document.documentElement.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className="header header--min">
        <div className="container header-min-inner">
          <button
            className={`nav-chip nav-burger${open ? ' is-open' : ''}`}
            aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span /><span /><span />
          </button>

          <a
            className={`nav-chip nav-book${past || open ? ' is-visible' : ''}`}
            href="/buchen"
            tabIndex={past || open ? 0 : -1}
            aria-hidden={!(past || open)}
          >
            Direkt buchen
          </a>
        </div>
      </header>
      {!overlay && <div className="header-spacer" aria-hidden="true" />}

      <div className={`mobile-menu${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <nav aria-label="Menü" onClick={() => setOpen(false)}>
          <img className="menu-logo" src="/assets/img/logo-white.png" alt="Bi Tiews to Hus" />
          <a href="/#apartment">Das Apartment</a>
          <a href="/#lage">Lage</a>
          <a href="/#geschichte">Geschichte</a>
          <a href="/veranstaltungen">Veranstaltungen</a>
          <a className="btn btn--light" href="/buchen">Direkt buchen</a>
        </nav>
      </div>
    </>
  );
}
