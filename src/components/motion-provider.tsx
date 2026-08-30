"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .fromTo(".hero-slide", { scale: 1.08, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 1.6, ease: "power2.out" })
        .fromTo(".hero-eyebrow", { y: 16, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7 }, "-=0.9")
        .fromTo(".hero-meta", { y: 14, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.1 }, "-=0.35")
        .fromTo(".hero-line", { scaleX: 0 }, { scaleX: 1, duration: 0.8 }, "-=0.5");

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 28, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 84%", once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-image-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: "inset(8% 0 8% 0)" },
          {
            clipPath: "inset(0%)",
            duration: 1.15,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 82%", once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        gsap.to(el, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: 0.6 },
        });
      });
    },
    { scope: root },
  );

  return <div ref={root}>{children}</div>;
}
