import type { Metadata } from "next";
import { ScrollToSection } from "@/components/ScrollToSection";
import { nav } from "@/data/site";

const item = nav[2];

export const metadata: Metadata = {
  title: item.title,
  description: item.description,
  alternates: { canonical: "/" },
  robots: { index: false, follow: true },
  openGraph: {
    title: item.title,
    description: item.description,
    url: item.href,
  },
};

export default function SssPage() {
  return <ScrollToSection id={item.id} />;
}
