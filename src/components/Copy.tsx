import Link from "next/link";
import { Reveal } from "./Reveal";

export function Copy() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-28">
      <div className="mx-auto grid max-w-[1100px] gap-10 px-5 sm:px-6 md:grid-cols-2 md:gap-16 lg:px-10">
        <Reveal from="left">
          <h2 className="text-3xl font-medium tracking-tight">
            <Link href="/denizli-gocuk" className="hover:opacity-70">
              Denizli göçük düzeltme
            </Link>
          </h2>
          <p className="mt-5 text-[15px] leading-8 text-muted">
            Park ederken kapı izi, market arabası, dolu ve taş darbesi
            Denizli’de en sık gelen işler. Inside’de boyasız göçük düzeltme,
            paneli arkadan iterek metalin hafızasını geri verir. Boyahane ve
            macun yoktur; ekspertiz orijinal boya okumaya devam eder.
          </p>
        </Reveal>
        <Reveal delay={0.08} from="right">
          <h2 className="text-3xl font-medium tracking-tight">
            <Link href="/denizli-ppf" className="hover:opacity-70">
              Denizli PPF kaplama
            </Link>
          </h2>
          <p className="mt-5 text-[15px] leading-8 text-muted">
            Inside’de Propel 190 mikron şeffaf TPU film kullanılır. Tampon,
            kaput ve çamurluk taş yer; tam ön, tam araç veya nokta koruma.
            7 yıl garanti ayrıcalığıyla. Göçük düzeltildikten sonra ilgili
            parçaya taze film de oturtulur.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
