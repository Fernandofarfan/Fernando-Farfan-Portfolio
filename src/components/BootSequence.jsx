import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BootSequence = ({ onComplete }) => {
  const [lines, setLines] = useState([]);
  
  const bootLines = [
    { text: "[  OK  ] Started systemd-udevd Kernel Device Manager.", delay: 0 },
    { text: "[  OK  ] Reached target Local File Systems.", delay: 200 },
    { text: "[  OK  ] Listening on Load/Save RF Kill Switch Status.", delay: 400 },
    { text: "[  OK  ] Started Dispatch Password Requests to Console Directory Watch.", delay: 600 },
    { text: "[  OK  ] Reached target Network is Online.", delay: 800 },
    { text: "         Starting FFarfan OS Web Server...", delay: 1100, isHighlight: true },
    { text: "[  OK  ] Loading Backend Developer Modules... 100%", delay: 1400 },
    { text: "[  OK  ] Connecting to Cloud Infrastructure...", delay: 1600 },
    { text: "[  OK  ] Initializing Quantum Database Connections...", delay: 1800 },
    { text: "Welcome to Fernando Farfan Portfolio v1.3.0.", delay: 2100, isHighlight: true },
    { text: "LOGIN: guest@recruiter", delay: 2300, isHighlight: true },
  ];

  useEffect(() => {
    // Check if we've already booted in this session to prevent annoyance
    const hasBooted = sessionStorage.getItem('hasBooted_v1.3');
    if (hasBooted) {
      onComplete();
      return;
    }

    let isMounted = true;
    let timeouts = [];
    
    // Schedule all lines
    bootLines.forEach((line) => {
      const t = setTimeout(() => {
        if (isMounted) setLines(prev => {
          // Prevent duplicates in strict mode
          if (prev.find(p => p.text === line.text)) return prev;
          return [...prev, line]
        });
      }, line.delay);
      timeouts.push(t);
    });

    // Finish sequence
    const tFinal = setTimeout(() => {
      if (isMounted) {
        sessionStorage.setItem('hasBooted_v1.3', 'true');
        onComplete();
      }
    }, 2800);
    timeouts.push(tFinal);

    return () => { 
      isMounted = false;
      timeouts.forEach(clearTimeout);
    };
  }, []);

  // If already booted, we return null immediately (checked in effect)
  if (sessionStorage.getItem('hasBooted_v1.3')) return null;

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="fixed inset-0 z-[9999] bg-[#0d1117] text-[#00ff00] font-mono text-[13px] md:text-sm p-4 md:p-8 flex flex-col justify-end overflow-hidden cursor-default"
      >
        {/* Subtle scanline overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-50 opacity-20"></div>
        
        <div className="space-y-1 relative z-10 w-full max-w-4xl mx-auto">
          {lines.map((line, idx) => (
            <div key={idx} className={`${line.isHighlight ? 'text-white font-bold mt-4' : 'text-emerald-500'}`}>
              {!line.isHighlight && line.text.startsWith('[') ? (
                <>
                  <span className="text-white">[</span>
                  <span className="text-emerald-400">  OK  </span>
                  <span className="text-white">]</span>
                  {line.text.substring(8)}
                </>
              ) : (
                line.text
              )}
            </div>
          ))}
          {lines.length < bootLines.length && (
            <div className="w-2 h-4 bg-emerald-500 animate-pulse mt-1 inline-block"></div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BootSequence;
