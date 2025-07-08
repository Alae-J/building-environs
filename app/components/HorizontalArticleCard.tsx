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
  const truncateText = (text: string, maxWords: number = 40) => {
    const words = text.split(' ');
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(' ') + '...';
  };

  return (
    <article className="flex flex-col md:flex-row items-stretch rounded-xl border border-gray-200 bg-white overflow-hidden transition-shadow hover:shadow-md">
      {/* Image Side */}
      <div className="relative w-full md:w-[300px] h-[220px] md:h-auto">
        <Link href={`/news/${slug}`} title={title} className="block w-full h-full">
          <Image
            src={featuredImage}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
          />
        </Link>
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-center p-6 flex-1">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-snug">
          <Link href={`/news/${slug}`} title={title} className="hover:underline">
            {title}
          </Link>
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {truncateText(excerpt)}
        </p>
      </div>
    </article>
  );
};

export default HorizontalArticleCard;
