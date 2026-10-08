import Image from "next/image";
import Link from "next/link";
import { serviceNav } from "@/data/landings";
import { legalNav, nav, site, waLink } from "@/data/site";
import { GenuaPartner } from "./GenuaPartner";
import { HoursLine } from "./HoursLine";
import { InstagramLink } from "./InstagramLink";
import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer className="bg-white px-5 py-12 sm:px-6 sm:py-16 lg:px-10">
      <Reveal>
        <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-3">
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="Inside Denizli göçük ve PPF"
                width={160}
                height={42}
                className="h-9 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-xs text-[14px] leading-7 text-muted">
              Denizli göçük düzeltme, boyasız göçük (PDR) ve Denizli PPF kaplama.
              2017’den beri Merkezefendi Akçeşme’de.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">İletişime Geç</h3>
            <ul className="mt-4 space-y-2 break-words text-[14px] text-muted">
              <li>
                <a href={`tel:${site.phoneTel}`} className="foot-link">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={site.maps} target="_blank" rel="noreferrer" className="foot-link">
                  {site.address}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="foot-link">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="foot-link"
                >
                  @{site.instagram}
                </a>
              </li>
              <li>
                <HoursLine />
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Diğer sayfalar</h3>
            <ul className="mt-4 space-y-2 text-[14px] text-muted">
              <li>
                <Link href="/" className="foot-link">
                  Anasayfa
                </Link>
              </li>
              {serviceNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="foot-link">
                    {item.label}
                  </Link>
                </li>
              ))}
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="foot-link">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={waLink()} className="foot-link">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-14 flex max-w-[1200px] flex-col gap-6 border-t border-line pt-8">
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-[12px] text-muted md:justify-start">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="foot-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-[12px] text-muted md:text-left">
              © 2026 {site.legalName}. Tüm hakları saklıdır.
            </p>
            <InstagramLink />
          </div>
          <div className="flex justify-center">
            <GenuaPartner />
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
