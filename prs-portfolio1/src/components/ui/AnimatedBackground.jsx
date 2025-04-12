import React from 'react';

const AnimatedBackground = () => {
  return (
    <>
      {/* Background animation - dark black to light black gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#151515] to-black">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-white/5 animate-spin-slow blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-white/3 animate-spin-slow blur-3xl" style={{ animationDelay: "-5s" }}></div>
          <div className="absolute top-2/3 left-1/2 w-72 h-72 rounded-full bg-white/5 animate-spin-slow blur-3xl" style={{ animationDelay: "-8s" }}></div>
        </div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>
    </>
  );
};

export default AnimatedBackground;
