import React from 'react';
import { Code, Server, Database, Layout } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import EnhancedHeroBackground from '../ui/EnhacedHeroBackground';

const About = () => {
  const { isDarkTheme } = useTheme();
  
  // Using a male profile image from Unsplash
  const profileImageUrl = "Programming-bro.svg";

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* <EnhancedHeroBackground /> */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="animate-on-scroll order-2 md:order-1 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden">
              <img 
                src={profileImageUrl} 
                alt="Developer Profile" 
                className="w-full h-auto shadow-xl transform transition-transform duration-500 hover:scale-105"
              />
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 h-32 w-32 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-4 -left-4 h-24 w-24 bg-primary/20 rounded-full blur-3xl"></div>
            </div>
            
            {/* Skill badges */}
            <div className="absolute top-4 -left-10 animate-float">
              <div className="p-3 rounded-lg glass">
                <Code size={24} className="text-primary" />
              </div>
            </div>
            <div className="absolute bottom-20 -right-5 animate-float" style={{ animationDelay: "2s" }}>
              <div className="p-3 rounded-lg glass">
                <Server size={24} className="text-primary" />
              </div>
            </div>
            <div className="absolute -bottom-4 left-20 animate-float" style={{ animationDelay: "4s" }}>
              <div className="p-3 rounded-lg glass">
                <Database size={24} className="text-primary" />
              </div>
            </div>
            <div className="absolute top-1/2 right-0 animate-float" style={{ animationDelay: "1s" }}>
              <div className="p-3 rounded-lg glass">
                <Layout size={24} className="text-primary" />
              </div>
            </div>
          </div>

          <div className="animate-on-scroll order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">About Me</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hello! I'm a passionate MERN Stack Developer with a drive to create innovative web applications.
              </p>
              <p>
              I've focused on mastering MongoDB, Express.js, React.js, and Node.js to build full-stack applications that combine functionality with intuitive user experiences.
              </p>
              <p>
               I've worked on several projects that have helped me develop strong problem-solving skills and a keen eye for detail.
              </p>
              <p>
                I'm constantly exploring new technologies and techniques, particularly in frontend development where I enjoy creating responsive, accessible, and visually engaging interfaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
