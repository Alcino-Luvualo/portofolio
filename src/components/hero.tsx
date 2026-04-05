import Typewriter from "typewriter-effect";
import { useLanguage } from "@/contexts/LanguageContext";
import MagneticLink from "@/components/motion/MagneticLink";
import CountUpStat from "@/components/motion/CountUpStat";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20 sm:px-6 lg:px-8"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-background via-background to-card/25"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-[20%] top-0 h-[min(90vw,560px)] w-[min(90vw,560px)] rounded-full bg-primary/25 blur-[120px] hero-ambient-blob"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-[18%] bottom-[5%] h-[min(75vw,480px)] w-[min(75vw,480px)] rounded-full bg-accent/20 blur-[100px] hero-ambient-blob hero-ambient-blob--delayed"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 hero-grid-bg opacity-90 hero-grid-layer"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="hero-stagger flex flex-col gap-6">
            <div>
              <p className="mb-2 font-poppins text-sm font-semibold text-primary">
                {t("hero.welcome")}
              </p>
              <h1 className="mb-2 font-poppins text-5xl font-bold text-foreground sm:text-6xl">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString("Alcino Luvualo").start();
                  }}
                  options={{
                    autoStart: true,
                    loop: false,
                  }}
                />
              </h1>
              <h2 className="font-poppins text-3xl font-bold text-accent sm:text-4xl">
                {t("hero.role")}
              </h2>
            </div>
            <p className="font-roboto text-xl leading-relaxed text-justify text-muted-foreground">
              {t("hero.description")}
            </p>

            <div className="grid max-w-md grid-cols-2 gap-6 border-t border-border/40 pt-5">
              <CountUpStat
                end={6}
                suffix="+"
                label={t("hero.statProjects")}
              />
              <CountUpStat
                end={25}
                suffix="+"
                label={t("hero.statStack")}
              />
            </div>

            <div className="flex gap-4 pt-2">
              <a
                href="https://linkedin.com/in/alcino-luvualo"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-12 w-12 translate-y-0 items-center justify-center rounded-full border border-border bg-card transition-all duration-300 hover:translate-y-[-2px] hover:border-primary hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-5 w-5 text-foreground transition-colors group-hover:text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              <a
                href="https://github.com/Alcino-Luvualo"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-12 w-12 translate-y-0 items-center justify-center rounded-full border border-border bg-card transition-all duration-300 hover:translate-y-[-2px] hover:border-primary hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20"
                aria-label="GitHub"
              >
                <svg
                  className="h-5 w-5 text-foreground transition-colors group-hover:text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://x.com/alcinodev"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-12 w-12 translate-y-0 items-center justify-center rounded-full border border-border bg-card transition-all duration-300 hover:translate-y-[-2px] hover:border-primary hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20"
                aria-label="X (Twitter)"
              >
                <svg
                  className="h-5 w-5 text-foreground transition-colors group-hover:text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <MagneticLink
                href="#projects"
                strength={0.2}
                className="rounded-lg bg-primary px-8 py-3 font-poppins font-semibold text-primary-foreground shadow-lg shadow-primary/15 hover:bg-primary/90"
              >
                {t("hero.viewProjects")}
              </MagneticLink>
            </div>
          </div>

          <div className="hero-image-col flex justify-center md:justify-end">
            <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-primary/30 bg-linear-to-br from-primary/20 to-accent/20 shadow-[0_0_60px_-12px_color-mix(in_oklch,var(--primary)_35%,transparent)] sm:h-[22rem] sm:w-[22rem]">
              <img
                src="professional.webp"
                alt="Alcino Luvualo"
                className="hero-photo-breathe absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
