export const site = {
  name: "Inside",
  legalName: "Inside PPF-PDR Denizli",
  domain: "https://denizlippf.com",
  tagline: "Denizli göçük düzeltme ve PPF kaplama",
  phoneDisplay: "0 536 270 07 95",
  phoneTel: "+905362700795",
  whatsapp: "905362700795",
  email: "hello@genuadigital.com",
  instagram: "insidedenizli",
  instagramUrl: "https://www.instagram.com/insidedenizli/",
  ppf: "Propel",
  ppfSpec: "190 mikron",
  ppfWarranty: "7 yıl",
  maps: "https://www.google.com/maps/place/%C4%B0nside+PPF-PDR+Denizli/@37.8123886,29.0667526,17z",
  address: "Akçeşme Mah. Zafer Cd. No:145/A, 9. Noter arkası, 20020 Merkezefendi/Denizli",
  streetAddress: "Akçeşme Mahallesi Zafer Caddesi No:145/A",
  postalCode: "20020",
  city: "Merkezefendi",
  region: "Denizli",
  hours: "Pazartesi–Cumartesi 08:00–19:30 · Pazar kapalı",
  openingHours: "Mo-Sa 08:00-19:30",
  geo: { lat: 37.8123886, lng: 29.0667526 },
  rating: 4.9,
  reviewCount: 120,
  founded: 2017,
} as const;

export const nav = [
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#sss", label: "SSS" },
  { href: "#iletisim", label: "İletişim" },
] as const;

export const legalNav = [
  { href: "/kvkk", label: "KVKK" },
  { href: "/gizlilik", label: "Gizlilik" },
  { href: "/cerez-politikasi", label: "Çerez politikası" },
  { href: "/kullanim-kosullari", label: "Kullanım koşulları" },
] as const;

export const services = [
  {
    id: "gocuk",
    kicker: "PDR · Boyasız onarım",
    title: "Denizli Göçük Düzeltme",
    lead: "Park darbesi, dolu, kapı izi ve taş göçüğü. Orijinal boya kalır, araç değer kaybetmez.",
    points: [
      "Boyasız göçük düzeltme (PDR)",
      "Dolu hasarı ve çoklu göçük",
      "Kapı, çamurluk, kaput, tavan",
      "PPF kaplı panellerde kontrollü müdahale",
    ],
    image: "/images/frame-pdr.jpg",
    alt: "Inside Denizli boyasız göçük düzeltme öncesi ve sonrası",
  },
  {
    id: "ppf",
    kicker: "Paint Protection Film",
    title: "Denizli PPF Kaplama",
    lead: "Propel 190 mikron şeffaf boya koruma filmi. Taş izi, çizik, fırça ve UV’ye karşı görünmez bir zırh.",
    points: [
      "Propel 190 mikron TPU film",
      "7 yıl garanti ayrıcalığı",
      "Ön uç, tam ön ve tam araç PPF",
      "Far, eşik ve ayna koruması",
    ],
    image: "/images/frame-ppf.jpg",
    alt: "Inside Denizli PPF kaplama atölyesi",
  },
] as const;

export const extras = [
  {
    title: "Tam ön PPF",
    text: "Propel 190 mikron. Kaput, çamurluk, tampon ve aynalar — 7 yıl garanti.",
  },
  {
    title: "Tam araç PPF",
    text: "Propel 190 mikron tam araç. Yeni teslim ve yüksek değerli araçlarda 7 yıl koruma.",
  },
  {
    title: "Seramik kaplama",
    text: "PPF sonrası parlaklık ve hidrofobik koruma. Atölyede göçük ve filmle birlikte planlanır.",
  },
  {
    title: "Dolu & çoklu göçük",
    text: "Panel panel, boyasız. Sigorta ve ikinci el ekspertiz sürecine uygun işçilik.",
  },
] as const;

export const reasons = [
  {
    n: "01",
    title: "Boyaya dokunulmaz",
    text: "Denizli göçük işinde hedef orijinal boyayı korumak. Dolgu ve boya yok; metal kendi formuna döner.",
  },
  {
    n: "02",
    title: "PPF görünmez kalır",
    text: "Propel 190 mikron. Doğru kesim ve tozsuz kabin; film kenarı kaybolur, 7 yıl garanti.",
  },
  {
    n: "03",
    title: "İki iş bir çatıda",
    text: "Önce göçük, sonra PPF. Filmi söküp başka ustaya gitmek yok; panel ve film birlikte planlanır.",
  },
  {
    n: "04",
    title: "Denizli’de yerinde",
    text: "Merkezefendi Akçeşme, Pamukkale ve çevre ilçeler. 2017’den beri aynı iş, yeni Inside atölyesinde.",
  },
] as const;

