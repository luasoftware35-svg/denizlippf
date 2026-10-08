import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Kullanım Koşulları",
  description: `${site.legalName} web sitesi kullanım koşulları. Randevu, keşif ve içerik kullanımı.`,
  alternates: { canonical: "/kullanim-kosullari" },
};

export default function KosullarPage() {
  return (
    <LegalPage
      title="Kullanım koşulları"
      intro={`${site.domain.replace("https://", "")} adresini kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız.`}
      sections={[
        {
          heading: "Hizmet",
          body: [
            "Site, Denizli’de boyasız göçük düzeltme, PPF ve seramik kaplama hakkında bilgilendirme ve randevu talebi içindir. Sitedeki metinler genel niteliktedir; araç başı keşif bağlayıcı teklifin yerini tutmaz.",
          ],
        },
        {
          heading: "Randevu ve fiyat",
          body: [
            "Form veya WhatsApp ile iletilen talep, keşif randevusu niteliğindedir. Net fiyat, göçüğün paneli, boya durumu ve kaplanacak alana göre atölyede veya fotoğraflı inceleme sonrası netleşir. Stok, film ve randevu müsaitliği değişiklik gösterebilir.",
          ],
        },
        {
          heading: "İçerik ve marka",
          body: [
            "Logo, fotoğraf ve metinler Inside’e aittir. İzinsiz kopyalanamaz, ticari amaçla kullanılamaz. Atölye görselleri örnek niteliğindedir; her araç ve iş aynı görünümü garanti etmez.",
          ],
        },
        {
          heading: "Sorumluluk",
          body: [
            "Site kesintisiz veya hatasız yayın taahhüdü vermez. Harici bağlantılar (Google, WhatsApp) ilgili hizmetin kendi koşullarına tabidir. İşçilik ve film garantisi, keşifte yazılı veya sözlü olarak ayrıca belirtilir.",
          ],
        },
        {
          heading: "Uygulanacak hukuk",
          body: [
            `Bu koşullar Türkiye Cumhuriyeti hukukuna tabidir. Uyuşmazlıklarda Denizli mahkemeleri ve icra daireleri yetkilidir. İletişim: ${site.email} · ${site.phoneDisplay}.`,
          ],
        },
      ]}
    />
  );
}
