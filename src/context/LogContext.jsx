import React, { createContext, useContext, useState, useCallback } from 'react';

const LogContext = createContext();

export const useLogger = () => useContext(LogContext);

export const LoggerProvider = ({ children }) => {
  const [logs, setLogs] = useState([]);

  const addLog = useCallback((message, type = 'info') => {
    const timestamp = new Date().toLocaleTimeString('en-GB', { 
      hour12: false, 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit',
      fractionalSecondDigits: 3 
    });
    
    setLogs(prev => {
      const newLogs = [...prev, { id: Date.now() + Math.random(), timestamp, message, type }];
      // Keep only last 50 logs to prevent memory leaks
      return newLogs.slice(-50);
    });
  }, []);

  return (
    <LogContext.Provider value={{ logs, addLog }}>
      {children}
    </LogContext.Provider>
  );
};
