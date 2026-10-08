"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { shopIsOpen } from "@/lib/hours";

export function HoursLine({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const tick = () => setOpen(shopIsOpen());
    tick();
    const id = window.setInterval(tick, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className={className}>
      {site.hours}
      {open === null ? null : (
        <span className={open ? "text-gold" : "text-muted"}>
          {" "}
          · {open ? "Şu an açık" : "Şu an kapalı"}
        </span>
      )}
    </span>
  );
}
