"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { images, wedding } from "@/content/wedding";
import { prefersReducedMotion } from "@/lib/motion";

export function Hero() {
  const slides = images.hero;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion() || slides.length < 2) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), 5500);
    return () => window.clearInterval(id);
  }, [slides.length]);

  return (
    <section className="hero" id="home">
      {slides.map((image, i) => (
        <div key={image.src} className={`hero-slide ${i === index ? "is-active" : ""}`}>
          <Image src={image.src} alt={image.alt} fill priority={i === 0} sizes="100vw" />
        </div>
      ))}
      <div className="hero-shade" />
      <div className="hero-grain" aria-hidden="true" />

      <div className="hero-copy">
        <p className="hero-eyebrow">The wedding of</p>
        <h1 className="hero-title">
          Jinu <em>&</em> Divyamol
        </h1>
        <p className="hero-date">{wedding.wedding.date}</p>
        <p className="hero-place">{wedding.wedding.shortPlace}</p>
      </div>

      <div className="hero-ticks" aria-hidden="true">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={i === index ? "is-active" : ""}
            aria-label={`Photo ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
