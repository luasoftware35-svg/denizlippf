"use client";

import { useState } from "react";
import { extras } from "@/data/site";
import { Reveal } from "./Reveal";
import { Shot } from "./Shot";

const cards = [
  {
    title: "Denizli Göçük",
    image: "/images/shot-detail.jpg",
    alt: "Denizli boyasız göçük düzeltme — Inside PDR",
    href: "#iletisim",
    cat: "gocuk",
  },
  {
    title: "Denizli PPF",
    image: "/images/shot-wrap.jpg",
    alt: "Denizli PPF kaplama — Propel 190 mikron, Inside",
    href: "#iletisim",
    cat: "ppf",
  },
  {
    title: extras[0].title,
    image: "/images/shot-bmw.jpg",
    alt: "Inside tam ön PPF uygulaması",
    href: "#iletisim",
    cat: "ppf",
  },
  {
    title: extras[1].title,
    image: "/images/shot-volvo.jpg",
    alt: "Inside tam araç PPF ve göçük onarımı",
    href: "#iletisim",
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
          <div className="-mx-5 mt-8 flex justify-center gap-6 overflow-x-auto px-5 text-[15px] sm:gap-8">
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={`transition-colors ${
                  tab === t.id
                    ? "font-semibold text-paper"
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
              <a href={c.href} className="group block">
                <Shot
                  src={c.image}
                  alt={c.alt}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <h3 className="mt-3 text-[15px] font-medium transition-transform duration-300 group-hover:translate-x-1 sm:mt-4 sm:text-lg">
                  {c.title}
                </h3>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#iletisim" className="ghost-btn">
            Keşif Alın
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
