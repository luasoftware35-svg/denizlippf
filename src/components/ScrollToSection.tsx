"use client";

import { useLayoutEffect } from "react";

export function ScrollToSection({ id }: { id: string }) {
  useLayoutEffect(() => {
    if (id === "ust") {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "instant" });
  }, [id]);

  return null;
}
