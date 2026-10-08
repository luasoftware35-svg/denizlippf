"use client";

import Link from "next/link";
import { useState } from "react";
import { extras } from "@/data/site";
import { Reveal } from "./Reveal";
import { Shot } from "./Shot";

const cards = [
  {
    title: "Denizli Göçük",
    line: "Boyasız düzeltme. Park, dolu ve kapı izi; orijinal boya kalır.",
    image: "/images/frame-pdr.jpg",
    alt: "Denizli boyasız göçük düzeltme — Inside PDR",
    href: "/denizli-gocuk",
    cat: "gocuk",
  },
  {
    title: "Denizli PPF kaplama",
    line: "Şeffaf Propel 190 mikron film. Taş ve çizik için, 7 yıl garanti.",
    image: "/images/frame-ppf.jpg",
    alt: "Denizli PPF kaplama — Propel 190 mikron, Inside",
    href: "/denizli-ppf",
    cat: "ppf",
  },
  {
    title: extras[0].title,
    line: "Kaput, çamurluk, tampon ve aynalar. 7 yıl garanti.",
    image: "/images/frame-bmw.jpg",
    alt: "Inside tam ön PPF uygulaması",
    href: "/denizli-ppf",
    cat: "ppf",
  },
  {
    title: extras[1].title,
    line: "Yeni teslim ve yüksek değerli araçlarda tam koruma.",
    image: "/images/frame-volvo.jpg",
    alt: "Inside tam araç PPF ve göçük onarımı",
    href: "/denizli-ppf",
    cat: "koruma",
  },
];

const tabs = [
  { id: "tumu", label: "Tümü" },
  { id: "gocuk", label: "Göçük" },
  { id: "ppf", label: "PPF" },
  { id: "koruma", label: "Koruma" },
] as const;

export function Services() {
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("tumu");
  const shown = tab === "tumu" ? cards : cards.filter((c) => c.cat === tab);

  return (
    <section id="hizmetler" className="bg-white py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-10">
        <Reveal>
          <h2 className="text-center text-[2rem] font-medium tracking-tight sm:text-4xl md:text-5xl">
            Denizli göçük ve PPF hizmetleri
          </h2>
          <span className="rule rule-center" aria-hidden />
          <div className="-mx-5 mt-8 flex justify-center gap-6 overflow-x-auto px-5 text-[15px] sm:gap-8">
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={`tab-link transition-colors ${
                  tab === t.id
                    ? "is-on font-semibold text-paper"
                    : "text-muted hover:text-paper"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-14 sm:gap-8 lg:grid-cols-4">
          {shown.map((c, i) => (
            <Reveal key={`${tab}-${c.title}`} delay={i * 0.06} from="scale">
              <Link href={c.href} className="group block">
                <Shot
                  src={c.image}
                  alt={c.alt}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <h3 className="mt-3 text-[15px] font-medium transition-transform duration-300 group-hover:translate-x-1 sm:mt-4 sm:text-lg">
                  {c.title}
                </h3>
                <p className="mt-1 text-[13px] leading-5 text-muted">{c.line}</p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 text-center">
            <Link href="/iletisim" scroll={false} className="ghost-btn">
              Keşif Alın
              <span aria-hidden>→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
