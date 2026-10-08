"use client";

import { useState } from "react";
import { extras } from "@/data/site";
import { Reveal } from "./Reveal";
import { Shot } from "./Shot";

const cards = [
  {
    title: "Göçük Düzeltme",
    image: "/images/shot-detail.jpg",
    alt: "Inside Denizli boyasız göçük düzeltme",
    href: "#iletisim",
    cat: "gocuk",
  },
  {
    title: "Propel PPF",
    image: "/images/shot-wrap.jpg",
    alt: "Inside Denizli PPF kaplama atölyesi",
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
    <section id="hizmetler" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <Reveal>
          <h2 className="text-center text-4xl font-medium tracking-tight md:text-5xl">
            Hizmetler
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-8 text-[15px]">
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

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {shown.map((c, i) => (
            <Reveal key={`${tab}-${c.title}`} delay={i * 0.06} from="scale">
              <a href={c.href} className="group block">
                <Shot
                  src={c.image}
                  alt={c.alt}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <h3 className="mt-4 text-lg font-medium transition-transform duration-300 group-hover:translate-x-1">
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
