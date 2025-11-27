
//Depois Tenho Que Rever
//import { useState } from "react"

interface Recommendation {
  id: string
  name: string
  text: string
  timestamp: number
}

const recommendations: Recommendation[] = [
  {
    id: "1",
    name: "Maria Fernandes",
    text: "Alcino é um desenvolvedor dedicado e criativo. Sempre entrega projetos de alta qualidade.",
    timestamp: Date.now(),
  },
  {
    id: "2",
    name: "João Pereira",
    text: "Excelente profissional, com grande capacidade de resolver problemas complexos de forma simples.",
    timestamp: Date.now(),
  },
  {
    id: "3",
    name: "Carla Silva",
    text: "Trabalhar com Alcino foi uma experiência incrível. Seu código é limpo e suas ideias inovadoras.",
    timestamp: Date.now(),
  },
]

export default function Recommendations() {
  //Depois Tenho Que Rever
  //const [recommendations, setRecommendations] = useState<Recommendation[]>(initialRecommendations)

  return (
    <section id="recommendations" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 slide-up">
          <p className="text-primary font-poppins font-semibold text-sm mb-2">OPINIÕES</p>
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-foreground">Recomendações</h2>
        </div>

        <div className="space-y-6 mb-12">
          {recommendations.map((rec, index) => (
            <div
              key={rec.id}
              className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 slide-up relative group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-poppins font-bold text-lg text-foreground">{rec.name}</h3>
              </div>
              <p className="font-roboto text-muted-foreground leading-relaxed">{rec.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
