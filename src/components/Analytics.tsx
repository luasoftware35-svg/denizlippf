import { gaId } from "@/lib/analytics";
import { CONSENT_KEY } from "@/lib/consent";

export function Analytics() {
  if (!gaId) return null;

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});try{if(localStorage.getItem('${CONSENT_KEY}')==='all'){gtag('consent','update',{analytics_storage:'granted'});}}catch(e){}`,
        }}
      />
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `gtag('js',new Date());gtag('config','${gaId}',{anonymize_ip:true});`,
        }}
      />
    </>
  );
}
