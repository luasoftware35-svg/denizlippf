import Link from "next/link";
import { site, waLink } from "@/data/site";
import { Faq } from "./Faq";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Shot } from "./Shot";
import { WhatsApp } from "./WhatsApp";

type Landing = {
  path: string;
  kicker: string;
  h1: string;
  lead: string;
  image: string;
  imageAlt: string;
  wa: string;
  points: readonly string[];
  sections: readonly { heading: string; body: readonly string[] }[];
  faqs: readonly { q: string; a: string }[];
  related: { href: string; label: string };
};

export function ServiceLanding({ page }: { page: Landing }) {
  return (
    <>
      <Header />
      <main>
        <section className="bg-white pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-36">
          <div className="mx-auto grid max-w-[1100px] items-center gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
            <div>
              <p className="text-[12px] tracking-[0.32em] text-gold uppercase">
                {page.kicker}
              </p>
              <h1 className="mt-4 text-[1.85rem] font-medium tracking-tight sm:text-4xl md:text-5xl">
                {page.h1}
              </h1>
              <p className="mt-5 max-w-md text-[15px] leading-8 text-muted">
                {page.lead}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={waLink(page.wa)} className="gold-btn">
                  WhatsApp keşif
                  <span aria-hidden>→</span>
                </a>
                <a href={`tel:${site.phoneTel}`} className="ghost-btn">
                  {site.phoneDisplay}
                </a>
              </div>
              <p className="mt-5 text-[13px] text-muted">
                <Link href="/" className="hover:text-paper">
                  Anasayfa
                </Link>
                <span aria-hidden> · </span>
                <Link href={page.related.href} className="hover:text-paper">
                  {page.related.label}
                </Link>
              </p>
            </div>
            <Shot
              src={page.image}
              alt={page.imageAlt}
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </section>

        <section className="bg-bg-2 py-16 sm:py-20">
          <div className="mx-auto grid max-w-[1100px] gap-10 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
            <ul className="space-y-3 text-[15px] text-paper">
              {page.points.map((p) => (
                <li key={p} className="border-b border-line pb-3">
                  {p}
                </li>
              ))}
            </ul>
            <div>
              {page.sections.map((s) => (
                <section key={s.heading} className="mb-10 last:mb-0">
                  <h2 className="text-2xl font-medium tracking-tight">
                    {s.heading}
                  </h2>
                  {s.body.map((p) => (
                    <p
                      key={p.slice(0, 40)}
                      className="mt-4 text-[15px] leading-8 text-muted"
                    >
                      {p}
                    </p>
                  ))}
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-12 sm:px-6">
          <div className="mx-auto max-w-[1100px] border border-line px-6 py-8 sm:px-10">
            <h2 className="text-xl font-medium tracking-tight">
              Inside — {site.city}/{site.region}
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-8 text-muted">
              {site.address}. {site.hours}. Google {site.rating} ·{" "}
              {site.reviewCount} yorum.
            </p>
          </div>
        </section>

        <Faq items={[...page.faqs]} />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
