import { Footer } from "./Footer";
import { Header } from "./Header";
import { Reveal } from "./Reveal";
import { WhatsApp } from "./WhatsApp";

export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
}) {
  return (
    <>
      <Header />
      <main>
        <section className="bg-bg-2 pt-32 pb-16 md:pt-36 md:pb-20">
          <div className="mx-auto max-w-[760px] px-6 lg:px-10">
            <p className="kicker-in text-[12px] tracking-[0.32em] text-gold uppercase">
              Yasal
            </p>
            <h1 className="hero-in mt-4 text-[1.85rem] font-medium tracking-tight sm:text-4xl md:text-5xl">
              {title}
            </h1>
            <span className="hero-rule !mx-0" aria-hidden />
            <p className="hero-in mt-5 text-[15px] leading-8 text-muted" style={{ animationDelay: "0.22s" }}>
              {intro}
            </p>
          </div>
        </section>
        <article className="mx-auto max-w-[760px] px-6 py-16 lg:px-10 md:py-20">
          <p className="text-[12px] tracking-[0.18em] text-muted uppercase">
            Son güncelleme: 8 Ekim 2026
          </p>
          {sections.map((s, i) => (
            <Reveal key={s.heading} delay={i * 0.06}>
              <section className="mt-12">
                <h2 className="text-2xl font-medium tracking-tight">{s.heading}</h2>
                {s.body.map((p) => (
                  <p key={p.slice(0, 48)} className="mt-4 text-[15px] leading-8 text-muted">
                    {p}
                  </p>
                ))}
              </section>
            </Reveal>
          ))}
        </article>
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
