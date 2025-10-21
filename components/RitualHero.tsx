"use client";

import { COPY } from "@/lib/copy";

export default function RitualHero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/video/hero.mp4"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
        <track kind="captions" srcLang="en" label="pre-dawn road; breath; asphalt" />
      </video>

      {/* Overlay with system caption */}
      <div className="absolute inset-0 bg-black/20">
        <div className="absolute top-8 left-8 sm:top-12 sm:left-12">
          <p className="system-text text-white text-xs sm:text-sm tracking-wide2 drop-shadow-lg">
            {COPY.heroOverlay}
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-pulse">
          <p className="system-text text-white/60 text-xs">SCROLL</p>
          <div className="w-px h-12 bg-white/40"></div>
        </div>
      </div>
    </div>
  );
}
