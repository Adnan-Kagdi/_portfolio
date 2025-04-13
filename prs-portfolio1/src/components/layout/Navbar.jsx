import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import ThemeToggle from '../ui/ThemeToggle';
import { useIsMobile } from '../../hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const { isDarkTheme } = useTheme();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check which section is currently in view
      const sections = ['about', 'projects', 'skills', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });

      setActiveLink(currentSection || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scrolling for anchor links
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navbarClass = isDarkTheme
    ? 'backdrop-blur-md bg-black/30 border border-white/10'
    : 'backdrop-blur-md bg-white/80 border border-black/5';

  return (
    <header
      className={`fixed top-4 w-full z-50 transition-all duration-500 flex justify-center px-4`}
    >
      <div className={`
        ${isScrolled ? `${navbarClass} shadow-lg ${isDarkTheme ? 'shadow-black/5' : 'shadow-black/5'}` : ''} 
        rounded-full px-4 sm:px-6 py-3 flex items-center justify-between transition-all duration-500
        w-full max-w-[90%] sm:max-w-[440px] md:max-w-[35rem] mx-auto
      `}>
        <Link
          to="/"
          className="text-xl font-bold tracking-tighter z-10 group relative overflow-hidden"
        >
          <span className="sr-only">Portfolio</span>
          <div className="relative transition-transform duration-300 group-hover:scale-110">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="20" className={`fill-primary transition-all duration-300 ${isDarkTheme ? 'group-hover:fill-indigo-500' : 'group-hover:fill-indigo-600'}`} />
              <path d="M12 20L20 12L28 20L20 28L12 20Z" className="fill-primary-foreground" />
            </svg>
            <div className={`absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300 ${isDarkTheme ? 'bg-indigo-500' : 'bg-indigo-400'}`}></div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-14">
          {[
            { name: 'About', id: 'about' },
            { name: 'Projects', id: 'projects' },
            { name: 'Skills', id: 'skills' },
            { name: 'Contact', id: 'contact' }
          ].map((item) => (
            <a
              key={item.name}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className={`text-sm font-medium relative px-3 py-1.5 overflow-hidden group ${activeLink === item.id
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-white'
                } transition-all duration-300`}
            >
              <span className="relative z-10">{item.name}</span>
              <span className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full transform origin-left scale-x-0 transition-transform duration-300 ${activeLink === item.id
                  ? 'scale-x-100 bg-gradient-to-r from-green-500 to-black-500'
                  : 'group-hover:scale-x-100 bg-gradient-to-r from-green-500 to-black-500/200'
                }`}

              ></span>
              {/* <span className={`absolute inset-0 rounded-full transition-all duration-300 -z-10 ${
                activeLink === item.id 
                  ? isDarkTheme ? 'bg-white/10' : 'bg-black/5' 
                  : isDarkTheme ? 'group-hover:bg-white/5' : 'group-hover:bg-black/5'
              } opacity-0 group-hover:opacity-100 ${activeLink === item.id ? 'opacity-100' : ''}`}></span> */}
            </a>
          ))}

          {/* <ThemeToggle /> */}
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          {/* <ThemeToggle /> */}

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="z-50 p-2 rounded-full transition-all duration-300 group"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative overflow-hidden w-7 h-7 flex items-center justify-center">
              <Menu size={20} className={`absolute inset-0 transition-all duration-500 ${isMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                } ${isDarkTheme ? 'text-white' : ''}`} />
              <X size={20} className={`absolute inset-0 transition-all duration-500 ${isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0'
                } ${isDarkTheme ? 'text-white' : ''}`} />
              <span className="absolute inset-0 rounded-full bg-current opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`fixed inset-0 ${isDarkTheme ? 'bg-gradient-to-b from-black/95 to-gray-900/95' : 'bg-gradient-to-b from-white/95 to-gray-50/95'} backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}>
          <nav className="flex flex-col items-center gap-8">
            {[
              { name: 'About', id: 'about' },
              { name: 'Projects', id: 'projects' },
              { name: 'Skills', id: 'skills' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <a
                key={item.name}
                href={`#${item.id}`}
                onClick={(e) => {
                  scrollToSection(e, item.id);
                  setIsMenuOpen(false);
                }}
                className="text-2xl font-medium relative overflow-hidden group"
              >
                <span className="relative z-10 transition-all duration-300 group-hover:text-transparent bg-clip-text bg-gradient-to-r group-hover:from-black-500 group-hover:to-grey-500">{item.name}</span>
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-black-500 to-grey-500 group-hover:w-full transition-all duration-500"></span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
