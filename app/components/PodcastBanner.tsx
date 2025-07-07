"use client"

import React, { useState } from 'react'

const PodcastBanner = () => {
  const [email, setEmail] = useState('')
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      console.log('Subscribing email:', email)
      // Here you would typically send to your backend
      setEmail('')
      alert('Thank you for subscribing!')
    }
  }

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Title */}
            <h2 className="text-4xl font-bold text-black leading-2">
                Building Talks Podcast
            </h2>

            {/* Subtitle */}
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Talking to professionals in construction, property development, architecture, and beyond.
            </p>

            {/* Podcast Platform Buttons */}
            <div className="flex flex-wrap gap-3" role="group" aria-label="">
              <div className="fl-button-group-button">
                <div className="fl-button-wrap">
                <a
                    href="https://podcasts.apple.com/au/podcast/the-building-talks-podcast/id1586940334"
                    target="_blank"
                    rel="noopener"
                    className="fl-button inline-flex items-center px-6 py-3 bg-white rounded-sm text-sm font-medium text-gray-700 hover:bg-black hover:text-white hover:border-black transition-all duration-200 before:content-[''] before:inline-block before:w-6 before:h-6 before:bg-[url('/Podcasts_(iOS).svg')] before:bg-contain before:bg-no-repeat before:mr-2 before:align-middle"
                  >
                    <span className="fl-button-text">Apple Podcasts</span>
                  </a>
                </div>
              </div>
              
              <div className="fl-button-group-button">
                <div className="fl-button-wrap">
                <a
                    href="https://podcasts.google.com/u/1/feed/aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS8xODUwNTUyLnJzcw"
                    target="_blank"
                    rel="noopener"
                    className="fl-button inline-flex items-center px-6 py-3 bg-white rounded-sm text-sm font-medium text-gray-700 hover:bg-black hover:text-white hover:border-black transition-all duration-200 before:content-[''] before:inline-block before:w-6 before:h-6 before:bg-[url('/Google_Podcasts_icon.svg')] before:bg-contain before:bg-no-repeat before:mr-2 before:align-middle"
                  >
                    <span className="fl-button-text">Google Podcasts</span>
                  </a>
                </div>
              </div>
              
              <div className="fl-button-group-button">
                <div className="fl-button-wrap">
                <a
                    href="https://open.spotify.com/show/0ImvHaKucIvMJOJpf2mna2"
                    target="_blank"
                    rel="noopener"
                    className="fl-button inline-flex items-center px-6 py-3 bg-white rounded-sm text-sm font-medium text-gray-700 hover:bg-black hover:text-white hover:border-black transition-all duration-200 before:content-[''] before:inline-block before:w-6 before:h-6 before:bg-[url('/spotify-icon.svg')] before:bg-contain before:bg-no-repeat before:mr-2 before:align-middle"
                  >
                    <span className="fl-button-text">Spotify</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Subscribe Form */}
            <form onSubmit={handleSubscribe} className="flex max-w-lg gap-0">
              <input
                type="email"
                placeholder="Never miss an episode..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 border border-gray-300 rounded text-sm placeholder-gray-500 focus:outline-none bg-white"
              />
              <button
                type="submit"
                className="w-[134px] h-12 ml-1 px-3 py-1.5 bg-[rgb(40,40,40)] border border-[rgb(40,40,40)] text-white rounded-lg text-base font-[800] leading-4 cursor-pointer hover:bg-white hover:text-[rgb(40,40,40)] hover:border-[rgb(40,40,40)] transition-all duration-200"
                style={{ fontFamily: 'Avenir' }}
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Right Column - Image */}
            <div className="relative flex items-start">
            <img
                src="https://cdn-01.cms-ap-v2i.applyflow.com/building-environs/wp-content/uploads/2022/06/Group-5054.png"
                alt="Group 5054"
                className="w-full h-auto max-w-[616px]"
                width="616"
                height="336"
            />
            </div>
            </div>
        </div>
    </section>
  )
}

export default PodcastBanner