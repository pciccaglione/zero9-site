"use client";

import { useState, useEffect } from "react";
import { COPY } from "@/lib/copy";

interface TerminalBootProps {
  onComplete: () => void;
}

export default function TerminalBoot({ onComplete }: TerminalBootProps) {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [bootComplete, setBootComplete] = useState(false);
  const [executing, setExecuting] = useState(false);

  const typewriterSpeed = 35; // ms per character

  useEffect(() => {
    if (currentLine < COPY.boot.length) {
      const line = COPY.boot[currentLine];
      
      if (currentChar < line.length) {
        const timer = setTimeout(() => {
          setCurrentChar(currentChar + 1);
        }, typewriterSpeed);
        return () => clearTimeout(timer);
      } else {
        // Line complete, move to next after brief pause
        const timer = setTimeout(() => {
          setLines([...lines, line]);
          setCurrentLine(currentLine + 1);
          setCurrentChar(0);
        }, 200);
        return () => clearTimeout(timer);
      }
    } else if (!bootComplete) {
      setBootComplete(true);
    }
  }, [currentLine, currentChar, lines, bootComplete]);

  const handleEnter = () => {
    if (!bootComplete) return;
    
    setExecuting(true);
    setLines(COPY.executing);
    
    // Transition to hero after showing executing message
    setTimeout(() => {
      onComplete();
    }, 1200);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Enter" && bootComplete && !executing) {
        handleEnter();
      }
    };

    window.addEventListener("keypress", handleKeyPress);
    return () => window.removeEventListener("keypress", handleKeyPress);
  }, [bootComplete, executing]);

  if (executing) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center space-y-2">
          {lines.map((line, i) => (
            <p key={i} className="system-text text-steel text-sm sm:text-base">
              {line}
            </p>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div 
      className="fixed inset-0 bg-black flex items-center justify-center z-50 cursor-pointer"
      onClick={bootComplete ? handleEnter : undefined}
    >
      <div className="text-center space-y-2 px-4">
        {lines.map((line, i) => (
          <p key={i} className="system-text text-steel text-sm sm:text-base">
            {line}
          </p>
        ))}
        {currentLine < COPY.boot.length && (
          <p className="system-text text-steel text-sm sm:text-base">
            {COPY.boot[currentLine].substring(0, currentChar)}
            {showCursor && <span className="cursor">_</span>}
          </p>
        )}
        {bootComplete && (
          <p className="text-steel/50 text-xs sm:text-sm mt-8 animate-pulse">
            [ PRESS ENTER OR CLICK TO CONTINUE ]
          </p>
        )}
      </div>
    </div>
  );
}
