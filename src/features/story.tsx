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

      <article className="story-block">
        <div className="story-media" data-image-reveal>
          <Image src={images.story[0].src} alt={images.story[0].alt} fill sizes="(max-width: 800px) 100vw, 55vw" data-parallax />
        </div>
        <div className="story-copy" data-reveal>
          <p className="label">01 · First meet</p>
          <h3>First meet</h3>
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
          <Image src={images.story[1].src} alt={images.story[1].alt} fill sizes="(max-width: 800px) 100vw, 55vw" data-parallax />
        </div>
      </article>
    </section>
  );
}
