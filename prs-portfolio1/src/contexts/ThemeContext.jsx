import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // On mount, check local storage for saved theme preference
    const storedTheme = localStorage.getItem('darkTheme');
    if (storedTheme !== null) {
      setIsDarkTheme(storedTheme === 'true');
    } else {
      // Check user preferred color scheme
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkTheme(prefersDark);
    }
  }, []);
  
  useEffect(() => {
    // Apply theme classes and CSS variables
    document.documentElement.classList.toggle('dark', isDarkTheme);
    document.body.classList.toggle('dark-theme', isDarkTheme);
    document.body.classList.toggle('light-theme', !isDarkTheme);
    
    // Store theme preference
    localStorage.setItem('darkTheme', isDarkTheme.toString());
    
    // Update CSS variables for theme colors with smoother transitions
    updateThemeColors(isDarkTheme);
    
    // Trigger a custom event to notify components about theme change
    window.dispatchEvent(new CustomEvent('themechange', { detail: { isDarkTheme } }));
  }, [isDarkTheme]);

  const updateThemeColors = (darkMode) => {
    if (darkMode) {
      document.documentElement.style.setProperty('--background', '0 0% 0%');
      document.documentElement.style.setProperty('--foreground', '0 0% 98%');
      document.documentElement.style.setProperty('--card', '0 0% 5%');
      document.documentElement.style.setProperty('--card-foreground', '0 0% 98%');
      document.documentElement.style.setProperty('--popover', '0 0% 3%');
      document.documentElement.style.setProperty('--popover-foreground', '0 0% 98%');
      document.documentElement.style.setProperty('--primary', '0% 0% 20%');
      document.documentElement.style.setProperty('--primary-foreground', '0 0% 0%');
      document.documentElement.style.setProperty('--secondary', '0 0% 15%');
      document.documentElement.style.setProperty('--secondary-foreground', '0 0% 98%');
      document.documentElement.style.setProperty('--muted', '0 0% 15%');
      document.documentElement.style.setProperty('--muted-foreground', '0 0% 65%');
      document.documentElement.style.setProperty('--accent', '0 0% 20%');
      document.documentElement.style.setProperty('--accent-foreground', '0% 0% 98%');
      document.documentElement.style.setProperty('--border', '0 0% 20%');
      document.documentElement.style.setProperty('--input', '0 0% 15%');
      document.documentElement.style.setProperty('--ring', '0 0% 30%');
    } else {
      // document.documentElement.style.setProperty('--background', '0 0% 98%');
      // document.documentElement.style.setProperty('--foreground', '0 0% 10%');
      // document.documentElement.style.setProperty('--card', '0 0% 100%');
      // document.documentElement.style.setProperty('--card-foreground', '0 0% 10%');
      // document.documentElement.style.setProperty('--popover', '0 0% 100%');
      // document.documentElement.style.setProperty('--popover-foreground', '0 0% 10%');
      // document.documentElement.style.setProperty('--primary', '0 0% 0%');
      // document.documentElement.style.setProperty('--primary-foreground', '0 0% 100%');
      // document.documentElement.style.setProperty('--secondary', '0 0% 96%');
      // document.documentElement.style.setProperty('--secondary-foreground', '0 0% 10%');
      // document.documentElement.style.setProperty('--muted', '0 0% 90%');
      // document.documentElement.style.setProperty('--muted-foreground', '0 0% 40%');
      // document.documentElement.style.setProperty('--accent', '0 0% 80%');
      // document.documentElement.style.setProperty('--accent-foreground', '0 0% 10%');
      // document.documentElement.style.setProperty('--border', '0 0% 90%');
      // document.documentElement.style.setProperty('--input', '0 0% 90%');
      // document.documentElement.style.setProperty('--ring', '0 0% 80%');
    }
  };

  const toggleTheme = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Add a transition class to the body
    document.documentElement.classList.add('theme-transitioning');
    
    // Short delay to ensure animation runs smoothly
    setTimeout(() => {
      setIsDarkTheme(prevTheme => !prevTheme);
      
      // Remove transition class after theme change completes
      setTimeout(() => {
        document.documentElement.classList.remove('theme-transitioning');
        setIsTransitioning(false);
      }, 500);
    }, 50);
  };

  const theme = {
    isDarkTheme,
    isTransitioning,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);