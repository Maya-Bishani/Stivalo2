import React, { useEffect, useState } from 'react';

function Words ({ words }) { 
  const typingSpeed = 150; 
  const deletingSpeed = 50; 
  const pauseDuration = 1000; 

  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeoutId = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        
        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length); // الانتقال إلى الكلمة التالية
        }
      } else {
        setDisplayedText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        
        if (charIndex === currentWord.length) {
          setIsDeleting(true);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeoutId);
  }, [displayedText, isDeleting, charIndex, wordIndex]);

  return (
    
      <span>{displayedText}</span>
   
  );
}

export default Words;
