"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

export default function SplineScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded || !containerRef.current) return;

    // Create the spline-viewer web component
    const viewer = document.createElement("spline-viewer");
    viewer.setAttribute(
      "url",
      "https://prod.spline.design/X548pZwVsAUQwruI/scene.splinecode"
    );
    viewer.style.width = "100%";
    viewer.style.height = "100%";
    viewer.style.position = "absolute";
    viewer.style.inset = "0";

    containerRef.current.appendChild(viewer);

    return () => {
      if (containerRef.current?.contains(viewer)) {
        containerRef.current.removeChild(viewer);
      }
    };
  }, [loaded]);

  return (
    <>
      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js"
        strategy="lazyOnload"
        onLoad={() => setLoaded(true)}
      />
      <div
        ref={containerRef}
        className="pointer-events-auto absolute inset-0 z-0 opacity-40"
      />
    </>
  );
}
