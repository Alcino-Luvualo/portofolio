import { useLanguage } from "@/contexts/LanguageContext";
import ScrollReveal from "@/components/motion/ScrollReveal";

interface Recommendation {
  id: string;
  name: string;
  textKey: string;
  timestamp: number;
}

const recommendations: Recommendation[] = [
  {
    id: "1",
    name: "Victor Nanga",
    textKey: "recommendations.items.victor",
    timestamp: Date.now(),
  },
  {
    id: "2",
    name: "Genesio Nkosi",
    textKey: "recommendations.items.genesio",
    timestamp: Date.now(),
  },
  {
    id: "3",
    name: "Edlaine Da Silva",
    textKey: "recommendations.items.edlaine",
    timestamp: Date.now(),
  },
];

export default function Recommendations() {
  const { t } = useLanguage();

  return (
    <section id="recommendations" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal className="mb-16 text-center">
          <p className="text-primary font-poppins font-semibold text-sm mb-2">
            {t("recommendations.title")}
          </p>
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-foreground">
            {t("recommendations.subtitle")}
          </h2>
        </ScrollReveal>

        <div className="mb-12 space-y-6">
          {recommendations.map((rec, index) => (
            <ScrollReveal key={rec.id} delayMs={index * 70}>
              <div className="group relative rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                <div className="mb-3 flex items-start justify-between">
                  <h3 className="font-poppins text-lg font-bold text-foreground transition-colors group-hover:text-primary/90">
                    {rec.name}
                  </h3>
                </div>
                <p className="font-roboto leading-relaxed text-muted-foreground">
                  {t(rec.textKey)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
