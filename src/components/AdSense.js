"use client";

import { useEffect } from "react";

export default function AdSense({ 
  adSlot, 
  adFormat = "auto", 
  fullWidthResponsive = true,
  style = { display: "block" }
}) {
  const adClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  useEffect(() => {
    if (!adSlot || !adClient) {
      return;
    }

    try {
      // Push ad configuration to AdSense
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, [adSlot, adClient]);

  if (!adSlot || !adClient) {
    return null;
  }

  return (
    <div className="my-4 flex justify-center">
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
      />
    </div>
  );
}

