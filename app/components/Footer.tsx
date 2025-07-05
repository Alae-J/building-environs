
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
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
      setMessage('Thank you for subscribing!')
      setEmail('')
    } catch (error) {
      setMessage('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Signup Section */}
      <div className="bg-red-600 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 animate__animated animate__fadeInUp">
                Subscribe to our Newsletter
              </h3>
              <p className="text-lg animate__animated animate__fadeInUp">
                Stay up to date with the latest job listings, as well as news, blog posts, and articles.
              </p>
            </div>
            <div className="animate__animated animate__fadeInUp">
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="newsletter-email"
                    name="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                    required
                  />
                  {message && (
                    <div className={`mt-2 text-sm ${message.includes('valid') || message.includes('wrong') ? 'text-yellow-200' : 'text-green-200'}`}>
                      {message}
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-white text-red-600 font-semibold rounded hover:bg-gray-100 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe!'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info & Social Media */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Link href="/" className="inline-block">
                  <Image
                    src="/logo_white.svg"
                    alt="Building Environs Recruitment"
                    width={81}
                    height={49}
                    className="h-12 w-auto"
                  />
                </Link>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Providing better talent, to build better projects. Helping Build better careers, with access to the best businesses
              </p>
              
              {/* Social Media Links */}
              <div className="flex space-x-4">
                <Link 
                  href="https://www.facebook.com/BuildingEnvirons" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </Link>
                <Link 
                  href="https://www.linkedin.com/company/building-environs-recruitment-construction-development-engineering-property-recruitment-melbourne/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
                <Link 
                  href="https://www.instagram.com/buildingenvirons/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.97 3.708 13.819 3.708 12.522s.49-2.448 1.418-3.323c.875-.808 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.927.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.608c-.384 0-.634-.25-.634-.634 0-.384.25-.634.634-.634.384 0 .634.25.634.634 0 .384-.25.634-.634.634zm1.735 9.608c-1.297 0-2.448-.49-3.323-1.297-.927-.875-1.418-2.026-1.418-3.323s.49-2.448 1.418-3.323c.875-.808 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.927.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Job Seekers Links */}
            <div>
              <h5 className="text-lg font-semibold mb-6 text-white uppercase tracking-wider">
                Job Seekers
              </h5>
              <nav aria-label="Job Seekers Menu">
                <ul className="space-y-3">
                  <li><Link href="/jobs" className="text-gray-300 hover:text-white transition-colors">Latest jobs</Link></li>
                  <li><Link href="/submit-cv" className="text-gray-300 hover:text-white transition-colors">Submit your CV</Link></li>
                  <li><Link href="/login" className="text-gray-300 hover:text-white transition-colors">Login to my profile</Link></li>
                  <li><Link href="/register" className="text-gray-300 hover:text-white transition-colors">Register a profile</Link></li>
                  <li><Link href="/recruitment-solutions" className="text-gray-300 hover:text-white transition-colors">Recruitment Solutions</Link></li>
                  <li><Link href="/available-candidates" className="text-gray-300 hover:text-white transition-colors">Available candidates</Link></li>
                  <li><Link href="/podcasts" className="text-gray-300 hover:text-white transition-colors">Podcasts</Link></li>
                  <li><Link href="/team" className="text-gray-300 hover:text-white transition-colors">Meet the team</Link></li>
                  <li><Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact us</Link></li>
                  <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About us</Link></li>
                </ul>
              </nav>
            </div>

            {/* Employers Links */}
            <div>
              <h5 className="text-lg font-semibold mb-6 text-white uppercase tracking-wider">
                Employers
              </h5>
              <nav aria-label="Employers Menu">
                <ul className="space-y-3">
                  <li><Link href="/why-building-environs" className="text-gray-300 hover:text-white transition-colors">Why Building Environs</Link></li>
                  <li><Link href="/recruitment-solutions" className="text-gray-300 hover:text-white transition-colors">Recruitment solutions</Link></li>
                  <li><Link href="/available-candidates" className="text-gray-300 hover:text-white transition-colors">Available candidates</Link></li>
                  <li><Link href="/submit-vacancy" className="text-gray-300 hover:text-white transition-colors">Submit a vacancy</Link></li>
                  <li><Link href="/news" className="text-gray-300 hover:text-white transition-colors">Blog & insights</Link></li>
                  <li><Link href="/podcasts" className="text-gray-300 hover:text-white transition-colors">Podcasts</Link></li>
                </ul>
              </nav>
            </div>

            {/* Company Links */}
            <div>
              <h5 className="text-lg font-semibold mb-6 text-white uppercase tracking-wider">
                Company
              </h5>
              <nav aria-label="Company Menu">
                <ul className="space-y-3">
                  <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About us</Link></li>
                  <li><Link href="/team" className="text-gray-300 hover:text-white transition-colors">Meet the team</Link></li>
                  <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact us</Link></li>
                  <li><Link href="/podcasts" className="text-gray-300 hover:text-white transition-colors">Latest podcast</Link></li>
                  <li><Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Building Environs. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Powered By Section */}
      <div className="bg-gray-700 py-4">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Link 
              href="https://www.applyflow.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex flex-col items-center text-gray-400 hover:text-white transition-colors"
            >
              <p className="text-xs uppercase tracking-wider mb-2">Powered By</p>
              <div className="applyflow-logo">
                <svg width="86" height="16" viewBox="0 0 86 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.54 11.96C8.54 12.64 8.32 13.22 7.88 13.7C7.44 14.18 6.86 14.42 6.14 14.42H2.3C1.58 14.42 1 14.18 0.56 13.7C0.12 13.22 -0.1 12.64 -0.1 11.96V4.04C-0.1 3.36 0.12 2.78 0.56 2.3C1 1.82 1.58 1.58 2.3 1.58H6.14C6.86 1.58 7.44 1.82 7.88 2.3C8.32 2.78 8.54 3.36 8.54 4.04V11.96ZM6.98 4.04C6.98 3.72 6.89 3.47 6.71 3.29C6.53 3.11 6.28 3.02 5.96 3.02H2.48C2.16 3.02 1.91 3.11 1.73 3.29C1.55 3.47 1.46 3.72 1.46 4.04V11.96C1.46 12.28 1.55 12.53 1.73 12.71C1.91 12.89 2.16 12.98 2.48 12.98H5.96C6.28 12.98 6.53 12.89 6.71 12.71C6.89 12.53 6.98 12.28 6.98 11.96V4.04Z" fill="currentColor"/>
                  <path d="M18.26 11.96C18.26 12.64 18.04 13.22 17.6 13.7C17.16 14.18 16.58 14.42 15.86 14.42H12.02C11.3 14.42 10.72 14.18 10.28 13.7C9.84 13.22 9.62 12.64 9.62 11.96V4.04C9.62 3.36 9.84 2.78 10.28 2.3C10.72 1.82 11.3 1.58 12.02 1.58H15.86C16.58 1.58 17.16 1.82 17.6 2.3C18.04 2.78 18.26 3.36 18.26 4.04V11.96ZM16.7 4.04C16.7 3.72 16.61 3.47 16.43 3.29C16.25 3.11 16 3.02 15.68 3.02H12.2C11.88 3.02 11.63 3.11 11.45 3.29C11.27 3.47 11.18 3.72 11.18 4.04V11.96C11.18 12.28 11.27 12.53 11.45 12.71C11.63 12.89 11.88 12.98 12.2 12.98H15.68C16 12.98 16.25 12.89 16.43 12.71C16.61 12.53 16.7 12.28 16.7 11.96V4.04Z" fill="currentColor"/>
                  <path d="M27.98 11.96C27.98 12.64 27.76 13.22 27.32 13.7C26.88 14.18 26.3 14.42 25.58 14.42H21.74C21.02 14.42 20.44 14.18 20 13.7C19.56 13.22 19.34 12.64 19.34 11.96V4.04C19.34 3.36 19.56 2.78 20 2.3C20.44 1.82 21.02 1.58 21.74 1.58H25.58C26.3 1.58 26.88 1.82 27.32 2.3C27.76 2.78 27.98 3.36 27.98 4.04V11.96ZM26.42 4.04C26.42 3.72 26.33 3.47 26.15 3.29C25.97 3.11 25.72 3.02 25.4 3.02H21.92C21.6 3.02 21.35 3.11 21.17 3.29C20.99 3.47 20.9 3.72 20.9 4.04V11.96C20.9 12.28 20.99 12.53 21.17 12.71C21.35 12.89 21.6 12.98 21.92 12.98H25.4C25.72 12.98 25.97 12.89 26.15 12.71C26.33 12.53 26.42 12.28 26.42 11.96V4.04Z" fill="currentColor"/>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
