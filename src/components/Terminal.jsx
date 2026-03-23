import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from 'lucide-react';

const Terminal = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [history, setHistory] = useState([
    { type: 'system', content: `Bienvenido a FFarfan OS v1.3.0. Escribe 'help' para ver los comandos disponibles.` }
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isOpen]);

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let output = '';

    if (!trimmedCmd) return;

    setHistory(prev => [...prev, { type: 'command', content: `gfarfan@portfolio:~$ ${cmd}` }]);

    switch (trimmedCmd) {
      case 'help':
        output = `
Comandos disponibles:
  whoami   - Muestra mi perfil actual
  skills   - Lista mis tecnologías principales
  clear    - Limpia la consola
  contact  - Muestra mi información de contacto
  sudo     - Ejecutar como superusuario
        `;
        break;
      case 'whoami':
        output = `Desarrollador Full Stack | Backend Engineer | DBA\n+9 años transformando ideas en plataformas digitales de alto rendimiento.`;
        break;
      case 'skills':
        output = `Backend: Node.js, Python, Java\nDatabases: SQL Server, PostgreSQL, MongoDB\nCloud/DevOps: Docker, CI/CD, Linux\nFrontend: React, Tailwind CSS`;
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'contact':
        output = `Email: fernando@example.com\nGitHub: github.com/Fernandofarfan\nLinkedIn: linkedin.com/in/fernando-farfan`;
        break;
      case 'sudo':
        output = `ffarfan is not in the sudoers file. This incident will be reported.`;
        break;
      case 'sudo rm -rf /':
        output = `Permiso denegado: Reclutador no autorizado para autodestruir el portafolio.`;
        break;
      default:
        output = `Comando no encontrado: ${cmd}. Escribe 'help' para ver los comandos.`;
    }

    setHistory(prev => [...prev, { type: 'output', content: output }]);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-8 bg-slate-900 border border-emerald-500/30 text-emerald-400 p-3.5 rounded-xl shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/30 hover:scale-110 transition-all duration-300 z-40 group flex items-center justify-center"
        aria-label="Abrir Terminal"
      >
        <span className="absolute -top-2 -right-2 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 text-[9px] text-black font-bold flex items-center justify-center leading-none">CLI</span>
        </span>
        <TerminalIcon className="w-5 h-5 group-hover:text-emerald-300 transition-colors" />
      </button>

      {/* Terminal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`fixed z-50 overflow-hidden bg-[#0d1117] border border-slate-700 shadow-2xl rounded-lg flex flex-col font-mono text-sm ${
              isMaximized ? 'inset-4 md:inset-8' : 'bottom-24 left-4 md:left-8 w-[calc(100vw-2rem)] md:w-[600px] h-[400px]'
            }`}
          >
            {/* Header */}
            <div className="bg-[#161b22] border-b border-slate-700 p-3 flex items-center justify-between select-none">
              <div className="flex flex-col">
                <span className="text-slate-400 text-xs flex items-center gap-2">
                  <TerminalIcon className="w-3 h-3" /> FFarfan OS Terminal
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={() => setIsMaximized(!isMaximized)} className="text-slate-500 hover:text-emerald-400 transition-colors">
                  {isMaximized ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
                <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-red-400 transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content Array */}
            <div 
              className="flex-1 p-4 overflow-y-auto custom-scrollbar-sidebar bg-[#0d1117]" 
              onClick={() => inputRef.current?.focus()}
            >
              <div className="space-y-2 mb-2">
                {history.map((line, i) => (
                  <div key={i} className={`${line.type === 'system' ? 'text-emerald-400 mb-4' : line.type === 'command' ? 'text-white' : 'text-slate-400 whitespace-pre-wrap'}`}>
                    {line.content}
                  </div>
                ))}
              </div>
              
              {/* Active Input Line */}
              <div className="flex items-center text-emerald-400">
                <span className="mr-2 whitespace-nowrap">gfarfan@portfolio:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent outline-none border-none text-white focus:ring-0 p-0"
                  spellCheck="false"
                  autoComplete="off"
                />
              </div>
              <div ref={bottomRef} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Terminal;
