// src/app/components/Audio/PlayPauseButton.tsx
import { Pause, Play } from 'lucide-react';
import React from 'react';

interface PlayPauseButtonProps {
  isPlaying: boolean;
  isLoading: boolean;
  togglePlayPause: () => void;
}

const PlayPauseButton: React.FC<PlayPauseButtonProps> = ({
  isPlaying,
  isLoading,
  togglePlayPause
}) => (
  <button
    onClick={togglePlayPause}
    className="w-14 h-14 cursor-pointer flex items-center justify-center rounded-full bg-red-600 transition-colors mr-4 flex-shrink-0 group relative overflow-visible"
  >
    {/* Slow wave animation - only show when playing */}
    {isPlaying && (
      <div 
        className="absolute rounded-full bg-red-600"
        style={{
          width: '56px',
          height: '56px',
          top: '0',
          left: '0',
          animation: 'slowWave 4s cubic-bezier(0.4, 0, 0.2, 1) infinite',
          animationDelay: '0.5s',
          willChange: 'transform, opacity'
        }}
      ></div>
    )}
    
    {/* Loading snakes - shows only when going from pause to play */}
    {isLoading && (
      <>
  {/* First snake - short arc */}
  <div 
    className="absolute w-14 h-14 rounded-full"
    style={{
      border: '5px solid transparent',
      borderTop: '5px solid white',
      borderRadius: '50%',
      animation: 'snakeRotate 0.6s linear',
      zIndex: 5
    }}
  ></div>
  
  {/* Second snake - short arc, offset by 180 degrees */}
  <div 
    className="absolute w-14 h-14 rounded-full"
    style={{
      border: '5px solid transparent',
      borderBottom: '5px solid white',
      borderRadius: '50%',
      animation: 'snakeRotate 0.6s linear',
      zIndex: 5
    }}
  ></div>
      </>
    )}
    
    {/* Play/Pause icons - always visible */}
    {isPlaying ? (
      <Pause className="w-8 h-8 text-white fill-white group-hover:text-red-100 group-hover:fill-red-100 transition-colors relative z-10" />
    ) : (
      <Play className="w-8 h-8 text-white fill-white group-hover:text-red-100 group-hover:fill-red-100 transition-colors ml-0.5 relative z-10" />
    )}
    
    <style jsx>{`
    @keyframes slowWave {
      0% {
        transform: scale(1);
        opacity: 0.6;
      }
      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }
    
    @keyframes snakeRotate {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `}</style>
  </button>
);

export default PlayPauseButton;
