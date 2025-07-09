'use client'

import { getAllPodcasts } from '@/app/lib/podcasts'
import { stripEpisodePrefix } from '@/app/types/podcast'
import useEmblaCarousel from 'embla-carousel-react'
import { Play } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'

export default function PodcastSlider({ excludeSlug }: { excludeSlug?: string }) {
  // Grab latest 15 (excluding current)
  const episodes = getAllPodcasts()
    .filter((p) => p.slug !== excludeSlug)
    .slice(0, 15)

  // Embla setup
  const [emblaRef, emblaApi] = useEmblaCarousel({ skipSnaps: false })
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanPrev(emblaApi.canScrollPrev())
    setCanNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev()
  const scrollNext = () => emblaApi && emblaApi.scrollNext()

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString('en-AU', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Check out some of the latest episodes</h2>
          <Link
            href="/podcasts"
            className="px-6 py-3 border rounded-lg hover:bg-black hover:text-white transition"
          >
            See all podcasts
          </Link>
        </div>

        {/* Carousel wrapper—overflow-visible so arrows can sit outside */}
        <div className="relative overflow-visible">
          {/* Track—this one hides overflow */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {episodes.map((p) => (
                <div
                  key={p.slug}
                  className="flex-[0_0_auto] w-[33.3333%] max-w-[520px]"
                >
                  {/* Outer “frame” as a thick border */}
                  <div className="border-4 border-[#c4c4c4] rounded-lg">
                    <div className="relative aspect-[10/9] rounded-md overflow-hidden">
                      <Image
                        src={p.featuredImage}
                        alt={p.title}
                        fill
                        className="object-cover brightness-75"
                      />
                      <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-end text-white">
                        <div className="text-sm mb-2">{formatDate(p.publishDate)}</div>
                        <Link href={`/podcasts/${p.slug}`}>
                          <h3 className="font-bold text-lg mb-3 leading-tight">
                            {stripEpisodePrefix(p.title)}
                          </h3>
                        </Link>
                        <Link href={`/podcasts/${p.slug}`}>
                          <div className="inline-flex items-center px-4 py-2 border border-white rounded-lg hover:border-red-600 hover:text-red-600 transition">
                            <Play className="w-4 h-4 mr-2" /> Listen
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prev arrow—positioned fully outside */}
          <button
            onClick={scrollPrev}
            disabled={!canPrev}
            aria-label="Previous"
            className="
              absolute left-0 top-1/2 
              -translate-y-1/2 -translate-x-full 
              w-12 h-12 bg-white rounded-full shadow 
              disabled:opacity-50 transition
            "
          >
            ‹
          </button>

          {/* Next arrow */}
          <button
            onClick={scrollNext}
            disabled={!canNext}
            aria-label="Next"
            className="
              absolute right-0 top-1/2 
              -translate-y-1/2 translate-x-full 
              w-12 h-12 bg-white rounded-full shadow 
              disabled:opacity-50 transition
            "
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}
