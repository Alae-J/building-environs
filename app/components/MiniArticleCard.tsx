// components/MiniArticleCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface MiniArticleCardProps {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string;
  imageAlt: string;
}

const MiniArticleCard: React.FC<MiniArticleCardProps> = ({
  title,
  slug,
  excerpt,
  featuredImage,
  imageAlt,
}) => {
  const truncateText = (text: string, maxWords: number = 25) => {
    const words = text.split(' ');
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(' ') + '...';
  };

  return (
    <article className="flex flex-col md:flex-row items-stretch rounded-xl border border-gray-100 bg-white overflow-hidden min-h-[200px] w-full">
      {/* Image */}
      <div className="flex items-center justify-center w-full md:w-[240px] py-4 pl-4">
        <Link
          href={`/news/${slug}`}
          title={title}
          className="relative w-full h-full rounded-lg overflow-hidden"
        >
          <Image
            src={featuredImage}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 240px"
            className="object-cover rounded-lg"
            priority
          />
        </Link>
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-center py-4 pr-4 pl-2 flex-1">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug [font-family:var(--af-fontFamily--primary,'Manrope')]">
          <Link
            href={`/news/${slug}`}
            title={title}
            className="cursor-pointer hover:no-underline focus:no-underline"
          >
            {title}
          </Link>
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed [font-family:var(--af-fontFamily--primary,'Manrope')]">
          {truncateText(excerpt)}
        </p>
      </div>
    </article>
  );
};

export default MiniArticleCard;
