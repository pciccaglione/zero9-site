"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function AccessPage() {
  useEffect(() => {
    // Add noindex meta tag for privacy
    const metaTag = document.createElement("meta");
    metaTag.name = "robots";
    metaTag.content = "noindex";
    document.head.appendChild(metaTag);

    return () => {
      document.head.removeChild(metaTag);
    };
  }, []);

  return (
    <>
      <Script
        src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=UbPQTM"
        strategy="afterInteractive"
      />
      
      <main className="min-h-screen bg-black flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md space-y-8">
          {/* System Link */}
          <a 
            href="/"
            className="inline-block text-[12px] tracking-[0.04em] bg-black/40 px-2 py-1 border border-white/10 hover:border-white/30 transition-colors system-text text-white/80 hover:text-white"
          >
            0/9_SYSTEM
          </a>

          {/* Header */}
          <div className="space-y-2">
            <h1 className="system-text text-white text-sm">
              0/9_SYSTEM / ACCESS_PROTOCOL
            </h1>
            <p className="system-text text-steel/60 text-xs">
              ACCESS REQUEST : EMAIL_ADDRESS
            </p>
          </div>

          {/* Klaviyo Form */}
          <div className="klaviyo-form-YzNraq"></div>

          {/* Additional Info */}
          <div className="pt-4 border-t border-graphite">
            <p className="system-text text-steel/40 text-xs leading-relaxed">
              You'll be notified when the first UNIT is active.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
