import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, Globe2 } from 'lucide-react';
import { useLogger } from '../context/LogContext';

const GeoIPWidget = () => {
  const [geoData, setGeoData] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const { addLog } = useLogger();

  useEffect(() => {
    // Only run once
    const hasRun = sessionStorage.getItem('geoIpTracked_v1.3');
    if (hasRun) return;

    const fetchGeoIP = async () => {
      try {
        const res = await fetch('https://ipapi.co/json/');
        if (!res.ok) throw new Error('Failed to fetch IP');
        const data = await res.json();
        
        setGeoData(data);
        setIsVisible(true);
        sessionStorage.setItem('geoIpTracked_v1.3', 'true');

        // Log to observability
        addLog(`Incoming connection from ${data.city}, ${data.country_name} (${data.ip})`, 'system');

        // Hide the visual alert after 8 seconds
        setTimeout(() => {
          setIsVisible(false);
        }, 8000);
      } catch (err) {
        console.error("GeoIP Fetch Failed", err);
      }
    };

    // Delay the alert so it appears after the boot sequence
    setTimeout(fetchGeoIP, 4500);
  }, [addLog]);

  return (
    <AnimatePresence>
      {isVisible && geoData && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed top-24 right-4 md:right-8 z-50 pointer-events-none"
        >
          <div className="bg-[#0f172a]/90 backdrop-blur-md border border-red-500/40 rounded-lg p-4 shadow-[0_0_30px_rgba(239,68,68,0.15)] flex items-start gap-4 max-w-xs md:max-w-sm">
            <div className="bg-red-500/20 p-2 rounded-lg text-red-400 shrink-0">
              <ShieldAlert className="w-5 h-5 animate-pulse" />
            </div>
            <div className="flex-1 font-mono">
              <div className="text-red-400 font-bold text-xs mb-1 flex items-center gap-2">
                [SECURE] CONNECTION DETECTED
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                Handshake established from <span className="text-white font-bold">{geoData.city}, {geoData.country_name}</span>.
              </p>
              <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500">
                <span className="flex items-center gap-1"><Globe2 className="w-3 h-3" /> IP: {geoData.ip}</span>
                <span className="text-emerald-400">ACCESS GRANTED</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GeoIPWidget;
