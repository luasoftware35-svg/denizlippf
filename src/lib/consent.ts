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

export function applyConsent(value: Consent) {
  if (typeof window.gtag !== "function") return;
  window.gtag("consent", "update", {
    analytics_storage: value === "all" ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

export function writeConsent(value: Consent) {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* ignore */
  }
  applyConsent(value);
  window.dispatchEvent(new Event(CONSENT_EVENT));
}
