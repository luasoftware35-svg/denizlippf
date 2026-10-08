import { gaId } from "@/lib/analytics";
import { CONSENT_KEY } from "@/lib/consent";

export function Analytics() {
  if (!gaId) return null;

  const html = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'analytics_storage': 'granted'
});
try {
  if (localStorage.getItem('${CONSENT_KEY}') === 'necessary') {
    gtag('consent', 'update', { 'analytics_storage': 'denied' });
  }
} catch (e) {}
document.write('<script async src="https://www.googletagmanager.com/gtag/js?id=${gaId}"><\\/script>');
gtag('js', new Date());
gtag('config', '${gaId}');
`.trim();

  return <script dangerouslySetInnerHTML={{ __html: html }} />;
}
