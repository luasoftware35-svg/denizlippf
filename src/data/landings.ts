import { site } from "./site";

export const serviceNav = [
  { href: "/denizli-gocuk", label: "Denizli Göçük" },
  { href: "/denizli-ppf", label: "Denizli PPF kaplama" },
] as const;

export const gocukLanding = {
  path: "/denizli-gocuk",
  title: "Denizli Göçük Düzeltme | Boyasız PDR | Inside",
  description:
    "Denizli göçük düzeltme — Merkezefendi’de boyasız göçük (PDR). Kapı izi, dolu, taş darbesi. Inside, 2017’den beri. 0 536 270 07 95.",
  kicker: "Denizli göçük",
  h1: "Denizli Göçük Düzeltme",
  lead: "Boyasız göçük düzeltme (PDR). Orijinal boya kalır, araç değer kaybetmez. Merkezefendi Akçeşme’de, 2017’den beri.",
  image: "/images/frame-pdr.jpg",
  imageAlt: "Denizli göçük düzeltme — Inside boyasız PDR atölyesi",
  wa: "Merhaba, Denizli göçük düzeltme için keşif ve randevu istiyorum.",
  points: [
    "Boyasız göçük düzeltme (PDR)",
    "Kapı izi, park darbesi, market arabası",
    "Dolu hasarı ve çoklu göçük",
    "PPF kaplı panellerde kontrollü müdahale",
  ],
  sections: [
    {
      heading: "Denizli’de boyasız göçük nasıl düzeltilir?",
      body: [
        "Denizli göçük işinin çoğu boyasız göçük düzeltme (PDR) ile biter. Panelin arkasından çubukla veya kontrollü çekme ile metal eski formuna alınır. Macun, zımpara ve boyahane yoktur; şasi boya kalınlığı ve ekspertiz orijinal okumaya devam eder.",
        "Aramalarda denizli gocuk olarak da yazılır; kastedilen aynı iştir: Inside’de Denizli göçük düzeltme, Merkezefendi Akçeşme atölyesinde randevuyla yapılır.",
      ],
    },
    {
      heading: "Hangi göçükler düzelir?",
      body: [
        "Park darbesi, kapı izi, dolu, taş sıçraması ve çamurluk–kaput göçükleri günlük işimiz. Boyanın çatlamadığı, kopmadığı göçüklerde PDR yeter. Boya gerilmiş veya metal yırtılmışsa sınırı keşifte söyleriz; uydurma vaat yok.",
      ],
    },
    {
      heading: "Denizli göçük fiyatı",
      body: [
        "Fiyat göçüğün çapına, paneline ve boyanın sağlamlığına göre çıkar. WhatsApp’tan net fotoğraf çoğu zaman yeter; kesin rakam gün ışığında netleşir. Keşif ücretsizdir.",
      ],
    },
    {
      heading: "Hangi ilçelerden geliniyor?",
      body: [
        "Atölye Merkezefendi Akçeşme’de, Zafer Caddesi No:145/A, 9. Noter arkasında. Pamukkale, Servergazi, Çivril ve Acıpayam’dan araçlar randevuyla gelir. Denizli göçük düzeltme için aynı gün dönüş hedeflenir.",
      ],
    },
  ],
  faqs: [
    {
      q: "Denizli göçük düzeltme nerede yapılır?",
      a: `Inside, ${site.address}. Denizli göçük ve boyasız göçük (PDR) için Pazartesi–Cumartesi 08:00–19:30, Pazar kapalı.`,
    },
    {
      q: "Denizli gocuk ile denizli göçük aynı mı?",
      a: "Evet. Denizli gocuk, denizli göçük ve boyasız göçük düzeltme aynı hizmeti tarif eder. Inside’de PDR ile çalışılır.",
    },
    {
      q: "Boyasız mı, boyalı mı?",
      a: "Hedef boyasızdır. Boyanın sağlam olduğu göçüklerde orijinal boyaya dokunulmaz. Çatlak veya kopuk boyada dürüstçe boya gerekir denir.",
    },
  ],
  related: { href: "/denizli-ppf", label: "Denizli PPF kaplama" },
} as const;

