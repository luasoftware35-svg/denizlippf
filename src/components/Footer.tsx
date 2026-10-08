import Image from "next/image";
import Link from "next/link";
import { legalNav, nav, site, waLink } from "@/data/site";
import { GenuaPartner } from "./GenuaPartner";

export function Footer() {
  return (
    <footer className="bg-white px-5 py-12 sm:px-6 sm:py-16 lg:px-10">
      <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-3">
        <div>
          <Link href="/" className="inline-block">
            <Image
              src="/images/logo.png"
              alt="Inside PDR-PPF"
              width={160}
              height={42}
              className="h-9 w-auto"
            />
          </Link>
          <p className="mt-5 max-w-xs text-[14px] leading-7 text-muted">
            Denizli göçük düzeltme, boyasız göçük ve PPF kaplama. 2017’den beri
            Merkezefendi’de.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold">İletişime Geç</h3>
          <ul className="mt-4 space-y-2 break-words text-[14px] text-muted">
            <li>
              <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
            </li>
            <li>
              <a href={site.maps} target="_blank" rel="noreferrer">
                {site.address}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
                Instagram @{site.instagram}
              </a>
            </li>
            <li>{site.hours}</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Diğer sayfalar</h3>
          <ul className="mt-4 space-y-2 text-[14px] text-muted">
            <li>
              <Link href="/">Anasayfa</Link>
            </li>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={`/${item.href}`}>{item.label}</Link>
              </li>
            ))}
            <li>
              <a href={waLink()}>WhatsApp</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-[1200px] flex-col gap-6 border-t border-line pt-8">
        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-[12px] text-muted md:justify-start">
          {legalNav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="transition-colors hover:text-paper">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-[12px] text-muted md:text-left">
            © 2026 {site.legalName}. Tüm hakları saklıdır.
          </p>
          <GenuaPartner />
        </div>
      </div>
    </footer>
  );
}
