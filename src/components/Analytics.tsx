import { gaId } from "@/lib/analytics";
import { CONSENT_KEY } from "@/lib/consent";

export function Analytics() {
  if (!gaId) return null;

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{'ad_storage':'denied','ad_user_data':'denied','ad_personalization':'denied','analytics_storage':'granted'});try{if(localStorage.getItem('${CONSENT_KEY}')==='necessary'){gtag('consent','update',{'analytics_storage':'denied'});}}catch(e){}`,
        }}
      />
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`,
        }}
      />
    </>
  );
}
