"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { wedding } from "@/content/wedding";
import { playNavSparkle } from "@/lib/nav-sparkle";

const links = [
  { href: "#home", label: "Home" },
  { href: "#story", label: "Story" },
  { href: "#wedding", label: "Schedule" },
  { href: "#gallery", label: "Gallery" },
];

export function SiteNav() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const sparkleLayerRef = useRef<HTMLDivElement>(null);
  const sparkleTimelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    let last = 0;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > 80 && y > last);
      last = y;

      for (const link of links) {
        const id = link.href.slice(1);
        const el = document.getElementById(id);
        if (!el) continue;
        const { top, bottom } = el.getBoundingClientRect();
        if (top <= 140 && bottom >= 140) {
          setActive(id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavInteract = useCallback((event: React.PointerEvent<HTMLAnchorElement>) => {
    const layer = sparkleLayerRef.current;
    if (!layer) return;

    sparkleTimelineRef.current?.kill();
    sparkleTimelineRef.current = playNavSparkle(layer, event.clientX, event.clientY) ?? null;
  }, []);

  useEffect(() => {
    return () => {
      sparkleTimelineRef.current?.kill();
    };
  }, []);

  return (
    <>
      <header className={`site-nav ${scrolled ? "is-scrolled" : ""} ${hidden ? "is-hidden" : ""}`}>
        <a className="brand" href="#home">
          {wedding.couple.monogram}
        </a>
        <nav className="nav-desktop" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href.slice(1) ? "is-active" : ""}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>
      <nav className="nav-dock" aria-label="Mobile">
        <div className="nav-sparkle-layer" ref={sparkleLayerRef} aria-hidden="true" />
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`nav-dock-link ${active === link.href.slice(1) ? "is-active" : ""}`}
            onPointerDown={handleNavInteract}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </>
  );
}
