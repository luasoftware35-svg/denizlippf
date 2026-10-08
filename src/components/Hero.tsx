import Image from "next/image";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section
      id="ust"
      className="relative flex h-[100svh] flex-col overflow-hidden bg-white lg:block lg:h-auto lg:min-h-[100svh]"
    >
      <div className="hero-bleed pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] overflow-hidden lg:block">
        <Image
          src="/images/shop.jpg"
          alt="Inside Denizli PPF-PDR atölyesi"
          fill
          priority
          sizes="42vw"
          className="hero-ken object-cover object-[18%_12%]"
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1400px] flex-none lg:min-h-[100svh] lg:grid-cols-[1.16fr_0.84fr]">
        <div className="flex shrink-0 flex-col items-center justify-center px-5 pb-5 pt-20 text-center sm:px-6 sm:pb-8 sm:pt-24 lg:px-16 lg:pb-10 lg:pt-8">
          <h1
            className="hero-in text-[clamp(2.15rem,10.5vw,4.25rem)] font-semibold leading-[1.08] tracking-[0.12em] text-paper sm:tracking-[0.18em]"
            style={{ animationDelay: "0.08s" }}
          >
            INSIDE
          </h1>
          <p
            className="hero-in mt-3 text-[18px] font-light tracking-wide text-[#8a8a8a] sm:text-[28px]"
            style={{ animationDelay: "0.2s" }}
          >
            Denizli Göçük &amp; PPF
          </p>
          <p
            className="hero-in mt-5 max-w-md text-[14px] leading-7 text-muted sm:mt-6"
            style={{ animationDelay: "0.34s" }}
          >
            2017’den beri Denizli’de boyasız göçük düzeltme ve Propel 190 mikron
            PPF. 7 yıl garanti ayrıcalığıyla.
          </p>
          <a
            href="#hizmetler"
            className="ghost-btn hero-in mt-8 sm:mt-9"
            style={{ animationDelay: "0.48s" }}
          >
            Şimdi Keşfet
            <span aria-hidden>→</span>
          </a>
          <a
            href={site.maps}
            target="_blank"
            rel="noreferrer"
            className="hero-in mt-5 text-[13px] tracking-wide text-muted transition-colors hover:text-paper sm:mt-6"
            style={{ animationDelay: "0.62s" }}
          >
            Google {site.rating} · {site.reviewCount} yorum
          </a>
        </div>

        <div className="relative hidden lg:block">
          <div className="hero-inset absolute -left-[32%] top-[20%] z-10 w-[58%] max-w-[340px] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.14)]">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/shot-detail.jpg"
                alt="Inside boyasız göçük düzeltme"
                fill
                sizes="340px"
                className="object-cover object-[center_40%]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hero-bleed relative min-h-0 w-full flex-1 overflow-hidden lg:hidden">
        <Image
          src="/images/shop.jpg"
          alt="Inside Denizli PPF-PDR atölyesi"
          fill
          priority
          sizes="100vw"
          className="hero-ken object-cover object-[20%_58%]"
        />
      </div>
    </section>
  );
}
