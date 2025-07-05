// components/ArticleCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ArticleCardProps {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string;
  imageAlt: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  slug,
  excerpt,
  featuredImage,
  imageAlt
}) => {
  const truncateText = (text: string, maxLines: number = 4) => {
    const words = text.split(' ');
    const wordsPerLine = 12; // Approximate words per line for card
    const maxWords = maxLines * wordsPerLine;
    
    if (words.length <= maxWords) {
      return text;
    }
    
    return words.slice(0, maxWords).join(' ') + '...';
  };

  return (
    <article className="bg-white rounded-lg border border-gray-100 overflow-hidden h-[444px] flex flex-col">
      {/* Image */}
      <div className="relative h-[180px] overflow-hidden m-4 mb-2 rounded-lg">
        <Link href={`/news/${slug}`} title={title} className="cursor-pointer">
          <Image
            src={featuredImage}
            alt={imageAlt}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300 rounded-lg"
          />
        </Link>
      </div>
      
      {/* Content */}
      <div className="px-4 pb-4 flex flex-col flex-1">
        {/* Title */}
        <h3 className="font-bold text-gray-800 mb-3 leading-tight line-clamp-3 min-h-[60px] text-base">
          <Link href={`/news/${slug}`} title={title} className="cursor-pointer hover:no-underline">
            {title}
          </Link>
        </h3>
        
        {/* Excerpt */}
        <div className="flex-1">
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-6">
            {truncateText(excerpt, 6)}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;