/** FOOTER — dunkel, drei Spalten (Referenz-Anatomie). */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--warm-white)' }}>
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
        </div>
      </div>
    </footer>
  );
}
