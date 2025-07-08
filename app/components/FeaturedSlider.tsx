// components/FeaturedSlider.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export interface BlogPost {
  id: string;
  order: number;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string;
  imageAlt: string;
  category?: string;
}

interface FeaturedSliderProps {
  posts: BlogPost[];
}

const FeaturedSlider: React.FC<FeaturedSliderProps> = ({ posts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prev => prev === 0 ? posts.length - 1 : prev - 1);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prev => prev === posts.length - 1 ? 0 : prev + 1);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const truncateText = (text: string, maxLines: number = 4) => {
    const words = text.split(' ');
    const wordsPerLine = 15; // Approximate words per line
    const maxWords = maxLines * wordsPerLine;
    
    if (words.length <= maxWords) {
      return text;
    }
    
    return words.slice(0, maxWords).join(' ') + '...';
  };

  if (posts.length === 0) return null;

  const currentPost = posts[currentIndex];

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden">
            {/* Slider Container */}
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {posts.map((post, index) => (
                <div key={post.id} className="w-full flex-shrink-0">
                  {/* Single Featured Article */}
                  <div className="bg-white rounded-lg overflow-hidden">
                    <div className="flex flex-col lg:flex-row">
                      {/* Image */}
                      <div className="lg:w-1/2 relative h-48 lg:h-64">
                        <Link href={`/news/${post.slug}`} title={post.title}>
                          <Image
                            src={post.featuredImage}
                            alt={post.imageAlt}
                            fill
                            className="object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </Link>
                      </div>
                      
                      {/* Content */}
                      <div className="lg:w-1/2 p-6 flex flex-col justify-center min-h-[200px] lg:min-h-[256px]">
                        <h2 className="text-xl lg:text-2xl font-bold mb-3 text-gray-900 leading-tight line-clamp-3">
                          <Link href={`/news/${post.slug}`} title={post.title}>
                            {post.title}
                          </Link>
                        </h2>
                        <p className="text-gray-600 text-sm lg:text-base leading-relaxed line-clamp-4">
                          {truncateText(post.excerpt)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            {posts.length > 1 && (
              <>
                <button 
                  onClick={goToPrevious}
                  disabled={isAnimating}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-4 shadow-sm cursor-pointer z-10 disabled:opacity-50"
                  aria-label="Previous article"
                >
                  <svg className="w-7 h-7 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button 
                  onClick={goToNext}
                  disabled={isAnimating}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-4 shadow-sm cursor-pointer z-10 disabled:opacity-50"
                  aria-label="Next article"
                >
                  <svg className="w-7 h-7 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSlider;