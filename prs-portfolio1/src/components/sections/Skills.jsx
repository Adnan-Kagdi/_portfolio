import React from 'react';
import EnhacedHeroBackground from '../ui/EnhacedHeroBackground';
import EnhancedAnyBackground from '../ui/EnhancedAnyBackground';

const skillsData = {
  frontend: [
    { name: "React.js", level: 90 },
    { name: "JavaScript (ES6+)", level: 95 },
    { name: "HTML5 & CSS3", level: 90 },
    { name: "Redux", level: 85 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Bootstrap", level: 80 },
  ],
  backend: [
    { name: "Node.js", level: 90 },
    { name: "Express.js", level: 85 },
    { name: "MongoDB", level: 90 },
    { name: "RESTful APIs", level: 90 },
    { name: "Mongoose", level: 90 },
  ],
  tools: [
    { name: "Git & GitHub", level: 90 },
    { name: "Jest & Testing Library", level: 80 },
    { name: "AWS Services", level: 70 },
    { name: "Cloudinary", level: 85 },
    { name: "MapBox", level: 85 },
    { name: "Emailjs", level: 75 },
    { name: "Hoppscotch", level: 85 }
  ]
};

const SkillBar = ({ skill, delay }) => {
  return (
    <div className="mb-6 animate-on-scroll" style={{ transitionDelay: `${delay * 100}ms` }}>
      <div className="flex justify-between mb-2">
        <span className="font-medium text-white">{skill.name}</span>
        <span className="text-sm text-white/70">{skill.level}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-green-300 to-green-600 transition-all duration-1000 origin-left"
          style={{ width: "0%" }}
          data-width={`${skill.level}%`} // Correct attribute
        ></div>
      </div>
    </div>
  );
};


const SkillCategory = ({ title, skills }) => {
  return (
    <div className="animate-on-scroll">
      <h3 className="text-xl font-bold mb-6 text-white">{title}</h3>
      {skills.map((skill, index) => (
        <SkillBar key={skill.name} skill={skill} delay={index} />
      ))}
    </div>
  );
};

const Skills = () => {
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.bg-gradient-to-r'); // Correct class
            skillBars.forEach(bar => {
              const width = bar.getAttribute("data-width"); // Get correct attribute
              setTimeout(() => {
                bar.style.width = width; // Apply width change
              }, 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillSections = document.querySelectorAll('.animate-on-scroll');
    skillSections.forEach(section => observer.observe(section));

    return () => {
      skillSections.forEach(section => observer.unobserve(section));
    };
  }, []);


  return (
    <section id="skills" className="py-24 bg-black/90">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight bg-gradient-to-r from-green-500 to-green-500 bg-clip-text text-transperent">Technical Skills</h2>
          <p className="text-white/70 bg-gradient-to-r from-green-600 to-green-100 bg-clip-text">
            A comprehensive overview of my technical abilities, showcasing my proficiency across various technologies and tools.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <SkillCategory title="Frontend Development" skills={skillsData.frontend} />
          <SkillCategory title="Backend Development" skills={skillsData.backend} />
          <SkillCategory title="Tools & Platforms" skills={skillsData.tools} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
