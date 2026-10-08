import type { Metadata } from "next";
import { ScrollToSection } from "@/components/ScrollToSection";
import { nav } from "@/data/site";

const item = nav[0];

export const metadata: Metadata = {
  title: item.title,
  description: item.description,
  alternates: { canonical: item.href },
  openGraph: {
    title: item.title,
    description: item.description,
    url: item.href,
  },
};

export default function HakkimizdaPage() {
  return <ScrollToSection id={item.id} />;
}
