import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Terminal } from 'lucide-react';
import { useLogger } from '../context/LogContext';

const LogViewer = () => {
  const { logs, clearLogs } = useLogger();
  const [isVisible, setIsVisible] = useState(true);

  // Re-show when new logs arrive if it was hidden
  useEffect(() => {
    if (logs.length > 0) {
      setIsVisible(true);
    }
  }, [logs.length]);

  // Show only the last 3 logs for more compactness
  const visibleLogs = logs.slice(-3);

  if (logs.length === 0 || !isVisible) return null;

  return (
    <div className="fixed bottom-6 right-4 md:right-8 z-40 w-64 md:w-80 pointer-events-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-xl p-3 shadow-2xl shadow-emerald-500/10 overflow-hidden font-mono text-[10px] md:text-xs"
      >
        <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-700/50">
          <span className="text-slate-400 font-bold tracking-wider flex items-center gap-2">
            <Terminal className="w-3 h-3 text-emerald-500" />
            LIVE AUDIT LOG
          </span>
          <button 
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-slate-800 rounded-md text-slate-500 hover:text-white transition-colors"
            title="Close log viewer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
        
        <div className="space-y-1.5 flex flex-col justify-end min-h-[60px]">
          <AnimatePresence initial={false} mode="popLayout">
            {visibleLogs.map((log) => (
              <motion.div
                key={log.id}
                initial={{ opacity: 0, x: 20, height: 0 }}
                animate={{ opacity: 1, x: 0, height: 'auto' }}
                exit={{ opacity: 0, x: -20, height: 0 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col"
              >
                <div className="flex items-start gap-2">
                  <span className="text-slate-500 shrink-0">[{log.timestamp}]</span>
                  <span className={`
                    ${log.type === 'info' ? 'text-emerald-400' : ''}
                    ${log.type === 'warn' ? 'text-yellow-400' : ''}
                    ${log.type === 'error' ? 'text-white bg-red-900/50 px-1 rounded' : ''}
                    ${log.type === 'system' ? 'text-blue-400' : ''}
                    break-words whitespace-pre-wrap
                  `}>
                    {log.message}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default LogViewer;
