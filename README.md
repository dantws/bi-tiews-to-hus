# Bi Tiews to Hus — Website

Eine scrollgesteuerte Reise an die Ostsee. Next.js 14 · GSAP ScrollTrigger · Lenis · Mapbox GL.

## Setup

```bash
npm install
npm install yet-another-react-lightbox
npm run dev
```

## Assets

**Die Website läuft sofort:** Alle 11 Videos und 6 Keyframes sind fertig
gerendert und direkt vom Higgsfield-CDN eingebunden (`lib/assets.js`).
Die echten Fotos liegen bereits unter `public/assets/img/`.

## Optional für den Launch (empfohlen)

1. **Videos:** In Higgsfield die 11 fertigen Clips herunterladen und unter
   `public/assets/video/` mit den Dateinamen aus `lib/assets.js` ablegen
   (Job-IDs stehen dort als Kommentar). Empfohlen: MP4 (H.264, 1080p) —
   optional zusätzlich WebM für kleinere Dateigröße.
2. **Echte Fotos:** Die fünf Projektfotos nach `public/assets/img/` kopieren:
   - `Obrazek104scaled.jpg` → `villa.jpg`
   - `Obrazek94.jpg` → `wohnzimmer-1.jpg`
   - `Obrazek93.jpg` → `wohnzimmer-2.jpg`
   - `Obrazek98.jpg` → `schlafzimmer.jpg`
   - `Obrazek100.jpg` → `bad.jpg`
3. **Keyframes/Poster:** liegen bereits auf dem Higgsfield-CDN und sind in
   `lib/assets.js` verlinkt. Für den Launch lokal spiegeln (Performance/DSGVO).
4. **Mapbox:** Koordinaten in `lib/assets.js` sind Näherungswerte für
   Friedrichstraße 2 — vor Launch per Geocoding verifizieren; POIs exakt setzen.

## Performance-Checkliste (Ziel: Lighthouse > 95)

- Hero-Videos: `-movflags +faststart`, Keyframe-Intervall 0.5 s
  (`-g 12` bei 24 fps) — wichtig für flüssiges `currentTime`-Scrubbing.
- Poster als AVIF/WebP lokal, `fetchpriority="high"` nur für den ersten Poster.
- Szenen-Videos bleiben `preload="metadata"` + Lazy im Viewport.
- Reduced Motion wird respektiert: Hero zeigt Poster, Reveals werden Fades.

## Struktur

Fernweh (Hero-Film) → Ankommen → Eintreten → Leben → Der Ort (+ Karte mit
gezeichneter Route) → Erinnerung → Direkt buchen → Footer.
