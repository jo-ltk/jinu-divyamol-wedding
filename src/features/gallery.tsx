"use client";

import Image from "next/image";
import { useState } from "react";
import { HeadingReveal } from "@/components/heading-reveal";
import { Ornament } from "@/components/ornament";
import { images } from "@/content/wedding";

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const photo = open !== null ? images.gallery[open] : null;

  return (
    <section className="gallery" id="gallery">
      <header className="section-head" data-reveal>
        <p className="label">Captured moments</p>
        <HeadingReveal className="section-title">Gallery</HeadingReveal>
        <p className="lede">A few frames from their shoot together.</p>
        <Ornament />
      </header>

      <div className="gallery-rail">
        {images.gallery.map((image, i) => (
          <button
            key={`${image.src}-${i}`}
            type="button"
            className="gallery-tile"
            data-image-reveal
            onClick={() => setOpen(i)}
            aria-label={`View ${image.alt}`}
          >
            <Image src={image.src} alt={image.alt} fill sizes="82vw" />
          </button>
        ))}
      </div>
      <p className="swipe-hint">Swipe to explore</p>

      {photo && open !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo" onClick={() => setOpen(null)}>
          <button type="button" className="lightbox-close" aria-label="Close" onClick={() => setOpen(null)}>
            Close
          </button>
          <button
            type="button"
            className="lightbox-nav prev"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((open - 1 + images.gallery.length) % images.gallery.length);
            }}
          >
            ‹
          </button>
          <div className="lightbox-frame" onClick={(e) => e.stopPropagation()}>
            <Image src={photo.src} alt={photo.alt} fill sizes="100vw" />
          </div>
          <button
            type="button"
            className="lightbox-nav next"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((open + 1) % images.gallery.length);
            }}
          >
            ›
          </button>
          <p>
            {open + 1} / {images.gallery.length}
          </p>
        </div>
      )}
    </section>
  );
}
