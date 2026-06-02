import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Story from "@/components/Story";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import ParticleField from "@/components/ParticleField";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollStrip from "@/components/ScrollStrip";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <>
      {/* Lightweight global effects (particles + cursor glow) */}
      <CursorGlow />
      <ParticleField />
      <ScrollProgress />

      {/* Page transition overlay */}
      <PageTransition />

      {/* Navigation */}
      <Navbar />

      {/* Page Sections — each has its OWN Vanta background, no overlap */}
      <main className="relative z-[3]">
        {/* Hero: Globe background */}
        <Hero />

        <ScrollStrip
          text="DEVELOPER • INNOVATOR • BUILDER • ENGINEER •"
          baseVelocity={-0.5}
          className="border-y border-white/5 bg-surface-container-lowest"
        />

        {/* Projects: dot-grid pattern */}
        <Projects />

        <ScrollStrip
          text="PYTHON • DJANGO • FLASK • SQL • JAVASCRIPT • JAVA • CSS •"
          baseVelocity={0.5}
          className="border-y border-white/5 bg-background"
        />

        {/* Experience: Rings background */}
        <Experience />

        {/* Story: Net background */}
        <Story />

        {/* Stack: dot-grid pattern */}
        <Stack />

        <ScrollStrip
          text="LET'S BUILD SOMETHING GREAT • OPEN TO COLLABORATE •"
          baseVelocity={-0.5}
          className="border-y border-white/5 bg-surface-container-lowest"
        />

        {/* Contact: clean dark bg */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}
