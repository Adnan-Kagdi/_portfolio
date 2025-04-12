import { useEffect, useState, useRef } from 'react';

/**
 * Custom hook for typewriter effect
 * @param {string} text - Text to type
 * @param {number} typingSpeed - Typing speed in milliseconds
 * @param {boolean} startTyping - Whether to start typing
 * @param {Function} onComplete - Callback when typing is complete
 * @returns {Object} - Typed text and typing state
 */
const useTypewriter = (text, typingSpeed = 100, startTyping = true, onComplete = () => {}) => {
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const hasCompletedOnce = useRef(false);
  const currentIndexRef = useRef(0);
  const textRef = useRef(text);

  // Update text reference if it changes
  useEffect(() => {
    textRef.current = text;
    // Reset when text changes
    if (text !== typedText && currentIndexRef.current === 0) {
      setTypedText('');
      setIsComplete(false);
      setIsTyping(true);
    }
  }, [text, typedText]);

  // Handle typing effect
  useEffect(() => {
    if (!startTyping || isComplete) return;
    
    const typeNextCharacter = () => {
      if (currentIndexRef.current < textRef.current.length) {
        setTypedText(textRef.current.substring(0, currentIndexRef.current + 1));
        currentIndexRef.current += 1;
      } else {
        setIsTyping(false);
        setIsComplete(true);
        if (!hasCompletedOnce.current) {
          hasCompletedOnce.current = true;
          onComplete();
        }
      }
    };
    
    const typingTimer = setTimeout(typeNextCharacter, typingSpeed);
    
    return () => clearTimeout(typingTimer);
  }, [typingSpeed, isComplete, startTyping, onComplete, typedText]);

  // Reset function to allow restarting the typing effect
  const reset = () => {
    currentIndexRef.current = 0;
    setTypedText('');
    setIsTyping(true);
    setIsComplete(false);
    hasCompletedOnce.current = false;
  };

  return { typedText, isTyping, isComplete, reset };
};

export default useTypewriter;
