
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { Toggle } from './toggle';

const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <button
      aria-label="Toggle theme" 
      onClick={toggleTheme}
      className="p-2 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
    >
      <div className="w-5 h-5 flex items-center justify-center overflow-hidden">
        {isDarkTheme ? (
          <Sun size={18} className="transition-all duration-300" />
        ) : (
          <Moon size={18} className="transition-all duration-300" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
