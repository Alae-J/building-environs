// src/app/components/Audio/Controls.tsx
import { formatSecondsToTime } from '@/app/types/podcast';
import { Share } from 'lucide-react';
import React from 'react';
import { ForwardIcon, RewindIcon } from './Icons';

interface ControlsProps {
  onRewind: () => void;
  onForward: () => void;
  onSpeedToggle: () => void;
  playbackRate: number;
  currentTime: number;
  totalDuration: number;
}

const Controls: React.FC<ControlsProps> = ({
  onRewind,
  onForward,
  onSpeedToggle,
  playbackRate,
  currentTime,
  totalDuration,
}) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center space-x-4">
      <button
        onClick={onRewind}
        className="cursor-pointer w-7 h-7 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors"
        aria-label="Rewind 15 seconds"
      >
        <RewindIcon />
      </button>
      <button
        onClick={onForward}
        className="cursor-pointer w-7 h-7 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors"
        aria-label="Forward 30 seconds"
      >
        <ForwardIcon />
      </button>
      <button
        onClick={onSpeedToggle}
        className="cursor-pointer px-3 py-1 rounded hover:text-gray-800 transition-colors text-sm font-medium text-gray-700"
      >
        {playbackRate}×
      </button>
      <button className="cursor-pointer text-gray-500 hover:text-gray-700 text-sm font-medium">
        More Info
      </button>
      <button className="cursor-pointer flex items-center space-x-1 text-gray-500 hover:text-gray-700">
        <Share className="w-4 h-4" />
        <span className="text-sm font-medium">Share</span>
      </button>
    </div>
    <div className="text-sm text-gray-500 font-mono">
      {formatSecondsToTime(currentTime)} | {formatSecondsToTime(totalDuration)}
    </div>
  </div>
);

export default Controls;
