
'use client'

import Link from 'next/link'
import Image from 'next/image'

interface PodcastCardProps {
  title: string
  description: string
  imageUrl: string
  imageAlt: string
  href: string
  date?: string
  duration?: string
  episodeNumber?: string
  audioUrl?: string
  variant?: 'default' | 'featured' | 'compact'
  className?: string
}

const PodcastCard: React.FC<PodcastCardProps> = ({
  title,
  description,
  imageUrl,
  imageAlt,
  href,
  date,
  duration,
  episodeNumber,
  audioUrl,
  variant = 'default',
  className = ''
}) => {
  const cardClasses = {
    default: 'bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300',
    featured: 'bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-red-100',
    compact: 'bg-white rounded shadow hover:shadow-md transition-shadow duration-300'
  }

  const layoutClasses = {
    default: 'flex flex-col md:flex-row',
    featured: 'flex flex-col',
    compact: 'flex flex-row'
  }

  const imageClasses = {
    default: 'w-full md:w-1/3 flex-shrink-0',
    featured: 'w-full',
    compact: 'w-24 h-24 flex-shrink-0'
  }

  const contentClasses = {
    default: 'flex-1 p-6',
    featured: 'p-6',
    compact: 'flex-1 p-4'
  }

  return (
    <article className={`${cardClasses[variant]} ${className} overflow-hidden`}>
      <div className={layoutClasses[variant]}>
        {/* Podcast Cover Art */}
        <div className={imageClasses[variant]}>
          <Link href={href} className="block w-full h-full">
            <div className={`relative ${variant === 'featured' ? 'aspect-square' : variant === 'compact' ? 'w-24 h-24' : 'h-48 md:h-full'} overflow-hidden ${variant === 'featured' ? '' : 'rounded-t-lg md:rounded-l-lg md:rounded-t-none'}`}>
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes={variant === 'featured' ? '(max-width: 768px) 100vw, 50vw' : variant === 'compact' ? '96px' : '(max-width: 768px) 100vw, 33vw'}
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="bg-red-600 text-white rounded-full p-3 hover:bg-red-700 transition-colors">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Content */}
        <div className={contentClasses[variant]}>
          {/* Episode Meta */}
          <div className="flex flex-wrap items-center gap-2 mb-3 text-sm text-gray-500">
            {episodeNumber && (
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                Episode {episodeNumber}
              </span>
            )}
            {date && (
              <time dateTime={date}>
                {new Date(date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </time>
            )}
            {duration && (
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {duration}
              </span>
            )}
          </div>
          
          <h3 className={`mb-3 ${
            variant === 'featured' 
              ? 'text-xl md:text-2xl font-bold' 
              : variant === 'compact' 
                ? 'text-base font-semibold' 
                : 'text-lg font-semibold'
          }`}>
            <Link 
              href={href} 
              className="text-gray-900 hover:text-red-600 transition-colors duration-200 line-clamp-2"
              title={title}
            >
              {title}
            </Link>
          </h3>
          
          <p className={`text-gray-600 leading-relaxed mb-4 ${
            variant === 'featured' 
              ? 'text-base line-clamp-3' 
              : variant === 'compact' 
                ? 'text-sm line-clamp-2' 
                : 'text-sm line-clamp-3'
          }`}>
            {description}
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <Link 
              href={href}
              className="inline-flex items-center text-red-600 hover:text-red-700 font-medium text-sm transition-colors duration-200"
            >
              Listen Now
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            
            {audioUrl && (
              <button 
                onClick={() => window.open(audioUrl, '_blank')}
                className="inline-flex items-center text-gray-600 hover:text-gray-800 font-medium text-sm transition-colors duration-200"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

export default PodcastCard
