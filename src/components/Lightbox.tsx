"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export type LightImage = { src: string; alt: string };

export function Lightbox({
  images,
  index,
  onClose,
  onIndex,
}: {
  images: readonly LightImage[];
  index: number;
  onClose: () => void;
  onIndex: (next: number) => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const current = images[index];
  const many = images.length > 1;

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (!many) return;
      if (event.key === "ArrowRight") onIndex((index + 1) % images.length);
      if (event.key === "ArrowLeft") onIndex((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [images.length, index, many, onClose, onIndex]);

  if (!current) return null;

  return (
    <div
      className="lightbox-in fixed inset-0 z-[100] flex items-center justify-center bg-ink/92 p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={current.alt}
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        className="absolute top-4 right-4 z-10 min-h-11 px-3 text-[13px] tracking-wide text-white/80 hover:text-white"
        onClick={onClose}
      >
        Kapat
      </button>
      {many ? (
        <p className="absolute top-5 left-5 text-[12px] tracking-[0.18em] text-white/60">
          {index + 1} / {images.length}
        </p>
      ) : null}
      <div
        className="lightbox-frame relative h-[min(78vh,920px)] w-[min(92vw,760px)]"
        onClick={(event) => event.stopPropagation()}
      >
        <Image
          src={current.src}
          alt={current.alt}
          fill
          sizes="92vw"
          className="object-contain"
          priority
        />
        {many ? (
          <>
            <button
              type="button"
              className="absolute top-1/2 left-0 grid h-11 w-11 -translate-y-1/2 place-items-center text-2xl text-white"
              aria-label="Önceki fotoğraf"
              onClick={() => onIndex((index - 1 + images.length) % images.length)}
            >
              ‹
            </button>
            <button
              type="button"
              className="absolute top-1/2 right-0 grid h-11 w-11 -translate-y-1/2 place-items-center text-2xl text-white"
              aria-label="Sonraki fotoğraf"
              onClick={() => onIndex((index + 1) % images.length)}
            >
              ›
            </button>
          </>
        ) : null}
      </div>
      <p className="absolute right-5 bottom-5 left-5 text-center text-[13px] text-white/70">
        {current.alt}
      </p>
    </div>
  );
}
