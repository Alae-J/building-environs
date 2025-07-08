'use client';

import { getAllPodcasts } from '@/app/lib/podcasts';
import { stripEpisodePrefix } from '@/app/types/podcast';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

interface PodcastSliderProps {
  excludeSlug?: string; // Exclude current episode from slider
}

export default function PodcastSlider({ excludeSlug }: PodcastSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Get all podcasts except the current one
  const allPodcasts = getAllPodcasts();
  const podcasts = excludeSlug 
    ? allPodcasts.filter(podcast => podcast.slug !== excludeSlug)
    : allPodcasts;

  const slidesToShow = 3;
  const maxSlide = Math.max(0, podcasts.length - slidesToShow);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const goToSlide = (slide: number) => {
    const newSlide = Math.max(0, Math.min(slide, maxSlide));
    setCurrentSlide(newSlide);
  };

  const nextSlide = () => {
    goToSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    goToSlide(currentSlide - 1);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-AU', {
      day: '2-digit',
      month: '2-digit', 
      year: 'numeric'
    });
  };

  if (!isClient) {
    return null; // Prevent hydration mismatch
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Check out some of the latest episodes
            </h2>
          </div>
          <Link
            href="/podcasts"
            className="inline-flex items-center px-6 py-3 bg-white border border-black rounded-lg text-black font-medium hover:bg-black hover:text-white transition-colors"
          >
            See all podcasts
          </Link>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Previous Arrow */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-red-600" />
          </button>

          {/* Next Arrow */}
          <button
            onClick={nextSlide}
            disabled={currentSlide >= maxSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-red-600" />
          </button>

          {/* Slider Track */}
          <div className="overflow-hidden">
            <div
              ref={sliderRef}
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
                width: `${(podcasts.length / slidesToShow) * 100}%`
              }}
            >
              {podcasts.map((podcast) => (
                <div
                  key={podcast.id}
                  className="w-full px-3"
                  style={{ width: `${100 / podcasts.length}%` }}
                >
                  <div className="relative w-94 h-66 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    {/* Background Image */}
                    <img
                      src={podcast.featuredImage}
                      alt={podcast.imageAlt}
                      className="w-full h-full object-contain"
                    />
                    
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-black/60" />

                    {/* Date, Title and Listen Button - bottom left */}
                    <div className="absolute bottom-4 left-4 max-w-[70%]">
                      <div className="text-white text-sm mb-2">
                        {formatDate(podcast.publishDate)}
                      </div>
                      
                      <Link href={`/podcasts/${podcast.slug}`}>
                        <h3 className="text-white font-bold text-lg mb-3 leading-tight hover:text-red-300 transition-colors cursor-pointer">
                          {stripEpisodePrefix(podcast.title)}
                        </h3>
                      </Link>
                      
                      <Link href={`/podcasts/${podcast.slug}`}>
                        <div className="inline-flex items-center px-4 py-2 bg-transparent border border-white text-white rounded-lg hover:border-red-600 hover:text-red-600 transition-colors font-medium cursor-pointer">
                          <Play className="w-4 h-4 mr-2 fill-current" />
                          Listen
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        {maxSlide > 0 && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxSlide + 1 }, (_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === i ? 'bg-red-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}