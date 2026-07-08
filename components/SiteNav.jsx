'use client';

/**
 * NAVIGATION — klassische Leiste (Wortmarke links, Links mittig, CTA rechts).
 * Transparent über dem Hero-Video, wird nach dem Hero (bzw. sofort auf
 * Unterseiten) blickdicht mit Schatten. Auf Mobil ersetzen Wortmarke/Links
 * ein Burger-Button, der das Vollbild-Menü öffnet.
 */
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const HOME_LINK_PAGES = ['/veranstaltungen', '/buchen'];

const NAV_LINKS = [
  { href: '/#apartment', label: 'Das Apartment' },
  { href: '/#lage', label: 'Lage' },
  { href: '/#geschichte', label: 'Geschichte' },
  { href: '/veranstaltungen', label: 'Veranstaltungen' },
];

export default function SiteNav() {
  const pathname = usePathname();
  const overlay = pathname === '/';
  const showHomeLink = HOME_LINK_PAGES.includes(pathname);
  const [solid, setSolid] = useState(!overlay);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!overlay) { setSolid(true); return; }
    const onScroll = () => {
      // Unterkante des Hero messen — funktioniert auch mit ScrollTrigger-Pin
      const hero = document.querySelector('.hero');
      if (hero) setSolid(hero.getBoundingClientRect().bottom <= 80);
      else setSolid(window.scrollY > window.innerHeight * 0.85);
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
      <header className={`header header--bar${solid || open ? ' is-solid' : ''}`}>
        <div className="container navbar-inner">
          <a className="navbar-brand" href="/">Bi Tiews to Hus</a>

          <nav className="navbar-links" aria-label="Hauptnavigation">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>

          <div className="navbar-actions">
            <a className="btn btn--fill navbar-cta" href={showHomeLink ? '/' : '/buchen'}>
              {showHomeLink ? 'Zur Startseite' : 'Direkt buchen'}
            </a>

            <button
              className={`navbar-burger${open ? ' is-open' : ''}`}
              aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>
      {!overlay && <div className="header-spacer" aria-hidden="true" />}

      <div className={`mobile-menu${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <nav aria-label="Menü" onClick={() => setOpen(false)}>
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
