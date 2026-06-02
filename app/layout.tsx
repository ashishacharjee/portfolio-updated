import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Ashish Chandra Acharjee | Aspiring Software Developer",
  description:
    "Portfolio of Ashish Chandra Acharjee — B.Tech IT student, aspiring software developer, and tech enthusiast. Explore projects in Python, Flask, Django, and full-stack development.",
  keywords: [
    "Ashish Chandra Acharjee",
    "portfolio",
    "software developer",
    "B.Tech IT",
    "Python",
    "Django",
    "full-stack",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Archivo+Narrow:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
