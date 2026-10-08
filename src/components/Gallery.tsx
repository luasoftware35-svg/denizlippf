import { Reveal } from "./Reveal";
import { Shot } from "./Shot";

const shots = [
  {
    src: "/images/shot-shop.jpg",
    alt: "Inside Denizli PPF-PDR atölyesi, Merkezefendi",
  },
  {
    src: "/images/shot-detail.jpg",
    alt: "Boyasız göçük düzeltme — Denizli göçük",
  },
  {
    src: "/images/shot-wrap.jpg",
    alt: "Inside PPF kaplama atölyesi",
  },
  {
    src: "/images/shot-bmw.jpg",
    alt: "Inside atölyesinde teslim edilen araç",
  },
  {
    src: "/images/shot-volvo.jpg",
    alt: "Tam araç PPF ve göçük onarımı — Denizli PPF",
  },
  {
    src: "/images/shot-bay.jpg",
    alt: "Inside Denizli atölye içi",
  },
];

export function Gallery() {
  return (
    <section id="atolye" className="bg-white py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-10">
        <Reveal>
          <p className="text-center text-[12px] tracking-[0.32em] text-gold uppercase">
            Denizli atölye
          </p>
          <h2 className="mt-4 text-center text-[1.85rem] font-medium tracking-tight sm:text-4xl md:text-5xl">
            Denizli göçük ve PPF işleri
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 lg:grid-cols-3">
          {shots.map((s, i) => (
            <Reveal key={s.src} delay={i * 0.05}>
              <Shot src={s.src} alt={s.alt} sizes="(max-width: 1024px) 50vw, 33vw" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
