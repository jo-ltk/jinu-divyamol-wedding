import { wedding } from "@/content/wedding";

export function SiteFooter() {
  return (
    <footer>
      <p className="label">Together, always</p>
      <h2 className="footer-title">{wedding.couple.display}</h2>
      <p className="footer-date">{wedding.wedding.date}</p>
      <div className="footer-meta">
        <div>
          <span className="label">Wedding</span>
          <p>{wedding.wedding.shortPlace}</p>
        </div>
        <div>
          <span className="label">Reception</span>
          <p>{wedding.reception.shortPlace}</p>
        </div>
        <div>
          <span className="label">Scripture</span>
          <p>{wedding.verse.reference}</p>
        </div>
      </div>
    </footer>
  );
}
