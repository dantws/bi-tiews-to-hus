'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Bindet das im-web.de Buchungswidget ein und passt die iframe-Höhe
 * per postMessage an dessen Inhaltshöhe an, damit innerhalb des
 * Widgets nicht gescrollt werden muss.
 */
export default function BuchungsWidget({ src, title }) {
  const iframeRef = useRef(null);
  const [height, setHeight] = useState(720);

  useEffect(() => {
    const widgetOrigin = new URL(src).origin;
    const onMessage = (e) => {
      if (e.origin !== widgetOrigin) return;
      let data = e.data;
      if (typeof data === 'string') {
        try { data = JSON.parse(data); } catch {
          const n = parseFloat(data);
          if (!Number.isNaN(n) && /^[0-9.]+$/.test(data.trim())) setHeight(n);
          return;
        }
      }
      const h = data?.height ?? data?.frameHeight ?? data?.iframeHeight ?? data?.contentHeight;
      if (typeof h === 'number' && h > 0) setHeight(h);
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src={src}
      title={title}
      style={{ height }}
    />
  );
}
