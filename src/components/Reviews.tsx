import { site } from "@/data/site";
import { Reveal } from "./Reveal";

const score = Math.round((site.rating / 5) * 100);

export function Reviews() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-[720px] px-5 text-center sm:px-6">
        <Reveal>
          <p className="kicker-in text-[12px] tracking-[0.32em] text-gold uppercase">
            Google
          </p>
          <h2 className="mt-4 text-[1.85rem] font-medium tracking-tight sm:text-4xl">
            {site.rating}
          </h2>
          <p className="relative mx-auto mt-3 w-fit text-[1.35rem] tracking-[0.18em] text-[#ddd]" aria-hidden>
            ★★★★★
            <span
              className="absolute inset-y-0 left-0 overflow-hidden text-gold"
              style={{ width: `${score}%` }}
            >
              ★★★★★
            </span>
          </p>
          <p className="mt-4 text-[15px] text-muted">
            {site.reviewCount} yorum · Inside PPF-PDR Denizli
          </p>
          <a href={site.reviews} target="_blank" rel="noreferrer" className="ghost-btn mt-8">
            Yorumları Google’da oku
            <span aria-hidden>→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
