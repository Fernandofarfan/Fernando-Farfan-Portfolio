import { useState, useEffect } from 'react';

const useKonamiCode = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  
  // up, up, down, down, left, right, left, right, b, a
  const konamiSequence = [
    'ArrowUp', 'ArrowUp', 
    'ArrowDown', 'ArrowDown', 
    'ArrowLeft', 'ArrowRight', 
    'ArrowLeft', 'ArrowRight', 
    'b', 'a'
  ];

  useEffect(() => {
    let currentSequenceIndex = 0;

    const handleKeyDown = (e) => {
      // Ignore if already unlocked
      if (isUnlocked) return;

      const key = e.key.toLowerCase() === 'b' || e.key.toLowerCase() === 'a' ? e.key.toLowerCase() : e.key;
      
      if (key === konamiSequence[currentSequenceIndex]) {
        currentSequenceIndex++;
        if (currentSequenceIndex === konamiSequence.length) {
          setIsUnlocked(true);
        }
      } else {
        // Reset if key is wrong
        currentSequenceIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isUnlocked]);

  const resetKonami = () => setIsUnlocked(false);

  return { isUnlocked, resetKonami };
};

export default useKonamiCode;
