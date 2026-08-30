"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { HeadingReveal } from "@/components/heading-reveal";
import { Ornament } from "@/components/ornament";
import { images, wedding } from "@/content/wedding";

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % images.hero.length), 6500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="hero" id="home">
      {images.hero.map((image, i) => (
        <div key={image.src} className={`hero-slide ${i === index ? "is-active" : ""}`}>
          <Image src={image.src} alt={image.alt} fill priority={i === 0} sizes="100vw" data-parallax />
        </div>
      ))}
      <div className="hero-shade" />
      <div className="hero-copy">
        <p className="hero-eyebrow label">Together with their families</p>
        <HeadingReveal as="h1" className="hero-title" delay={0.25} immediate>
          {wedding.couple.display}
        </HeadingReveal>
        <div className="hero-line hero-meta" />
        <Ornament className="hero-meta" />
        <p className="hero-meta label">{wedding.wedding.date}</p>
        <p className="hero-meta venue-line">{wedding.wedding.shortPlace}</p>
      </div>
      <a className="hero-scroll" href="#invitation">
        <span>Scroll</span>
        <b>↓</b>
      </a>
    </section>
  );
}
