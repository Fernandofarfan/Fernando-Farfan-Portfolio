import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ roles }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(pauseTimer);
    }

    if (isDeleting) {
      if (displayedText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        return;
      }
      const deleteTimer = setTimeout(() => {
        setDisplayedText(prev => prev.slice(0, -1));
      }, 30);
      return () => clearTimeout(deleteTimer);
    }

    if (displayedText === currentRole) {
      setIsPaused(true);
      return;
    }

    const typeTimer = setTimeout(() => {
      setDisplayedText(currentRole.slice(0, displayedText.length + 1));
    }, 80);
    return () => clearTimeout(typeTimer);
  }, [displayedText, isDeleting, isPaused, currentRoleIndex, roles]);

  return (
    <span className="text-accent text-sm font-mono tracking-wide">
      {displayedText}
      <span className="animate-pulse text-accent/80">|</span>
    </span>
  );
};

export default TypingAnimation;
