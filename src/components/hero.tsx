import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-background to-card/20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="slide-up space-y-6">
            <div>
              <p className="text-primary font-poppins font-semibold text-sm mb-2">
                BEM-VINDO
              </p>
              <h1 className="font-poppins font-bold text-5xl sm:text-6xl text-foreground mb-2">
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
              <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-accent">
                Software Developer
              </h2>
            </div>
            <p className="text-xl font-roboto text-muted-foreground leading-relaxed text-justify">
              Desenvolvedor de software dedicado a projetar e implementar
              soluções digitais escaláveis, combinando arquitetura sólida, alta
              performance e impacto mensurável nos negócios.
            </p>
            <div className="flex gap-4 pt-6">
              <a
                href="https://linkedin.com/in/alcino-luvualo"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 flex items-center justify-center bg-card border border-border rounded-full hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5 text-foreground group-hover:text-primary transition-colors"
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
                className="group relative w-12 h-12 flex items-center justify-center bg-card border border-border rounded-full hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                aria-label="GitHub"
              >
                <svg
                  className="w-5 h-5 text-foreground group-hover:text-primary transition-colors"
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
                className="group relative w-12 h-12 flex items-center justify-center bg-card border border-border rounded-full hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                aria-label="X (Twitter)"
              >
                <svg
                  className="w-5 h-5 text-foreground group-hover:text-primary transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
            <div className="flex gap-4 pt-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-poppins font-semibold hover:bg-primary/90 transition-colors"
              >
                Ver Projetos
              </a>
              <a
                href="#recommendations"
                className="px-8 py-3 border border-primary text-primary rounded-lg font-poppins font-semibold hover:bg-primary/10 transition-colors"
              >
                Recomendações
              </a>
            </div>
          </div>

          <div className="fade-in flex justify-center">
            <div className="relative w-80 h-80 rounded-full border-4 border-primary/30 overflow-hidden bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <img
                src="professional.webp"
                alt="Alcino Luvualo"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
