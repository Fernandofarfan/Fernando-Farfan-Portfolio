import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Server, Activity, Database, Cpu } from 'lucide-react';

const ServerStatusWidget = () => {
  const [cpuUsage, setCpuUsage] = useState(12);
  const [ramUsage, setRamUsage] = useState(45);

  // Simulate slight fluctuations in CPU and RAM to look realistic
  useEffect(() => {
    const interval = setInterval(() => {
      setCpuUsage(prev => {
        const variation = Math.floor(Math.random() * 5) - 2;
        let next = prev + variation;
        if (next < 5) next = 5;
        if (next > 30) next = 30;
        return next;
      });
      
      setRamUsage(prev => {
        const variation = Math.floor(Math.random() * 3) - 1;
        let next = prev + variation;
        if (next < 40) next = 40;
        if (next > 55) next = 55;
        return next;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-8 p-4 bg-slate-900/50 border border-slate-700/50 rounded-xl backdrop-blur-sm group">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Server className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-mono font-bold text-slate-300">SYSTEM.STATUS</span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
          </span>
          <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-wider">Online</span>
        </div>
      </div>

      <div className="space-y-3">
        {/* Uptime */}
        <div className="flex items-center justify-between text-[10px] font-mono">
          <span className="text-slate-500 flex items-center gap-1.5"><Activity className="w-3 h-3"/> Uptime</span>
          <span className="text-slate-300 group-hover:text-emerald-400 transition-colors">99.999%</span>
        </div>

        {/* CPU */}
        <div>
          <div className="flex items-center justify-between text-[10px] font-mono mb-1">
            <span className="text-slate-500 flex items-center gap-1.5"><Cpu className="w-3 h-3"/> CPU</span>
            <span className="text-slate-300">{cpuUsage}%</span>
          </div>
          <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-emerald-500" 
              initial={{ width: '12%' }}
              animate={{ width: `${cpuUsage}%` }}
              transition={{ ease: "easeInOut", duration: 1 }}
            />
          </div>
        </div>

        {/* RAM */}
        <div>
          <div className="flex items-center justify-between text-[10px] font-mono mb-1">
            <span className="text-slate-500 flex items-center gap-1.5"><Database className="w-3 h-3"/> RAM</span>
            <span className="text-slate-300">{ramUsage}% (1.8GB)</span>
          </div>
          <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-accent" 
              initial={{ width: '45%' }}
              animate={{ width: `${ramUsage}%` }}
              transition={{ ease: "easeInOut", duration: 1 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerStatusWidget;
