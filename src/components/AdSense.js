"use client";

import { useEffect, useRef } from "react";

export default function AdSense({ 
  adSlot, 
  adFormat = "auto", 
  fullWidthResponsive = true,
  style = { display: "block" }
}) {
  const adClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
  const adRef = useRef(null);
  const pushedRef = useRef(false);

  useEffect(() => {
    if (!adSlot || !adClient) {
      console.warn("AdSense: Missing adSlot or adClient", { adSlot, adClient });
      return;
    }

    // Wait for AdSense script to load
    const initAd = () => {
      if (pushedRef.current) return;
      
      try {
        if (window.adsbygoogle && window.adsbygoogle.loaded) {
          return;
        }
        
        if (adRef.current && window.adsbygoogle) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          pushedRef.current = true;
        }
      } catch (err) {
        console.error("AdSense error:", err);
      }
    };

    // Try immediately
    initAd();

    // Also try after a short delay to ensure script is loaded
    const timer = setTimeout(() => {
      initAd();
    }, 100);

    return () => clearTimeout(timer);
  }, [adSlot, adClient]);

  if (!adSlot || !adClient) {
    return null;
  }

  return (
    <div className="my-4 flex justify-center min-h-[100px]">
      <ins
        ref={adRef}
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

