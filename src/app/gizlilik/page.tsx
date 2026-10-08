import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: `${site.name} gizlilik politikası. Web sitesi, randevu formu ve WhatsApp iletişiminden toplanan bilgilerin kullanımı.`,
  alternates: { canonical: "/gizlilik" },
};

export default function GizlilikPage() {
  return (
    <LegalPage
      title="Gizlilik politikası"
      intro={`${site.legalName} olarak denizlippf.com ziyaretçilerinin gizliliğini yükümlülük kabul ederiz.`}
      sections={[
        {
          heading: "Kapsam",
          body: [
            "Bu politika; denizlippf.com alan adı, randevu formu, WhatsApp hattı ve sitedeki Google Haritalar gömülü alanından toplanan bilgileri kapsar.",
          ],
        },
        {
          heading: "Toplanan bilgiler",
          body: [
            "Ad soyad, telefon, hizmet tercihi ve araç / panel notu sizin ilettiğiniz ölçüde kaydedilir. Sunucu günlüklerinde IP adresi, tarayıcı türü ve ziyaret zamanı teknik güvenlik amacıyla tutulabilir.",
          ],
        },
        {
          heading: "Kullanım amacı",
          body: [
            "Bilgiler yalnızca keşif, randevu, teklif ve iş takibi için kullanılır. Üçüncü kişilere ticari amaçla satılmaz veya kiralanmaz.",
          ],
        },
        {
          heading: "Saklama ve güvenlik",
          body: [
            "İletişim TLS/SSL ile şifrelenir. Form WhatsApp’a yönlendiğinde mesaj, sizin cihazınız ile WhatsApp politikalarına tabidir. Yetkisiz erişime karşı makul teknik ve idari tedbirler uygulanır.",
          ],
        },
        {
          heading: "Haklarınız",
          body: [
            `Kişisel verilerinize ilişkin taleplerinizi ${site.email} adresine iletebilirsiniz. Ayrıntılı metin KVKK aydınlatma sayfasındadır.`,
          ],
        },
      ]}
    />
  );
}
