"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal } from "./Reveal";

const before = {
  src: "/images/gocuk-once.jpg",
  alt: "Denizli boyasız göçük düzeltme öncesi, kapı göçüğü",
};
const after = {
  src: "/images/gocuk-sonra.jpg",
  alt: "Aynı kapı, boyasız göçük düzeltme sonrası — Inside",
};

export function BeforeAfter() {
  const [pos, setPos] = useState(58);

  return (
    <section className="border-y border-line bg-bg-2 py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-[1100px] px-5 sm:px-6 lg:px-10">
        <Reveal>
          <p className="kicker-in text-[12px] tracking-[0.32em] text-gold uppercase">
            Boyasız göçük
          </p>
          <h2 className="mt-4 max-w-xl text-[1.85rem] font-medium tracking-tight sm:text-4xl md:text-5xl">
            Önce ve sonra
          </h2>
          <span className="rule" aria-hidden />
          <p className="mt-5 max-w-lg text-[15px] leading-8 text-muted">
            Kapı göçüğü, boyasız. Çizgiyi kaydırın.
          </p>
        </Reveal>
        <Reveal delay={0.08} from="clip">
          <figure className="relative mt-10">
            <div className="relative aspect-[2/1] overflow-hidden bg-bg-3">
              <Image
                src={after.src}
                alt={after.alt}
                fill
                sizes="(max-width: 1100px) 100vw, 1100px"
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
              >
                <Image
                  src={before.src}
                  alt=""
                  fill
                  sizes="(max-width: 1100px) 100vw, 1100px"
                  className="object-cover"
                />
              </div>
              <div
                className="pointer-events-none absolute inset-y-0 z-10 w-px bg-white"
                style={{ left: `${pos}%` }}
              >
                <span className="absolute top-1/2 left-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-[11px] tracking-widest text-paper shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
                  ↔
                </span>
              </div>
              <span className="pointer-events-none absolute top-3 left-3 bg-paper/80 px-2 py-1 text-[11px] tracking-[0.16em] text-white uppercase">
                Önce
              </span>
              <span className="pointer-events-none absolute top-3 right-3 bg-white/90 px-2 py-1 text-[11px] tracking-[0.16em] text-paper uppercase">
                Sonra
              </span>
              <input
                type="range"
                min={0}
                max={100}
                value={pos}
                aria-label="Önce ve sonra karşılaştırması"
                aria-valuetext={pos < 50 ? "Sonra daha geniş" : "Önce daha geniş"}
                className="compare-range"
                onChange={(event) => setPos(Number(event.target.value))}
              />
            </div>
            <figcaption className="sr-only">
              {before.alt}. {after.alt}.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
