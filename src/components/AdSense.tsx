"use client";

import { useEffect, useRef, useState } from "react";

interface AdSenseProps {
  adSlot?: string;
  adFormat?: string;
  fullWidthResponsive?: boolean;
  style?: React.CSSProperties;
}

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export default function AdSense({
  adSlot,
  adFormat = "auto",
  fullWidthResponsive = true,
  style = { display: "block" },
}: AdSenseProps) {
  const adClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
  const adRef = useRef<HTMLModElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pushedRef = useRef(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!adSlot || !adClient) {
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    return () => {
      observer.unobserve(container);
    };
  }, [adSlot, adClient]);

  useEffect(() => {
    if (!adSlot || !adClient || !isVisible || pushedRef.current) {
      return;
    }

    const initAd = () => {
      if (!adRef.current || !containerRef.current) {
        return false;
      }

      const rect = containerRef.current.getBoundingClientRect();
      if (rect.width === 0) {
        return false;
      }

      try {
        if (window.adsbygoogle) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          pushedRef.current = true;
          return true;
        }
      } catch (err) {
        console.error("AdSense error:", err);
      }
      return false;
    };

    if (initAd()) {
      return;
    }

    const timers = [
      setTimeout(() => initAd(), 100),
      setTimeout(() => initAd(), 500),
      setTimeout(() => initAd(), 1000),
    ];

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [adSlot, adClient, isVisible]);

  const adsenseEnabled = process.env.NEXT_PUBLIC_ADSENSE_ENABLED === "true";

  if (!adsenseEnabled || !adSlot || !adClient) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="my-4 flex justify-center"
      style={{ minWidth: "320px", minHeight: "100px" }}
    >
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{
          ...style,
          display: "block",
          minWidth: "320px",
          minHeight: "100px",
        }}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
      />
    </div>
  );
}
