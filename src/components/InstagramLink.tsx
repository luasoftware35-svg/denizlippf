import { site } from "@/data/site";

export function InstagramLink({
  className = "",
}: {
  className?: string;
}) {
  return (
    <a
      href={site.instagramUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={`Instagram @${site.instagram}`}
      className={`grid h-11 w-11 place-items-center text-paper transition-opacity hover:opacity-60 ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden>
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.2A4.8 4.8 0 1 1 7.2 12 4.8 4.8 0 0 1 12 7.2zm0 2A2.8 2.8 0 1 0 14.8 12 2.8 2.8 0 0 0 12 9.2zM17.65 6.1a1.05 1.05 0 1 1-1.05 1.05 1.05 1.05 0 0 1 1.05-1.05z" />
      </svg>
    </a>
  );
}
