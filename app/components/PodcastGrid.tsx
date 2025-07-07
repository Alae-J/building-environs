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
  <section className="fl-module fl-module-post-grid vbc-podcast-grid py-12 bg-white">
    <div className="fl-post-grid max-w-6xl mx-auto px-4 grid gap-8 grid-cols-1 lg:grid-cols-2">
      {episodes.map((ep) => (
        <PodcastCard
          key={ep.id}
          title={ep.title}
          date={ep.date}
          image={ep.image}
          href={ep.href}
        />
      ))}
    </div>
  </section>
)

export default PodcastGrid;