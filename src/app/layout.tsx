import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { CookieConsent } from "@/components/CookieConsent";
import { ScrollProgress } from "@/components/ScrollProgress";
import { googleSiteVerification } from "@/lib/analytics";
import { seo } from "@/lib/seo";
import { site } from "@/data/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: seo.title,
    template: "%s | Inside",
  },
  description: seo.description,
  keywords: [...seo.keywords],
  applicationName: "Inside Denizli Göçük ve PPF",
  authors: [{ name: site.legalName, url: site.domain }],
  creator: site.legalName,
  publisher: site.legalName,
  category: "Otomotiv",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: site.domain,
    siteName: "Inside Denizli Göçük ve PPF",
    title: seo.title,
    description: seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: { icon: "/favicon.svg", apple: "/images/favicon.png" },
  formatDetection: { telephone: true, address: true, email: true },
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
  other: {
    "geo.region": "TR-20",
    "geo.placename": "Denizli",
    "geo.position": `${site.geo.lat};${site.geo.lng}`,
    ICBM: `${site.geo.lat}, ${site.geo.lng}`,
  },
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
        <ScrollProgress />
        {children}
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
