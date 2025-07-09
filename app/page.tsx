import { Metadata } from 'next'
import Link from 'next/link'
import PageLayout from './components/Layout/PageLayout'
// Import the new components
import PostsSlider, { BlogPost } from './components/PostsSlider'

export const metadata: Metadata = {
  title: 'Building Environs Recruitment | Construction, Property & Engineering Recruitment',
  description: 'Leading recruitment specialists in construction, property and engineering. Find your next career opportunity or hire top talent in Melbourne and Australia.',
  openGraph: {
    title: 'Building Environs Recruitment | Construction, Property & Engineering Recruitment',
    description: 'Leading recruitment specialists in construction, property and engineering. Find your next career opportunity or hire top talent in Melbourne and Australia.',
    url: 'https://www.buildingenvirons.com.au/',
    siteName: 'Building Environs Recruitment',
    images: [
      {
        url: 'https://cdn-01.cms-ap-v2i.applyflow.com/building-environs/wp-content/uploads/2022/05/1640.png',
        width: 1641,
        height: 857,
        alt: 'Building Environs Recruitment',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Building Environs Recruitment | Construction, Property & Engineering Recruitment',
    description: 'Leading recruitment specialists in construction, property and engineering. Find your next career opportunity or hire top talent in Melbourne and Australia.',
  },
}

// Convert your existing news data to match the BlogPost interface
const featuredNews: BlogPost[] = [
  {
    id: '1',
    title: '20 Years, 5 Lessons, and a Hell of a Lot of Coffee: A Recruiter\'s Survival Guide for Construction & Property!',
    slug: '20-years-5-lessons-and-a-hell-of-a-lot-of-coffee-a-recruiters-survival-guide-for-construction-property',
    excerpt: 'It\'s April 2025. I\'ve officially been in recruitment for two decades!! That\'s 20 years of dodgy CVs, nearly 4000 candidate interviews, around 1500 client meetings...',
    featuredImage: '/images/news/cover-photo-article-april-2025.png',
    imageAlt: 'Cover photo - Article (April 2025)',
  },
  {
    id: '2',
    title: 'Kane appointed to build Paula Fox Melanoma and Cancer Centre',
    slug: 'kane-constructions-appointed-to-deliver-the-paula-fox-melanoma-and-cancer-centre',
    excerpt: 'Kane have been appointed to deliver the Paula Fox Melanoma and Cancer Centre. The striking new building will feature gold-standard facilities',
    featuredImage: '/images/news/kane-constructions.jpg',
    imageAlt: 'Kane Constructions',
  },
  {
    id: '3',
    title: 'Albanese Government announces $2B Social Housing Accelerator',
    slug: 'albanese-government-announces-2b-social-housing-accelerator',
    excerpt: 'The Australian Government has announced a $2 billion Social Housing Accelerator program to boost housing supply across the nation.',
    featuredImage: '/images/news/albanese-government-social-housing.jpg',
    imageAlt: 'Social Housing Development',
  },
  {
    id: '4',
    title: "Salary Review Season: Where Everyone's Underpaid (Just Ask Them)",
    slug: 'salary-review-season-where-everyones-underpaid-just-ask-them',
    excerpt: "Every year like clockwork, the same thing happens. We hit the end of financial year, and suddenly the air thickens with passive-aggressive calendar invites titled \"Annual Review\". It's Salary Season...",
    featuredImage: '/images/news/cover-photo-june-2025-blog-1.png',
    imageAlt: 'Cover photo - June 2025 blog'
  }
]

const latestPodcast = {
  id: '1',
  title: 'Talking with Steve Chandler: De-Risking Property Development',
  description: 'Episode 6 How to be a property developer series - talking with Steve Chandler about de-risking property development and key strategies for success.',
  imageUrl: '/images/podcasts/steve-chandler-derisking.jpg',
  imageAlt: 'Steve Chandler Property Development',
  href: '/podcasts/talking-with-steve-chandler-de-risking-property-development',
  date: '2024-12-01',
  duration: '45:32',
  episodeNumber: '6'
}

export default function HomePage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate__animated animate__fadeInUp">
              Building Better Careers
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100 animate__animated animate__fadeInUp animate__delay-1s">
              Providing better talent, to build better projects. Helping build better careers, with access to the best businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate__animated animate__fadeInUp animate__delay-2s">
              <Link 
                href="/jobs" 
                className="px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Find Jobs
              </Link>
              <Link 
                href="/submit-vacancy" 
                className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-600 transition-colors"
              >
                Submit Vacancy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Recruitment Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  🏗️
                </div>
                <h3 className="text-xl font-semibold mb-4">Construction Recruitment</h3>
                <p className="text-gray-600 mb-4">
                  Specialized recruitment for construction professionals including project managers, site supervisors, and skilled tradespeople.
                </p>
                <Link href="/construction-recruitment" className="text-red-600 hover:text-red-700 font-medium">
                  Learn More →
                </Link>
              </div>
              <div className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  🏢
                </div>
                <h3 className="text-xl font-semibold mb-4">Property Recruitment</h3>
                <p className="text-gray-600 mb-4">
                  Expert recruitment services for property development, real estate, and property management professionals.
                </p>
                <Link href="/property-recruitment" className="text-red-600 hover:text-red-700 font-medium">
                  Learn More →
                </Link>
              </div>
              <div className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  ⚙️
                </div>
                <h3 className="text-xl font-semibold mb-4">Engineering Recruitment</h3>
                <p className="text-gray-600 mb-4">
                  Connecting engineering talent with leading infrastructure, civil, and mechanical engineering projects.
                </p>
                <Link href="/engineering-recruitment" className="text-red-600 hover:text-red-700 font-medium">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News - Using the new PostsSlider component */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Latest Industry News
              </h2>
              <Link 
                href="/news" 
                className="text-red-600 hover:text-red-700 font-medium flex items-center"
              >
                View All Articles
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Replace the existing grid with the new PostsSlider */}
            <PostsSlider posts={featuredNews} />
          </div>
        </div>
      </section>

      {/* Latest Podcast */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Latest Podcast Episode
              </h2>
              <Link 
                href="/podcasts" 
                className="text-red-600 hover:text-red-700 font-medium flex items-center"
              >
                View All Episodes
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Whether you're looking for your next career opportunity or seeking top talent for your business, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/submit-cv" 
                className="px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
              >
                Submit Your CV
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}