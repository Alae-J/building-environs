// components/PostsSlider.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string;
  imageAlt: string;
}

interface PostsSliderProps {
  posts: BlogPost[];
}

const PostsSlider: React.FC<PostsSliderProps> = ({ posts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(prev => prev === 0 ? posts.length - 1 : prev - 1);
  };

  const goToNext = () => {
    setCurrentIndex(prev => prev === posts.length - 1 ? 0 : prev + 1);
  };

  if (!isClient) {
    return <div className="py-16 text-center">Loading...</div>;
  }

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Slider Container */}
            <div className="overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {posts.map((post) => (
                  <div key={post.id} className="w-full flex-shrink-0">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden mx-2">
                      <div className="flex flex-col lg:flex-row h-64">
                        {/* Image */}
                        <div className="lg:w-2/5 relative">
                          <Link href={`/news/${post.slug}`}>
                            <Image
                              src={post.featuredImage}
                              alt={post.imageAlt}
                              fill
                              className="object-cover"
                            />
                          </Link>
                        </div>
                        
                        {/* Content */}
                        <div className="lg:w-3/5 p-6 flex flex-col justify-center">
                          <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2">
                            <Link 
                              href={`/news/${post.slug}`}
                              className="hover:text-red-600 transition-colors"
                            >
                              {post.title}
                            </Link>
                          </h3>
                          <p className="text-gray-600 line-clamp-3 mb-4">
                            {post.excerpt}
                          </p>
                          <Link 
                            href={`/news/${post.slug}`}
                            className="text-red-600 hover:text-red-700 font-medium text-sm inline-flex items-center"
                          >
                            Read More 
                            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            {posts.length > 1 && (
              <>
                <button 
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow z-10 hover:bg-gray-50"
                  aria-label="Previous article"
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button 
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow z-10 hover:bg-gray-50"
                  aria-label="Next article"
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Dots Indicator */}
            {posts.length > 1 && (
              <div className="flex justify-center mt-6 space-x-2">
                {posts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-red-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to article ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostsSlider;