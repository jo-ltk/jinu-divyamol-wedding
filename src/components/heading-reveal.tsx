"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

export function HeadingReveal({
  as: Tag = "h2",
  children,
  className,
  delay = 0,
  immediate = false,
}: {
  as?: "h1" | "h2" | "h3" | "p";
  children: string;
  className?: string;
  delay?: number;
  immediate?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const words = children.trim().split(/(\s+)/);

  useGSAP(
    () => {
      if (!ref.current || prefersReducedMotion()) return;
      gsap.fromTo(
        ref.current.querySelectorAll(".word"),
        { yPercent: 40, autoAlpha: 0 },
        {
          yPercent: 0,
          autoAlpha: 1,
          duration: 0.85,
          delay,
          stagger: 0.05,
          ease: "power3.out",
          ...(immediate ? {} : { scrollTrigger: { trigger: ref.current, start: "top 86%", once: true } }),
        },
      );
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref as never} className={className}>
      {words.map((word, i) =>
        /^\s+$/.test(word) ? (
          <span key={i}>{word}</span>
        ) : (
          <span key={i} className="word-wrap">
            <span className="word">{word}</span>
          </span>
        ),
      )}
    </Tag>
  );
}
