import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Linkedin, Github } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import MagneticLink from "@/components/motion/MagneticLink";

export default function Contact() {
  const { t } = useLanguage();

  const socials = [
    { icon: <Linkedin className="w-6 h-6" />, href: "https://linkedin.com/in/alcino-luvualo", label: "LinkedIn" },
    { icon: <Github className="w-6 h-6" />, href: "https://github.com/Alcino-Luvualo", label: "GitHub" },
    {
      icon: (
        <svg
          className="w-5 h-5 text-foreground transition-colors group-hover:text-primary"
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
        <ScrollReveal className="mb-12">
          <p className="text-primary font-poppins font-semibold text-sm mb-2">
            {t("contact.title")}
          </p>
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-foreground mb-4">
            {t("contact.subtitle")}
          </h2>
          <p className="text-muted-foreground font-roboto text-lg max-w-2xl mx-auto">
            {t("contact.description")}
          </p>
        </ScrollReveal>

        <ScrollReveal className="flex flex-col items-center gap-8" delayMs={90}>
          <MagneticLink
            href="mailto:alcinoluvualo@gmail.com"
            strength={0.18}
            className="inline-flex items-center gap-3 rounded-lg bg-primary px-8 py-4 font-poppins font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-shadow duration-300 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40"
          >
            <Mail className="h-5 w-5 shrink-0" />
            alcinoluvualo@gmail.com
          </MagneticLink>

          <div className="flex gap-6">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-lg border border-border bg-card p-4 transition-all duration-300 hover:translate-y-[-3px] hover:border-primary hover:bg-primary/10 hover:shadow-md hover:shadow-primary/10"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
