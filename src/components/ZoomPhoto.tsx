"use client";

import { useCallback, useState } from "react";
import { Lightbox } from "./Lightbox";
import { Shot } from "./Shot";

export function ZoomPhoto({
  src,
  alt,
  sizes,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <button
        type="button"
        className="block w-full cursor-zoom-in text-left"
        aria-label={`${alt}. Büyüt`}
        onClick={() => setOpen(true)}
      >
        <Shot src={src} alt={alt} sizes={sizes} priority={priority} className={className} />
      </button>
      {open ? (
        <Lightbox
          images={[{ src, alt }]}
          index={0}
          onClose={close}
          onIndex={() => {}}
        />
      ) : null}
    </>
  );
}
