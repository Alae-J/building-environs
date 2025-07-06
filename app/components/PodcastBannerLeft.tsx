// components/PodcastBannerLeft.tsx
import React from 'react'

const PodcastBannerLeft: React.FC = () => (
  <div className="md:col-span-5 flex flex-col justify-center space-y-6">
    {/* Title */}
    <h2 className="text-3xl md:text-4xl font-bold text-white">
      Building Talks Podcast
    </h2>

    {/* Subtitle — use white, md:text-xl */}
    <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
      Talking to professionals in construction, property development, architecture, and beyond.
    </p>

    {/* Buttons — px-5 exactly */}
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

    {/* Subscribe form */}
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
)

export default PodcastBannerLeft
