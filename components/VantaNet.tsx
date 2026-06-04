"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import { useTheme } from "./ThemeProvider";

export default function VantaNet() {
  const containerRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<any>(null);
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
      window.VANTA?.NET &&
      window.THREE &&
      containerRef.current
    ) {
      const isDark = themeRef.current === "dark";
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
        color: isDark ? 0xddb7ff : 0x8127cf,
        backgroundColor: isDark ? 0x0e0a1a : 0xf8f9fa,
        points: 10,
        maxDistance: 20,
        spacing: 15,
        showDots: true,
      });
    }
  };

  // Smooth theme switch: fade out → rebuild → fade in (stagger: 650ms)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (window.VANTA?.NET && window.THREE && containerRef.current) {
      containerRef.current.style.opacity = "0";
      const timer = setTimeout(() => {
        initEffect();
        requestAnimationFrame(() => {
          if (containerRef.current) containerRef.current.style.opacity = "";
        });
      }, 650);
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
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"
        strategy="afterInteractive"
        onLoad={initEffect}
      />
      <div
        ref={containerRef}
        className="pointer-events-none absolute inset-0 z-0 opacity-35"
        style={{ transition: "opacity 0.3s ease" }}
      />
    </>
  );
}