export const steps = [
  {
    n: "01",
    title: "Işık altında keşif",
    text: "Göçük haritası, boya kalınlığı ve PPF ihtiyacı. Fotoğraflı net fiyat, sürpriz yok.",
  },
  {
    n: "02",
    title: "Uygulama",
    text: "Boyasız düzeltme veya kalıp kesim PPF. Toz kontrolü, kenar bitiş, ısı ve yapışma.",
  },
  {
    n: "03",
    title: "Kontrol ve teslim",
    text: "Gün ışığında son tur. Bakım notu, garanti kapsamı ve WhatsApp takip hattı.",
  },
] as const;

export const faqs = [
  {
    q: "Denizli göçük düzeltme boyasız mı yapılıyor?",
    a: "Evet. Inside’de Denizli göçük işlerimizin büyük kısmı boyasız göçük düzeltme (PDR) ile yapılır. Panelin arkasından veya kontrollü çekme ile metal eski formuna alınır; orijinal boya, şasi numarası ve ekspertiz raporu bozulmaz. Boyanın çatladığı, kopmuş veya aşırı gerilmiş göçüklerde ise dürüstçe sınır söylenir.",
  },
  {
    q: "Denizli PPF kaplama nedir, ne işe yarar?",
    a: "PPF (Paint Protection Film) şeffaf bir boya koruma filmidir. Inside’de Propel 190 mikron TPU film kullanırız: kaput, tampon, çamurluk ve istenirse tüm araç. Taş sıçraması, otopark sürtünmesi, fırçalı yıkama ve UV’ye karşı boyayı korur; aracın rengi değişmez. Uygulamada 7 yıl garanti ayrıcalığı vardır.",
  },
  {
    q: "PPF kaplı araçta göçük düzeltilir mi?",
    a: "Evet, çoğu durumda film sökülmeden veya yalnızca ilgili parça yenilenerek düzeltilir. Çubukla arkadan müdahale edilen göçüklerde PPF korunabilir. Yapıştırmalı çekme gereken işlerde film ayrıca değerlendirilir. Göçük ve PPF’yi aynı atölyede tutmamızın nedeni budur.",
  },
  {
    q: "Denizli göçük düzeltme ve PPF fiyatı nasıl çıkar?",
    a: "Fiyat göçüğün çapı, paneli, boyanın sağlamlığı ve PPF’te kaplanacak alana göre değişir. Tampon koruma ile tam araç kaplama aynı kalem değildir. Keşif ücretsizdir; WhatsApp’tan fotoğraf da yeter, net rakam ışık altında netleşir.",
  },
  {
    q: "İşlem ne kadar sürer?",
    a: "Tek bir park göçüğü çoğu zaman aynı gün biter. Dolu hasarı ve tam ön PPF bir–üç gün sürebilir. Tam araç PPF’de film oturması ve kenar kontrolü için randevu planlanır. Teslim saatini keşifte konuşuruz.",
  },
  {
    q: "Denizli göçük düzeltme nerede yapılır?",
    a: "Inside atölyesi Merkezefendi Akçeşme’de, Zafer Caddesi No:145/A, 9. Noter arkasında. Denizli göçük düzeltme ve Denizli PPF için randevuyla çalışıyoruz; Pamukkale, Servergazi, Çivril ve Acıpayam’dan da araç geliyor.",
  },
  {
    q: "Hangi bölgelere hizmet veriyorsunuz?",
    a: "Atölyemiz Merkezefendi Akçeşme’de, 9. Noter arkasında. Pazartesi–Cumartesi 08:00–19:30, Pazar kapalı. Denizli merkez, Pamukkale, Merkezefendi, Servergazi, Çivril, Acıpayam ve çevre ilçeler. Denizli göçük ve Denizli PPF arayan herkes için randevuyla çalışıyoruz.",
  },
  {
    q: "Denizli PPF kaplama nerede yapılır?",
    a: "Denizli PPF Inside atölyesinde uygulanır: Merkezefendi Akçeşme, Zafer Cd. No:145/A, 9. Noter arkası. Propel 190 mikron, 7 yıl garanti. Randevuyla çalışıyoruz.",
  },
  {
    q: "Denizli gocuk ile denizli göçük aynı mı?",
    a: "Evet. Denizli gocuk, denizli göçük ve boyasız göçük düzeltme aynı hizmeti tarif eder. Inside’de PDR ile, Merkezefendi’de yapılır.",
  },
  {
    q: "Garanti var mı?",
    a: "Propel PPF uygulamalarında 7 yıl garanti ayrıcalığı vardır: kabarma, kenar kalkması ve üretim hatası kapsam içindedir. Boyasız göçük düzeltmede işçilik garantisi verilir. Çarpışma ve yeni darbe ayrı bir iştir; onu da aynı gün bakarız.",
  },
] as const;

export function waLink(text?: string) {
  const msg =
    text ??
    "Merhaba, Inside Denizli göçük / PPF için bilgi ve randevu almak istiyorum.";
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
}
