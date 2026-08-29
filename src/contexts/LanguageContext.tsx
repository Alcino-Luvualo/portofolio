/* eslint-disable react-refresh/only-export-components -- useLanguage is intentionally exported with provider */
import { createContext, useCallback, useContext, useState } from "react";
import type { ReactNode } from "react";

type Language = "en" | "pt";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
    languageTransition: boolean;
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
    const [language, setLanguageState] = useState<Language>("en");
    const [languageTransition, setLanguageTransition] = useState(false);

    const setLanguage = useCallback((lang: Language) => {
        if (lang === language) return;
        if (
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
            setLanguageState(lang);
            return;
        }
        setLanguageTransition(true);
        window.setTimeout(() => {
            setLanguageState(lang);
            requestAnimationFrame(() => {
                requestAnimationFrame(() => setLanguageTransition(false));
            });
        }, 180);
    }, [language]);

    const t = (key: string): string => {
        const parts = key.split(".");
        let cur: unknown = translations[language];

        for (const k of parts) {
            if (cur !== null && typeof cur === "object" && k in cur) {
                cur = (cur as Record<string, unknown>)[k];
            } else {
                return key;
            }
        }

        return typeof cur === "string" ? cur : key;
    };

    return (
        <LanguageContext.Provider
            value={{ language, setLanguage, t, languageTransition }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

const translations = {
    en: {
        nav: {
            about: "About Me",
            skills: "Skills",
            certifications: "Certifications",
            projects: "Projects",
            experience: "Experience",
            contact: "Contact",
        },
        hero: {
            welcome: "WELCOME",
            role: "Software Engineer",
            description:
                "Software developer dedicated to designing and implementing scalable digital solutions, combining solid architecture, high performance, and measurable business impact.",
            viewProjects: "Projects",
            statProjects: "Featured projects",
            statStack: "Stack & tools",
        },
        skills: {
            title: "SKILLS",
            subtitle: "Skills & Experience",
            description: "Tools and technologies I use to build projects.",
        },
        certifications: {
            title: "CERTIFICATIONS",
            subtitle: "Certifications & Badges",
            description: "Professional badges from IBM and Boot.dev.",
            filterAll: "All",
            filterIBM: "IBM",
            filterBootdev: "Boot.dev",
            viewCredential: "View Credential",
            showLess: "Show less",
            more: "more",
        },
        projects: {
            title: "PORTFOLIO",
            subtitle: "Featured Projects",
            viewProject: "View Project",
            viewCode: "View Code",
            items: {
                flowly:
                    "Flowly is an operational fullstack Kanban for teams, with workspaces, boards, RBAC in three levels, comments, attachments, labels, checklists and real-time updates, developed with NestJS, Angular and PostgreSQL.",
                helpdeskBackend:
                    "Backend de HelpDesk em Node.js (AdonisJS + PostgreSQL) com autenticação JWT, papéis (Admin, Técnico, Cliente), gestão de tickets/serviços e upload de imagens via Cloudinary, com deploy na Render.",
                lulusGrill:
                    "Official website for Lulus Grill, a grill restaurant in Luanda, Angola. The site showcases brand identity, menu, services, gallery, and a reservation flow in a single-page experience.",
                kaairo:
                    "Kaairo is a gamified Productivity OS built with NestJS, PostgreSQL, and Next.js, featuring web push notifications, streak tracking, productivity heatmaps, and an XP system to keep daily routines engaging.",
                angovenda:
                    "E-commerce frontend for refurbished electronics in Angola (smartphones, laptops, and tablets). Built with React 18, TypeScript, Tailwind, and Vite. Includes catalog, filters, cart, trade-in, and WhatsApp integration.",
                gostoSuperior:
                    "Modern, responsive website for Gosto Superior, a vegetarian restaurant in Braga. I structured the site into clear sections (services, menu, about, testimonials, and contact), with a focus on usability, performance, and highlighting online reservations and delivery.",
            },
        },
        experience: {
            title: "EXPERIENCE",
            subtitle: "Professional Journey",
            grupoIdeiasDinamicas: {
                description: "At Grupo Ideias Dinâmicas, I contribute to enterprise telecommunications systems for organizations including Angola Telecom and Movicel, supporting services used by millions of people. I work across Angular and Node.js applications, databases, integrations, APIs, and production reliability. I automated AGT fiscal-document processing, reducing file upload and persistence failures by 23%, and improved database queries and build processes, reducing response times by 40%.",
            },
            ars: {
                description: "I worked on the development of the Tuuri platform as a Front-End Developer, where I had the opportunity to deepen my knowledge of React.js, JavaScript (ES6+), Hooks, Context API, and Styled Components. During this period, I honed my UI/UX skills by developing responsive, intuitive, and accessible (WCAG) interfaces, as well as learning best practices in architecture for scalable systems. I also used Git/GitHub for code versioning and team collaboration, always focusing on performance, scalability, and delivering solutions that enhance the user experience.",
            },
            gisetech: {
                description: "During my internship, I had the opportunity to enhance my knowledge of HTML, CSS, JavaScript, Git, and GitHub, applying them to practical and collaborative projects. In addition, I immersed myself in the world of computer networks, learning how they work and how to manage their infrastructure efficiently. This experience allowed me to integrate web development skills with an understanding of network infrastructure, strengthening my ability to create comprehensive and functional solutions.",
            },
        },
        contact: {
            title: "GET IN TOUCH",
            subtitle: "Let's Work Together",
            description: "I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
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
            certifications: "Certificações",
            projects: "Projetos",
            experience: "Experiência",
            contact: "Contato",
        },
        hero: {
            welcome: "BEM-VINDO",
            role: "Software Engineer",
            description:
                "Desenvolvedor de software dedicado a projetar e implementar soluções digitais escaláveis, combinando arquitetura sólida, alta performance e impacto mensurável nos negócios.",
            viewProjects: "Ver Projetos",
            statProjects: "Projetos em destaque",
            statStack: "Stack e ferramentas",
        },
        skills: {
            title: "COMPETÊNCIAS",
            subtitle: "Habilidades & Experiência",
            description: "Ferramentas e tecnologias que uso para construir projetos.",
        },
        certifications: {
            title: "CERTIFICAÇÕES",
            subtitle: "Certificações & Badges",
            description: "Credenciais profissionais da IBM e Boot.dev.",
            filterAll: "Todas",
            filterIBM: "IBM",
            filterBootdev: "Boot.dev",
            viewCredential: "Ver Credencial",
            showLess: "Ver menos",
            more: "mais",
        },
        projects: {
            title: "PORTFÓLIO",
            subtitle: "Projetos em Destaque",
            viewProject: "Ver Projeto",
            viewCode: "Ver Código",
            items: {
                flowly:
                    "Flowly é um Kanban operacional fullstack para equipas, com workspaces, boards, RBAC em três níveis, comentários, anexos, labels, checklists e atualizações em tempo real, desenvolvido com NestJS, Angular e PostgreSQL.",
                helpdeskBackend:
                    "Backend de HelpDesk em Node.js (AdonisJS + PostgreSQL) com autenticação JWT, papéis (Admin, Técnico, Cliente), gestão de tickets/serviços e upload de imagens via Cloudinary, com deploy na Render.",
                lulusGrill:
                    "Website oficial do Restaurante Lulus Grill, um restaurante de grelhados em Luanda, Angola. O site apresenta identidade, menu, serviços, galeria e fluxo de reservas em uma experiência de página única.",
                kaairo:
                    "Kaairo é um Productivity OS gamificado em NestJS, PostgreSQL e Next.js, com notificações web push, tracking de streaks, heatmap de produtividade e sistema de XP para engajar a rotina diária.",
                angovenda:
                    "Frontend de e-commerce de eletrónicos recondicionados para Angola (smartphones, laptops e tablets). Desenvolvido com React 18, TypeScript, Tailwind e Vite. Inclui catálogo, filtros, carrinho, trade-in e integração com WhatsApp.",
                gostoSuperior:
                    "Website moderno e responsivo para o restaurante vegetariano Gosto Superior, em Braga. Estruturei o site em seções claras (serviços, menu, sobre, testemunhos e contacto), com foco em usabilidade, performance e destaque para reservas online e delivery.",
            },
        },
        experience: {
            title: "EXPERIÊNCIA",
            subtitle: "Jornada Profissional",
            grupoIdeiasDinamicas: {
                description: "No Grupo Ideias Dinâmicas, contribuo para sistemas enterprise de telecomunicações de organizações como Angola Telecom e Movicel, que suportam serviços usados por milhões de pessoas. Atuo em aplicações Angular e Node.js, bases de dados, integrações, APIs e fiabilidade em produção. Automatizei o processamento de documentos fiscais da AGT, reduzindo em 23% as falhas no carregamento e persistência de ficheiros, e otimizei queries e processos de build, melhorando os tempos de resposta em 40%.",
            },
            ars: {
                description: "Trabalhei no desenvolvimento da plataforma Tuuri como Desenvolvedor Front-End, onde tive a oportunidade de aprofundar meus conhecimentos em React.js, JavaScript (ES6+), Hooks, Context API e Styled Components. Durante este período, aprimorei minhas habilidades de UI/UX desenvolvendo interfaces responsivas, intuitivas e acessíveis (WCAG), além de aprender as melhores práticas em arquitetura para sistemas escaláveis. Também usei Git/GitHub para versionamento de código e colaboração em equipa, sempre focando em desempenho, escalabilidade e entrega de soluções que melhoram a experiência do utilizador.",
            },
            gisetech: {
                description: "Durante meu estágio, tive a oportunidade de aprimorar meus conhecimentos em HTML, CSS, JavaScript, Git e GitHub, aplicando-os em projetos práticos e colaborativos. Além disso, mergulhei no mundo das redes de computadores, aprendendo como funcionam e como gerir sua infraestrutura de forma eficiente. Esta experiência permitiu-me integrar habilidades de desenvolvimento web com compreensão de infraestrutura de rede, fortalecendo minha capacidade de criar soluções abrangentes e funcionais.",
            },
        },
        contact: {
            title: "ENTRE EM CONTATO",
            subtitle: "Vamos Trabalhar Juntos",
            description: "Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades para fazer parte das suas visões.",
        },
        footer: {
            rights: "Todos os direitos reservados.",
            madeby: "Feito por",
            using: 'usando',
            and: 'e'
        },
    },
};
