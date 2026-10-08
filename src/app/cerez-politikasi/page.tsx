import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description: `${site.name} çerez politikası. Zorunlu çerezler, tercih kaydı ve Google Haritalar üçüncü taraf çerezleri.`,
  alternates: { canonical: "/cerez-politikasi" },
};

export default function CerezPage() {
  return (
    <LegalPage
      title="Çerez politikası"
      intro="Bu sitede kullanılan çerezler ve benzeri teknolojiler hakkında bilgilendirme."
      sections={[
        {
          heading: "Çerez nedir?",
          body: [
            "Çerez, tarayıcınıza kaydedilen küçük bir metin dosyasıdır. Oturumun çalışması, güvenlik ve tercihlerinizin hatırlanması için kullanılır.",
          ],
        },
        {
          heading: "Zorunlu çerezler",
          body: [
            "Sitenin açılması, sayfa geçişleri ve çerez tercih kaydı (tarayıcınızdaki yerel depolama) zorunlu niteliktedir. Bunlar olmadan site düzgün çalışmaz.",
          ],
        },
        {
          heading: "Harita / üçüncü taraf",
          body: [
            "“Kabul et” seçeneğiyle iletişim bölümündeki Google Haritalar gömülü haritası yüklenir. Google, kendi çerez ve gizlilik politikasına göre konum ve cihaz verisi işleyebilir. Yalnızca zorunlu çerezleri seçerseniz harita yüklenmez; yol tarifi Google Haritalar’da yeni sekmede açılır.",
          ],
        },
        {
          heading: "Analitik",
          body: [
            "“Kabul et” seçeneğiyle Google Analytics 4 yüklenir. Google Ireland Limited, sayfa görüntüleme ve tıklama ölçümü için çerez kullanabilir. Yalnızca zorunlu çerezleri seçerseniz Analytics yüklenmez. Reklam pikseli kullanılmaz.",
          ],
        },
        {
          heading: "Yönetim",
          body: [
            "Tarayıcı ayarlarından çerezleri silebilir veya engelleyebilirsiniz. Tercihinizi değiştirmek için tarayıcı verilerini temizleyip siteyi yeniden ziyaret etmeniz yeterlidir. Ayrıntılı haklarınız KVKK aydınlatma metnindedir.",
          ],
        },
      ]}
    />
  );
}
