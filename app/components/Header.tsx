'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (menuKey: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current)
    setActiveDropdown(menuKey)
  }

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 150)
  }

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current)
    }
  }, [])

  return (
    <>
      {/* Header wrapper */}
      <div className="bg-white shadow-sm sticky top-0 z-20 min-h-[80px] flex justify-center items-center px-5 lg:px-0">
        <header className="w-full max-w-[1280px] flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              loading="eager"
              className="w-auto h-12 object-contain"
              src="https://cdn-01.cms-ap-v2i.applyflow.com/building-environs/wp-content/uploads/2022/05/logo_black.svg"
              alt="Building Environs Recruitment"
              width={190}
              height={48}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex flex-row gap-12 list-none m-0 p-0 justify-end mr-6">
              {/** Employers */}
              <li
                className="relative"
                onMouseEnter={() => handleMouseEnter('employers')}
                onMouseLeave={handleMouseLeave}
              >
                <Link href="#" className="text-gray-900 hover:text-red-600 font-extrabold text-sm leading-6 flex items-center transition-colors">
                  Employers
                  <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                {activeDropdown === 'employers' && (
                  <ul className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-lg border border-gray-200 rounded-md min-w-[250px] py-2 z-50">
                    <li>
                      <Link href="/why-building-environs/" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-800">
                        Why Building Environs
                      </Link>
                    </li>
                    <li>
                      <Link href="/available-candidates/" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-800">
                        Available candidates
                      </Link>
                    </li>
                    <li>
                      <Link href="/submit-vacancy/" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-800">
                        Submit Vacancy
                      </Link>
                    </li>
                    <li>
                      <Link href="/recruitment-solutions/" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-800">
                        Recruitment solutions
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/** Job seekers */}
              <li
                className="relative"
                onMouseEnter={() => handleMouseEnter('jobseekers')}
                onMouseLeave={handleMouseLeave}
              >
                <Link href="#" className="text-gray-900 hover:text-red-600 font-extrabold text-sm leading-6 flex items-center transition-colors">
                  Job seekers
                  <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                {activeDropdown === 'jobseekers' && (
                  <ul className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-lg border border-gray-200 rounded-md min-w-[250px] py-2 z-50">
                    <li>
                      <Link href="/jobs/" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-800">
                        Latest Jobs
                      </Link>
                    </li>
                    <li>
                      <Link href="/submit-cv/" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-800">
                        Submit your CV
                      </Link>
                    </li>
                    <li>
                      <Link href="/construction-engineering-property-project-management-jobsbs/" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-800">
                        Find work with Building Environs
                      </Link>
                    </li>
                    <li>
                      <Link href="/user-login/" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-800">
                        Login to your profile
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/** About */}
              <li
                className="relative"
                onMouseEnter={() => handleMouseEnter('about')}
                onMouseLeave={handleMouseLeave}
              >
                <Link href="#" className="text-gray-900 hover:text-red-600 font-extrabold text-sm leading-6 flex items-center transition-colors">
                  About
                  <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                {activeDropdown === 'about' && (
                  <ul className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-lg border border-gray-200 rounded-md min-w-[250px] py-2 z-50">
                    <li>
                      <Link href="/about-us/" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-800">
                        About us
                      </Link>
                    </li>
                    <li>
                      <Link href="/recruitment-solutions/construction-recruitment-jobs/" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-800">
                        Construction Recruitment
                      </Link>
                    </li>
                    <li>
                      <Link href="/about-us/property-recruitment-jobs/" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-800">
                        Property Recruitment
                      </Link>
                    </li>
                    <li>
                      <Link href="/about-us/engineering-recruitment-jobs/" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-800">
                        Engineering Recruitment
                      </Link>
                    </li>
                    <li>
                      <Link href="/meet-the-team/" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-800">
                        Meet the team
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/** Content */}
              <li
                className="relative"
                onMouseEnter={() => handleMouseEnter('content')}
                onMouseLeave={handleMouseLeave}
              >
                <Link href="#" className="text-gray-900 hover:text-red-600 font-extrabold text-sm leading-6 flex items-center transition-colors">
                  Content
                  <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                {activeDropdown === 'content' && (
                  <ul className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-lg border border-gray-200 rounded-md min-w-[250px] py-2 z-50">
                    <li>
                      <Link href="/news/" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-800">
                        News & Articles
                      </Link>
                    </li>
                    <li>
                      <Link href="/podcasts/" className="block px-4 py-2 hover:bg-gray-50 text-sm text-gray-800">
                        Podcasts
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/** Contact us */}
              <li>
                <Link href="/contact-us/" className="text-gray-900 hover:text-red-600 font-extrabold text-sm leading-6">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Right side actions & mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/podcasts/"
              className="hidden sm:inline-block px-4 py-2 border border-red-600 text-red-600 rounded-lg text-sm font-bold hover:bg-red-600 hover:text-white transition-colors"
            >
              Latest podcast
            </Link>
            <Link
              href="/submit-vacancy/"
              className="px-5 py-2 bg-red-600 text-white rounded-lg text-sm font-bold hover:bg-red-700 transition-colors"
            >
              Submit vacancy
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-red-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </header>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-30 md:hidden transition-opacity duration-200 ${
          mobileOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'
        } bg-black`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile side panel */}
<div
  className={`fixed top-0 right-0 bottom-0 z-40 md:hidden bg-white w-full max-w-xs p-6 transform transition-transform duration-300 ${
    mobileOpen ? 'translate-x-0' : 'translate-x-full'
  }`}
>
  {/* Polished close icon button */}
  <button
    onClick={() => setMobileOpen(false)}
    aria-label="Close menu"
    className="absolute top-4 right-4 p-2 text-gray-600 hover:text-red-600 focus:outline-none"
  >
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="3" y1="3" x2="17" y2="17" strokeLinecap="round" />
      <line x1="17" y1="3" x2="3" y2="17" strokeLinecap="round" />
    </svg>
  </button>

  <ul className="space-y-4 mt-8">
    <li>
      <Link href="/jobs/" onClick={() => setMobileOpen(false)} className="block py-2 text-gray-900 hover:text-red-600">
        Latest Jobs
      </Link>
    </li>
    <li>
      <Link href="/submit-cv/" onClick={() => setMobileOpen(false)} className="block py-2 text-gray-900 hover:text-red-600">
        Submit your CV
      </Link>
    </li>
    <li>
      <Link href="/about-us/" onClick={() => setMobileOpen(false)} className="block py-2 text-gray-900 hover:text-red-600">
        About us
      </Link>
    </li>
    <li>
      <Link href="/news/" onClick={() => setMobileOpen(false)} className="block py-2 text-gray-900 hover:text-red-600">
        News &amp; Articles
      </Link>
    </li>
    <li>
      <Link href="/podcasts/" onClick={() => setMobileOpen(false)} className="block py-2 text-gray-900 hover:text-red-600">
        Podcasts
      </Link>
    </li>
    <li>
      <Link href="/contact-us/" onClick={() => setMobileOpen(false)} className="block py-2 text-gray-900 hover:text-red-600">
        Contact us
      </Link>
    </li>
  </ul>
</div>

    </>
  )
}
