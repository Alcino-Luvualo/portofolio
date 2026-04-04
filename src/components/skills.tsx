import type { ReactElement } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
const iconUrl = (slug: string, color: string) =>
  `https://cdn.simpleicons.org/${slug}/${color}`;

type TechItem = {
  name: string;
  slug?: string;
  color?: string;
  customIcon?: () => ReactElement;
};

type TechRow = {
  label: string;
  items: TechItem[];
};

const techRows: TechRow[] = [
  {
    label: "FRONT-END",
    items: [
      { name: "TypeScript", slug: "typescript", color: "3178C6" },
      { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
      { name: "React", slug: "react", color: "61DAFB" },
      { name: "Angular", slug: "angular", color: "DD0031" },
      { name: "HTML5", slug: "html5", color: "E34F26" },
      {
        name: "CSS3",
        customIcon: () => (
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8" />
            <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD" />
            <path
              d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z"
              fill="white"
            />
          </svg>
        ),
      },
      { name: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4" },
      { name: "Bootstrap", slug: "bootstrap", color: "7952B3" },
      { name: "Styled Components", slug: "styledcomponents", color: "DB7093" },
      { name: "shadcn/ui", slug: "shadcnui", color: "FFFFFF" },
    ],
  },
  {
    label: "BACK-END",
    items: [
      { name: "Node.js", slug: "nodedotjs", color: "339933" },
      { name: "Express.js", slug: "express", color: "FFFFFF" },
      { name: "AdonisJS", slug: "adonisjs", color: "5A45FF" },
      { name: "Python", slug: "python", color: "3776AB" },
      { name: "Flask", slug: "flask", color: "FFFFFF" },
    ],
  },
  {
    label: "DATABASE & AUTH",
    items: [
      { name: "MySQL", slug: "mysql", color: "4479A1" },
      { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
      { name: "MongoDB", slug: "mongodb", color: "47A248" },
      { name: "Firebase", slug: "firebase", color: "FFCA28" },
      {
        name: "JWT",
        customIcon: () => (
          <svg
            viewBox="0 0 24 24"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <path
              d="M10.2 0v6.456L12 8.928l1.8-2.472V0zm3.6 6.456v3.072l2.904-.96L20.52 3.36l-2.928-2.136zm2.904 2.112l-1.8 2.496 2.928.936 6.144-1.992-1.128-3.432zM17.832 12l-2.928.936 1.8 2.496 6.144 1.992 1.128-3.432zm-1.128 3.432l-2.904-.96v3.072l3.792 5.232 2.928-2.136zM13.8 17.544L12 15.072l-1.8 2.472V24h3.6zm-3.6 0v-3.072l-2.904.96L3.48 20.64l2.928 2.136zm-2.904-2.112l1.8-2.496L6.168 12 .024 13.992l1.128 3.432zM6.168 12l2.928-.936-1.8-2.496-6.144-1.992-1.128 3.432zm1.128-3.432l2.904.96V6.456L6.408 1.224 3.48 3.36Z"
              fill="#FFFFFF"
            />
          </svg>
        ),
      },
    ],
  },
  {
    label: "DEVOPS & CLOUD",
    items: [
      { name: "Docker", slug: "docker", color: "2496ED" },
      { name: "GitHub Actions", slug: "githubactions", color: "2088FF" },
      { name: "Vercel", slug: "vercel", color: "FFFFFF" },
      { name: "Netlify", slug: "netlify", color: "00C7B7" },
      { name: "Render", slug: "render", color: "46E3B7" },
      { name: "Railway", slug: "railway", color: "FFFFFF" },
      {
        name: "IBM Cloud",
        customIcon: () => (
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <path
              d="M24.5805,13.65A9.7327,9.7327,0,0,0,6.286,17.5387,6.75,6.75,0,0,0,7,31H23a8.7465,8.7465,0,0,0,1.5805-17.35ZM23,29.5H7a5.2373,5.2373,0,0,1-.6993-10.4293,9.7265,9.7265,0,0,0,1.1036,3.7838.75.75,0,1,0,1.3213-.709A8.25,8.25,0,0,1,22.752,13.5133a8.754,8.754,0,0,0-6.315,2.95.75.75,0,1,0,1.1245.9922A7.25,7.25,0,1,1,23,29.5Z"
              fill="#1261FE"
            />
            <path
              d="M31.8983,10.2548a.7582.7582,0,0,0-1.0364-.2776l-3.02,1.7438A.7587.7587,0,1,0,28.6,13.035l3.02-1.7438A.7589.7589,0,0,0,31.8983,10.2548Z"
              fill="#1261FE"
            />
            <path
              d="M22.6764,7.87a.7583.7583,0,0,0,1.0364-.2776l1.7438-3.02a.7587.7587,0,0,0-1.314-.7588l-1.7438,3.02A.7588.7588,0,0,0,22.6764,7.87Z"
              fill="#1261FE"
            />
            <path
              d="M16,6.0811a.759.759,0,0,0,.7588-.7588V1.8347a.7588.7588,0,1,0-1.5175,0V5.3223A.7589.7589,0,0,0,16,6.0811Z"
              fill="#1261FE"
            />
            <path
              d="M8.2873,7.5922a.7587.7587,0,0,0,1.314-.7588l-1.7438-3.02a.7587.7587,0,1,0-1.314.7588Z"
              fill="#1261FE"
            />
            <path
              d="M4.1585,11.721l-3.02-1.7438a.7587.7587,0,1,0-.7588,1.314L3.4,13.035a.7587.7587,0,1,0,.7588-1.314Z"
              fill="#1261FE"
            />
          </svg>
        ),
      },
      { name: "Cloudinary", slug: "cloudinary", color: "3448C5" },
    ],
  },
  {
    label: "TESTING & QUALITY",
    items: [
      { name: "Vitest", slug: "vitest", color: "6E9F18" },
      { name: "Jest", slug: "jest", color: "C21325" },
      { name: "Testing Library", slug: "testinglibrary", color: "E33332" },
      { name: "ESLint", slug: "eslint", color: "4B32C3" },
      { name: "Prettier", slug: "prettier", color: "F7B93E" },
    ],
  },
  {
    label: "BUILD TOOLS",
    items: [
      { name: "Vite", slug: "vite", color: "646CFF" },
      { name: "Webpack", slug: "webpack", color: "8DD6F9" },
    ],
  },
  {
    label: "PRACTICES",
    items: [
      { name: "Software Architecture" },
      { name: "Agile (Scrum/Kanban)" },
      { name: "Accessibility (WCAG)" },
      { name: "i18n" },
      { name: "Performance (Core Web Vitals)" },
      { name: "Code Review" },
    ],
  },
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 slide-up text-center">
          <p className="text-primary font-poppins font-semibold text-sm mb-3">
            {t("skills.title")}
          </p>
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl mb-4 text-foreground">
            {t("skills.subtitle")}
          </h2>
        </div>

        <div className="slide-up" style={{ animationDelay: "100ms" }}>
          <div className="space-y-8">
            {techRows.map((row, rowIndex) => (
              <div
                key={row.label}
                className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 border-b border-white/5 pb-8 last:border-b-0 last:pb-0"
                style={{ animationDelay: `${150 + rowIndex * 60}ms` }}
              >
                <div className="sm:w-[180px] shrink-0">
                  <p className="font-poppins text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {row.label}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {row.items.map((tech, i) => (
                    <span
                      key={tech.name}
                      className="px-4 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full text-white font-roboto text-sm hover:border-[#3a3a3a] hover:bg-[#222] transition-all duration-300 cursor-pointer flex items-center gap-2"
                      style={{ animationDelay: `${200 + i * 25}ms` }}
                    >
                      {"customIcon" in tech && tech.customIcon ? (
                        <tech.customIcon />
                      ) : "slug" in tech && tech.slug ? (
                        <img
                          src={iconUrl(tech.slug, tech.color ?? "FFFFFF")}
                          alt=""
                          className="w-5 h-5"
                          loading="lazy"
                        />
                      ) : null}
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
