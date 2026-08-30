import { HeadingReveal } from "@/components/heading-reveal";
import { Ornament } from "@/components/ornament";
import { wedding } from "@/content/wedding";

export function Families() {
  return (
    <section className="families">
      <header className="section-head" data-reveal>
        <p className="label">Celebrating together</p>
        <HeadingReveal className="section-title">With love from our families</HeadingReveal>
        <Ornament />
      </header>
      <div className="family-grid">
        <div data-reveal>
          <p className="label">The bride</p>
          <h3>{wedding.couple.bride}</h3>
          <p className="parents">{wedding.family.bride.join(" & ")}</p>
          <small>Sister</small>
          <p>{wedding.family.sister}</p>
        </div>
        <div data-reveal>
          <p className="label">The groom</p>
          <h3>{wedding.couple.groom}</h3>
          <p className="parents">{wedding.family.groom.join(" & ")}</p>
        </div>
      </div>
    </section>
  );
}
