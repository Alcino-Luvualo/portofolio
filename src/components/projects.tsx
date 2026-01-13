import { useLanguage } from "@/contexts/LanguageContext";

const projectsData = [
  {
    title: "Tuuri",
    description:
      "Projeto de desenvolvimento web moderno com tecnologias inovadoras.",
    technologies: ["React", "Javascript", "CSS"],
    imagem: "/tuuri.webp",
    deploy: "https://tuuri.vercel.app/",
    github: "https://github.com/RivaldoMoz/Tuuri-1",
  },
  {
    title: "Bite Order",
    description:
      "Sistema web para pedidos online com interface intuitiva e responsiva.",
    technologies: ["React", "CSS", "Javascript"],
    imagem: "/bite-order.webp",
    deploy: "https://biteorder.netlify.app//",
    github: "https://github.com/Alcino-Luvualo/biteOrder",
  },
  {
    title: "Burger By",
    description:
      "Site moderno de restaurante fast food com menu, galeria e contato.",
    technologies: ["React", "Typescript", "CSS"],
    imagem: "/burguerby.webp",
    deploy: "https://burguer-by.vercel.app/",
    github: "https://github.com/Alcino-Luvualo/restaurant-homepage",
  }
];

export default function Projects() {
  const { t } = useLanguage();

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
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="h-64 bg-linear-to-br from-primary/10 via-card to-accent/10 group-hover:from-primary/15 group-hover:to-accent/15 transition-all duration-300 flex items-center justify-center p-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-background/5"></div>
                <img
                  src={project.imagem}
                  alt={project.title}
                  className="w-full h-full object-contain  group-hover:scale-105 transition-transform duration-300 relative z-10 rounded-xl"
                />
              </div>

              <div className="p-6">
                <h3 className="font-poppins font-bold text-xl text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-sm font-roboto text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 text-center bg-primary text-primary-foreground text-sm font-poppins font-semibold rounded hover:bg-primary/90 transition-colors"
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

