import Image from "next/image";

export function Shot({
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
  return (
    <div className={`group relative aspect-[4/5] overflow-hidden bg-bg-2 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="img-zoom object-cover object-center"
      />
    </div>
  );
}
