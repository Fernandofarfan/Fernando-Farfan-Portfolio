import React, { useState } from 'react';
import Section from '../Section';
import { Database, Play, AlertCircle } from 'lucide-react';

const SQLPlayground = ({ data }) => {
  const [query, setQuery] = useState("SELECT * FROM experience WHERE role LIKE '%Backend%';");
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const mockDb = {
    experience: data.experience.map(exp => ({
      company: exp.company,
      role: exp.role,
      duration: exp.period,
      tech: exp.technologies.join(', ')
    })),
    skills: data.skills.flatMap(category => 
      category.skills.map(s => ({ category: category.title, skill: s.name, level: s.level }))
    )
  };

  const handleRunQuery = () => {
    setError(null);
    const lowerQuery = query.toLowerCase();

    try {
      if (lowerQuery.includes('drop') || lowerQuery.includes('delete') || lowerQuery.includes('update')) {
        throw new Error("Permission Denied: Read-only access to portfolio database.");
      }

      if (lowerQuery.includes('from experience')) {
        let filtered = mockDb.experience;
        if (lowerQuery.includes("like '%backend%'")) {
          filtered = filtered.filter(row => row.role.toLowerCase().includes('backend') || row.tech.toLowerCase().includes('backend'));
        }
        setResults({ columns: ['company', 'role', 'duration', 'tech'], data: filtered });
      } 
      else if (lowerQuery.includes('from skills')) {
        let filtered = mockDb.skills;
        if (lowerQuery.includes("where level")) {
           filtered = filtered.filter(row => row.level > 80);
        }
        setResults({ columns: ['category', 'skill', 'level'], data: filtered });
      } 
      else {
        throw new Error("Syntax Error or Table Not Found. Try querying 'experience' or 'skills'.");
      }
    } catch (err) {
      setResults(null);
      setError(err.message);
    }
  };

  const executePredefined = (q) => {
    setQuery(q);
    // Auto run after setting state needs a tiny delay or run directly
    setTimeout(() => {
      document.getElementById('run-sql-btn').click();
    }, 50);
  };

  return (
    <Section id="sql-playground" title={<span className="flex items-center gap-2"><Database className="w-6 h-6 text-accent" /> DBA Playground</span>}>
      <div className="bg-[#0d1117] border border-slate-700/50 rounded-xl overflow-hidden shadow-2xl">
        {/* Editor Header */}
        <div className="bg-[#161b22] px-4 py-2 flex items-center justify-between border-b border-slate-700 select-none">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
          </div>
          <span className="text-slate-400 font-mono text-xs">ffarfan_portfolio_db - Query Editor</span>
          <div className="w-12"></div>
        </div>

        {/* Editor Body */}
        <div className="p-4 bg-[#0d1117]">
          <div className="flex gap-2 mb-3 overflow-x-auto custom-scrollbar pb-2">
            <button onClick={() => executePredefined("SELECT * FROM experience;")} className="text-xs font-mono bg-slate-800 text-slate-300 px-3 py-1 rounded hover:bg-slate-700 whitespace-nowrap">
              SELECT * FROM experience;
            </button>
            <button onClick={() => executePredefined("SELECT * FROM experience WHERE role LIKE '%Backend%';")} className="text-xs font-mono bg-slate-800 text-slate-300 px-3 py-1 rounded hover:bg-slate-700 whitespace-nowrap">
              Filtrar Backend
            </button>
            <button onClick={() => executePredefined("SELECT * FROM skills WHERE level >= 90;")} className="text-xs font-mono bg-slate-800 text-slate-300 px-3 py-1 rounded hover:bg-slate-700 whitespace-nowrap">
              Top Skills
            </button>
          </div>

          <div className="relative border border-slate-700 rounded bg-[#161b22] flex">
            <div className="w-8 flex flex-col items-center py-3 bg-[#0d1117] border-r border-slate-800 text-slate-600 font-mono text-sm select-none">
              <span>1</span>
              <span>2</span>
            </div>
            <textarea 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-emerald-400 font-mono text-sm p-3 outline-none resize-none"
              rows="2"
              spellCheck="false"
            />
            <button 
              id="run-sql-btn"
              onClick={handleRunQuery}
              className="absolute bottom-3 right-3 bg-emerald-600 hover:bg-emerald-500 text-white p-1.5 rounded-lg flex items-center justify-center transition-colors"
              title="Run Query (F5)"
            >
              <Play className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Results Area */}
        <div className="border-t border-slate-700 bg-slate-900/50 min-h-[150px] p-4 font-mono text-sm">
          {error && (
            <div className="text-red-400 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}
          
          {results && !error && (
            <div className="overflow-x-auto custom-scrollbar pb-2">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-700 text-slate-400">
                    {results.columns.map(col => (
                      <th key={col} className="p-2 font-semibold capitalize">{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {results.data.length === 0 ? (
                    <tr>
                      <td colSpan={results.columns.length} className="p-4 text-slate-500 text-center italic">0 rows affected.</td>
                    </tr>
                  ) : (
                    results.data.map((row, i) => (
                      <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/20 text-slate-300">
                        {results.columns.map(col => (
                          <td key={col} className="p-2 whitespace-nowrap truncate max-w-[200px]">{row[col]}</td>
                        ))}
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
              <div className="mt-2 text-xs text-slate-500 text-right">
                {results.data.length} row(s) returned. Execution time: {Math.floor(Math.random() * 12) + 1}ms
              </div>
            </div>
          )}

          {!results && !error && (
            <div className="h-full flex items-center justify-center text-slate-600 italic">
              Results will appear here...
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default SQLPlayground;
