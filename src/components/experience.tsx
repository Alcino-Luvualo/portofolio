import { useLanguage } from "@/contexts/LanguageContext";
import { useCallback, useEffect, useRef, useState } from "react";
import { Briefcase, Calendar } from "lucide-react";

const EXPERIENCES = [
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
] as const;

export default function Experience() {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const timelineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [lineProgress, setLineProgress] = useState(0);
  const [litThroughIndex, setLitThroughIndex] = useState(-1);

  const toggleExpanded = (index: number) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const updateTimeline = useCallback(() => {
    const track = timelineRef.current;
    if (!track) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLineProgress(1);
      setLitThroughIndex(EXPERIENCES.length - 1);
      return;
    }

    const r = track.getBoundingClientRect();
    const vh = window.innerHeight;
    const anchorY = vh * 0.52;
    const filled = anchorY - r.top;
    const progress = Math.min(1, Math.max(0, filled / Math.max(r.height, 1)));
    setLineProgress(progress);

    let lastLit = -1;
    for (let i = 0; i < EXPERIENCES.length; i++) {
      const el = itemRefs.current[i];
      if (!el) continue;
      const ir = el.getBoundingClientRect();
      const markerY = ir.top + ir.height * 0.2;
      if (markerY < anchorY) lastLit = i;
    }
    setLitThroughIndex(lastLit);
  }, []);

  useEffect(() => {
    let raf = 0;
    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateTimeline);
    };

    updateTimeline();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [updateTimeline]);

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

        <div ref={timelineRef} className="relative">
          <div
            className="pointer-events-none absolute left-0 top-0 bottom-0 w-0.5 rounded-full bg-primary/25"
            aria-hidden
          >
            <div
              className="absolute left-0 top-0 h-full w-full origin-top rounded-full will-change-transform"
              style={{
                transform: `scaleY(${lineProgress})`,
                background:
                  "linear-gradient(to bottom, var(--primary), color-mix(in oklch, var(--primary) 55%, transparent))",
                boxShadow:
                  "0 0 14px 2px color-mix(in oklch, var(--primary) 40%, transparent), 0 0 28px 4px color-mix(in oklch, var(--primary) 18%, transparent)",
              }}
            />
          </div>

          <div className="space-y-8">
            {EXPERIENCES.map((exp, index) => {
              const charged = litThroughIndex >= index;
              const isEnergyTip = litThroughIndex === index;
              return (
                <div
                  key={index}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  className="relative pl-8 pb-8 last:pb-0 slide-up group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`absolute -left-[11px] top-0 flex h-6 w-6 items-center justify-center rounded-full border-4 border-background transition-all duration-300 ${
                      charged
                        ? "scale-110 bg-primary shadow-[0_0_18px_3px_color-mix(in_oklch,var(--primary)_50%,transparent)]"
                        : "bg-primary/35 group-hover:scale-125 group-hover:bg-primary/80"
                    }`}
                  >
                    {isEnergyTip ? (
                      <span
                        className="absolute inset-0 rounded-full bg-primary/35 animate-ping"
                        style={{ animationDuration: "2s" }}
                        aria-hidden
                      />
                    ) : null}
                    <span
                      className={`relative z-[1] block h-2 w-2 rounded-full ${
                        charged ? "bg-primary-foreground/90" : "bg-primary/60"
                      }`}
                      aria-hidden
                    />
                  </div>

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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
