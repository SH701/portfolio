"use client";

import { ReactNode, useRef, useEffect } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function ScrollAnimation({ children, className, delay }: Props) {
  const ref1 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref1.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          el.style.transition = `opacity 0.5s ease-out ${
            delay ?? 0
          }s, transform 0.5s ease-out ${delay ?? 0}s`;
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <div ref={ref1} className={className}>
      {children}
    </div>
  );
}
