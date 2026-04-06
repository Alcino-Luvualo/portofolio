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
            role: "Software Developer",
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
                helpdesk:
                    "RESTful API for a help desk ticketing platform with role-based access control for Administrators, Technicians, and Clients.",
                helpdeskFrontend:
                    "A modern, role-based help desk management system built with Angular 21 for managing technical support tickets, clients, technicians, and services.",
                alquimia:
                    "Official website for Restaurante Alquimia, a fine-dining restaurant in the heart of Baixa de Luanda, Angola. The site presents the restaurant's identity, menu, services, gallery, and reservation flow in a polished single-page experience.",
                biteorder:
                    "Responsive online ordering website with menu highlights, smooth browsing, and a simple checkout flow.",
                angovenda:
                    "Refurbished electronics e-commerce frontend for Angola (smartphones, laptops, tablets). Built with React 18, TypeScript, Tailwind & Vite. Includes catalog, filters, cart, trade-in, and WhatsApp integration.",
                uTopico:
                    "Restaurant landing page for U.Tópico, a wine bar and contemporary tapas restaurant located in Setúbal, Portugal.",
            },
        },
        experience: {
            title: "EXPERIENCE",
            subtitle: "Professional Journey",
            itgest: {
                description: "At ITGEST, I work as a Full Stack Developer, building and maintaining scalable web applications used by thousands of people every month, including critical systems for major telecommunications clients such as Angola Telecom and Movicel. I develop modern front-end interfaces using Angular and robust back-end systems using AdonisJS, supported by MySQL databases. I am responsible for designing and implementing RESTful APIs, optimizing application performance, and ensuring clean, maintainable code. I also work in an Agile environment, collaborating with cross-functional teams to deliver reliable, high-performance, and user-centric solutions.",
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
            role: "Software Developer",
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
                helpdesk:
                    "API RESTful para uma plataforma de help desk com controle de acesso por papéis para Administradores, Técnicos e Clientes.",
                helpdeskFrontend:
                    "Sistema moderno de gestão de help desk com controlo por papéis, desenvolvido com Angular 21 para gerir tickets de suporte técnico, clientes, técnicos e serviços.",
                alquimia:
                    "Website oficial do Restaurante Alquimia, um fine-dining no coração da Baixa de Luanda, Angola. O site apresenta identidade, menu, serviços, galeria e fluxo de reservas em uma experiência de página única.",
                biteorder:
                    "Website responsivo de pedidos online com destaques de menu, navegação fluida e checkout simples.",
                angovenda:
                    "Frontend de e-commerce de eletrónicos recondicionados para Angola (smartphones, laptops e tablets). Desenvolvido com React 18, TypeScript, Tailwind e Vite. Inclui catálogo, filtros, carrinho, trade-in e integração com WhatsApp.",
                uTopico:
                    "Landing page do restaurante U.Tópico, um wine bar e restaurante de tapas contemporâneas localizado em Setúbal, Portugal.",
            },
        },
        experience: {
            title: "EXPERIÊNCIA",
            subtitle: "Jornada Profissional",
            itgest: {
                description: "Na ITGEST, trabalho como Desenvolvedor Full Stack, construindo e mantendo aplicações web escaláveis usadas por milhares de pessoas mensalmente, incluindo sistemas críticos para grandes clientes de telecomunicações como Angola Telecom e Movicel. Desenvolvo interfaces front-end modernas usando Angular e sistemas back-end robustos usando AdonisJS, suportados por bases de dados MySQL. Sou responsável por projetar e implementar APIs RESTful, otimizar o desempenho das aplicações e garantir código limpo e manutenível. Também trabalho em ambiente Ágil, colaborando com equipas multifuncionais para entregar soluções confiáveis, de alto desempenho e centradas no utilizador.",
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
