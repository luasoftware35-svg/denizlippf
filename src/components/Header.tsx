"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, site, waLink } from "@/data/site";

const items = [{ href: "#ust", label: "Anasayfa" }, ...nav];

export function Header({ overlay = false }: { overlay?: boolean }) {
  const [solid, setSolid] = useState(!overlay);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#ust");

  useEffect(() => {
    if (!overlay) return;
    const onScroll = () => setSolid(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlay]);

  useEffect(() => {
    if (!overlay) return;
    const ids = items.map((item) => item.href.slice(1));
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0.1, 0.25, 0.5] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [overlay]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`header-in fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid || open ? "bg-white/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div
        className={`flex items-center px-6 py-4 lg:px-10 ${overlay ? "lg:w-[58%]" : "w-full"}`}
      >
        <Link href="/" className="flex shrink-0 items-center transition-opacity hover:opacity-70">
          <Image
            src="/images/logo.png"
            alt="Inside PDR-PPF"
            width={180}
            height={47}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="ml-auto hidden items-center gap-7 pr-6 lg:flex">
          {items.map((item) => {
            const href = overlay ? item.href : `/${item.href}`;
            return (
              <Link
                key={item.href}
                href={href}
                onClick={() => setActive(item.href)}
                className={`nav-link text-[15px] transition-colors ${
                  overlay && active === item.href
                    ? "is-active font-semibold text-paper"
                    : "text-[#777] hover:text-paper"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center lg:hidden"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute inset-x-0 top-0 h-px bg-paper transition duration-300 ${open ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span
              className={`absolute inset-x-0 bottom-0 h-px bg-paper transition duration-300 ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-white px-6 py-8 lg:hidden">
          <nav className="flex flex-col gap-5">
            {items.map((item, i) => (
              <Link
                key={item.href}
                href={overlay ? item.href : `/${item.href}`}
                className="hero-in text-2xl"
                style={{ animationDelay: `${i * 0.05}s` }}
                onClick={() => {
                  setActive(item.href);
                  setOpen(false);
                }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${site.phoneTel}`}
              className="hero-in mt-4 text-[15px] text-muted"
              style={{ animationDelay: "0.28s" }}
            >
              {site.phoneDisplay}
            </a>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="hero-in text-[15px] text-muted"
              style={{ animationDelay: "0.3s" }}
            >
              Instagram @{site.instagram}
            </a>
            <a
              href={waLink()}
              className="ghost-btn hero-in mt-2 w-fit"
              style={{ animationDelay: "0.34s" }}
              onClick={() => setOpen(false)}
            >
              WhatsApp
              <span aria-hidden>→</span>
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
