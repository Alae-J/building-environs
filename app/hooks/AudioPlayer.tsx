// src/app/hooks/useAudioPlayer.ts
import { parseDurationToSeconds } from '@/app/types/podcast';
import { useEffect, useRef, useState } from 'react';

export function useAudioPlayer(
  audioUrl: string,
  initialDuration: string
) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying]       = useState(false);
  const [isLoading, setIsLoading]       = useState(false);
  const [currentTime, setCurrentTime]   = useState(0);
  const [totalDuration, setTotalDuration] = useState(
    parseDurationToSeconds(initialDuration)
  );
  const [playbackRate, setPlaybackRate] = useState(1);

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      setIsLoading(true);
      setTimeout(() => {
        audioRef.current!.play();
        setIsPlaying(true);
        setIsLoading(false);
      }, 300);
    }
  };

  const handleRewind = () => {
    if (!audioRef.current) return;
    const newTime = Math.max(0, audioRef.current.currentTime - 15);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleFastForward = () => {
    if (!audioRef.current) return;
    const newTime = Math.min(
      audioRef.current.duration || totalDuration,
      audioRef.current.currentTime + 30
    );
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleSpeedToggle = () => {
    const speeds = [1, 1.25, 1.5, 2];
    const next = speeds[(speeds.indexOf(playbackRate) + 1) % speeds.length];
    setPlaybackRate(next);
    if (audioRef.current) audioRef.current.playbackRate = next;
  };

  // keep currentTime in sync
  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    const onTime = () => setCurrentTime(el.currentTime);
    el.addEventListener('timeupdate', onTime);
    el.addEventListener('ended', () => setIsPlaying(false));
    return () => {
      el.removeEventListener('timeupdate', onTime);
    };
  }, []);

  // set totalDuration when metadata loads
  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    const onLoad = () => {
      if (!isNaN(el.duration)) setTotalDuration(el.duration);
    };
    el.addEventListener('loadedmetadata', onLoad);
    el.addEventListener('durationchange', onLoad);
    return () => {
      el.removeEventListener('loadedmetadata', onLoad);
      el.removeEventListener('durationchange', onLoad);
    };
  }, []);

  return {
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
  };
}
