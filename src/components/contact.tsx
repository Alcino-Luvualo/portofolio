import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  const { t } = useLanguage();

  const socials = [
    { icon: <Linkedin className="w-6 h-6" />, href: "https://linkedin.com/in/alcino-luvualo", label: "LinkedIn" },
    { icon: <Github className="w-6 h-6" />, href: "https://github.com/Alcino-Luvualo", label: "GitHub" },
    {
      icon: (
        <svg
          className="w-5 h-5 text-foreground group-hover:text-primary transition-colors"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      href: "https://x.com/alcinodev",
      label: "Twitter",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <div className="slide-up mb-12">
          <p className="text-primary font-poppins font-semibold text-sm mb-2">
            {t("contact.title")}
          </p>
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-foreground mb-4">
            {t("contact.subtitle")}
          </h2>
          <p className="text-muted-foreground font-roboto text-lg max-w-2xl mx-auto">
            {t("contact.description")}
          </p>
        </div>

        <div className="flex flex-col items-center gap-8 slide-up" style={{ animationDelay: "100ms" }}>
          <a
            href="mailto:alcinoluvualo@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-poppins font-semibold hover:bg-primary/90 hover:scale-105 transition-all shadow-lg hover:shadow-primary/50"
          >
            <Mail className="w-5 h-5" />
            alcinoluvualo@gmail.com
          </a>

          <div className="flex gap-6">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/10 hover:scale-110 transition-all"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
