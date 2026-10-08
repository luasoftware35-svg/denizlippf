"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { track } from "@/lib/analytics";
import { site, waLink } from "@/data/site";
import { Reveal } from "./Reveal";

export function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Göçük düzeltme");
  const [note, setNote] = useState("");

  function submit(e: FormEvent) {
    e.preventDefault();
    const text = [
      "Merhaba, Inside için randevu istiyorum.",
      `Ad: ${name || "-"}`,
      `Telefon: ${phone || "-"}`,
      `Hizmet: ${service}`,
      note ? `Not: ${note}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    track("generate_lead", { method: "whatsapp_form", service });
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="iletisim" className="bg-bg-2 py-16 sm:py-20 md:py-28">
      <div className="mx-auto grid max-w-[1100px] gap-10 px-5 sm:px-6 md:grid-cols-2 md:gap-16 lg:px-10">
        <Reveal from="left">
          <h2 className="text-[1.85rem] font-medium tracking-tight sm:text-4xl md:text-5xl">
            Denizli göçük ve PPF randevu
          </h2>
          <span className="rule" aria-hidden />
          <p className="mt-5 max-w-md text-[15px] leading-8 text-muted">
            WhatsApp’tan göçük veya kaplama istediğiniz paneli gönderin.
            Denizli göçük düzeltme ve Denizli PPF için aynı gün dönüş.
          </p>
          <p className="mt-4 text-[14px] text-gold">
            Google {site.rating} · {site.reviewCount} yorum
          </p>
          <ul className="mt-8 space-y-3 break-words text-[15px] text-paper">
            <li className="stagger-line">
              <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
            </li>
            <li className="stagger-line">
              <a href={site.maps} target="_blank" rel="noreferrer">
                {site.address}
              </a>
            </li>
            <li className="stagger-line">
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li className="stagger-line">
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
                Instagram @{site.instagram}
              </a>
            </li>
            <li className="stagger-line">{site.hours}</li>
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={`tel:${site.phoneTel}`} className="gold-btn w-full sm:w-auto">
              Ara
              <span aria-hidden>→</span>
            </a>
            <a
              href={site.maps}
              target="_blank"
              rel="noreferrer"
              className="ghost-btn w-full sm:w-auto"
            >
              Yol tarifi
              <span aria-hidden>→</span>
            </a>
          </div>
          <div className="relative mt-10 aspect-[16/10] overflow-hidden bg-bg-3">
            <iframe
              title="Inside PPF-PDR Denizli harita"
              src={`https://maps.google.com/maps?q=${site.geo.lat},${site.geo.lng}&z=16&output=embed`}
              className="map-in h-full w-full border-0 grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1} from="right">
          <form onSubmit={submit} className="form-card bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,0.04)] sm:p-8">
            <label className="block text-[13px] text-muted">
              Ad soyad
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full border-b border-line bg-transparent py-3 text-base outline-none transition-colors focus:border-paper"
                autoComplete="name"
                required
              />
            </label>
            <label className="mt-6 block text-[13px] text-muted">
              Telefon
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-2 w-full border-b border-line bg-transparent py-3 text-base outline-none transition-colors focus:border-paper"
                autoComplete="tel"
                inputMode="tel"
                required
              />
            </label>
            <label className="mt-6 block text-[13px] text-muted">
              Hizmet
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="mt-2 w-full border-b border-line bg-transparent py-3 text-base outline-none transition-colors focus:border-paper"
              >
                <option>Göçük düzeltme</option>
                <option>PPF kaplama</option>
                <option>Göçük + PPF</option>
                <option>Seramik kaplama</option>
              </select>
            </label>
            <label className="mt-6 block text-[13px] text-muted">
              Araç / not
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={3}
                className="mt-2 w-full resize-none border-b border-line bg-transparent py-3 text-base outline-none transition-colors focus:border-paper"
                placeholder="Örn. 2023 Megane, ön kaput göçük"
              />
            </label>
            <label className="mt-6 flex items-start gap-3 text-[13px] leading-6 text-muted">
              <input
                required
                type="checkbox"
                name="kvkk"
                className="mt-1 accent-[var(--gold)]"
              />
              <span>
                <Link href="/kvkk" className="text-paper underline-offset-2 hover:underline">
                  KVKK aydınlatma metnini
                </Link>{" "}
                okudum; ad ve telefonumun randevu / teklif için WhatsApp üzerinden
                iletilmesini kabul ediyorum.
              </span>
            </label>
            <button type="submit" className="ghost-btn mt-8 w-full">
              WhatsApp’tan gönder
              <span aria-hidden>→</span>
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
