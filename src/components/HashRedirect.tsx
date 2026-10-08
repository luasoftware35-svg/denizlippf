"use client";

import { useEffect } from "react";
import { hashRoutes } from "@/data/site";

export function HashRedirect() {
  useEffect(() => {
    function go() {
      const id = window.location.hash.replace(/^#/, "");
      const dest = hashRoutes[id];
      if (!dest || window.location.pathname === dest) return;
      window.location.replace(dest);
    }
    go();
    window.addEventListener("hashchange", go);
    return () => window.removeEventListener("hashchange", go);
  }, []);

  return null;
}
