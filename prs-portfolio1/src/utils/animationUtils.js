// This utility handles scroll animations
export const setupScrollAnimations = () => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-stagger, .animate-on-scroll-staggered');
    
    // Make sure to add the reset-on-exit class to elements that should reset when out of view
    animatedElements.forEach(element => {
      if (!element.classList.contains('reset-on-exit')) {
        element.classList.add('reset-on-exit');
      }
    });
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else if (entry.target.classList.contains('reset-on-exit')) {
          entry.target.classList.remove('is-visible');
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    });
    
    animatedElements.forEach(element => {
      observer.observe(element);
    });
    
    // Trigger animations for elements already in view on page load
    setTimeout(() => {
      animatedElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          element.classList.add('is-visible');
        }
      });
    }, 100);
    
    return () => {
      animatedElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  };
  
  export const setupParallaxEffects = () => {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.2;
        const yPos = -(scrollPosition * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  };
  
  // Function to add subtle mouse following effect to elements
  export const setupMouseFollowEffect = () => {
    const followElements = document.querySelectorAll('.follow-mouse');
    
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      
      followElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const moveX = (clientX - centerX) * 0.05;
        const moveY = (clientY - centerY) * 0.05;
        
        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  };
  