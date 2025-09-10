// src/components/GoogleAds.tsx
"use client";

import Script from "next/script";

interface GoogleAdsProps {
  id: string;
}

export const GoogleAds = ({ id }: GoogleAdsProps) => {
  return (
    <>
      {/* Script Google Ads */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
      />
      <Script id="google-ads-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}');
        `}
      </Script>
    </>
  );
};
