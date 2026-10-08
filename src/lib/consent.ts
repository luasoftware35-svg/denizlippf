export const CONSENT_KEY = "inside-cookie-consent";
export const CONSENT_EVENT = "inside-consent";

export type Consent = "all" | "necessary";

export function readConsent(): Consent | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    if (v === "all" || v === "necessary") return v;
  } catch {
    /* ignore */
  }
  return null;
}

export function writeConsent(value: Consent) {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new Event(CONSENT_EVENT));
}
