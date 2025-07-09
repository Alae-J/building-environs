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

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Title */}
            <h2
              className="text-4xl font-[800] leading-tight font-[Manrope,sans-serif]"
            >
              Building Talks Podcast
            </h2>

            {/* Subtitle */}
            <p
              className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-[400] font-[Manrope,sans-serif]"
            >
              Talking to professionals in construction, property development,
              architecture, and beyond.
            </p>

            {/* Podcast Platform Buttons */}
            <div className="flex flex-wrap gap-3" role="group">
              {/* …platform buttons… */}
            </div>

            {/* Subscribe Form */}
            <form onSubmit={handleSubscribe} className="flex max-w-lg gap-0">
            <input
             type="email"
              placeholder="Never miss an episode..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ fontFamily: 'var(--af-fontFamily--primary, "Avenir")' }}
              className="flex-1 px-4 py-3 border border-gray-300 rounded text-sm placeholder-gray-500 focus:outline-none bg-white"
            />
              <button
                type="submit"
                className="w-[134px] h-12 ml-1 px-3 py-1.5 bg-[rgb(40,40,40)] border border-[rgb(40,40,40)] text-white rounded-lg text-base font-[800] leading-4 cursor-pointer hover:bg-white hover:text-[rgb(40,40,40)] hover:border-[rgb(40,40,40)] transition-all duration-200"
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
