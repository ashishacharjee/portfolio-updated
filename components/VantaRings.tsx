"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { useTheme } from "./ThemeProvider";

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

const configs = {
  dark: { color: 0xb76dff, backgroundColor: 0x0e0e12 },
  light: { color: 0x8127cf, backgroundColor: 0xf8f9fa },
};

export default function VantaRings() {
  const containerRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<any>(null);
  const [ready, setReady] = useState(false);
  const { theme } = useTheme();
  const themeRef = useRef(theme);
  const isFirstRender = useRef(true);
  themeRef.current = theme;

  const initEffect = () => {
    if (effectRef.current) {
      effectRef.current.destroy();
      effectRef.current = null;
    }
    if (
      window.VANTA?.RINGS &&
      window.THREE &&
      containerRef.current
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
        ...configs[themeRef.current],
      });
    }
  };

  // Smooth theme switch: fade out → rebuild → fade in (stagger: 450ms)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (window.VANTA?.RINGS && window.THREE && containerRef.current) {
      containerRef.current.style.opacity = "0";
      const timer = setTimeout(() => {
        initEffect();
        requestAnimationFrame(() => {
          if (containerRef.current) containerRef.current.style.opacity = "";
        });
      }, 450);
      return () => clearTimeout(timer);
    }
  }, [theme]);

  useEffect(() => {
    return () => {
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, []);

  return (
    <>
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
        style={{ transition: "opacity 0.3s ease" }}
      />
    </>
  );
}
