"use client";

import React, { useState, useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

export default function LoadingScreen() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [display, setDisplay] = useState(true);
  const [prevPath, setPrevPath] = useState(pathname);

  // Synchronous phase: If path changed, immediately set loading to true
  // This runs during the render phase, preventing the "flash" of content
  if (pathname !== prevPath) {
    setPrevPath(pathname);
    setLoading(true);
    setDisplay(true);
  }

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
      setTimeout(() => setDisplay(false), 300); // 300ms allows the CSS fade-out transition to finish
    };

    if (document.readyState === "complete") {
      setLoading(false);
      const displayTimer = setTimeout(() => setDisplay(false), 300);
      return () => {
        clearTimeout(displayTimer);
      };
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, [pathname]);

  if (!display) return null;

  return (
    <div 
      className={`fixed inset-0 z-[10000] bg-[#121212] flex items-center justify-center transition-opacity duration-400 ease-out ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <style>{`
        @keyframes pulse {
          0% { opacity: 0.4; transform: scale(0.95); }
          50% { opacity: 1; transform: scale(1.05); }
          100% { opacity: 0.4; transform: scale(0.95); }
        }
        .pulse-logo {
          animation: pulse 1.5s ease-in-out infinite;
        }
      `}</style>
      <div className="relative w-32 h-32 md:w-48 md:h-48">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="/assets/images/images/Cometa rosie.png" 
          alt="Loading..." 
          className="w-full h-full object-contain pulse-logo"
        />
      </div>
    </div>
  );
}
