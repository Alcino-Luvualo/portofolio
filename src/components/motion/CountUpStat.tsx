import { useEffect, useRef, useState } from "react";

type CountUpStatProps = {
  end: number;
  label: string;
  suffix?: string;
};

function reducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export default function CountUpStat({ end, label, suffix = "" }: CountUpStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(() => (reducedMotion() ? end : 0));
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reducedMotion()) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) setStarted(true);
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);

  useEffect(() => {
    if (!started) return;
    const duration = 1200;
    const t0 = performance.now();
    const step = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - (1 - p) ** 3;
      setValue(Math.round(eased * end));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, end]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-poppins text-2xl sm:text-3xl font-bold text-foreground tabular-nums">
        {value}
        {suffix}
      </p>
      <p className="text-[0.65rem] sm:text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1.5">
        {label}
      </p>
    </div>
  );
}
