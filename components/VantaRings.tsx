"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

export default function VantaRings() {
  const containerRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<any>(null);
  const [ready, setReady] = useState(false);

  const initEffect = () => {
    if (
      window.VANTA?.RINGS &&
      window.THREE &&
      containerRef.current &&
      !effectRef.current
    ) {
      effectRef.current = window.VANTA.RINGS({
        el: containerRef.current,
        THREE: window.THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xb76dff,
        backgroundColor: 0x0e0e12,
      });
    }
  };

  useEffect(() => {
    // Try to init in case scripts were already loaded by another component
    if (window.THREE && window.VANTA?.RINGS) {
      initEffect();
    }
    return () => {
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, []);

  return (
    <>
      {/* Three.js may already be loaded; load it only if not present */}
      {typeof window !== "undefined" && !window.THREE && (
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
          strategy="afterInteractive"
          onLoad={() => setReady(true)}
        />
      )}
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.rings.min.js"
        strategy="afterInteractive"
        onLoad={initEffect}
      />
      <div
        ref={containerRef}
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
      />
    </>
  );
}
