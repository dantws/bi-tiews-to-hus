'use client';

/**
 * KARTE + LAGE — 50/50 Split.
 * - Light Mapbox Style
 * - Eigenes Marker-Design passend zur Website
 * - Route wird beim Scrollen gezeichnet
 * - Scroll-Zoom deaktiviert
 * - Touch-Zoom auf Mobilgeräten bleibt aktiv
 */

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { map as mapData } from '../lib/assets';

gsap.registerPlugin(ScrollTrigger);

const nearbyGroups = [
  {
    title: 'Highlights in der Nähe',
    items: [
      { label: 'Seebrücke Ahlbeck', distance: 'ca. 400 m' },
      { label: 'Promenade', distance: 'ca. 300 m' },
      { label: 'Świnoujście in Polen', distance: 'ca. 2 km' },
    ],
  },
  {
    title: 'Strände in der Umgebung',
    items: [
      { label: 'Strand Ahlbeck', distance: '350 m' },
      { label: 'Strand Heringsdorf', distance: 'ca. 3 km' },
      { label: 'Strand Bansin', distance: 'ca. 6 km' },
    ],
  },
];

export default function SceneOrtLage() {
  const mapContainer = useRef(null);

  useEffect(() => {
    let map;
    let st;
    let cancelled = false;
    let observer;

    const init = async () => {
      const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

      if (!token || !mapContainer.current) return;

      const mapboxgl = (await import('mapbox-gl')).default;
      await import('mapbox-gl/dist/mapbox-gl.css');

      if (cancelled) return;

      mapboxgl.accessToken = token;

      const route = mapData.walkingRoute;

      const house = {
        lng: route[0][0],
        lat: route[0][1],
        label: 'Bi Tiews to Hus',
      };

      const beach = {
        lng: route[route.length - 1][0],
        lat: route[route.length - 1][1],
        label: 'Strandaufgang',
      };

      map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [house.lng, house.lat],
        zoom: 15,
        attributionControl: true,
      });

      map.addControl(
        new mapboxgl.NavigationControl({
          showCompass: false,
        }),
        'top-right'
      );

      // Karte verschieben erlaubt
      if (window.innerWidth >= 760) {
  map.dragPan.enable();
} else {
  map.dragPan.disable();
}

      // Touch-Zoom auf Smartphones
      map.touchZoomRotate.enable();

      // Mausrad-Zoom deaktivieren
      map.scrollZoom.disable();

      // Doppelklick-Zoom deaktivieren
      map.doubleClickZoom.disable();

  map.on('load', () => {
  map.resize();

  document.querySelector('.map-fallback')?.remove();

  const createMarker = (point, type) => {
          const el = document.createElement('div');

          const background =
            type === 'house'
              ? '#061D41'
              : '#DECDAA';

          const foreground =
            type === 'house'
              ? '#FAF7F2'
              : '#232E36';

          const icon =
            type === 'house'
              ? `
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3 10.5L12 3L21 10.5"
                    stroke="${foreground}"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>
                  <path
                    d="M6 9.5V20H18V9.5"
                    stroke="${foreground}"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"/>
                </svg>
              `
              : `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 18C6.5 16.8 8 16.8 9.5 18C11 19.2 12.5 19.2 14 18C15.5 16.8 17 16.8 18.5 18"
                    stroke="${foreground}"
                    stroke-width="2"
                    stroke-linecap="round"/>
                  <path
                    d="M11 4L16 9"
                    stroke="${foreground}"
                    stroke-width="2"
                    stroke-linecap="round"/>
                  <path
                    d="M11 4V18"
                    stroke="${foreground}"
                    stroke-width="2"
                    stroke-linecap="round"/>
                  <path
                    d="M16 9H20"
                    stroke="${foreground}"
                    stroke-width="2"
                    stroke-linecap="round"/>
                </svg>
              `;

          // Inneres Element trägt Optik + Hover-Skalierung. Mapbox setzt die
          // Positionierung per transform auf `el` — daher darf nur `inner`
          // skaliert werden, sonst springt der Marker in die Kartenecke.
          const inner = document.createElement('div');
          inner.innerHTML = icon;
          inner.style.cssText = `
            width:44px;
            height:44px;
            border-radius:50%;
            background:${background};
            display:flex;
            align-items:center;
            justify-content:center;
            border:3px solid #FAF7F2;
            box-shadow:
              0 8px 20px rgba(35,46,54,.18),
              0 3px 8px rgba(35,46,54,.18);
            cursor:pointer;
            transition:transform .18s ease;
          `;
          el.appendChild(inner);

          el.addEventListener('mouseenter', () => {
            inner.style.transform = 'scale(1.08)';
          });

          el.addEventListener('mouseleave', () => {
            inner.style.transform = 'scale(1)';
          });

          new mapboxgl.Marker({
            element: el,
            anchor: 'center',
          })
            .setLngLat([point.lng, point.lat])
            .setPopup(
              new mapboxgl.Popup({
                offset: 24,
                closeButton: false,
              }).setText(point.label)
            )
            .addTo(map);
        };

        createMarker(house, 'house');
        createMarker(beach, 'beach');

    const isTouchSmall = window.innerWidth < 760;

        map.addSource('walk', {
          type: 'geojson',
          lineMetrics: true,
          data: {
            type: 'Feature',
            geometry: {
              type: 'LineString',
              coordinates: route,
            },
          },
        });
    
        map.addLayer({
  id: 'walk-line',
  type: 'line',
  source: 'walk',
  layout: {
    'line-cap': 'round',
    'line-join': 'round',
  },
  paint: {
    'line-color': '#061D41',
    'line-width': 4,
    'line-gradient': isTouchSmall
      ? '#061D41'
      : [
          'step',
          ['line-progress'],
          '#061D41',
          0.001,
          'rgba(46,74,90,0)',
        ],
  },
});

        const bounds = new mapboxgl.LngLatBounds();

        route.forEach(([lng, lat]) => {
          bounds.extend([lng, lat]);
        });

        map.fitBounds(bounds, {
          padding: 120,
          duration: 0,
        });
        // leicht rausgezoomter Start
        map.setZoom(map.getZoom() - 0.35);

if (!isTouchSmall) {
  const headerH =
    document.querySelector('.header')?.offsetHeight ?? 124;

  st = ScrollTrigger.create({
    trigger: '.ortlage',
    start: `top ${headerH}px`,
    end: '+=1800',
    pin: true,
    pinSpacing: true,
    scrub: 1,

    onUpdate: (self) => {
      if (!map.getLayer('walk-line')) return;

      map.setPaintProperty('walk-line', 'line-gradient', [
        'step',
        ['line-progress'],
        '#061D41',
        Math.max(self.progress, 0.001),
        'rgba(46,74,90,0)',
      ]);

      map.easeTo({
        bearing: self.progress * 40,
        pitch: self.progress * 50,
        duration: 0,
      });
    },
  });
}
    });
      };

    // Mapbox (≈1,5 MB JS + Tiles) erst laden, wenn die Sektion in die Nähe scrollt
    if ('IntersectionObserver' in window && mapContainer.current) {
      observer = new IntersectionObserver((entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          observer.disconnect();
          init();
        }
      }, { rootMargin: '800px 0px' });
      observer.observe(mapContainer.current);
    } else {
      init();
    }

    return () => {
      cancelled = true;
      observer?.disconnect();
      st?.kill();
      map?.remove();
    };
  }, []);

    return (
    <section className="ortlage" id="lage">
      <div className="ortlage-inner">
        <div className="ortlage-map">
          <div className="map-fallback" aria-hidden="true">
            Karte lädt — Mapbox-Token erforderlich
          </div>

          <div
            ref={mapContainer}
            className="map-el"
            aria-label="Karte: Bi Tiews to Hus und Umgebung"
          />

          <div className="map-caption reveal">
            <strong>350 Meter. 5 Minuten.</strong>
            <span className="map-caption-sub">
              Vom Frühstückstisch bis zum ersten Sand unter den Füßen.
            </span>
          </div>
        </div>

        <div className="ortlage-text">
          <h2 className="reveal">Ruhige Lage mit Nähe zum Strand</h2>

          <p className="reveal">
            Ahlbeck gehört zusammen mit Heringsdorf und Bansin zu den drei
            Kaiserbädern auf Usedom. Die Friedrichstraße liegt ruhig zwischen
            den Häusern der historischen Bäderarchitektur. Nach rund 350 Metern
            beginnt der Strand, die älteste Seebrücke Deutschlands befindet sich
            gleich daneben. Bäcker, Cafés und die Promenade erreichen Sie bequem
            zu Fuß.
          </p>

          <div className="lage-cols reveal">
            {nearbyGroups.map((group) => (
              <div className="lage-card" key={group.title}>
                <h4>{group.title}</h4>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <span>{item.label}</span>
                      <span className="lage-card-distance">{item.distance}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
