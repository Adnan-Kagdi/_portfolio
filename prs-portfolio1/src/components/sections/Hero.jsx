import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import SocialLinks from '../ui/SocialLinks';
import ScrollButton from '../ui/ScrollButton';
import { useTheme } from '../../contexts/ThemeContext';
import { HoverCard, HoverCardTrigger, HoverCardContent } from "../ui/hover-card";
import { Button } from "../ui/button";
import EnhacedHeroBackground from '../ui/EnhacedHeroBackground';
import useTypewriter from '../../hooks/useTypewriter';
import { motion } from "framer-motion"

const Hero = () => {
  const { isDarkTheme } = useTheme();
  const heroRef = useRef(null);
  const floatingElementsRef = useRef([]);
  const [isVisible, setIsVisible] = useState(false);
  
  const { typedText: titleText } = useTypewriter("MERN Stack Developer", 100, true);
  
  useEffect(() => {
    // Set visibility after a small delay for entrance animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${scrollPosition * 0.05}px)`;
        heroRef.current.style.opacity = 1 - (scrollPosition * 0.002);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Floating animation effect
  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     const { clientX, clientY } = e;
  //     const centerX = window.innerWidth / 2;
  //     const centerY = window.innerHeight / 2;
      
  //     // Calculate movement based on mouse position
  //     const moveX = (clientX - centerX) / 50;
  //     const moveY = (clientY - centerY) / 50;
      
  //     floatingElementsRef.current.forEach((el, index) => {
  //       if (el) {
  //         // Different elements move at different speeds for parallax effect
  //         const factor = 1 - (index * 0.2);
  //         el.style.transform = `translate(${moveX * factor}px, ${moveY * factor}px)`;
  //       }
  //     });
  //   };
    
  //   window.addEventListener('mousemove', handleMouseMove);
  //   return () => window.removeEventListener('mousemove', handleMouseMove);
  // }, []);

  // Professional photo from Unsplash
  // const profileImage = "https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden perspective-1000">
      {/* Enhanced animated background */}
      {/* <EnhacedHeroBackground /> */}
      <div 
        ref={heroRef}
        className={`container mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 pt-20 md:pt-0 transition-all duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Content Column */}
        <div className="w-full md:w-1/2 space-y-6 text-left">
          <div 
            ref={el => floatingElementsRef.current[0] = el}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10 bg-white/5 animate-fade-in"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-sm font-medium flex items-center gap-2">
              <span>{titleText}</span>
              <span className="blink">|</span>
              <Sparkles className="h-3 w-3 text-yellow-300 animate-pulse" />
            </span>
          </div>
          
          <h1 
            ref={el => floatingElementsRef.current[1] = el}
            className="text-5xl md:text-7xl font-bold tracking-tight"
          >
            <div className="overflow-hidden">
              <span className="block text-2xl md:text-3xl text-muted-foreground mb-2 animate-slide-up delay-100">
                Hello, I'm
              </span>
            </div>
            <div className="overflow-hidden relative">
              <span className="block text-gradient-hero animate-slide-up delay-200 relative z-10">
                Adnan
                <span className="absolute -z-10 blur-xl opacity-50 animate-pulse text-primary-hero">Adnan</span>
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-slide-right delay-700"></div>
            </div>
          </h1>
          
          <p 
            ref={el => floatingElementsRef.current[2] = el}
            className="text-xl md:text-2xl text-muted-foreground max-w-md animate-slide-up delay-300 leading-relaxed"
          >
            Crafting exceptional digital experiences through 
            <span className="relative inline-block mx-1">
              <span className="relative z-10">elegant code</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-emerald-500/30 rounded-full"></span>
            </span> 
            and 
            <span className="relative inline-block mx-1">
              <span className="relative z-10">thoughtful design</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500/30 rounded-full"></span>
            </span>.
          </p>
          
          <div 
            ref={el => floatingElementsRef.current[3] = el}
            className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-up delay-400"
          >
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button 
                  className={`group relative overflow-hidden px-8 py-6 rounded-xl transition-all duration-500 shadow-lg ${
                    isDarkTheme 
                      ? 'bg-gradient-to-r from-green-600 to-indigo-600 text-white hover:shadow-indigo-500/40' 
                      : ''
                  }`}
                >
                  <a className="relative z-10 flex items-center gap-2 font-medium transition-all duration-300 group-hover:tracking-wide" href="#projects">
                    View My Projects
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                  </a>
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                  <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 backdrop-blur-xl bg-black/40 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Explore My Work</h4>
                  <p className="text-sm text-muted-foreground">
                    Discover my featured projects and case studies showcasing my skills in web development.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
            
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button 
                  className={`group relative overflow-hidden px-8 py-6 rounded-xl border transition-all duration-300 shadow-lg ${
                    isDarkTheme 
                      ? 'border-white/20 text-white hover:border-white/40' 
                      : ''
                  }`}
                >
                  <a className="relative z-10 flex items-center gap-2 font-medium transition-all duration-300 group-hover:tracking-wide" href="#contact">
                    Get In Touch
                    <span className="w-1 h-1 rounded-full bg-current animate-ping"></span>
                  </a>
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></span>
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></span>
                  <span className="absolute -top-1 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100"></span>
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 backdrop-blur-xl bg-black/40 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Let's Connect</h4>
                  <p className="text-sm text-muted-foreground">
                    Have a project in mind or just want to say hello? I'm always open to new opportunities.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
          
          <div className="pt-8 animate-fade-in delay-500">
            <SocialLinks />
          </div>
        </div>
        
        {/* Hero Image/Visual Column */}
        <motion.div 
          className="hidden lg:block w-1/2 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="glass-card rounded-2xl p-8 w-full aspect-square max-w-lg mx-auto relative">
            {/* Tech Circuit Illustration */}
            <div className="absolute inset-0 opacity-90">
              <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                {/* Circuit Board Base */}
                <motion.path
                  d="M100 200 L300 200 M200 100 L200 300"
                  stroke="rgba(74,222,128,0.3)"
                  strokeWidth="40"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* Circuit Paths */}
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  <path
                    d="M150 150 L250 150 L250 250 L150 250 Z"
                    fill="none"
                    stroke="rgba(74,222,128,0.5)"
                    strokeWidth="2"
                  />
                  <circle cx="200" cy="200" r="30" fill="rgba(74,222,128,0.2)" stroke="rgba(74,222,128,0.5)" strokeWidth="2" />
                  <circle cx="200" cy="200" r="15" fill="rgba(74,222,128,0.3)" />
                </motion.g>

                {/* Animated Connection Points */}
                <motion.g
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  {[
                    [150, 150], [250, 150],
                    [150, 250], [250, 250],
                    [200, 150], [200, 250],
                    [150, 200], [250, 200]
                  ].map(([cx, cy], i) => (
                    <circle
                      key={i}
                      cx={cx}
                      cy={cy}
                      r="4"
                      fill="rgba(74,222,128,0.8)"
                    />
                  ))}
                </motion.g>

                {/* Data Flow Animation */}
                <motion.g>
                  {[...Array(8)].map((_, i) => (
                    <motion.circle
                      key={i}
                      r="2"
                      fill="#4ADE80"
                      initial={{ 
                        cx: 150,
                        cy: 150,
                        opacity: 0 
                      }}
                      animate={{
                        cx: [150, 250, 250, 150, 150],
                        cy: [150, 150, 250, 250, 150],
                        opacity: [0, 1, 1, 1, 0]
                      }}
                      transition={{
                        duration: 4,
                        delay: i * 0.5,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  ))}
                </motion.g>
              </svg>
            </div>

            {/* Glowing Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-hero-green/10 via-transparent to-transparent rounded-2xl" />
            
            {/* Interactive Particles */}
            <div className="absolute inset-0">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-hero-green/40 rounded-full"
                  initial={{
                    x: Math.random() * 400,
                    y: Math.random() * 400,
                    scale: 0
                  }}
                  animate={{
                    x: Math.random() * 400,
                    y: Math.random() * 400,
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            {/* Floating Geometric Elements */}
            <div className="absolute top-10 left-10 w-20 h-20 border border-hero-green/20 rounded-lg animate-float" />
            <div className="absolute bottom-10 right-10 w-16 h-16 border border-hero-green/20 rounded-full animate-float" style={{ animationDelay: '-2s' }} />
            <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-hero-green/20 rounded-lg animate-float rotate-45" style={{ animationDelay: '-1s' }} />
          </div>
        </motion.div>
      </div>

      <ScrollButton 
        targetId="about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow z-10"
      />
    </section>
  );
};

export default Hero;
