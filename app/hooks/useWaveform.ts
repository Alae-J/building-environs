// src/app/hooks/useWaveform.ts
import { useEffect, useState } from 'react';

export function generateWaveformData(episodeDuration: number, seedKey: number) {
  const bars = 150;
  return Array.from({ length: bars }, (_, i) => {
    const pseudo = Math.sin(seedKey * i * 0.1) * Math.cos(seedKey * i * 0.05);
    const base   = (Math.abs(pseudo) % 0.8) + 0.1;
    const pos    = i / bars;
    let mul = pos < 0.1 || pos > 0.9 ? 0.3 : pos > 0.3 && pos < 0.7 ? 1.2 : 1;
    return Math.min(base * mul, 1);
  });
}

export function useWaveform(duration: number, title: string) {
  const [data, setData] = useState<number[]>([]);
  useEffect(() => {
    if (duration > 0) {
      const seedKey = title.length + Math.floor(duration);
      setData(generateWaveformData(duration, seedKey));
    }
  }, [duration, title]);
  return data;
}
