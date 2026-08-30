import Image from "next/image";
import { HeadingReveal } from "@/components/heading-reveal";
import { Ornament } from "@/components/ornament";
import { images, wedding } from "@/content/wedding";

export function Story() {
  return (
    <section className="story-section" id="story">
      <header className="section-head" data-reveal>
        <p className="label">Two lives, one journey</p>
        <HeadingReveal className="section-title">Our Story</HeadingReveal>
        <Ornament />
        <p className="lede">{wedding.story.opening}</p>
      </header>

      <div className="story-portraits" aria-label="Jinu and Divyamol together">
        {images.story.map((image) => (
          <figure key={image.src} className="story-portrait" data-image-reveal>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 800px) 72vw, 22vw"
              data-parallax
            />
          </figure>
        ))}
      </div>

      <article className="story-block story-block-text">
        <div className="story-copy" data-reveal>
          <p className="label">01 · {wedding.story.visitTitle}</p>
          <h3>{wedding.story.visitTitle}</h3>
          <p className="story-malayalam malayalam" lang="ml">
            {wedding.story.visitMalayalam}
          </p>
          <p>{wedding.story.visit}</p>
          <blockquote>{wedding.story.visitQuote}</blockquote>
        </div>
      </article>

      <article className="story-block story-block-alt">
        <div className="story-copy" data-reveal>
          <p className="label">02 · A new chapter</p>
          <h3>The day it became official</h3>
          <p>{wedding.story.official}</p>
        </div>
        <div className="story-media" data-image-reveal>
          <Image src={images.story[0].src} alt={images.story[0].alt} fill sizes="(max-width: 800px) 100vw, 55vw" data-parallax />
        </div>
      </article>
    </section>
  );
}
