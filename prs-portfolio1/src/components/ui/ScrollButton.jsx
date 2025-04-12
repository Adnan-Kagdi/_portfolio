
import React from 'react';
import { ArrowDown } from 'lucide-react';

const ScrollButton = ({ targetId, className }) => {
  const scrollToSection = () => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button 
      onClick={scrollToSection}
      className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:scale-110 transition-all duration-300 ${className}`}
      aria-label="Scroll down"
    >
      <ArrowDown className="w-8 h-8 text-white animate-bounce-slow" />
    </button>
  );
};

export default ScrollButton;
