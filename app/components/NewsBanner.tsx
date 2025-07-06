// components/PodcastBanner.tsx
import React from 'react'

const PodcastBanner: React.FC = () => {
  return (
    <section className="w-full bg-neutral-dark overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center py-16 md:py-24 gap-8">
          
          {/* left copy + buttons + subscribe form */}
          <div className="md:col-span-5 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Building Talks Podcast
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              Talking to professionals in construction, property development, architecture, and beyond.
            </p>
            
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
              <a
                href="https://podcasts.apple.com/au/podcast/the-building-talks-podcast/id1586940334"
                target="_blank"
                rel="noopener"
                className="px-5 py-2 border border-white rounded-full text-white text-sm hover:bg-white hover:text-black transition"
              >
                Apple Podcasts
              </a>
              <a
                href="https://podcasts.google.com/u/1/feed/aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS8xODUwNTUyLnJzcw"
                target="_blank"
                rel="noopener"
                className="px-5 py-2 border border-white rounded-full text-white text-sm hover:bg-white hover:text-black transition"
              >
                Google Podcasts
              </a>
              <a
                href="https://open.spotify.com/show/0ImvHaKucIvMJOJpf2mna2"
                target="_blank"
                rel="noopener"
                className="px-5 py-2 border border-white rounded-full text-white text-sm hover:bg-white hover:text-black transition"
              >
                Spotify
              </a>
            </div>

            <form className="mt-6 flex max-w-md">
              <input
                type="email"
                placeholder="Never miss an episode..."
                className="flex-1 px-4 py-2 rounded-l bg-white text-black placeholder-gray-500 focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-black text-white rounded-r hover:bg-gray-800 transition"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* right hero image */}
          <div className="md:col-span-7 flex justify-center md:justify-end">
            <div className="relative drop-shadow-2xl" style={{ width: '100%', maxWidth: '616px' }}>
              <img
                src="https://cdn-01.cms-ap-v2i.applyflow.com/building-environs/wp-content/uploads/2022/06/Group-5054.png"
                alt="Group 5054"
                className="w-full h-auto rounded"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default PodcastBanner
