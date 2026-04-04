import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const pressingRef = useRef(false);
  const rafRef = useRef(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarse = window.matchMedia("(pointer: coarse)");
    const narrow = window.matchMedia("(max-width: 1023px)");
    if (reduced.matches || coarse.matches || narrow.matches) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const move = (e: MouseEvent) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
    };

    const down = () => {
      pressingRef.current = true;
      ring.classList.add("is-pressing");
    };
    const up = () => {
      pressingRef.current = false;
      ring.classList.remove("is-pressing");
    };

    const tick = () => {
      const t = targetRef.current;
      const c = currentRef.current;
      c.x += (t.x - c.x) * 0.18;
      c.y += (t.y - c.y) * 0.12;
      dot.style.transform = `translate3d(${c.x}px, ${c.y}px, 0)`;
      ring.style.transform = `translate3d(${c.x}px, ${c.y}px, 0) scale(${pressingRef.current ? 0.88 : 1})`;
      rafRef.current = requestAnimationFrame(tick);
    };

    document.documentElement.classList.add("custom-cursor-on");
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.documentElement.classList.remove("custom-cursor-on");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  return (
    <div className="custom-cursor-root max-lg:hidden" aria-hidden>
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={ringRef} className="custom-cursor-ring" />
    </div>
  );
}
