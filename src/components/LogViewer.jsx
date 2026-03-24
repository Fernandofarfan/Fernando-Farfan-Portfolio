import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLogger } from '../context/LogContext';

const LogViewer = () => {
  const { logs } = useLogger();

  // Show only the last 4 logs to keep it compact
  const visibleLogs = logs.slice(-4);

  if (logs.length === 0) return null;

  return (
    <div className="fixed bottom-24 right-4 md:right-8 z-40 w-64 md:w-80 pointer-events-none">
      <div className="bg-[#0d1117]/80 backdrop-blur-md border border-slate-700/50 rounded-lg p-3 shadow-2xl shadow-emerald-500/5 overflow-hidden font-mono text-[10px] md:text-xs">
        <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-700/50">
          <span className="text-slate-400 font-bold tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            LIVE AUDIT LOG
          </span>
        </div>
        
        <div className="space-y-1.5 flex flex-col justify-end min-h-[80px]">
          <AnimatePresence initial={false}>
            {visibleLogs.map((log) => (
              <motion.div
                key={log.id}
                initial={{ opacity: 0, x: 20, height: 0 }}
                animate={{ opacity: 1, x: 0, height: 'auto' }}
                exit={{ opacity: 0, x: -20, height: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col"
              >
                <div className="flex items-start gap-2">
                  <span className="text-slate-500 shrink-0">[{log.timestamp}]</span>
                  <span className={`
                    ${log.type === 'info' ? 'text-emerald-400' : ''}
                    ${log.type === 'warn' ? 'text-yellow-400' : ''}
                    ${log.type === 'error' ? 'text-red-400' : ''}
                    ${log.type === 'system' ? 'text-blue-400 font-bold' : ''}
                    break-words whitespace-pre-wrap
                  `}>
                    {log.message}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default LogViewer;
