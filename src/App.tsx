import { useState } from "react";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import { useScrollSpySection } from "@/hooks/useScrollSpySection";
import CustomCursor from "@/components/motion/CustomCursor";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import CertificationsSection from "@/components/Certifications/CertificationsSection";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

function AppShell({
  activeSection,
  setActiveSection,
}: {
  activeSection: string;
  setActiveSection: (id: string) => void;
}) {
  const { languageTransition } = useLanguage();

  return (
    <>
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main
        className={`relative min-h-screen w-full max-w-full bg-background text-foreground transition-[opacity,transform] duration-[220ms] ease-out ${
          languageTransition
            ? "pointer-events-none translate-y-1 opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >
        <Hero />
        <Skills />
        <CertificationsSection />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
      <CustomCursor />
    </>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("about");
  useScrollSpySection(setActiveSection);

  return (
    <LanguageProvider>
      <AppShell
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </LanguageProvider>
  );
}
