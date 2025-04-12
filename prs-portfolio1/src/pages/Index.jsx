import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import Contact from '../components/sections/Contact';
import { useTheme } from '../contexts/ThemeContext';
import { setupScrollAnimations, setupParallaxEffects } from '../utils/animationUtils';

const Index = () => {
  const { isDarkTheme } = useTheme();
  
  useEffect(() => {
    // Initialize animations
    const cleanupScrollAnimations = setupScrollAnimations();
    const cleanupParallaxEffects = setupParallaxEffects();
    
    // Apply theme class to body
    document.documentElement.classList.toggle('dark', isDarkTheme);
    
    // Use a more gentle scroll animation to prevent overlapping text
    const handleScroll = () => {
      setupScrollAnimations();
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      cleanupScrollAnimations();
      cleanupParallaxEffects();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDarkTheme]);

  return (
    <div className={`min-h-screen bg-background text-foreground overflow-x-hidden transition-colors duration-500`}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
