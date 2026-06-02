"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

/**
 * Vanta Globe background — positioned ABSOLUTE within its parent section.
 * NOT fixed, so it only renders behind the Hero, not the whole page.
 */
export default function VantaGlobe() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);
  const [threeLoaded, setThreeLoaded] = useState(false);

  const initVanta = () => {
    if (
      typeof window !== "undefined" &&
      window.VANTA &&
      window.THREE &&
      vantaRef.current &&
      !vantaEffect.current
    ) {
      vantaEffect.current = window.VANTA.GLOBE({
        el: vantaRef.current,
        THREE: window.THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xb76dff,
        color2: 0x490080,
        backgroundColor: 0x131313,
        size: 1.0,
      });
    }
  };

  useEffect(() => {
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
        strategy="afterInteractive"
        onLoad={() => setThreeLoaded(true)}
      />
      {threeLoaded && (
        <Script
          src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js"
          strategy="afterInteractive"
          onLoad={initVanta}
        />
      )}
      {/* ABSOLUTE — only covers its parent section, not the whole page */}
      <div
        ref={vantaRef}
        className="pointer-events-none absolute inset-0 z-0 opacity-50"
      />
    </>
  );
}
