'use client';

import { useEffect, useState } from 'react';

export default function TypingTitle() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Frank Olloqui';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-5xl md:text-7xl font-bold mb-4 flex items-center min-h-[4.5rem]">
      <span className="gradient-text">{displayedText}</span>
      <span
        className={`cursor ${displayedText.length === fullText.length ? 'cursor-blink' : 'cursor-typing'}`}
        style={{
          backgroundColor: '#7C3AED',
          boxShadow: '0 0 8px rgba(124, 58, 237, 0.6)',
        }}
      />
    </h1>
  );
}
