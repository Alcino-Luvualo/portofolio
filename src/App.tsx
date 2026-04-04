import { useState } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { useScrollSpySection } from "@/hooks/useScrollSpySection";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import CertificationsSection from "@/components/Certifications/CertificationsSection";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

function App() {
  const [activeSection, setActiveSection] = useState("about");
  useScrollSpySection(setActiveSection);

  return (
    <LanguageProvider>
      <main className="bg-background text-foreground">
        <Header
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <Hero />
        <Skills />
        <CertificationsSection />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  );
}

export default App;
