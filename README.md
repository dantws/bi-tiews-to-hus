# Bi Tiews to Hus — Website

Eine scrollgesteuerte Landingpage für die Ferienwohnung „Bi Tiews to Hus" im
Seebad Ahlbeck auf Usedom. Next.js 14 · GSAP ScrollTrigger · Lenis · Mapbox GL.

## Setup

```bash
npm install
npm run dev
```

Die Website läuft sofort — alle Medien liegen unter `public/assets/`
(`video/Drohnenflug.mp4`, Fotos unter `img/`).

## Konfiguration

- **Mapbox:** Token als `NEXT_PUBLIC_MAPBOX_TOKEN` in `.env.local` setzen.
  Die Gehroute (Haus → Strand) steht in `lib/assets.js` (`map.walkingRoute`).
- **Domain / SEO:** Kanonische Domain ist `https://bi-tiews-to-hus.de`
  (in `app/layout.jsx`, `app/robots.js`, `app/sitemap.js`).
- **Buchung:** im-web.de-Widget-URL in `lib/assets.js` (`booking.widgetUrl`).
- **Rechtstexte:** Platzhalter in `app/impressum` und `app/datenschutz` vor dem
  Launch mit den echten Angaben ersetzen.

## Struktur

Hero (Drohnenflug) → Intro → Galerie → Apartment/Key Facts → Ort & Karte mit
gezeichneter Route → Geschichte → Footer. Unterseiten: `/buchen`,
`/veranstaltungen`, `/impressum`, `/datenschutz`.

## Launch-Empfehlungen

- Hero-Video mit `-movflags +faststart` und engem Keyframe-Intervall
  (`-g 12` bei 24 fps) für flüssiges `currentTime`-Scrubbing encoden.
- Google Fonts und Medien für DSGVO/Performance lokal spiegeln.
- Reduced Motion wird respektiert (Hero zeigt Poster, Reveals werden Fades).
