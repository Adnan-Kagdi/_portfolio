import React, { useState, useEffect, useRef } from 'react';
import useTypewriter from '../../hooks/useTypewriter';

const AlternatingTextAnimation = ({ options, typingSpeed = 60, pauseDuration = 1500 }) => {
  const [currentOptionIndex, setCurrentOptionIndex] = useState(0);
  const [shouldType, setShouldType] = useState(true);
  const [isErasing, setIsErasing] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const animationComplete = useRef(false);
  
  const currentOption = options[currentOptionIndex];
  
  const { typedText, isTyping, isComplete, reset } = useTypewriter(
    currentOption,
    typingSpeed,
    shouldType,
    () => {
      // When typing is complete, wait for pauseDuration before erasing
      setTimeout(() => {
        setIsErasing(true);
      }, pauseDuration);
    }
  );
  
  // Update display text when typed text changes
  useEffect(() => {
    if (typedText) {
      setDisplayText(typedText);
    }
  }, [typedText]);
  
  // Start the animation when component mounts
  useEffect(() => {
    if (!animationComplete.current) {
      setShouldType(true);
    }
    
    return () => {
      animationComplete.current = true;
    };
  }, []);
  
  // Handle erasing text and switching to next option
  useEffect(() => {
    if (!isErasing) return;
    
    let timer;
    
    const eraseText = () => {
      if (displayText.length > 0) {
        setDisplayText(prev => prev.slice(0, -1));
        timer = setTimeout(eraseText, 30);
      } else {
        setIsErasing(false);
        // Move to next option
        setCurrentOptionIndex((prevIndex) => (prevIndex + 1) % options.length);
        
        // Reset the typewriter to start typing the next option
        reset();
        setShouldType(true);
      }
    };
    
    timer = setTimeout(eraseText, 15);
    
    return () => clearTimeout(timer);
  }, [isErasing, displayText, options.length, reset]);
  
  return (
    <div className="h-12 md:h-16">
      <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold tracking-tighter mx-auto leading-tight text-gradient-hero">
        <span className="inline-block">{displayText}</span>
        <span className={`inline-block w-1 h-6 md:h-10 bg-white ml-1 ${isTyping || isErasing ? 'animate-pulse' : 'opacity-0'}`}></span>
      </h2>
    </div>
  );
};

export default AlternatingTextAnimation;
