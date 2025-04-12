import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import EnhancedAnyBackground from '../ui/EnhancedAnyBackground';
import EnhancedHeroBackground from '../ui/EnhacedHeroBackground';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="animate-on-scroll">
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`/#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-on-scroll delay-100">
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Adnan-Kagdi"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full hover:bg-accent transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/adnan-kagdi-7011542a4/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:kagdiadnan123@outlook.com"
                className="p-2 rounded-full hover:bg-accent transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="mt-4 text-md text-muted-foreground">
              kagdiadnan123@gmail.com
            </p>
          </div>

          <div className="animate-on-scroll delay-200">
            <h3 className="text-lg font-bold mb-4">Let's build something amazing</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Looking for a developer to bring your ideas to life? Let's connect and discuss your project.
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 py-2 px-4 rounded-full bg-accent hover:bg-accent/80 transition-colors"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* <div className="mt-16 pt-8 border-t border-accent text-center text-sm text-muted-foreground">
          © 2025 AdnanK. All rights reserved.
        </div> */}

        <div className="w-full py-6 bg-black text-grey-400 flex justify-center items-center border-t mt-10">
          <p
            className="text-small md:text-small font-light animate-pulse"
            style={{
              fontFamily: "'', cursive",
              letterSpacing: "5px"
            }}
          >
            <span><span className="text-white">&lt;/&gt;</span> with</span> <span className="text-red-500 text-2xl animate-ping">♥</span> by <span className='text-green-500'>_Adnan</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
