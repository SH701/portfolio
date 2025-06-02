// components/scrollAnimation.tsx
"use client";

import { ReactNode, useRef, useEffect } from "react";

type Props = {
  children: ReactNode;      // ← 반드시 추가
  className?: string;
  delay?: number;
};

export default function ScrollAnimation({
  children,
  className,
  delay,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // 초기 상태: 투명하고 아래로 내려간 상태
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          el.style.transition = `opacity 0.5s ease-out ${delay ?? 0}s, transform 0.5s ease-out ${delay ?? 0}s`;
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
