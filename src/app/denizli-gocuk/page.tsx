import type { Metadata } from "next";
import { ServiceJsonLd } from "@/components/ServiceJsonLd";
import { ServiceLanding } from "@/components/ServiceLanding";
import { gocukLanding } from "@/data/landings";

export const metadata: Metadata = {
  title: { absolute: gocukLanding.title },
  description: gocukLanding.description,
  keywords: [
    "denizli göçük",
    "denizli gocuk",
    "denizli göçük düzeltme",
    "denizli boyasız göçük",
    "pdr denizli",
    "merkezefendi göçük",
  ],
  alternates: { canonical: gocukLanding.path },
  openGraph: {
    title: gocukLanding.title,
    description: gocukLanding.description,
    url: gocukLanding.path,
  },
};

export default function DenizliGocukPage() {
  return (
    <>
      <ServiceJsonLd page={gocukLanding} />
      <ServiceLanding page={gocukLanding} />
    </>
  );
}
