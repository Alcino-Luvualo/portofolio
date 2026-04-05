import { useLanguage } from "@/contexts/LanguageContext";
import ScrollReveal from "@/components/motion/ScrollReveal";

export default function Projects() {
  const { t } = useLanguage();

  const projectsData = [
    {
      title: "HelpDesk Backend",
      description: t("projects.items.helpdesk"),
      link: "https://github.com/Alcino-Luvualo/HelpDesk-Backend",
      logo: "/projects/helpdesk.png",
    },
    {
      title: "Alquimia",
      description: t("projects.items.alquimia"),
      link: "https://u-topico.vercel.app/",
      logo: "/projects/alquimia.ico",
    },
    {
      title: "BiteOrder",
      description: t("projects.items.biteorder"),
      link: "https://biteorder.netlify.app/",
      logo: "/projects/biteorder.svg",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="mb-16 text-center">
          <p className="text-primary font-poppins font-semibold text-sm mb-2">
            {t("projects.title")}
          </p>
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-foreground">
            {t("projects.subtitle")}
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <ScrollReveal key={project.title} delayMs={index * 75}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/70 p-6 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-primary/50 hover:shadow-xl hover:shadow-primary/15">
                <div className="absolute inset-0 bg-linear-to-br from-primary/8 via-transparent to-accent/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  {project.logo ? (
                    <div className="mb-5 flex items-center gap-3">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-background/70 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:shadow-md group-hover:shadow-primary/10">
                        <img
                          src={project.logo}
                          alt={`${project.title} logo`}
                          className="h-7 w-7 object-contain transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ) : null}
                  <h3 className="font-poppins font-bold text-2xl text-foreground mb-3 transition-colors duration-300 group-hover:text-primary/95">
                    {project.title}
                  </h3>
                  <p className="text-sm font-roboto text-muted-foreground mb-8 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 text-center bg-primary text-primary-foreground text-sm font-poppins font-semibold rounded-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-md hover:shadow-primary/25"
                    >
                      {t("projects.viewProject")}
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
