import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description: `${site.legalName} KVKK aydınlatma metni. Randevu ve teklif için işlenen kişisel veriler hakkında bilgilendirme.`,
  alternates: { canonical: "/kvkk" },
};

export default function KvkkPage() {
  return (
    <LegalPage
      title="KVKK aydınlatma metni"
      intro="6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca veri sorumlusu sıfatıyla bilgilendirme."
      sections={[
        {
          heading: "Veri sorumlusu",
          body: [
            `${site.legalName}, ${site.address}. İletişim: ${site.email} · ${site.phoneDisplay}.`,
          ],
        },
        {
          heading: "İşlenen veriler",
          body: [
            "Kimlik (ad soyad), iletişim (telefon, e-posta), müşteri işlem (araç / panel notu, talep edilen hizmet, randevu yazışması) ve işlem güvenliği verileri (IP, tarayıcı, ziyaret zamanı) işlenebilir. WhatsApp üzerinden gönderdiğiniz fotoğraf ve mesajlar da bu kapsamdadır.",
          ],
        },
        {
          heading: "Hukuki sebep ve amaç",
          body: [
            "Veriler; randevu ve keşif talebinin alınması, fiyat teklifi, işin ifası, yasal yükümlülükler, meşru menfaat kapsamında atölye iletişimi ve bilgi güvenliği için KVKK md. 5 çerçevesinde işlenir. Pazarlama listesine izinsiz ekleme yapılmaz.",
          ],
        },
        {
          heading: "Aktarım",
          body: [
            "Formu WhatsApp üzerinden gönderdiğinizde ad, telefon ve notunuz Meta Platforms Ireland Limited / WhatsApp altyapısına iletilir. Harita ve (onayınız varsa) Google Analytics için Google Ireland Limited çerez ve teknik verileri işleyebilir. Yasal zorunluluk halinde yetkili kamu kurumlarına; barındırma ve bilişim hizmeti alınan tedarikçilere gizlilik taahhüdü altında aktarım yapılabilir.",
          ],
        },
        {
          heading: "Saklama süresi",
          body: [
            "Randevu ve teklif yazışmaları, iş ilişkisinin gerektirdiği süre ve ilgili mevzuattaki saklama süreleri boyunca tutulur. Talebiniz üzerine, kanuni istisnalar saklı kalmak kaydıyla silinir veya anonim hale getirilir.",
          ],
        },
        {
          heading: "Haklarınız",
          body: [
            `KVKK md. 11 kapsamındaki haklarınızı (öğrenme, düzeltme, silme, aktarımı öğrenme, itiraz, zarar halinde tazmin) yazılı olarak veya ${site.email} / ${site.phoneDisplay} üzerinden kullanabilirsiniz. Başvurular yasal süre içinde yanıtlanır.`,
          ],
        },
      ]}
    />
  );
}
