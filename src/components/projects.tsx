import { useLanguage } from "@/contexts/LanguageContext";

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
        <div className="text-center mb-16 slide-up">
          <p className="text-primary font-poppins font-semibold text-sm mb-2">
            {t("projects.title")}
          </p>
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-foreground">
            {t("projects.subtitle")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/70 p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 slide-up"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                {project.logo ? (
                  <div className="mb-5 flex items-center gap-3">
                    <div className="h-12 w-12 rounded-2xl bg-background/70 grid place-items-center">
                      <img
                        src={project.logo}
                        alt={`${project.title} logo`}
                        className="h-7 w-7 object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ) : null}
                <h3 className="font-poppins font-bold text-2xl text-foreground mb-3">
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
                    className="flex-1 px-4 py-2 text-center bg-primary text-primary-foreground text-sm font-poppins font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    {t("projects.viewProject")}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
