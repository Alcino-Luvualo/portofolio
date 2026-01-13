import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type Language = "en" | "pt";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined
);

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
    const [language, setLanguage] = useState<Language>("en");

    const t = (key: string): string => {
        const keys = key.split(".");
        let value: any = translations[language];

        for (const k of keys) {
            value = value?.[k];
        }

        return value || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

const translations = {
    en: {
        nav: {
            about: "About Me",
            skills: "Skills",
            projects: "Projects",
            recommendations: "Recommendations",
        },
        hero: {
            welcome: "WELCOME",
            role: "Software Developer",
            description:
                "Software developer dedicated to designing and implementing scalable digital solutions, combining solid architecture, high performance, and measurable business impact.",
            viewProjects: "Projects",
            recommendations: "Recommendations",
        },
        skills: {
            title: "SKILLS",
            subtitle: "Skills & Experience",
            items: {
                react: {
                    name: "React",
                    description: "Componentization and state management",
                },
                nodejs: {
                    name: "Node.js",
                    description: "Backend with JavaScript runtime",
                },
                python: {
                    name: "Python",
                    description: "Automation, data analysis and backend",
                },
                flask: {
                    name: "Flask",
                    description: "Lightweight and flexible web microframework",
                },
                typescript: {
                    name: "TypeScript",
                    description: "Type-safe code with static typing",
                },
                javascript: {
                    name: "JavaScript",
                    description: "Dynamic functionality and interactivity",
                },
                tailwind: {
                    name: "Tailwind CSS",
                    description: "Fast and responsive styling with utility classes",
                },
                html: {
                    name: "HTML5",
                    description: "Semantic structuring of web pages",
                },
                css: {
                    name: "CSS3",
                    description: "Responsive design and modern animations",
                },
                vite: {
                    name: "Vite",
                    description: "Fast bundler for modern development",
                },
                bootstrap: {
                    name: "Bootstrap",
                    description: "Responsive layout and ready-made components",
                },
                git: {
                    name: "Git & GitHub",
                    description: "Version control and collaboration",
                },
            },
        },
        projects: {
            title: "PORTFOLIO",
            subtitle: "Featured Projects",
            viewProject: "View Project",
            viewCode: "View Code",
        },
        recommendations: {
            title: "TESTIMONIALS",
            subtitle: "What People Say",
            items: {
                victor: "A dedicated and creative developer. Always delivers quality projects.",
                genesio: "Excellent professional, with great ability to solve complex problems in a simple way.",
                edlaine: "Working with Alcino was an incredible experience. His code is clean and his ideas innovative.",
            },
        },
        footer: {
            rights: "All rights reserved.",
            madeby: "Made by",
            using: 'using',
            and: '&'
        },
    },
    pt: {
        nav: {
            about: "Sobre Mim",
            skills: "Habilidades",
            projects: "Projetos",
            recommendations: "Recomendações",
        },
        hero: {
            welcome: "BEM-VINDO",
            role: "Software Developer",
            description:
                "Desenvolvedor de software dedicado a projetar e implementar soluções digitais escaláveis, combinando arquitetura sólida, alta performance e impacto mensurável nos negócios.",
            viewProjects: "Ver Projetos",
            recommendations: "Recomendações",
        },
        skills: {
            title: "COMPETÊNCIAS",
            subtitle: "Habilidades & Experiência",
            items: {
                react: {
                    name: "React",
                    description: "Componentização e gerenciamento de estados",
                },
                nodejs: {
                    name: "Node.js",
                    description: "Backend com runtime JavaScript",
                },
                python: {
                    name: "Python",
                    description: "Automação, análise de dados e backend",
                },
                flask: {
                    name: "Flask",
                    description: "Microframework web leve e flexível",
                },
                typescript: {
                    name: "TypeScript",
                    description: "Código seguro com tipagem estática",
                },
                javascript: {
                    name: "JavaScript",
                    description: "Funcionalidades dinâmicas e interatividade",
                },
                tailwind: {
                    name: "Tailwind CSS",
                    description: "Estilização rápida e responsiva com classes utilitárias",
                },
                html: {
                    name: "HTML5",
                    description: "Estruturação semântica de páginas web",
                },
                css: {
                    name: "CSS3",
                    description: "Design responsivo e animações modernas",
                },
                vite: {
                    name: "Vite",
                    description: "Bundler rápido para desenvolvimento moderno",
                },
                bootstrap: {
                    name: "Bootstrap",
                    description: "Layout responsivo e componentes prontos",
                },
                git: {
                    name: "Git & GitHub",
                    description: "Controle de versão e colaboração",
                },
            },
        },
        projects: {
            title: "PORTFÓLIO",
            subtitle: "Projetos em Destaque",
            viewProject: "Ver Projeto",
            viewCode: "Ver Código",
        },
        recommendations: {
            title: "TESTEMUNHOS",
            subtitle: "O Que Dizem",
            items: {
                victor: "Um desenvolvedor dedicado e criativo. Sempre entrega projetos de qualidade.",
                genesio: "Excelente profissional, com grande capacidade de resolver problemas complexos de forma simples.",
                edlaine: "Trabalhar com Alcino foi uma experiência incrível. Seu código é limpo e suas ideias inovadoras.",
            },
        },
        footer: {
            rights: "Todos os direitos reservados.",
            madeby: "Feito por",
            using: 'usando',
            and: 'e'
        },
    },
};
