'use client'

// src/app/components/Audio/AudioPlayer.tsx
import { useAudioPlayer } from '@/app/hooks/AudioPlayer';
import { useWaveform } from '@/app/hooks/useWaveform';
import React from 'react';
import Controls from './Controls';
import Header from './Header';
import PlayPauseButton from './PlayPauseButton';
import Thumbnail from './Thumbnail';
import WaveformCanvas from './WaveformCanvas';

export interface AudioPlayerProps {
  title?: string;
  subtitle?: string;
  thumbnailUrl?: string;
  episodeFeaturedImage?: string;
  audioUrl?: string;
  duration?: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  title = "...",
  subtitle = "...",
  thumbnailUrl,
  episodeFeaturedImage,
  audioUrl = "",
  duration = "00:00:00"
}) => {
  const thumbnailSrc = 'https://www.buzzsprout.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCTzlSa0FJPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--2b4275e0e6b8e1aee8846b8e9e54bbe92005f4fc/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9MWm05eWJXRjBPZ2hxY0djNkUzSmxjMmw2WlY5MGIxOW1hV3hzV3docEFsZ0NhUUpZQW5zR09nbGpjbTl3T2d0alpXNTBjbVU2Q25OaGRtVnlld1k2REhGMVlXeHBkSGxwUVRvUVkyOXNiM1Z5YzNCaFkyVkpJZ2x6Y21kaUJqb0dSVlE9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--1924d851274c06c8fa0acdfeffb43489fc4a7fcc/The%20Building%20Talks%20Podcast%20Artwork%20(USE).jpeg';
  const {
    audioRef,
    isPlaying,
    isLoading,
    currentTime,
    totalDuration,
    playbackRate,
    togglePlayPause,
    handleRewind,
    handleFastForward,
    handleSpeedToggle,
    setCurrentTime,
  } = useAudioPlayer(audioUrl, duration);

  const waveformData = useWaveform(totalDuration, title);

  return (
    <div className="bg-white rounded-lg border border-gray-200 max-w-6xl mx-auto overflow-hidden">
      <div className="flex p-4">
        <div className="flex-shrink-0 mr-6 flex items-center justify-center">
          <Thumbnail displayThumbnail={thumbnailSrc} title={title} />
        </div>
        <div className="flex-1 min-w-0">
          <Header
            title={title}
            subtitle={subtitle}
            isPlaying={isPlaying}
            isLoading={isLoading}
            cleanTitle={(t) => t.replace(/^S\d+\.\s*Ep\s*\d+\.\s*/, '')}
          />
          <div className="flex items-center mb-3">
            <PlayPauseButton
              isPlaying={isPlaying}
              isLoading={isLoading}
              togglePlayPause={togglePlayPause}
            />
            <WaveformCanvas
              waveformData={waveformData}
              currentTime={currentTime}
              totalDuration={totalDuration}
              onSeek={(frac) => {
                const el = audioRef.current;
                if (!el) return;
                const nt = frac * (el.duration || totalDuration);
                el.currentTime = nt;
                setCurrentTime(nt);
              }}
            />
          </div>
          <Controls
            onRewind={handleRewind}
            onForward={handleFastForward}
            onSpeedToggle={handleSpeedToggle}
            playbackRate={playbackRate}
            currentTime={currentTime}
            totalDuration={totalDuration}
          />
          <audio ref={audioRef} src={audioUrl} preload="metadata" />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
