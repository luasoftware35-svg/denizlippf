export function GenuaPartner() {
  return (
    <a
      href="https://www.genuadigital.com/"
      target="_blank"
      rel="noreferrer"
      className="flex min-h-12 w-fit items-center justify-center gap-3 py-2 text-muted transition-colors hover:text-paper"
      aria-label="Genua Digital — dijital partner"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 shrink-0" aria-hidden>
        <rect width="32" height="32" rx="8" fill="currentColor" />
        <path
          d="M21.6 10.4a7.4 7.4 0 1 0 .2 11.2"
          fill="none"
          stroke="#fff"
          strokeWidth="2.15"
          strokeLinecap="round"
        />
        <path
          d="M16.2 16.15h6.7v4.55"
          fill="none"
          stroke="#fff"
          strokeWidth="2.15"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-left leading-tight">
        <span className="block text-[9px] font-semibold uppercase tracking-[0.22em]">
          Dijital partner
        </span>
        <span className="mt-0.5 block text-[13px] font-semibold tracking-[-0.02em] text-paper/70">
          genua
          <span className="font-normal tracking-[-0.03em] text-muted"> digital</span>
        </span>
      </span>
    </a>
  );
}
