// src/app/components/Audio/WaveformCanvas.tsx
import React, { useEffect, useRef } from 'react';

interface WaveformCanvasProps {
  waveformData: number[];
  currentTime: number;
  totalDuration: number;
  onSeek: (fraction: number) => void;
}

const WaveformCanvas: React.FC<WaveformCanvasProps> = ({
  waveformData,
  currentTime,
  totalDuration,
  onSeek,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Draw the waveform bars and progress
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

    const progress = totalDuration > 0 ? currentTime / totalDuration : 0;

    for (let i = 0; i < barsCount; i++) {
      const waveformIndex = Math.floor((i / barsCount) * waveformData.length);
      const amplitude = waveformData[waveformIndex] || 0.5;

      const x = i * totalBarWidth;
      const barHeight = amplitude * (height - 8) + 4;
      const y = (height - barHeight) / 2;

      const barProgress = i / barsCount;
      ctx.fillStyle = barProgress <= progress ? '#ef4444' : '#e5e7eb';
      ctx.fillRect(x, y, barWidth, barHeight);
    }
  };

  // Resize canvas for high-DPR screens
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      const ctx = canvas.getContext('2d');
      if (ctx) ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  // Redraw on time or data change
  useEffect(() => {
    requestAnimationFrame(drawWaveform);
  }, [currentTime, waveformData, totalDuration]);

  return (
    <div className="flex-1">
      <canvas
        ref={canvasRef}
        className="w-full h-12 cursor-pointer"
        style={{ height: '48px' }}
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const fraction = (e.clientX - rect.left) / rect.width;
          onSeek(fraction);
        }}
      />
    </div>
  );
};

export default WaveformCanvas;
