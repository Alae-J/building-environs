'use client';

import { formatSecondsToTime, parseDurationToSeconds } from '@/app/types/podcast';
import { Pause, Play, Share } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

interface AudioPlayerProps {
  title?: string;
  subtitle?: string;
  thumbnailUrl?: string; // Optional - falls back to episodeFeaturedImage
  episodeFeaturedImage?: string; // Fallback thumbnail from hero_banner
  audioUrl?: string;
  duration?: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  title = "Talking with Liam Carmody about Property Investment",
  subtitle = "The Building Talks Podcast",
  thumbnailUrl,
  episodeFeaturedImage,
  audioUrl = "",
  duration = "01:15:50"
}) => {
    // Use thumbnailUrl if provided, otherwise fall back to episodeFeaturedImage
    const displayThumbnail = thumbnailUrl || episodeFeaturedImage || "/api/placeholder/120/120";
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [totalDuration, setTotalDuration] = useState(parseDurationToSeconds(duration));
    const [playbackRate, setPlaybackRate] = useState(1);
    const audioRef = useRef<HTMLAudioElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number>(null);
    const [isLoading, setIsLoading] = useState(false);

  // Generate waveform data based on episode duration
  const generateWaveformData = (episodeDuration: number) => {
    const bars = 150;
    // Use episode duration and title to create consistent waveform
    const seed = (title?.length || 0) + episodeDuration;
    
    return Array.from({ length: bars }, (_, i) => {
      // Create pseudo-random but consistent pattern based on seed
      const pseudoRandom = Math.sin(seed * i * 0.1) * Math.cos(seed * i * 0.05);
      const baseHeight = (Math.abs(pseudoRandom) % 0.8) + 0.1;
      const position = i / bars;
      
      let multiplier = 1;
      if (position < 0.1 || position > 0.9) {
        multiplier = 0.3;
      } else if (position > 0.3 && position < 0.7) {
        multiplier = 1.2;
      }
      
      return Math.min(baseHeight * multiplier, 1);
    });
  };

  // Function to remove episode pattern
  const cleanTitle = (title: string) => {
    return title.replace(/^S\d+\.\s*Ep\s*\d+\.\s*/, '');
  };

  const [waveformData, setWaveformData] = useState(() => generateWaveformData(parseDurationToSeconds(duration)));

  const drawWaveform = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
  
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
  
    const { width, height } = canvas;
    ctx.clearRect(0, 0, width, height);
  
    const barWidth = 2;
    const barSpacing = 1;
    const totalBarWidth = barWidth + barSpacing;
    const barsCount = Math.floor(width / totalBarWidth);
    
    // Use actual audio duration if available
    const actualDuration = audioRef.current?.duration || totalDuration;
    // Only show progress if currentTime is greater than 0 AND we have a valid duration
    const progress = (actualDuration > 0 && currentTime > 0) ? currentTime / actualDuration : 0;
  
    // Draw bars across the full width using all available bars
    for (let i = 0; i < barsCount; i++) {
      // Map waveform data to fill the entire width
      const waveformIndex = Math.floor((i / barsCount) * waveformData.length);
      const amplitude = waveformData[waveformIndex] || 0.5;
      
      const x = i * totalBarWidth;
      const barHeight = amplitude * (height - 8) + 4;
      const y = (height - barHeight) / 2;
      
      // Progress is based on physical position in the canvas
      const barProgress = i / barsCount;
      
      // Only color bars red if we actually have progress AND currentTime > 0
      if (progress > 0 && barProgress <= progress) {
        ctx.fillStyle = '#ef4444';
      } else {
        ctx.fillStyle = '#e5e7eb';
      }
      
      ctx.fillRect(x, y, barWidth, barHeight);
    }
  };

  const formatTime = (seconds: number) => {
    return formatSecondsToTime(seconds);
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        // Show loading animation first
        setIsLoading(true);
        
        // Start audio after animation completes (300ms)
        setTimeout(() => {
          if (audioRef.current) {
            audioRef.current.play();
          }
          setIsPlaying(true);
          setIsLoading(false);
        }, 300);
      }
    } else {
      if (!isPlaying) {
        // Show loading animation first
        setIsLoading(true);
        
        // Set playing state after animation completes (300ms)
        setTimeout(() => {
          setIsPlaying(true);
          setIsLoading(false);
        }, 300);
      } else {
        setIsPlaying(false);
      }
    }
  };

  const handleRewind = () => {
    if (audioRef.current) {
      const newTime = Math.max(0, audioRef.current.currentTime - 15);
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime); // Update state to sync with UI
    }
  };

  const handleFastForward = () => {
    if (audioRef.current) {
      const newTime = Math.min(audioRef.current.duration || totalDuration, audioRef.current.currentTime + 30);
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime); // Update state to sync with UI
    }
  };

  const handleSpeedToggle = () => {
    const speeds = [1, 1.25, 1.5, 2];
    const currentIndex = speeds.indexOf(playbackRate);
    const nextIndex = (currentIndex + 1) % speeds.length;
    const newSpeed = speeds[nextIndex];
    setPlaybackRate(newSpeed);
    
    if (audioRef.current) {
      audioRef.current.playbackRate = newSpeed;
    }
  };

  // Rewind 15 seconds SVG
  const RewindIcon = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_597_182)">
        <path d="M11.7331 5.02519C11.3312 5.12558 10.9241 4.88118 10.8237 4.47932C10.7233 4.07746 10.9677 3.6703 11.3696 3.56991L11.7331 5.02519ZM17.1313 4.29303L17.3119 3.5651L17.3127 3.5653L17.1313 4.29303ZM22.7001 7.66158L23.2605 7.16308L23.2614 7.16415L22.7001 7.66158ZM25.3454 13.5545L26.0902 13.4656L26.0903 13.4664L25.3454 13.5545ZM24.1853 19.9886L24.8525 20.3312L24.8525 20.3312L24.1853 19.9886ZM10.9484 26.0337L11.1259 25.305L11.1264 25.3051L10.9484 26.0337ZM2.69045 14.5853L1.94297 14.5238L1.94299 14.5236L2.69045 14.5853ZM4.51243 7.99796C4.76893 7.67272 5.24053 7.617 5.56576 7.87351C5.891 8.13001 5.94671 8.60161 5.69021 8.92684L4.51243 7.99796ZM12.0777 4.83186C11.7826 5.12254 11.3077 5.11896 11.017 4.82387C10.7263 4.52877 10.7299 4.05391 11.025 3.76324L12.0777 4.83186ZM14.3208 0.516822C14.6159 0.226146 15.0907 0.229727 15.3814 0.52482C15.6721 0.819914 15.6685 1.29477 15.3734 1.58545L14.3208 0.516822ZM11.0252 4.832C10.73 4.5414 10.7263 4.06654 11.0169 3.77137C11.3075 3.4762 11.7823 3.4725 12.0775 3.7631L11.0252 4.832ZM15.2871 6.92302C15.5823 7.21362 15.586 7.68847 15.2954 7.98364C15.0048 8.27881 14.53 8.28252 14.2348 7.99192L15.2871 6.92302ZM11.3696 3.56991C13.3202 3.08262 15.3605 3.08097 17.3119 3.5651L16.9507 5.02096C15.2373 4.59588 13.4458 4.59733 11.7331 5.02519L11.3696 3.56991ZM17.3127 3.5653C19.6123 4.13849 21.6853 5.39244 23.2605 7.16308L22.1398 8.16009C20.7653 6.61508 18.9565 5.52092 16.9499 5.02076L17.3127 3.5653ZM23.2614 7.16415C24.8242 8.9275 25.8111 11.1261 26.0902 13.4656L24.6007 13.6433C24.3578 11.6071 23.4989 9.69369 22.1388 8.15902L23.2614 7.16415ZM26.0903 13.4664C26.3692 15.8268 25.9383 18.2169 24.8525 20.3312L23.5181 19.6459C24.4677 17.7969 24.8446 15.7068 24.6006 13.6425L26.0903 13.4664ZM24.8525 20.3312C22.2111 25.4741 16.387 28.1339 10.7705 26.7623L11.1264 25.3051C16.0687 26.5121 21.1938 24.1715 23.5182 19.6459L24.8525 20.3312ZM10.771 26.7624C5.21828 25.41 1.47425 20.2196 1.94297 14.5238L3.43792 14.6469C3.02973 19.6071 6.29027 24.1273 11.1259 25.305L10.771 26.7624ZM1.94299 14.5236C2.1396 12.1432 3.0333 9.87342 4.51243 7.99796L5.69021 8.92684C4.39364 10.5708 3.61024 12.5604 3.4379 14.6471L1.94299 14.5236ZM11.025 3.76324L14.3208 0.516822L15.3734 1.58545L12.0777 4.83186L11.025 3.76324ZM12.0775 3.7631L15.2871 6.92302L14.2348 7.99192L11.0252 4.832L12.0775 3.7631Z" fill="currentColor"/>
        <path d="M10.9275 18.7299V13.253H10.8507L9.21032 14.4234V13.4292L10.9275 12.2091H11.9398V18.7299H10.9275ZM15.8624 18.8881C14.579 18.8881 13.6933 18.0882 13.6029 17.0308L13.5984 16.9721H14.5474L14.5519 17.0082C14.6378 17.5821 15.1575 18.0385 15.8714 18.0385C16.6758 18.0385 17.2362 17.4646 17.2362 16.6467V16.6377C17.2362 15.8333 16.6668 15.2639 15.8805 15.2639C15.4828 15.2639 15.1439 15.3814 14.8863 15.6164C14.7688 15.7203 14.6649 15.8468 14.5881 15.996H13.7159L14.0413 12.2091H17.8327V13.0677H14.8366L14.6378 15.1464H14.7146C14.9903 14.7081 15.5009 14.455 16.1019 14.455C17.3266 14.455 18.2032 15.3678 18.2032 16.6196V16.6286C18.2032 17.9662 17.2362 18.8881 15.8624 18.8881Z" fill="currentColor"/>
      </g>
      <defs>
        <clipPath id="clip0_597_182">
          <rect width="28" height="28" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );

  // Forward 30 seconds SVG
  const ForwardIcon = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_597_191)">
        <path d="M15.9968 5.02519C16.3987 5.12558 16.8058 4.88118 16.9062 4.47932C17.0066 4.07746 16.7622 3.6703 16.3604 3.56991L15.9968 5.02519ZM10.5986 4.29303L10.418 3.5651L10.4172 3.5653L10.5986 4.29303ZM5.02978 7.66158L4.46943 7.16308L4.46848 7.16415L5.02978 7.66158ZM2.38449 13.5545L1.63977 13.4656L1.63968 13.4664L2.38449 13.5545ZM3.54462 19.9886L2.87746 20.3312L2.87747 20.3312L3.54462 19.9886ZM16.7815 26.0337L16.604 25.305L16.6036 25.3051L16.7815 26.0337ZM25.0395 14.5853L25.787 14.5238L25.7869 14.5236L25.0395 14.5853ZM23.2175 7.99796C22.961 7.67272 22.4894 7.617 22.1642 7.87351C21.8389 8.13001 21.7832 8.60161 22.0397 8.92684L23.2175 7.99796ZM15.6523 4.83186C15.9474 5.12254 16.4222 5.11896 16.7129 4.82387C17.0036 4.52877 17 4.05391 16.7049 3.76324L15.6523 4.83186ZM13.4092 0.516822C13.1141 0.226146 12.6392 0.229727 12.3485 0.52482C12.0579 0.819914 12.0614 1.29477 12.3565 1.58545L13.4092 0.516822ZM16.7048 4.832C16.9999 4.5414 17.0036 4.06654 16.713 3.77137C16.4224 3.4762 15.9476 3.4725 15.6524 3.7631L16.7048 4.832ZM12.4428 6.92302C12.1476 7.21361 12.1439 7.68847 12.4345 7.98364C12.7251 8.27881 13.2 8.28252 13.4951 7.99192L12.4428 6.92302ZM16.3604 3.56991C14.4097 3.08262 12.3694 3.08097 10.418 3.5651L10.7792 5.02096C12.4926 4.59588 14.2841 4.59733 15.9968 5.02519L16.3604 3.56991ZM10.4172 3.5653C8.11764 4.13849 6.04465 5.39244 4.46943 7.16308L5.59013 8.16009C6.96463 6.61508 8.77346 5.52092 10.78 5.02076L10.4172 3.5653ZM4.46848 7.16415C2.90577 8.9275 1.91885 11.1261 1.63977 13.4656L3.12921 13.6433C3.3721 11.6071 4.23103 9.69369 5.59108 8.15902L4.46848 7.16415ZM1.63968 13.4664C1.36068 15.8268 1.79163 18.2169 2.87746 20.3312L4.21178 19.6459C3.26219 17.7969 2.88532 15.7068 3.12931 13.6425L1.63968 13.4664ZM2.87747 20.3312C5.51882 25.4741 11.343 28.1339 16.9594 26.7623L16.6036 25.3051C11.6612 26.5121 6.5361 24.1715 4.21178 19.6459L2.87747 20.3312ZM16.959 26.7624C22.5116 25.41 26.2557 20.2196 25.787 14.5238L24.292 14.6469C24.7002 19.6071 21.4397 24.1273 16.604 25.305L16.959 26.7624ZM25.7869 14.5236C25.5903 12.1432 24.6966 9.87342 23.2175 7.99796L22.0397 8.92684C23.3363 10.5708 24.1197 12.5604 24.292 14.6471L25.7869 14.5236ZM16.7049 3.76324L13.4092 0.516822L12.3565 1.58545L15.6523 4.83186L16.7049 3.76324ZM15.6524 3.7631L12.4428 6.92302L13.4951 7.99192L16.7048 4.832L15.6524 3.7631Z" fill="currentColor"/>
        <path d="M10.9701 18.8519C9.57822 18.8519 8.66991 18.0882 8.58405 17.0082L8.57953 16.954H9.54658L9.5511 16.9992C9.61437 17.5912 10.1612 18.0069 10.9701 18.0069C11.7654 18.0069 12.3032 17.5595 12.3032 16.9178V16.9088C12.3032 16.1722 11.7699 15.761 10.9023 15.761H10.1069V14.9747H10.8706C11.6163 14.9747 12.1224 14.5363 12.1224 13.9308V13.9218C12.1224 13.2891 11.6976 12.9186 10.961 12.9186C10.238 12.9186 9.73186 13.3027 9.6686 13.9172L9.66408 13.9624H8.7151L8.71961 13.9127C8.81903 12.8146 9.68667 12.0871 10.961 12.0871C12.258 12.0871 13.1075 12.783 13.1075 13.7907V13.7997C13.1075 14.6086 12.5291 15.1509 11.7338 15.3181V15.3407C12.6918 15.4266 13.3335 16.005 13.3335 16.9178V16.9269C13.3335 18.0476 12.3529 18.8519 10.9701 18.8519ZM16.7184 18.8881C15.2135 18.8881 14.3097 17.5731 14.3097 15.4718V15.4627C14.3097 13.3614 15.2135 12.0509 16.7184 12.0509C18.2187 12.0509 19.127 13.3614 19.127 15.4627V15.4718C19.127 17.5731 18.2187 18.8881 16.7184 18.8881ZM16.7184 18.0476C17.5905 18.0476 18.1057 17.067 18.1057 15.4718V15.4627C18.1057 13.8675 17.5905 12.896 16.7184 12.896C15.8417 12.896 15.331 13.8675 15.331 15.4627V15.4718C15.331 17.067 15.8417 18.0476 16.7184 18.0476Z" fill="currentColor"/>
      </g>
      <defs>
        <clipPath id="clip0_597_191">
          <rect width="28" height="28" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );

  // Animation loop for waveform (only draws, doesn't update time)
  useEffect(() => {
    const animate = () => {
      drawWaveform();
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [currentTime, totalDuration]); // Removed isPlaying dependency

  // Update waveform when duration changes
  useEffect(() => {
    if (totalDuration > 0) {
      setWaveformData(generateWaveformData(totalDuration));
    }
  }, [totalDuration, title]);

  // Handle canvas resize
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return (
    <div className="bg-white rounded-lg border border-gray-200 max-w-6xl mx-auto overflow-hidden">
      <div className="flex p-4">
        {/* Thumbnail - centered in its container */}
        <div className="flex-shrink-0 mr-6 flex items-center justify-center">
          {displayThumbnail === "/api/placeholder/120/120" ? (
            // Default podcast branding when no image available
            <div className="w-36 h-36 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center relative">
              <div className="text-white text-center">
                <div className="text-xs font-bold bg-red-500 px-1 rounded mb-1">THE</div>
                <div className="text-sm font-bold leading-tight">Building</div>
                <div className="text-sm font-bold leading-tight">Talks</div>
                <div className="text-xs mt-1">PODCAST</div>
              </div>
              <div className="absolute bottom-1 right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          ) : (
            // Episode-specific thumbnail
            <div className="w-46 h-46 rounded-lg overflow-hidden">
              <img
                src={"https://www.buzzsprout.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCTzlSa0FJPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--2b4275e0e6b8e1aee8846b8e9e54bbe92005f4fc/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9MWm05eWJXRjBPZ2hxY0djNkUzSmxjMmw2WlY5MGIxOW1hV3hzV3docEFsZ0NhUUpZQW5zR09nbGpjbTl3T2d0alpXNTBjbVU2Q25OaGRtVnlld1k2REhGMVlXeHBkSGxwUVRvUVkyOXNiM1Z5YzNCaFkyVkpJZ2x6Y21kaUJqb0dSVlE9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--1924d851274c06c8fa0acdfeffb43489fc4a7fcc/The%20Building%20Talks%20Podcast%20Artwork%20(USE).jpeg"}
                alt={`${title} episode thumbnail`}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        {/* Main content area */}
        <div className="flex-1 min-w-0">
          {/* Title and Subtitle with fade effect */}
          <div className="mb-3">
            {/* Title with single line and fade effect */}
            <div className="relative overflow-hidden">
              <h3 className="font-semibold text-gray-900 text-2xl leading-tight whitespace-nowrap">
                {cleanTitle(title)}
              </h3>
              {/* Fade overlay */}
              <div className="absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
            </div>
            <p className="text-red-600 text-sm font-medium mt-1">{subtitle}</p>
          </div>

          {/* Play button and waveform row */}
          <div className="flex items-center mb-3">
            {/* Large Play/Pause button */}
{/* Large Play/Pause button */}
{/* Large Play/Pause button */}
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

            {/* Waveform */}
            <div className="flex-1">
              <canvas
                ref={canvasRef}
                className="w-full h-12 cursor-pointer"
                style={{ height: '48px' }}
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX = e.clientX - rect.left;
                  const progress = clickX / rect.width;
                  // Use actual audio duration if available, fallback to parsed duration
                  const actualDuration = audioRef.current?.duration || totalDuration;
                  const newTime = progress * actualDuration;
                  
                  if (audioRef.current) {
                    audioRef.current.currentTime = newTime;
                    // Don't manually set currentTime - let onTimeUpdate handle it
                  }
                }}
              />
            </div>
          </div>

          {/* Bottom controls row */}
          <div className="flex items-center justify-between">
            {/* Left side controls */}
            <div className="flex items-center space-x-4">
              {/* Rewind 15s button */}
              <button
                onClick={handleRewind}
                className="w-7 h-7 flex cursor-pointer items-center justify-center text-gray-600 hover:text-gray-800 transition-colors"
                aria-label="Rewind 15 seconds"
              >
                <RewindIcon />
              </button>
              
              {/* Forward 30s button */}
              <button
                onClick={handleFastForward}
                className="w-7 h-7 cursor-pointer flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors"
                aria-label="Forward 30 seconds"
              >
                <ForwardIcon />
              </button>

              {/* Speed button */}
              <button
                onClick={handleSpeedToggle}
                className="px-3 py-1 cursor-pointer rounded hover:text-gray-800 transition-colors text-sm font-medium text-gray-700"
              >
                {playbackRate}×
              </button>

              {/* More Info and Share buttons */}
              <button className="text-gray-500 cursor-pointer hover:text-gray-700 text-sm font-medium">
                More Info
              </button>
              <button className="flex items-center cursor-pointer space-x-1 text-gray-500 hover:text-gray-700">
                <Share className="w-4 h-4" />
                <span className="text-sm font-medium">Share</span>
              </button>
            </div>

            {/* Time display */}
            <div className="text-sm text-gray-500 font-mono">
              {formatTime(currentTime)} | {formatTime(totalDuration)}
            </div>
          </div>
        </div>
      </div>

      {/* Hidden audio element */}
      {audioUrl && (
        <audio
          ref={audioRef}
          src={audioUrl}
          onTimeUpdate={() => {
            // Only update if audio is actually playing to avoid conflicts
            if (audioRef.current && !isNaN(audioRef.current.currentTime)) {
              setCurrentTime(audioRef.current.currentTime);
            }
          }}
          onDurationChange={() => {
            if (audioRef.current && audioRef.current.duration) {
              setTotalDuration(audioRef.current.duration);
            }
          }}
          onLoadedMetadata={() => {
            if (audioRef.current && audioRef.current.duration) {
              setTotalDuration(audioRef.current.duration);
            }
          }}
          onCanPlayThrough={() => {
            // Ensure duration is set when audio is ready
            if (audioRef.current && audioRef.current.duration) {
              setTotalDuration(audioRef.current.duration);
            }
          }}
          onEnded={() => setIsPlaying(false)}
        />
      )}
    </div>
  );
};

export default AudioPlayer;