"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function Parallax({
  children,
  className = "",
  strength = 0.16,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const onScroll = () => {
      el.style.transform = `translate3d(0, ${window.scrollY * strength}px, 0)`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [strength]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
