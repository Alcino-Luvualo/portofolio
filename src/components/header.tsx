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
    {
      label: t("nav.certifications"),
      id: "certifications",
      href: "#certifications",
    },
    { label: t("nav.projects"), id: "projects", href: "#projects" },
    {
      label: t("nav.recommendations"),
      id: "recommendations",
      href: "#recommendations",
    },
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
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.overflow = "";
    }

    return () => {
      // On close, React runs cleanup before the next effect body; the `else` branch
      // would see an empty `top` if we cleared here without restoring scroll first.
      const savedTop = body.style.top;
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.overflow = "";
      if (savedTop) {
        const y =
          Math.abs(parseInt(savedTop, 10)) || scrollPosition.current;
        window.scrollTo(0, y);
      }
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between ${
          isMenuOpen ? "relative z-[70]" : ""
        }`}
      >
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
          {navItems.map((item) => {
            const active = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => handleNavClick(item.id)}
                className={`group relative pb-1 text-sm font-medium transition-colors ${
                  active
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                <span
                  className={`absolute bottom-0 left-0 h-0.5 w-full origin-left rounded-full bg-primary transition-transform duration-300 ease-out ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                  aria-hidden
                />
              </a>
            );
          })}

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
            aria-label="Toggle Language"
          >
            <Globe
              size={18}
              className="text-muted-foreground group-hover:text-primary transition-colors"
            />
            <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
              {language === "en" ? "🇵🇹 PT" : "🇺🇸 EN"}
            </span>
          </button>
        </div>

        <div className="md:hidden flex items-center gap-1">
          <button
            type="button"
            onClick={toggleLanguage}
            className="p-2.5 rounded-xl text-foreground hover:bg-muted/80 active:scale-95 transition-all"
            aria-label="Toggle Language"
          >
            <span className="text-base leading-none">
              {language === "en" ? "🇵🇹" : "🇺🇸"}
            </span>
          </button>
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative h-11 w-11 rounded-xl flex items-center justify-center text-foreground hover:bg-muted/80 active:scale-95 transition-all"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu-panel"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <Menu
              size={22}
              strokeWidth={2}
              className={`absolute transition-all duration-300 ease-out ${
                isMenuOpen
                  ? "opacity-0 rotate-90 scale-50 pointer-events-none"
                  : "opacity-100 rotate-0 scale-100"
              }`}
            />
            <X
              size={22}
              strokeWidth={2}
              className={`absolute transition-all duration-300 ease-out ${
                isMenuOpen
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 -rotate-90 scale-50 pointer-events-none"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Full-screen mobile menu: blur + tint behind; no opacity on this root (Safari backdrop-filter bug) */}
      <div
        id="mobile-menu-panel"
        role="dialog"
        aria-modal="true"
        aria-label={language === "en" ? "Site navigation" : "Navegação do site"}
        className={`md:hidden fixed inset-0 z-[60] flex flex-col w-full max-w-none isolate ${
          isMenuOpen ? "visible pointer-events-auto" : "invisible pointer-events-none"
        }`}
        style={{
          minHeight: "100dvh",
          height: "100dvh",
        }}
      >
        {/* Dedicated layer: explicit RGBA + webkit backdrop so iOS always blurs/tints the page */}
        <div
          className="absolute inset-0 z-0"
          aria-hidden
          style={{
            backgroundColor: "rgba(8, 7, 15, 0.82)",
            WebkitBackdropFilter: "blur(28px) saturate(1.2)",
            backdropFilter: "blur(28px) saturate(1.2)",
            transform: "translateZ(0)",
          }}
        />

        {/* Extra dimming on top of blur so hero copy does not compete with menu labels */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-black/55 via-black/70 to-black/80"
          aria-hidden
        />

        <div className="relative z-10 flex flex-col flex-1 min-h-0 overflow-hidden">
        {/* Spacer under fixed header */}
        <div
          className="shrink-0 border-b border-white/[0.08]"
          style={{
            height: "calc(4.5rem + env(safe-area-inset-top, 0px))",
          }}
          aria-hidden
        />

        <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto overscroll-contain px-5 sm:px-8 py-8">
            <ul className="flex flex-col gap-1">
              {navItems.map((item, index) => {
                const active = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={() => handleNavClick(item.id)}
                      className={`group flex items-center gap-4 rounded-xl px-4 py-3.5 font-poppins text-lg font-medium transition-colors duration-200 border border-transparent ${
                        active
                          ? "bg-primary/12 text-primary border-primary/25"
                          : "text-foreground hover:bg-muted/60 hover:border-border"
                      }`}
                      style={{
                        opacity: isMenuOpen ? 1 : 0,
                        transform: isMenuOpen
                          ? "translateX(0)"
                          : "translateX(-12px)",
                        transitionProperty: "opacity, transform",
                        transitionDuration: "320ms",
                        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                        transitionDelay: isMenuOpen ? `${60 + index * 45}ms` : "0ms",
                      }}
                    >
                      <span
                        className={`h-1 w-1 rounded-full shrink-0 transition-colors ${
                          active
                            ? "bg-primary shadow-[0_0_10px_oklch(0.5_0.2_270_/_0.7)]"
                            : "bg-muted-foreground/40 group-hover:bg-primary/60"
                        }`}
                      />
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div
            className="shrink-0 border-t border-border bg-card/40 px-5 sm:px-8 py-6"
            style={{
              paddingBottom: "max(1.5rem, env(safe-area-inset-bottom, 0px))",
            }}
          >
            <div className="flex flex-col gap-5">
              <button
                type="button"
                onClick={toggleLanguage}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-background py-3.5 font-poppins text-sm font-medium text-foreground hover:border-primary/50 hover:bg-primary/5 transition-colors"
                style={{
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? "translateY(0)" : "translateY(12px)",
                  transitionProperty: "opacity, transform",
                  transitionDuration: "320ms",
                  transitionDelay: isMenuOpen ? `${60 + navItems.length * 45 + 40}ms` : "0ms",
                }}
              >
                <Globe size={18} className="text-primary" />
                {language === "en" ? "Português" : "English"}
                <span className="text-muted-foreground">·</span>
                <span>{language === "en" ? "🇵🇹 PT" : "🇺🇸 EN"}</span>
              </button>

              <div
                className="flex items-center justify-center gap-3"
                style={{
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? "translateY(0)" : "translateY(12px)",
                  transitionProperty: "opacity, transform",
                  transitionDuration: "320ms",
                  transitionDelay: isMenuOpen ? `${60 + navItems.length * 45 + 80}ms` : "0ms",
                }}
              >
                <a
                  href="https://linkedin.com/in/alcino-luvualo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/Alcino-Luvualo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/alcinodev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                  aria-label="X"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </header>
  );
}
