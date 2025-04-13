import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import EnhancedAnyBackground from '../ui/EnhancedAnyBackground';
import EnhancedHeroBackground from '../ui/EnhacedHeroBackground';

const projectData = [
  {
    id: 1,
    title: "Modern Vacation Rental Platform",
    description: "This web application simplifies rental listing management with features to add, edit, and delete listings. A built-in comment system encourages user interaction, while secure login ensures data protection. The platform is fully responsive and user-friendly across all devices.",
    technologies: ["HTML & CSS", "Javascript", "Bootstrap", "Node.js", "Express", "MongoDB", "Cloudinary", "Render"],
    image: "wanderlust1_img.png",
    githubUrl: "https://github.com/Adnan-Kagdi/Wanderlust",
    liveUrl: "https://wanderlust-project-fstv.onrender.com/listing",
    featured: false
  },
  {
    id: 3,
    title: "Real time stock trading platform",
    description: "A stock trading web application that allows users to view market data, buy and sell stocks, and track holdings, positions, and order history. Built with a focus on performance, usability, and real-world trading workflows.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Chart.js", "Render"],
    image: "zerodha_img.png",
    githubUrl: "https://github.com/Adnan-Kagdi/Zerodha",
    liveUrl: "https://info-18ts.onrender.com",
    featured: false
  },
  {
    id: 4,
    title: " Collaborative Code Management System",
    description: "A version control web application that lets users manage code changes through commands like init, add, push, pull, and revert. It features secure login, file history tracking and also have feature of storing file on bucket.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "AWS S3", "Render"],
    image: "vereon1_img.png",
    githubUrl: "https://github.com/Adnan-Kagdi/Vereon",
    liveUrl: "https://vereon-1.onrender.com",
    featured: false
  }
];

const ProjectItem = ({ project, index }) => {
  const { isDarkTheme } = useTheme();
  const isEven = index % 2 === 0;

  return (
    <>

      {/* <div className="relative group h-[400px] overflow-hidden rounded-xl border border-white/10 transition-all duration-500">
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-10">
                <div className="flex gap-6 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all text-white hover:translate-y-[-5px] hover:shadow-md"
                    aria-label="GitHub repository"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 rounded-full bg-white text-black hover:bg-white/90 transition-all hover:translate-y-[-5px] hover:shadow-md"
                    aria-label="Live project"
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
            </div> */}

      <div className="animate-on-scroll mb-80 last:mb-24">
        <div className={`grid grid-cols-1 md:grid-cols-12 gap-12 items-center`}>
          <div className={`relative md:col-span-6 ${isEven ? 'md:order-1' : 'md:order-2'}`}>

            <div class="laptop">
              <div className="screen">
                <div className={`relative md:col-span-6 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-10">
                    <div className="flex gap-6 scale-90 opacity-1 group-hover:scale-100 hover:opacity-100 transition-all duration-500">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-4 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all text-white hover:translate-y-[-5px] hover:shadow-md"
                        aria-label="GitHub repository"
                      >
                        <Github size={24} />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-4 rounded-full bg-white text-black hover:bg-white/90 transition-all hover:translate-y-[-5px] hover:shadow-md"
                        aria-label="Live project"
                      >
                        <ExternalLink size={24} />
                      </a>
                    </div>
                  </div>
                  <img src={project.image}
                    alt={project.title}
                    className='prj_img w-full h-full object-cover transition-all duration-700'
                  />
                </div>
                <div class="base"></div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full border border-white/10 hidden md:block"></div>
            <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full border border-white/10 hidden md:block"></div>
          </div>

          <div className={`md:col-span-6 ${isEven ? 'md:order-2' : 'md:order-1'} ${isEven ? 'md:pl-20' : ''}`}>
            <div className="animate-on-scroll-staggered space-y-6">
              <div className="flex items-center gap-3">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-300 bg-clip-text text-transparent">{project.title}</h3>
                {project.featured && (
                  <span className="px-3 py-1 text-xs bg-white/10 backdrop-blur-sm rounded-full text-white">
                    Featured
                  </span>
                )}
              </div>

              <p className="text-lg text-white/80">{project.description}</p>

              <div className="flex flex-wrap gap-2 my-6">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white/5 text-xs backdrop-blur-sm rounded-full transition-all hover:bg-white/10 hover:translate-y-[-2px] text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-8 pt-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-medium relative group"
                >
                  <span className="text-white/70 group-hover:text-white transition-colors">View Code</span>
                  <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-green-600 group-hover:w-full transition-all duration-300"></span>
                  <Github size={16} className="text-white/70 group-hover:text-white transition-colors" />
                </a>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm font-medium relative group"
                >
                  <span className="text-white/70 group-hover:text-white transition-colors">Live Demo</span>
                  <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-green-600 group-hover:w-full transition-all duration-300"></span>
                  <ExternalLink size={16} className="text-white/70 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gradient-to-w from-black to-black/90">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-24 animate-on-scroll">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white">My Projects</h2>
          <p className="text-xl text-white/60">
            A selection of my recent work, showcasing my skills in full-stack development.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-45">
            {projectData.map((project, index) => (
              <ProjectItem key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
