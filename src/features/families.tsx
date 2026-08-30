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
        <article className="family-card" data-reveal>
          <p className="label">The bride</p>
          <h3 className="family-name">{wedding.couple.bride}</h3>
          <div className="family-lineage">
            <span className="family-relation">Daughter of</span>
            <span className="family-parent">{wedding.family.bride.father}</span>
            <span className="family-amp" aria-hidden="true">
              &
            </span>
            <span className="family-parent">{wedding.family.bride.mother}</span>
          </div>
          <div className="family-sibling">
            <small>Sister</small>
            <p>{wedding.family.sister}</p>
          </div>
        </article>
        <article className="family-card" data-reveal>
          <p className="label">The groom</p>
          <h3 className="family-name">{wedding.couple.groom}</h3>
          <div className="family-lineage">
            <span className="family-relation">Son of</span>
            <span className="family-parent">{wedding.family.groom.father}</span>
            <span className="family-amp" aria-hidden="true">
              &
            </span>
            <span className="family-parent">{wedding.family.groom.mother}</span>
          </div>
        </article>
      </div>
    </section>
  );
}
