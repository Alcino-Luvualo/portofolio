import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
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

  const navItems = [
    { label: t("nav.about"), id: "about", href: "#about" },
    { label: t("nav.skills"), id: "skills", href: "#skills" },
    { label: t("nav.projects"), id: "projects", href: "#projects" },
    { label: t("nav.recommendations"), id: "recommendations", href: "#recommendations" },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "pt" : "en");
  };

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
            className="p-2 hover:bg-card rounded-lg transition-colors"
          >
            {isMenuOpen ? (
              <X size={24} className="text-foreground" />
            ) : (
              <Menu size={24} className="text-foreground" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => handleNavClick(item.id)}
                className={`block px-4 py-2 rounded-lg transition-colors ${activeSection === item.id
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-border"
                  }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
