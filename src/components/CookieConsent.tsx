"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { readConsent, writeConsent } from "@/lib/consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!readConsent());
  }, []);

  function choose(value: "all" | "necessary") {
    writeConsent(value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] border-t border-line bg-white/95 px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] shadow-[0_-10px_40px_rgba(0,0,0,0.06)] backdrop-blur-md sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-4 md:flex-row md:items-center md:justify-between md:pr-20">
        <p className="max-w-2xl text-[13px] leading-6 text-muted">
          Sitede zorunlu çerezler kullanılır. Harita için Google çerezlerine izin
          verebilirsiniz. Ayrıntı:{" "}
          <Link href="/cerez-politikasi" className="text-paper underline-offset-2 hover:underline">
            Çerez politikası
          </Link>
          {" · "}
          <Link href="/kvkk" className="text-paper underline-offset-2 hover:underline">
            KVKK
          </Link>
          .
        </p>
        <div className="flex flex-wrap gap-3">
          <button type="button" onClick={() => choose("necessary")} className="ghost-btn !px-4 !py-2.5 text-[13px]">
            Yalnızca zorunlu
          </button>
          <button type="button" onClick={() => choose("all")} className="gold-btn !px-4 !py-2.5 text-[13px]">
            Kabul et
          </button>
        </div>
      </div>
    </div>
  );
}
