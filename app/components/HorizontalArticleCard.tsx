// components/HorizontalArticleCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface HorizontalArticleCardProps {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string;
  imageAlt: string;
}

const HorizontalArticleCard: React.FC<HorizontalArticleCardProps> = ({
  title,
  slug,
  excerpt,
  featuredImage,
  imageAlt,
}) => {
  const truncateText = (text: string, maxWords: number = 45) => {
    const words = text.split(' ');
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(' ') + '...';
  };

  return (
    <article className="flex flex-col md:flex-row items-stretch rounded-xl border border-gray-100 bg-white overflow-hidden min-h-[280px]">
      {/* Image */}
      <div className="flex items-center justify-center w-full md:w-[360px] py-4 px-4">
        <Link href={`/news/${slug}`} title={title} className="relative w-full h-full rounded-lg overflow-hidden">
          <Image
            src={featuredImage}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 360px"
            className="object-cover rounded-lg"
            priority
          />
        </Link>
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-center py-6 pr-6 pl-2 flex-1">
        <h3 className="text-2xl font-semibold text-gray-900 mb-3 leading-snug [font-family:var(--af-fontFamily--primary,'Manrope')]">
          <Link
            href={`/news/${slug}`}
            title={title}
            className="cursor-pointer hover:no-underline focus:no-underline"
          >
            {title}
          </Link>
        </h3>
        <p className="text-gray-700 text-base leading-relaxed [font-family:var(--af-fontFamily--primary,'Manrope')]">
          {truncateText(excerpt)}
        </p>
      </div>
    </article>
  );
};

export default HorizontalArticleCard;
