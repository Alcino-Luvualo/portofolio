import { useState } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Recommendations from "@/components/recommendations";
import Footer from "@/components/footer";

function App() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <LanguageProvider>
      <main className="bg-background text-foreground">
        <Header
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <Hero />
        <Skills />
        <Projects />
        <Recommendations />
        <Footer />
      </main>
    </LanguageProvider>
  );
}

export default App;
