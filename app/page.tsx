"use client";

import { useState, useEffect } from "react";
import TerminalBoot from "@/components/TerminalBoot";
import RitualHero from "@/components/RitualHero";
import UnitCard from "@/components/UnitCard";
import { COPY } from "@/lib/copy";

export default function Home() {
  const [showTerminal, setShowTerminal] = useState(true);

  useEffect(() => {
    // Check if user has already entered in this session
    const hasEntered = sessionStorage.getItem("zero9_entered");
    if (hasEntered) {
      setShowTerminal(false);
    }
  }, []);

  const handleComplete = () => {
    sessionStorage.setItem("zero9_entered", "true");
    setShowTerminal(false);
  };

  return (
    <>
      {showTerminal && (
        <TerminalBoot onComplete={handleComplete} />
      )}
      
      <main className={`${showTerminal ? 'opacity-0' : 'opacity-100'} transition-opacity-600`}>
        {/* Hero Section */}
        <RitualHero />

        {/* Product Units Section */}
        <section className="bg-black py-20 sm:py-28 px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <UnitCard
              code={COPY.units[1].code}
              functionLine={COPY.units[1].function}
              status={COPY.units[1].status}
              href="/unit/01"
              cta={COPY.units[1].cta}
            />
            <UnitCard
              code={COPY.units[2].code}
              functionLine={COPY.units[2].function}
              status={COPY.units[2].status}
              href="/unit/02"
              cta={COPY.units[2].cta}
            />
          </div>
        </section>

        {/* Myth / Creed Section */}
        <section className="bg-obsidian py-24 sm:py-32 px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            {COPY.creed.map((line, i) => (
              <p 
                key={i} 
                className={`${i === COPY.creed.length - 1 ? 'font-mono text-steel text-sm sm:text-base tracking-wide2 uppercase' : 'text-white text-base sm:text-lg leading-relaxed'}`}
              >
                {line}
              </p>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black border-t border-graphite py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="text-center sm:text-left">
                <p className="system-text text-steel text-xs sm:text-sm">
                  {COPY.footer.title}
                </p>
                <p className="system-text text-steel/60 text-xs mt-2">
                  {COPY.footer.copyright}
                </p>
              </div>
              <div className="flex gap-6">
                <a 
                  href="/logs" 
                  className="system-text text-steel/60 hover:text-steel text-xs transition-colors"
                >
                  LOGS
                </a>
                <a 
                  href="/legal/privacy" 
                  className="system-text text-steel/60 hover:text-steel text-xs transition-colors"
                >
                  PRIVACY
                </a>
                <a 
                  href="/legal/terms" 
                  className="system-text text-steel/60 hover:text-steel text-xs transition-colors"
                >
                  TERMS
                </a>
                <a 
                  href="mailto:ops@zero9.co" 
                  className="system-text text-steel/60 hover:text-steel text-xs transition-colors"
                >
                  CONTACT
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
