import { extras } from "@/data/site";
import { Reveal } from "./Reveal";

export function Process() {
  return (
    <section id="surec" className="border-y border-line bg-bg-2 py-12 sm:py-16 md:py-20">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-x-4 gap-y-8 px-5 sm:gap-10 sm:px-6 lg:grid-cols-4 lg:px-10">
        {extras.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.07}>
            <article className="process-card text-center">
              <p className="text-gold text-sm">0{i + 1}</p>
              <h3 className="mt-3 text-[15px] font-medium sm:text-lg">{e.title}</h3>
              <p className="mt-2 text-[13px] leading-6 text-muted sm:text-[14px]">{e.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
