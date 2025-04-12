import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  useEffect(() => {
    // Add a parallax effect to the 404
    const moveText = (e) => {
      const text = document.querySelector('.not-found-text');
      if (text) {
        const x = (window.innerWidth / 2 - e.pageX) / 30;
        const y = (window.innerHeight / 2 - e.pageY) / 30;
        text.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener('mousemove', moveText);
    return () => window.removeEventListener('mousemove', moveText);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 text-center">
      <div className="not-found-text">
        <h1 className="text-9xl sm:text-[15rem] font-bold opacity-10">404</h1>
      </div>
      
      <div className="absolute glass p-8 rounded-xl max-w-md backdrop-blur-md animate-scale">
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all flex items-center justify-center gap-2"
          >
            <HomeIcon className="w-4 h-4" />
            <span>Go Home</span>
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-full bg-accent text-accent-foreground font-medium hover:bg-accent/80 transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
