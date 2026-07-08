/** FOOTER — dunkel, drei Spalten (Referenz-Anatomie). */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--white)' }}>
            Bi Tiews to Hus
          </p>
          <p style={{ marginTop: '0.5rem' }}>© 2026 · Friedrichstraße 2<br />17419 Seebad Ahlbeck · Insel Usedom</p>
        </div>
        <div>
          <h4>Kontakt</h4>
          <p><a href="/buchen">Buchen Sie jetzt Ihren Aufenthalt</a><br />
          Direkt beim Eigentümer — ohne Plattformgebühren</p>
        </div>
        <div>
          <h4>Links</h4>
          <p>
            <a href="/#apartment">Das Apartment</a> · <a href="/#lage">Lage</a> · <a href="/#geschichte">Geschichte</a><br />
            <a href="/impressum">Impressum</a> · <a href="/datenschutz">Datenschutz</a>
          </p>
          <a
            className="footer-social"
            href="https://www.instagram.com/bitiewstohus"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Bi Tiews to Hus auf Instagram"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
              <circle cx="12" cy="12" r="4.2" />
              <circle cx="17.4" cy="6.6" r="0.6" fill="currentColor" stroke="none" />
            </svg>
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
