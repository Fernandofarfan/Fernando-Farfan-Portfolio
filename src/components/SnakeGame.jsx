import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, Trophy, Code2 } from 'lucide-react';
import { useLogger } from '../context/LogContext';

const GRID_SIZE = 20;
const INITIAL_SPEED = 150;

const SnakeGame = ({ onClose }) => {
  const [snake, setSnake] = useState([
    [10, 10],
    [10, 11],
    [10, 12]
  ]);
  const [direction, setDirection] = useState([-1, 0]); // moving up
  const [food, setFood] = useState([5, 5]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => parseInt(localStorage.getItem('snakeHighScore') || '0'));
  
  const { addLog } = useLogger();
  const directionRef = useRef(direction);

  useEffect(() => {
    addLog('Konami Code ingresado exitosamente. Minijuego activado.', 'system');
  }, [addLog]);

  const generateFood = useCallback(() => {
    const newFood = [
      Math.floor(Math.random() * GRID_SIZE),
      Math.floor(Math.random() * GRID_SIZE)
    ];
    setFood(newFood);
  }, []);

  const moveSnake = useCallback(() => {
    if (gameOver) return;

    setSnake(prev => {
      const head = prev[0];
      const currentDir = directionRef.current;
      const newHead = [head[0] + currentDir[0], head[1] + currentDir[1]];

      // Check wall collision
      if (
        newHead[0] < 0 || newHead[0] >= GRID_SIZE || 
        newHead[1] < 0 || newHead[1] >= GRID_SIZE
      ) {
        handleGameOver();
        return prev;
      }

      // Check self collision
      if (prev.some(segment => segment[0] === newHead[0] && segment[1] === newHead[1])) {
        handleGameOver();
        return prev;
      }

      const newSnake = [newHead, ...prev];

      // Check food collision
      if (newHead[0] === food[0] && newHead[1] === food[1]) {
        generateFood();
        setScore(s => s + 10);
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [food, gameOver, generateFood]);

  const handleGameOver = () => {
    setGameOver(true);
    addLog(`Juego terminado. Puntuación: ${score}`, 'warn');
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('snakeHighScore', score.toString());
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Prevent scrolling when playing
      if(['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].indexOf(e.code) > -1) {
        e.preventDefault();
      }

      const currentDir = directionRef.current;
      switch (e.key) {
        case 'ArrowUp':
          if (currentDir[0] !== 1) directionRef.current = [-1, 0];
          break;
        case 'ArrowDown':
          if (currentDir[0] !== -1) directionRef.current = [1, 0];
          break;
        case 'ArrowLeft':
          if (currentDir[1] !== 1) directionRef.current = [0, -1];
          break;
        case 'ArrowRight':
          if (currentDir[1] !== -1) directionRef.current = [0, 1];
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const speed = Math.max(INITIAL_SPEED - (score * 2), 50);
    const interval = setInterval(moveSnake, speed);
    return () => clearInterval(interval);
  }, [moveSnake, score]);

  const restart = () => {
    setSnake([[10, 10], [10, 11], [10, 12]]);
    directionRef.current = [-1, 0];
    setDirection([-1, 0]);
    generateFood();
    setScore(0);
    setGameOver(false);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[#0d1117]/90 backdrop-blur-md">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-slate-900 border border-emerald-500/30 p-6 rounded-2xl shadow-2xl shadow-emerald-500/10 relative max-w-[95vw]"
      >
        <button 
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors shadow-lg"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold text-xl">
            <Code2 className="w-6 h-6" />
            <span>DEV_SNAKE.exe</span>
          </div>
          <div className="flex gap-4 font-mono text-sm">
            <span className="text-slate-300">Score: <span className="text-emerald-400">{score}</span></span>
            <span className="text-slate-500 flex items-center gap-1"><Trophy className="w-4 h-4 text-yellow-500"/> {highScore}</span>
          </div>
        </div>

        <div 
          className="bg-slate-950 border-2 border-slate-800 rounded-lg overflow-hidden relative"
          style={{ width: 'min(400px, 80vw)', height: 'min(400px, 80vw)' }}
        >
          {/* Grid Render */}
          {Array(GRID_SIZE).fill(0).map((_, row) => 
            Array(GRID_SIZE).fill(0).map((_, col) => {
              const isSnake = snake.some(s => s[0] === row && s[1] === col);
              const isHead = snake[0][0] === row && snake[0][1] === col;
              const isFood = food[0] === row && food[1] === col;

              return (
                <div 
                  key={`${row}-${col}`}
                  className={`absolute ${isHead ? 'bg-emerald-400 rounded-sm' : isSnake ? 'bg-emerald-600/80 rounded-sm' : isFood ? 'bg-accent rounded-full animate-pulse shadow-[0_0_10px_#64ffda]' : ''}`}
                  style={{
                    width: `${100 / GRID_SIZE}%`,
                    height: `${100 / GRID_SIZE}%`,
                    top: `${(row * 100) / GRID_SIZE}%`,
                    left: `${(col * 100) / GRID_SIZE}%`,
                  }}
                />
              )
            })
          )}
          
          {gameOver && (
            <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center flex-col gap-4">
              <span className="text-red-400 font-mono text-2xl font-bold tracking-widest">SYSTEM FAILURE</span>
              <span className="text-slate-300 font-mono">Final Score: {score}</span>
              <button 
                onClick={restart}
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold px-6 py-2 rounded-lg font-mono transition-colors"
              >
                REBOOT_SYSTEM()
              </button>
            </div>
          )}
        </div>
        
        <div className="mt-4 text-center text-slate-500 text-xs font-mono">
          Use Arrow Keys to navigate. Don't hit the walls or yourself.
        </div>
      </motion.div>
    </div>
  );
};

export default SnakeGame;
