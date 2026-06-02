"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

export default function VantaNet() {
  const containerRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<any>(null);

  const initEffect = () => {
    if (
      window.VANTA?.NET &&
      window.THREE &&
      containerRef.current &&
      !effectRef.current
    ) {
      effectRef.current = window.VANTA.NET({
        el: containerRef.current,
        THREE: window.THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xddb7ff,
        backgroundColor: 0x0e0a1a,
        points: 10,
        maxDistance: 20,
        spacing: 15,
        showDots: true,
      });
    }
  };

  useEffect(() => {
    if (window.THREE && window.VANTA?.NET) {
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
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"
        strategy="afterInteractive"
        onLoad={initEffect}
      />
      <div
        ref={containerRef}
        className="pointer-events-none absolute inset-0 z-0 opacity-35"
      />
    </>
  );
}
