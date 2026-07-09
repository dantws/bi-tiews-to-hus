/**
 * ASSET-MANIFEST & Objektdaten.
 * Medien liegen unter /public/assets/. Für perfektes Hero-Scrubbing das
 * Video neu encoden (ffmpeg -i in.mp4 -g 12 -movflags +faststart out.mp4).
 */

export const heroVideo = {
  src: '/assets/video/Drohnenflug.mp4',
  poster: '/assets/img/Drohne-Start.jpg',
};

export const photos = {
  villaReal: '/assets/img/villa.jpg',
  living1: '/assets/img/wohnzimmer-1.jpg',
  living2: '/assets/img/wohnzimmer-2.jpg',
  bedroom: '/assets/img/schlafzimmer.jpg',
  bath: '/assets/img/bad.jpg',
  juergenJung: '/assets/img/JuergenJung.jpg',
};

export const booking = {
  widgetUrl:
    'https://bookingwidget.im-web.de?bookingcalendar_all=1&interfaceid=95162&onlythisroom=1&room=323415&completeScript=1&parentHost=https%3A%2F%2Fusedomengel.de%2Fobjekte%2Fbi-tiews-to-hus%2F',
};

/** Key Facts — Objektdaten; Lage 350 m / 5 Min zum Strand. */
export const keyFacts = [
  { value: '50–60 m²', label: 'Wohnfläche' },
  { value: '1–4', label: 'Personen' },
  { value: 'bis zu 2', label: 'Schlafzimmer' },
  { value: 'bis zu 2', label: 'Bäder' },
  { value: '1', label: 'Parkplatz' },
  { value: '350 m', label: 'zum Strand' },
];

export const features = [
  'Balkon zur Südostseite',
  'Bad mit Dusche und WC',
  'Offene Küche mit Backofen, Herd und Kühlschrank',
  'Kostenfreies WLAN und kostenfreie Parkplatz',
  'Separates Doppelzimmer mit DU/WC (bei mehr als 2 Personen)',
  'Haustiere nicht erlaubt',
];

/** Karte — die Gehroute vom Haus zum Strandaufgang (Start = Haus, Ende = Strand). */
export const map = {
  walkingRoute: [
    [14.1844941, 53.9412973],
    [14.1860614, 53.9416995],
    [14.1873432, 53.9424075],
    [14.1874686, 53.9423870],
    [14.1880512, 53.9431185],
    [14.1889835, 53.9437741],
  ],
};
