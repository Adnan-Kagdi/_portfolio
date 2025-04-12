import React from 'react';
import useTypewriter from '../hooks/useTypewriter';

const Hero = () => {
  const { typedText, isTyping, reset } = useTypewriter('Welcome to my portfolio!', 100, true, () => {
    console.log('Typing complete!');
  });

  return (
    <div className="hero">
      <h1>{typedText}</h1>
      {!isTyping && (
        <button onClick={reset}>Restart Typing</button>
      )}
    </div>
  );
};

export default Hero;
