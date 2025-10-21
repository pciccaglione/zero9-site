"use client";

import { useEffect, useRef } from "react";
import { LogEntry } from "@/lib/logs";

interface LogModalProps {
  entry: LogEntry | null;
  onClose: () => void;
}

export default function LogModal({ entry, onClose }: LogModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!entry) return;

    // Play video when modal opens
    if (videoRef.current) {
      videoRef.current.play();
    }

    // Handle ESC key
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [entry, onClose]);

  if (!entry) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-6xl mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 system-text text-steel/60 hover:text-steel text-xs transition-colors"
        >
          RETURN TO ARCHIVE
        </button>

        {/* Video Player */}
        <div className="relative bg-black">
          <video
            ref={videoRef}
            src={entry.src}
            poster={entry.poster}
            loop
            muted
            playsInline
            controls
            className="w-full"
            aria-label={`Playing ritual log: ${entry.code}`}
          >
            <source src={entry.src} type="video/mp4" />
          </video>
        </div>

        {/* Transcript (if available) */}
        {entry.transcript && entry.transcript.length > 0 && (
          <div className="mt-6 p-6 bg-obsidian border border-graphite/60">
            <p className="system-text text-steel/60 text-xs mb-4">TRANSCRIPT</p>
            <div className="space-y-2">
              {entry.transcript.map((line, i) => (
                <p key={i} className="font-mono text-white/90 text-sm">
                  {line}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
