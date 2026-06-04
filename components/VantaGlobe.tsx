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
  dark: { color: 0xb76dff, color2: 0x490080, backgroundColor: 0x131313 },
  light: { color: 0x8127cf, color2: 0xc084fc, backgroundColor: 0xf8f9fa },
};

export default function VantaGlobe() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);
  const [threeLoaded, setThreeLoaded] = useState(false);
  const { theme } = useTheme();
  const themeRef = useRef(theme);
  const isFirstRender = useRef(true);
  themeRef.current = theme;

  const initVanta = () => {
    if (vantaEffect.current) {
      vantaEffect.current.destroy();
      vantaEffect.current = null;
    }
    if (
      typeof window !== "undefined" &&
      window.VANTA?.GLOBE &&
      window.THREE &&
      vantaRef.current
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
        size: 1.0,
        ...configs[themeRef.current],
      });
    }
  };

  // Smooth theme switch: fade out → rebuild → fade in (stagger: 0ms)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (window.VANTA?.GLOBE && window.THREE && vantaRef.current) {
      vantaRef.current.style.opacity = "0";
      const timer = setTimeout(() => {
        initVanta();
        requestAnimationFrame(() => {
          if (vantaRef.current) vantaRef.current.style.opacity = "";
        });
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [theme]);

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
      <div
        ref={vantaRef}
        className="pointer-events-none absolute inset-0 z-0 opacity-50"
        style={{ transition: "opacity 0.3s ease" }}
      />
    </>
  );
}
