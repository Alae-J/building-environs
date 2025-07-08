// components/PodcastGrid.tsx
import React from 'react';
import PodcastCard from './PodcastCard';

type Episode = {
  id: string;
  title: string;
  date: string;
  image: string;
  href: string;
};

interface PodcastGridProps { 
  episodes: Episode[]; 
}

const PodcastGrid: React.FC<PodcastGridProps> = ({ episodes }) => (
  <section className="py-12">
  <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
    {episodes.map((ep) => (
      <PodcastCard key={ep.id} {...ep} />
    ))}
  </div>
</section>


)

export default PodcastGrid;