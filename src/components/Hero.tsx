import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { Parallax } from "./Parallax";

export function Hero() {
  return (
    <section
      id="ust"
      className="relative flex h-[100svh] flex-col overflow-hidden bg-white lg:block lg:h-auto lg:min-h-[100svh]"
    >
      <div className="hero-bleed pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] overflow-hidden lg:block">
        <Parallax className="absolute inset-x-0 -top-[10%] -bottom-[10%]" strength={0.12}>
          <div className="relative h-full">
            <Image
              src="/images/frame-shop.jpg"
              alt="Inside Denizli göçük düzeltme ve PPF atölyesi, Merkezefendi"
              fill
              priority
              sizes="42vw"
              className="hero-ken object-cover object-[center_28%]"
            />
          </div>
        </Parallax>
      </div>

      <div className="relative mx-auto grid w-full max-w-[1400px] flex-none lg:min-h-[100svh] lg:grid-cols-[1.16fr_0.84fr]">
        <div className="flex shrink-0 flex-col items-center justify-center px-5 pb-5 pt-20 text-center sm:px-6 sm:pb-8 sm:pt-24 lg:px-16 lg:pb-10 lg:pt-8">
          <h1>
            <span className="hero-word block text-[clamp(2.15rem,10.5vw,4.25rem)] font-semibold leading-[1.08] tracking-[0.12em] text-paper sm:tracking-[0.18em]">
              INSIDE
            </span>
            <span className="hero-sub mt-3 block text-[18px] font-light tracking-wide text-[#8a8a8a] sm:text-[28px]">
              Denizli Göçük Düzeltme ve PPF
            </span>
            <span className="hero-rule" aria-hidden />
          </h1>
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
          <p
            className="hero-in mt-5 text-[13px] tracking-wide text-muted sm:mt-6"
            style={{ animationDelay: "0.62s" }}
          >
            <Link href="/denizli-gocuk" className="hover:text-paper">
              Denizli göçük
            </Link>
            <span aria-hidden> · </span>
            <Link href="/denizli-ppf" className="hover:text-paper">
              Denizli PPF
            </Link>
          </p>
          <a
            href={site.maps}
            target="_blank"
            rel="noreferrer"
            className="hero-in mt-3 text-[13px] tracking-wide text-muted transition-colors hover:text-paper"
            style={{ animationDelay: "0.7s" }}
          >
            Google {site.rating} · {site.reviewCount} yorum
          </a>
          <a
            href="#hakkimizda"
            className="scroll-cue hero-in mt-8 flex lg:hidden"
            style={{ animationDelay: "1.05s" }}
          >
            Kaydır
            <span className="scroll-cue-line" aria-hidden />
          </a>
        </div>

        <div className="relative hidden lg:block">
          <div className="hero-float absolute -left-[32%] top-[20%] z-10 w-[58%] max-w-[340px] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.14)]">
            <div className="shot-frame relative aspect-[4/5]">
              <Image
                src="/images/frame-bmw.jpg"
                alt="Inside Denizli atölyesinde teslim edilen araç"
                fill
                sizes="340px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hero-bleed relative min-h-0 w-full flex-1 overflow-hidden lg:hidden">
        <Image
          src="/images/frame-shop.jpg"
          alt="Inside Denizli göçük düzeltme ve PPF atölyesi, Merkezefendi"
          fill
          priority
          sizes="100vw"
          className="hero-ken object-cover object-[center_42%]"
        />
      </div>

      <a
        href="#hakkimizda"
        className="scroll-cue hero-in absolute bottom-8 left-[29%] z-20 hidden -translate-x-1/2 lg:flex"
        style={{ animationDelay: "1.05s" }}
      >
        Kaydır
        <span className="scroll-cue-line" aria-hidden />
      </a>
    </section>
  );
}
