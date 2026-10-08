import type { Metadata } from "next";
import { ServiceJsonLd } from "@/components/ServiceJsonLd";
import { ServiceLanding } from "@/components/ServiceLanding";
import { ppfLanding } from "@/data/landings";

export const metadata: Metadata = {
  title: { absolute: ppfLanding.title },
  description: ppfLanding.description,
  keywords: [
    "denizli ppf",
    "denizli ppf kaplama",
    "propel ppf denizli",
    "boya koruma filmi denizli",
    "tam ön ppf denizli",
    "pamukkale ppf",
  ],
  alternates: { canonical: ppfLanding.path },
  openGraph: {
    title: ppfLanding.title,
    description: ppfLanding.description,
    url: ppfLanding.path,
  },
};

export default function DenizliPpfPage() {
  return (
    <>
      <ServiceJsonLd page={ppfLanding} />
      <ServiceLanding page={ppfLanding} />
    </>
  );
}
