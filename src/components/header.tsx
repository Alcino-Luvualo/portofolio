import { useEffect, useRef, useState } from "react";
import { Menu, X, Globe, Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Header({
  activeSection,
  setActiveSection,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const scrollPosition = useRef(0);

  const navItems = [
    { label: t("nav.about"), id: "about", href: "#about" },
    { label: t("nav.skills"), id: "skills", href: "#skills" },
    { label: t("nav.certifications"), id: "certifications", href: "#certifications" },
    { label: t("nav.projects"), id: "projects", href: "#projects" },
    { label: t("nav.experience"), id: "experience", href: "#experience" },
    { label: t("nav.contact"), id: "contact", href: "#contact" },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "pt" : "en");
  };

  useEffect(() => {
    const body = document.body;

    if (isMenuOpen) {
      scrollPosition.current = window.scrollY;
      body.style.position = "fixed";
      body.style.top = `-${scrollPosition.current}px`;
      body.style.left = "0";
      body.style.right = "0";
      body.style.overflow = "hidden";
    } else {
      const top = body.style.top;
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.overflow = "";

      if (top) {
        const y = Math.abs(parseInt(top, 10)) || scrollPosition.current;
        window.scrollTo(0, y);
      }
    }

    return () => {
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/logo-AL.webp"
            alt="Alcino Luvualo Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="hidden sm:inline font-poppins font-bold text-lg text-foreground">
            Alcino Luvualo
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-medium transition-colors relative pb-1 ${activeSection === item.id
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
                } ${activeSection === item.id ? "border-b-2 border-primary" : ""
                }`}
            >
              {item.label}
            </a>
          ))}

          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
            aria-label="Toggle Language"
          >
            <Globe size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
              {language === "en" ? "🇵🇹 PT" : "🇺🇸 EN"}
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="p-2 hover:bg-card rounded-lg transition-colors"
            aria-label="Toggle Language"
          >
            <span className="text-sm font-medium">
              {language === "en" ? "🇵🇹" : "🇺🇸"}
            </span>
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-50 h-10 w-10 rounded-lg hover:bg-card transition-all duration-300"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className="absolute inset-0 grid place-items-center transition-all duration-300">
              <Menu
                size={24}
                className={`text-foreground transition-all duration-300 ${
                  isMenuOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
                }`}
              />
            </span>
            <span className="absolute inset-0 grid place-items-center transition-all duration-300">
              <X
                size={24}
                className={`text-foreground transition-all duration-300 ${
                  isMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-500 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-full w-full bg-[#0b0b10]/95 backdrop-blur-2xl">
          <div className="relative h-full w-full flex flex-col items-center justify-center gap-8 px-6 pt-20 pb-24">
            {navItems.map((item, index) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => handleNavClick(item.id)}
                className="text-2xl font-poppins font-semibold tracking-wide text-foreground transition-colors hover:text-primary"
                style={{
                  transitionDelay: `${index * 50}ms`,
                  transitionProperty: "opacity, transform",
                  transitionDuration: "500ms",
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? "translateY(0px)" : "translateY(20px)",
                }}
              >
                {item.label}
              </a>
            ))}

            <div
              className="absolute bottom-10 flex items-center gap-5 rounded-full border border-white/15 bg-white/10 px-6 py-3 backdrop-blur-xl"
              style={{
                transitionDelay: `${navItems.length * 50 + 100}ms`,
                transitionProperty: "opacity, transform",
                transitionDuration: "500ms",
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? "translateY(0px)" : "translateY(20px)",
              }}
            >
              <a
                href="https://linkedin.com/in/alcino-luvualo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Alcino-Luvualo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/alcinodev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="X"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
