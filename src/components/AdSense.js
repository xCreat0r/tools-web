"use client";

import { useEffect, useRef, useState } from "react";

export default function AdSense({ 
  adSlot, 
  adFormat = "auto", 
  fullWidthResponsive = true,
  style = { display: "block" }
}) {
  const adClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
  const adRef = useRef(null);
  const containerRef = useRef(null);
  const pushedRef = useRef(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!adSlot || !adClient) {
      return;
    }

    // Check if container is visible and has width
    const checkVisibility = () => {
      if (!containerRef.current) return false;
      
      const rect = containerRef.current.getBoundingClientRect();
      const hasWidth = rect.width > 0;
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      
      return hasWidth && isInViewport;
    };

    // Use Intersection Observer to detect when ad container is visible
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

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [adSlot, adClient]);

  useEffect(() => {
    if (!adSlot || !adClient || !isVisible || pushedRef.current) {
      return;
    }

    // Wait for AdSense script to load and container to be ready
    const initAd = () => {
      if (!adRef.current || !containerRef.current) {
        return false;
      }

      // Check if container has width
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

    // Try to initialize immediately
    if (initAd()) {
      return;
    }

    // Retry with delays to ensure script is loaded and container is ready
    const timers = [
      setTimeout(() => initAd(), 100),
      setTimeout(() => initAd(), 500),
      setTimeout(() => initAd(), 1000),
    ];

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [adSlot, adClient, isVisible]);

  if (!adSlot || !adClient) {
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

