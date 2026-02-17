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
    <h1 className="text-5xl md:text-6xl font-bold mb-4 flex items-center min-h-[4rem]">
      {displayedText}
      <span className={`cursor ${displayedText.length === fullText.length ? 'cursor-blink' : 'cursor-typing'}`}></span>
    </h1>
  );
}
