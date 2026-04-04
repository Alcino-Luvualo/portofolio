import { useEffect } from "react";

/** Order must match document order (top → bottom). */
const SECTION_IDS = [
  "about",
  "skills",
  "certifications",
  "projects",
  "recommendations",
  "experience",
  "contact",
] as const;

export function useScrollSpySection(
  setActiveSection: (id: string) => void,
): void {
  useEffect(() => {
    const header = document.querySelector("header");

    const activationLine = () => {
      const h = header?.getBoundingClientRect().height ?? 0;
      return Math.max(h + 16, 72);
    };

    const update = () => {
      const line = activationLine();
      let current: string = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= line) current = id;
      }
      setActiveSection(current);
    };

    let raf = 0;
    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [setActiveSection]);
}
