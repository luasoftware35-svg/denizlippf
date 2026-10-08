import type { ReactNode } from "react";
import { Contact } from "@/components/Contact";
import { Copy } from "@/components/Copy";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { WhatsApp } from "@/components/WhatsApp";
import { Why } from "@/components/Why";

export function HomeShell({ children }: { children?: ReactNode }) {
  return (
    <>
      <JsonLd />
      <Header overlay />
      <main>
        <Hero />
        <Why />
        <Services />
        <Process />
        <Gallery />
        <Copy />
        <Faq />
        <Contact />
      </main>
      {children}
      <Footer />
      <WhatsApp />
    </>
  );
}
