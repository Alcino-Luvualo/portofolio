import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggleExpanded = (index: number) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const experiences = [
    {
      company: "ITGest",
      role: "Software Developer",
      period: "February 2026 - Present",
      description: "experience.itgest.description",
    },
    {
      company: "Ars Tecnologias, Lda",
      role: "Front End Developer",
      period: "September 2025 - November 2025",
      description: "experience.ars.description",
    },
    {
      company: "GISETECH",
      role: "Front End Developer",
      period: "January 2025 - June 2025",
      description: "experience.gisetech.description",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 slide-up">
          <p className="text-primary font-poppins font-semibold text-sm mb-2">
            {t("experience.title")}
          </p>
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-foreground">
            {t("experience.subtitle")}
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-8 border-l-2 border-primary/30 last:pb-0 slide-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary border-4 border-background group-hover:scale-125 transition-transform" />
              
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-poppins font-bold text-xl text-foreground flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      {exp.role}
                    </h3>
                    <p className="text-primary font-semibold mt-1">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                </div>
                <p
                  className={`text-muted-foreground font-roboto leading-relaxed ${
                    expanded[index] ? "" : "line-clamp-3"
                  } sm:line-clamp-none`}
                >
                  {t(exp.description)}
                </p>
                <button
                  type="button"
                  onClick={() => toggleExpanded(index)}
                  className="mt-3 text-sm font-poppins font-semibold text-primary hover:text-primary/80 transition-colors sm:hidden"
                >
                  {expanded[index] ? "Ver menos" : "Ver mais"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
