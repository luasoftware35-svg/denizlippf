import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import { CookieConsent } from "@/components/CookieConsent";
import { site } from "@/data/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
});

const title = "Denizli Göçük Düzeltme ve PPF | Inside PDR-PPF";
const description =
  "Inside — Denizli göçük düzeltme ve Denizli PPF kaplama. Propel 190 mikron, 7 yıl garanti. 2017’den beri Merkezefendi Akçeşme’de boyasız göçük, şeffaf boya koruma filmi ve seramik kaplama.";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: title,
    template: "%s | Inside PDR-PPF",
  },
  description,
  keywords: [
    "denizli göçük",
    "denizli göçük düzeltme",
    "denizli boyasız göçük düzeltme",
    "denizli ppf",
    "denizli ppf kaplama",
    "denizli boya koruma filmi",
    "pamukkale göçük",
    "merkezefendi ppf",
    "boyasız göçük düzeltme denizli",
    "inside ppf denizli",
    "inside pdr denizli",
    "merkezefendi göçük",
  ],
  authors: [{ name: site.name, url: site.domain }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: site.domain,
    siteName: site.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white font-sans text-paper">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
