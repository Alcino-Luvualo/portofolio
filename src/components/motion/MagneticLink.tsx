import {
  useCallback,
  useRef,
  type ComponentProps,
  type MouseEvent,
} from "react";

type MagneticLinkProps = ComponentProps<"a"> & {
  strength?: number;
};

export default function MagneticLink({
  className = "",
  children,
  strength = 0.22,
  onMouseMove,
  onMouseLeave,
  ...rest
}: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMove = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      onMouseMove?.(e);
      const el = ref.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (window.matchMedia("(max-width: 767px)").matches) return;
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
    },
    [onMouseMove, strength],
  );

  const handleLeave = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      onMouseLeave?.(e);
      const el = ref.current;
      if (el) el.style.transform = "";
    },
    [onMouseLeave],
  );

  return (
    <a
      ref={ref}
      className={`transition-transform duration-150 ease-out will-change-transform ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...rest}
    >
      {children}
    </a>
  );
}
