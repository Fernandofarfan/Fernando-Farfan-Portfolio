import React, { useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Download } from 'lucide-react';
import { ReactFlow, Background, Controls, MarkerType } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes = [
  { 
    id: 'user', 
    position: { x: 250, y: 0 }, 
    data: { label: '👨‍💻 Recruiter / User' },
    style: { background: '#161b22', color: '#fff', border: '1px solid #30363d', borderRadius: '8px', padding: '10px' } 
  },
  { 
    id: 'dns', 
    position: { x: 250, y: 100 }, 
    data: { label: '🌐 GitHub / Custom DNS' },
    style: { background: '#161b22', color: '#10b981', border: '1px solid #10b981', borderRadius: '8px', padding: '10px' } 
  },
  { 
    id: 'cdn', 
    position: { x: 250, y: 200 }, 
    data: { label: '⚡ GitHub Pages CDN (Frontend)' },
    style: { background: '#0d419d', color: '#fff', border: '1px solid #0056d6', borderRadius: '8px', padding: '10px' }  
  },
  { 
    id: 'react', 
    position: { x: 100, y: 300 }, 
    data: { label: '⚛️ React + Vite + Tailwind' },
    style: { background: '#161b22', color: '#61dafb', border: '1px solid #61dafb', borderRadius: '8px', padding: '10px' } 
  },
  { 
    id: 'api-devto', 
    position: { x: 350, y: 300 }, 
    data: { label: '📝 Dev.to API (Blog Fetch)' },
    style: { background: '#1a1a1a', color: '#fff', border: '1px solid #555', borderRadius: '8px', padding: '10px' } 
  },
  { 
    id: 'api-github', 
    position: { x: 50, y: 400 }, 
    data: { label: '📊 GitHub Stats API' },
    style: { background: '#24292e', color: '#fff', border: '1px solid #444', borderRadius: '8px', padding: '10px' } 
  },
  { 
    id: 'api-formsubmit', 
    position: { x: 400, y: 400 }, 
    data: { label: '📧 FormSubmit (Email SMTP)' },
    style: { background: '#161b22', color: '#f59e0b', border: '1px solid #f59e0b', borderRadius: '8px', padding: '10px' } 
  },
  { 
    id: 'cicd', 
    position: { x: -100, y: 200 }, 
    data: { label: '⚙️ GitHub Actions CI/CD' },
    style: { background: '#238636', color: '#fff', border: '1px solid #2ea043', borderRadius: '8px', padding: '10px' } 
  }
];

const initialEdges = [
  { id: 'e1', source: 'user', target: 'dns', animated: true, style: { stroke: '#10b981' }, markerEnd: { type: MarkerType.ArrowClosed, color: '#10b981' } },
  { id: 'e2', source: 'dns', target: 'cdn', animated: true, style: { stroke: '#10b981' }, markerEnd: { type: MarkerType.ArrowClosed, color: '#10b981' } },
  { id: 'e3', source: 'cdn', target: 'react', animated: false, style: { stroke: '#8b949e' } },
  { id: 'e4', source: 'cdn', target: 'api-devto', animated: true, style: { stroke: '#8b949e' } },
  { id: 'e5', source: 'react', target: 'api-github', animated: true, style: { stroke: '#8b949e' } },
  { id: 'e6', source: 'react', target: 'cicd', animated: false, style: { stroke: '#8b949e', strokeDasharray: '5 5' }, label: 'Triggers build' },
  { id: 'e7', source: 'cicd', target: 'cdn', animated: true, style: { stroke: '#238636' }, label: 'Deploys to GH-Pages', labelStyle: { fill: '#8b949e' } },
  { id: 'e8', source: 'cdn', target: 'api-formsubmit', animated: true, style: { stroke: '#8b949e' } }
];

const ArchitectureModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pb-20 sm:pb-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        ></motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-5xl bg-[#0d1117] rounded-2xl border border-slate-700 shadow-2xl flex flex-col overflow-hidden max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-800 bg-[#161b22]">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-emerald-400 font-mono text-sm border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 rounded">v1.3.0</span>
                Arquitectura del Portafolio
              </h3>
              <p className="text-slate-400 text-sm mt-1">Esquema iterativo de dependencias, CI/CD y consumo de API.</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Flow Container */}
          <div className="flex-1 w-full h-[500px] sm:h-[600px] bg-[#0d1117] relative">
            <ReactFlow 
              nodes={initialNodes} 
              edges={initialEdges}
              fitView
              attributionPosition="bottom-right"
              className="react-flow-dark"
            >
              <Background color="#30363d" gap={16} />
              <Controls className="bg-slate-800 border-slate-700 fill-white" />
            </ReactFlow>
          </div>
          
          {/* Footer */}
          <div className="p-4 sm:p-6 border-t border-slate-800 bg-[#161b22] flex justify-between items-center text-sm font-mono text-slate-400">
            <span>Powered by @xyflow/react</span>
            <a 
              href="https://github.com/Fernandofarfan/Fernando-Farfan-Portfolio" 
              target="_blank" rel="noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              Ver fuente <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ArchitectureModal;
