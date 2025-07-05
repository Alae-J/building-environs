// components/Banner.tsx
import React from 'react';

const Banner: React.FC = () => {
  return (
    <div 
      className="relative bg-cover bg-center bg-no-repeat h-[300px] flex items-center" 
      style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/construction-cityscape-bg.jpg')"
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            News &amp; Articles
          </h1>
          <p className="text-lg md:text-xl text-white leading-relaxed">
            Our thoughts on recruitment, construction, engineering,<br />
            and everything in between
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;