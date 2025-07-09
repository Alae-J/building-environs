'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (!email || !email.includes('@')) {
      setMessage('Please enter a valid email address.')
      setIsSubmitting(false)
      return
    }

    try {
      // send to your backend...
      setMessage('Thanks for subscribing! Please check your email.')
      setEmail('')
    } catch {
      setMessage('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="fl-builder-content">
      {/* Subscribe Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Heading & Text */}
            <div className="text-center md:text-left space-y-4 animate__animated animate__fadeInUp">
              <h3 className="text-2xl md:text-3xl font-bold">Subscribe to our Newsletter</h3>
              <p className="text-base">Stay up to date with the latest job listings, as well as news, blog posts, and articles.</p>
            </div>
            {/* Form */}
            <div className="animate__animated animate__fadeInUp">
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  aria-label="Email Address"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition disabled:opacity-50"
                >
                  {isSubmitting ? 'Please Wait...' : 'Subscribe!'}
                </button>
              </form>
              {message && (
                <p className={`mt-2 text-sm ${message.startsWith('Please') ? 'text-yellow-600' : 'text-green-600'}`}>
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-6">
            <Link href="/">
              <Image
                src="https://cdn-01.cms-ap-v2i.applyflow.com/building-environs/wp-content/uploads/2021/02/logo_white.svg"
                alt="Building Environs"
                width={81}
                height={49}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Providing better talent, to build better projects. Helping build better careers, with access to the best businesses.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/BuildingEnvirons" target="_blank" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">{/* … */}</svg>
              </Link>
              <Link href="https://www.linkedin.com/company/building-environs-recruitment-…" target="_blank" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">{/* … */}</svg>
              </Link>
              <Link href="https://www.instagram.com/buildingenvirons/" target="_blank" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">{/* … */}</svg>
              </Link>
            </div>
          </div>

          {/* Job Seekers */}
          <div>
            <h5 className="uppercase text-sm font-semibold mb-4 tracking-wide">Job Seekers</h5>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/jobs" className="hover:text-white">Latest Jobs</Link></li>
              <li><Link href="/submit-cv" className="hover:text-white">Submit your CV</Link></li>
              <li><Link href="/user-login" className="hover:text-white">Login to my profile</Link></li>
              <li><Link href="/user-register" className="hover:text-white">Register a profile</Link></li>
              <li><Link href="/recruitment-solutions" className="hover:text-white">Recruitment Solutions</Link></li>
              <li><Link href="/available-candidates" className="hover:text-white">Available Candidates</Link></li>
              <li><Link href="/podcasts" className="hover:text-white">Podcasts</Link></li>
              <li><Link href="/meet-the-team" className="hover:text-white">Meet the Team</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/contact-us" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* Employers */}
          <div>
            <h5 className="uppercase text-sm font-semibold mb-4 tracking-wide">Employers</h5>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/why-building-environs" className="hover:text-white">Why Building Environs</Link></li>
              <li><Link href="/recruitment-solutions" className="hover:text-white">Recruitment Solutions</Link></li>
              <li><Link href="/available-candidates" className="hover:text-white">Available Candidates</Link></li>
              <li><Link href="/submit-vacancy" className="hover:text-white">Submit a Vacancy</Link></li>
              <li><Link href="/news" className="hover:text-white">Blog & Insights</Link></li>
              <li><Link href="/podcasts" className="hover:text-white">Podcasts</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="uppercase text-sm font-semibold mb-4 tracking-wide">Company</h5>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/about-us" className="hover:text-white">About Us</Link></li>
              <li><Link href="/meet-the-team" className="hover:text-white">Meet the Team</Link></li>
              <li><Link href="/contact-us" className="hover:text-white">Contact Us</Link></li>
              <li><Link href="/podcasts" className="hover:text-white">Latest Podcast</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Building Environs. All rights reserved.
        </div>
      </div>

      {/* Powered By */}
      <div className="bg-gray-700 py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">Powered by</p>
          <a href="https://building-environs.applyflow.com/" target="_blank" className="inline-block">
            <Image
              src="https://cdn-01.cms-ap-v2i.applyflow.com/building-environs/wp-content/uploads/2021/02/logo_white.svg"
              alt="Applyflow"
              width={81}
              height={16}
              className="mx-auto"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
