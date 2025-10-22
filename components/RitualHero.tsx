"use client";

import { COPY } from "@/lib/copy";
import { useEffect, useRef } from "react";

export default function RitualHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Reset video to beginning and play when component mounts
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was prevented, video will play when user interacts
          console.log("Video autoplay prevented");
        });
      }
    }
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* System Link */}
      <a 
        href="/"
        className="absolute top-4 left-4 z-10 text-[12px] tracking-[0.04em] bg-black/40 px-2 py-1 border border-white/10 hover:border-white/30 transition-colors system-text text-white/80 hover:text-white"
      >
        0/9_SYSTEM
      </a>

      {/* Video Background */}
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
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
