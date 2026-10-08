"use client";

import { useState } from "react";
import { faqs } from "@/data/site";
import { Reveal } from "./Reveal";

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="sss" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[880px] px-6 lg:px-10">
        <Reveal>
          <h2 className="text-center text-4xl font-medium tracking-tight md:text-5xl">
            Sık Sorulan <span className="text-gold">Sorular</span>
          </h2>
        </Reveal>
        <div className="mt-14 divide-y divide-line border-y border-line">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="py-1">
                <button
                  type="button"
                  className="flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left text-lg"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  {f.q}
                  <span className="text-muted transition-transform duration-300">
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-[15px] leading-7 text-muted">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
