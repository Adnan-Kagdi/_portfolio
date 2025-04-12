import React from 'react';
import EnhacedHeroBackground from '../ui/EnhacedHeroBackground';

const experienceData = [
  {
    id: 1,
    position: "Senior Full Stack Developer",
    company: "TechInnovate Solutions",
    period: "2021 - Present",
    description: "Leading the development of enterprise web applications using the MERN stack. Responsible for architecture design, code reviews, and mentoring junior developers.",
    achievements: [
      "Reduced application load time by 40% through code optimization and implementing lazy loading",
      "Implemented CI/CD pipelines, reducing deployment time by 60%",
      "Led the migration from REST APIs to GraphQL, improving data fetching efficiency",
      "Developed and maintained a component library, increasing team productivity by 25%"
    ]
  },
  {
    id: 2,
    position: "Full Stack Developer",
    company: "Digital Creators Inc.",
    period: "2019 - 2021",
    description: "Developed and maintained multiple web applications using React, Node.js, Express, and MongoDB. Collaborated closely with designers and product managers.",
    achievements: [
      "Built a real-time notification system using Socket.io, improving user engagement",
      "Implemented responsive designs, ensuring compatibility across all devices",
      "Integrated payment gateways including Stripe and PayPal",
      "Developed an admin dashboard with comprehensive analytics features"
    ]
  },
  {
    id: 3,
    position: "Frontend Developer",
    company: "WebSphere Agency",
    period: "2017 - 2019",
    description: "Specialized in creating responsive and interactive user interfaces for client websites and web applications using React and associated technologies.",
    achievements: [
      "Created over 20 client websites with responsive designs",
      "Improved site SEO, resulting in a 30% increase in organic traffic",
      "Implemented animations and transitions, enhancing user experience",
      "Collaborated with backend developers to integrate RESTful APIs"
    ]
  }
];

const ExperienceItem = ({ item, index }) => {
  return (
    <div className={`relative pb-12 animate-on-scroll-left ${index > 0 ? 'mt-12' : ''}`}>
      {index < experienceData.length - 1 && (
        <div className="absolute left-6 top-0 bottom-0 w-px bg-accent/50"></div>
      )}

      <div className="flex gap-6">
        <div className="min-w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold relative z-10">
          {experienceData.length - index}
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold">{item.position}</h3>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-muted-foreground">
              <span className="font-medium">{item.company}</span>
              <span className="hidden sm:inline">•</span>
              <span>{item.period}</span>
            </div>
          </div>

          <p className="text-muted-foreground">
            {item.description}
          </p>

          <div>
            <h4 className="font-medium mb-2">Key Achievements:</h4>
            <ul className="space-y-2">
              {item.achievements.map((achievement, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-primary min-w-4">•</span>
                  <span className="text-muted-foreground">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-background">
      {/* <EnhacedHeroBackground /> */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Professional Experience</h2>
          <p className="text-muted-foreground">
            A timeline of my professional journey, highlighting my roles, responsibilities, and key achievements.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experienceData.map((item, index) => (
            <ExperienceItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
