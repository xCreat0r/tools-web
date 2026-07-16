import type { ReactNode } from "react";
import AdSense from "@/components/AdSense";

interface AdLayoutProps {
  children: ReactNode;
  sidebarSlot?: string;
  bottomSlot?: string;
}

export default function AdLayout({
  children,
  sidebarSlot,
  bottomSlot,
}: AdLayoutProps) {
  return (
    <div>
      {/* Desktop: two columns */}
      <div className="hidden md:grid md:grid-cols-[1fr_300px] md:gap-6 md:items-start">
        <div>{children}</div>
        {sidebarSlot && (
          <div className="sticky top-4">
            <AdSense adSlot={sidebarSlot} adFormat="rectangle" />
          </div>
        )}
      </div>

      {/* Mobile: single column */}
      <div className="md:hidden space-y-6">
        <div>{children}</div>
        {sidebarSlot && <AdSense adSlot={sidebarSlot} adFormat="rectangle" />}
        {bottomSlot && <AdSense adSlot={bottomSlot} adFormat="horizontal" />}
      </div>

      {/* Desktop bottom ad */}
      {bottomSlot && (
        <div className="hidden md:block mt-6">
          <AdSense adSlot={bottomSlot} adFormat="horizontal" />
        </div>
      )}
    </div>
  );
}
