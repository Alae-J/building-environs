// components/PodcastCard.tsx
import { Play } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export interface PodcastCardProps {
  title: string
  date: string  // ISO date string
  image: string  // URL or path to art
  href: string  // link to the episode
}

export default function PodcastCard({
  title,
  date,
  image,
  href,
}: PodcastCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-AU', {
      day: '2-digit',
      month: '2-digit', 
      year: 'numeric'
    });
  };

  return (
<div className="relative w-full max-w-[500px] aspect-square">
  {/* Gray background offset layer */}
  <div className="absolute top-2 left-2 w-full h-full bg-gray-300 rounded-lg z-0" />

  {/* Actual card content with overflow-hidden and rounded corners */}
  <div className="relative w-full h-full rounded-lg overflow-hidden z-10 flex flex-col justify-end">
    {/* Image layer */}
    <div className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden z-10">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover rounded-lg shadow-lg"
        sizes="(max-width: 768px) 100vw, 500px"
      />
    </div>

    {/* Content overlay */}
    <div className="relative z-20 w-full bg-gradient-to-t from-black/80 via-black/30 to-transparent px-6 pt-24 pb-6 text-white flex flex-col justify-end">
      <div className="text-sm mb-2">Published {formatDate(date)}</div>
      <Link href={href}>
        <h3 className="font-bold text-lg leading-tight mb-3 cursor-pointer">
          {title}
        </h3>
      </Link>
      <Link href={href}>
        <div className="inline-flex items-center px-4 py-2 bg-transparent border border-white text-white rounded-lg hover:border-red-600 hover:text-red-600 transition-colors font-medium cursor-pointer">
          <Play className="w-4 h-4 mr-2 fill-current" />
          Listen
        </div>
      </Link>
    </div>
  </div>
</div>



  )
}