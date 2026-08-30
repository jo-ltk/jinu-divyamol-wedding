import gsap from "gsap";
import { prefersReducedMotion } from "@/lib/motion";

const PARTICLE_COUNT = 5;

export function playNavSparkle(layer: HTMLElement, clientX: number, clientY: number) {
  if (prefersReducedMotion()) return;

  const layerRect = layer.getBoundingClientRect();
  const originX = clientX - layerRect.left;
  const originY = clientY - layerRect.top;

  const burst = document.createElement("div");
  burst.className = "nav-burst";
  burst.style.left = `${originX}px`;
  burst.style.top = `${originY}px`;
  burst.innerHTML =
    '<span class="nav-burst-line"></span><i class="nav-burst-diamond"></i><span class="nav-burst-line"></span>';
  layer.appendChild(burst);

  const particles = Array.from({ length: PARTICLE_COUNT }, () => {
    const particle = document.createElement("span");
    particle.className = "nav-particle";
    particle.style.left = `${originX}px`;
    particle.style.top = `${originY}px`;
    layer.appendChild(particle);
    return particle;
  });

  const lines = burst.querySelectorAll<HTMLElement>(".nav-burst-line");
  const diamond = burst.querySelector<HTMLElement>(".nav-burst-diamond");

  gsap.set(burst, { xPercent: -50, yPercent: -50 });
  gsap.set(lines, { scaleX: 0, opacity: 0.85, transformOrigin: "center center" });
  gsap.set(diamond, { scale: 0.92, opacity: 0, rotation: 45 });
  gsap.set(particles, { xPercent: -50, yPercent: -50, scale: 0.85, opacity: 0 });

  const cleanup = () => {
    burst.remove();
    particles.forEach((particle) => particle.remove());
  };

  const timeline = gsap.timeline({ onComplete: cleanup });

  timeline
    .to(lines, { scaleX: 1, opacity: 0.75, duration: 0.32, ease: "power3.out", stagger: 0.05 }, 0)
    .to(diamond, { scale: 1, opacity: 1, duration: 0.28, ease: "power3.out" }, 0.08)
    .to(diamond, { scale: 0.94, opacity: 0, duration: 0.38, ease: "power2.in" }, 0.42)
    .to(lines, { scaleX: 0.4, opacity: 0, duration: 0.34, ease: "power2.in" }, 0.48);

  particles.forEach((particle, index) => {
    const angle = (index / PARTICLE_COUNT) * Math.PI * 2 - Math.PI / 2;
    const distance = 14 + (index % 2) * 10;
    const tone = index % 3 === 0 ? "var(--sky-soft)" : "var(--mustard-soft)";

    gsap.set(particle, { backgroundColor: tone });

    timeline.to(
      particle,
      {
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance - 10,
        scale: 0.35,
        opacity: 0,
        duration: 0.75,
        ease: "power2.out",
      },
      0.12 + index * 0.04,
    );

    timeline.to(particle, { opacity: 0.9, scale: 1, duration: 0.16, ease: "power2.out" }, 0.1);
  });

  return timeline;
}