export const ppfLanding = {
  path: "/denizli-ppf",
  title: "Denizli PPF Kaplama | Inside Merkezefendi",
  description:
    "Denizli PPF kaplama Inside atölyesinde. Propel 190 mikron boya koruma filmi, tam ön ve tam araç, 7 yıl garanti. Merkezefendi Akçeşme. 0 536 270 07 95.",
  kicker: "Denizli PPF kaplama",
  h1: "Denizli PPF Kaplama",
  lead: "Denizli PPF kaplama, boyanın üstüne yapışan şeffaf koruma filmidir. Inside’de Propel 190 mikron uygulanır. 7 yıl garanti, Merkezefendi Akçeşme.",
  image: "/images/frame-ppf.jpg",
  imageAlt: "Denizli PPF kaplama — Inside Propel 190 mikron uygulama",
  wa: "Merhaba, Denizli PPF kaplama için keşif ve randevu istiyorum.",
  points: [
    "Propel 190 mikron TPU film",
    "7 yıl garanti ayrıcalığı",
    "Tampon, tam ön ve tam araç PPF",
    "Far, eşik ve ayna koruması",
  ],
  sections: [
    {
      heading: "Denizli PPF nedir?",
      body: [
        "Denizli PPF, aracın boyasına yapıştırılan şeffaf TPU koruma filmidir. Inside’de Propel 190 mikron kullanılır. Kaput, tampon ve çamurluk taş yer; otopark sürtünmesi ve fırçalı yıkama boyayı çizmez. Renk değişmez, film görünmez kalır.",
      ],
    },
    {
      heading: "Hangi paketler var?",
      body: [
        "Tampon ve ayna, tam ön (kaput–çamurluk–tampon–ayna) veya tam araç. Far ve eşik ayrı eklenir. Yeni teslim ve yüksek değerli araçlarda tam ön veya tam araç tercih edilir. Kesim kalıpla, uygulama tozsuz kabinde yapılır.",
      ],
    },
    {
      heading: "Denizli PPF fiyatı ve garanti",
      body: [
        "Fiyat kaplanacak alana göre değişir; tampon ile tam araç aynı kalem değildir. Propel uygulamalarında 7 yıl garanti ayrıcalığı vardır: kabarma, kenar kalkması ve üretim hatası kapsam içindedir. Göçük varsa önce Denizli göçük düzeltme, sonra taze film oturtulur.",
      ],
    },
    {
      heading: "Denizli PPF nerede uygulanır?",
      body: [
        "Denizli PPF kaplama Merkezefendi Akçeşme’de, Zafer Caddesi No:145/A, 9. Noter arkasında yapılır. Film tozsuz ortamda kesilir ve yapıştırılır. Pamukkale ve Servergazi’den randevuyla gelinir. Pazartesi–Cumartesi 08:00–19:30, Pazar kapalı.",
      ],
    },
    {
      heading: "PPF ile cam filmi aynı iş değil",
      body: [
        "Denizli PPF kaplama boyayı korur: kaput, tampon, çamurluk ve istenirse tüm araç. Cam filmi cama yapışır, içeriği gölgeler. Inside’de iş boya koruma filmidir; Propel 190 mikron TPU, şeffaf kalır, rengi değiştirmez.",
      ],
    },
  ],
  faqs: [
    {
      q: "Denizli PPF kaplama nerede yapılır?",
      a: `Denizli PPF kaplama Inside atölyesinde uygulanır: ${site.address}. Propel 190 mikron, 7 yıl garanti. Randevuyla, Pazartesi–Cumartesi 08:00–19:30.`,
    },
    {
      q: "Denizli PPF kaplama fiyatı neye göre çıkar?",
      a: "Fiyat kaplanacak parçaya göre değişir. Tampon koruma, tam ön ve tam araç aynı kalem değildir. Keşif ücretsizdir; WhatsApp’tan panel fotoğrafı çoğu zaman yeter, net rakam araç gün ışığındayken söylenir.",
    },
    {
      q: "Denizli PPF ne kadar sürer?",
      a: "Tampon veya nokta koruma çoğu zaman aynı gün. Tam ön PPF bir–üç gün; tam araçta film oturması ve kenar kontrolü için randevu planlanır.",
    },
    {
      q: "PPF üzerine göçük düzeltilir mi?",
      a: "Çoğu park göçüğünde film sökülmeden PDR yapılır. Yapıştırmalı çekme gereken işlerde ilgili parça ayrıca değerlendirilir. Bu yüzden göçük ve Denizli PPF aynı atölyede tutulur.",
    },
  ],
  related: { href: "/denizli-gocuk", label: "Denizli göçük düzeltme" },
} as const;

export const landings = [gocukLanding, ppfLanding] as const;
