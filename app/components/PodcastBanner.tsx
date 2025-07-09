'use client'

import React, { useState } from 'react'

const PodcastBanner = () => {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      console.log('Subscribing email:', email)
      setEmail('')
      alert('Thank you for subscribing!')
    }
  }

  const platforms = [
    {
      href: 'https://podcasts.apple.com/au/podcast/the-building-talks-podcast/id1586940334',
      icon: '/Podcasts_(iOS).svg',
      label: 'Apple Podcasts',
    },
    {
      href: 'https://podcasts.google.com/u/1/feed/aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS8xODUwNTUyLnJzcw',
      icon: '/Google_Podcasts_icon.svg',
      label: 'Google Podcasts',
    },
    {
      href: 'https://open.spotify.com/show/0ImvHaKucIvMJOJpf2mna2',
      icon: '/spotify-icon.svg',
      label: 'Spotify',
    },
  ]

  return (
    <section className="bg-gray-100 py-16 px-4 md:py-20 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Column */}
          <div className="space-y-8">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
              Building Talks Podcast
            </h2>

            {/* Subtitle */}
            <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Talking to professionals in construction, property development, architecture, and beyond.
            </p>

            {/* Podcast Platform Buttons */}
            <div className="flex flex-wrap gap-3" role="group" aria-label="Podcast platforms">
              {platforms.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-white rounded-sm text-sm md:text-base font-medium text-gray-700 hover:bg-black hover:text-white hover:border-black border border-transparent transition-all duration-200"
                >
                  <img
                    src={icon}
                    alt={`${label} icon`}
                    className="w-6 h-6 md:w-8 md:h-8 mr-2 flex-shrink-0"
                  />
                  <span>{label}</span>
                </a>
              ))}
            </div>

            {/* Subscribe Form */}
            <form onSubmit={handleSubscribe} className="flex max-w-lg gap-0">
              <input
                type="email"
                placeholder="Never miss an episode..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 md:px-6 md:py-4 border border-gray-300 rounded text-sm md:text-base placeholder-gray-500 focus:outline-none bg-white"
              />
              <button
                type="submit"
                className="w-[134px] h-12 md:w-[150px] md:h-14 ml-1 px-3 py-1.5 md:px-4 md:py-2 bg-[rgb(40,40,40)] border border-[rgb(40,40,40)] text-white rounded-lg text-base md:text-lg font-[800] leading-4 cursor-pointer hover:bg-white hover:text-[rgb(40,40,40)] hover:border-[rgb(40,40,40)] transition-all duration-200"
                style={{ fontFamily: 'Avenir' }}
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Right Column */}
          <div className="relative flex items-start">
            <img
              src="https://cdn-01.cms-ap-v2i.applyflow.com/building-environs/wp-content/uploads/2022/06/Group-5054.png"
              alt="Podcast illustration"
              className="w-full h-auto max-w-[616px]"
              width={616}
              height={336}
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default PodcastBanner
