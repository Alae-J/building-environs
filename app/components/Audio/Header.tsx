// src/app/components/Audio/Header.tsx
import React from 'react';
import Marquee from 'react-fast-marquee';

interface HeaderProps {
  title: string;
  subtitle: string;
  isPlaying: boolean;
  isLoading: boolean;
  cleanTitle: (raw: string) => string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  isPlaying,
  isLoading,
  cleanTitle,
}) => (
  <div className="mb-3">
    <div className="relative overflow-hidden">
      <Marquee
        gradient={false}
        speed={40}
        play={isPlaying && !isLoading}
        pauseOnHover={false}
        pauseOnClick={false}
        className="whitespace-nowrap z-0"
      >
        <h3 className="font-semibold text-gray-900 text-2xl leading-tight inline-block mr-12">
          {cleanTitle(title)}
        </h3>
      </Marquee>
      <div
        className="absolute top-0 right-0 h-full w-8
                   bg-gradient-to-l from-white to-transparent
                   pointer-events-none z-10"
      />
    </div>
    <p className="text-red-600 text-sm font-medium mt-1">
      {subtitle}
    </p>
  </div>
);

export default Header;
