import { waLink } from "@/data/site";
import { Reveal } from "./Reveal";
import { Shot } from "./Shot";

export function Why() {
  return (
    <section id="hakkimizda" className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal from="left">
            <Shot
              src="/images/shot-wrap.jpg"
              alt="Inside PPF atölyesi, Merkezefendi"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>

          <Reveal delay={0.08} from="right">
            <p className="max-w-lg text-[15px] leading-8 text-muted">
              Inside PPF-PDR, 2017’den beri Denizli’de araç koruma ve boyasız
              göçük onarımı alanında hizmet veriyor. Merkezefendi Akçeşme’deki
              atölyemizde Propel 190 mikron PPF, boyasız göçük düzeltme (PDR)
              ve seramik kaplama aynı ışıkta planlanır — 7 yıl garanti
              ayrıcalığıyla, filmi söküp başka atölyeye gitmezsiniz.
            </p>
            <a href={waLink()} className="ghost-btn mt-8">
              İletişime Geçin
              <span aria-hidden>→</span>
            </a>
            <div className="mt-12">
              <Shot
                src="/images/shot-bmw.jpg"
                alt="Inside atölyesinde teslim edilen araç"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
