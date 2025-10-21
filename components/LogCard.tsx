"use client";

import { LogEntry } from "@/lib/logs";

interface LogCardProps {
  entry: LogEntry;
  onOpen: (entry: LogEntry) => void;
}

export default function LogCard({ entry, onOpen }: LogCardProps) {
  const formatDuration = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div 
      className="group border border-graphite/60 hover:border-graphite/80 transition-all duration-200 bg-obsidian cursor-pointer"
      onClick={() => onOpen(entry)}
    >
      {/* Video/Poster */}
      <div className="relative aspect-video bg-black overflow-hidden">
        <video
          poster={entry.poster}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          aria-label={`Ritual log video: ${entry.code}`}
        >
          <source src={entry.src} type="video/mp4" />
        </video>
        
        {/* Overlay Code */}
        <div className="absolute top-4 left-4 bg-black/40 px-2 py-1">
          <p className="system-text text-white text-[12px] tracking-wide2">
            {entry.code}
          </p>
        </div>
      </div>

      {/* Meta Block */}
      <div className="p-6 space-y-2">
        <div className="space-y-1 font-mono text-[13px] text-white/80">
          <p>LOCATION : {entry.location}</p>
          {entry.conditions && <p>CONDITIONS : {entry.conditions}</p>}
          <p>UNIT : {entry.unit}</p>
          <p>DURATION : {formatDuration(entry.durationSec)}</p>
        </div>

        {/* CTA */}
        <div className="pt-4 flex justify-end">
          <span className="system-text text-white/80 text-xs group-hover:text-white transition-colors border-b border-steel/30 group-hover:border-white/50 pb-1">
            EXECUTE VIEW →
          </span>
        </div>
      </div>
    </div>
  );
}
