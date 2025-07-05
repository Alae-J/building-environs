
import { Metadata } from 'next'
import PageLayout from '../components/Layout/PageLayout'
import PodcastCard from '../components/PodcastCard'

export const metadata: Metadata = {
  title: 'Building Talks Podcast | Construction & Property Industry Insights',
  description: 'Listen to the Building Talks podcast for expert insights, interviews and discussions about the construction and property industry in Australia.',
  openGraph: {
    title: 'Building Talks Podcast | Construction & Property Industry Insights',
    description: 'Listen to the Building Talks podcast for expert insights, interviews and discussions about the construction and property industry in Australia.',
    url: 'https://www.buildingenvirons.com.au/podcasts/',
    siteName: 'Building Environs Recruitment',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Building Talks Podcast | Construction & Property Industry Insights',
    description: 'Listen to the Building Talks podcast for expert insights, interviews and discussions about the construction and property industry in Australia.',
  },
}

// Mock data - replace with actual data fetching
const mockPodcastEpisodes = [
  {
    id: '1',
    title: 'Talking with Steve Chandler: De-Risking Property Development',
    description: 'Episode 6 How to be a property developer series - talking with Steve Chandler about de-risking property development and the key strategies successful developers use to minimize risk while maximizing returns.',
    imageUrl: '/images/podcasts/steve-chandler-derisking.jpg',
    imageAlt: 'Steve Chandler Property Development',
    href: '/podcasts/talking-with-steve-chandler-de-risking-property-development',
    date: '2024-12-01',
    duration: '45:32',
    episodeNumber: '6',
    audioUrl: 'https://example.com/podcast6.mp3'
  },
  {
    id: '2',
    title: 'Chat with Steve Chandler: Steps into Property Development',
    description: 'Episode 7 How to be a property developer series - talking with Steve Chandler about taking your first steps into property development and what aspiring developers need to know.',
    imageUrl: '/images/podcasts/steve-chandler-steps.jpg',
    imageAlt: 'Steve Chandler First Steps',
    href: '/podcasts/chat-with-steve-chandler-steps-into-property-development',
    date: '2024-11-15',
    duration: '38:45',
    episodeNumber: '7',
    audioUrl: 'https://example.com/podcast7.mp3'
  },
  {
    id: '3',
    title: 'Robert Pradolin on Housing Crisis & Private Sector Solutions',
    description: 'Talking with Robert Pradolin about Australia\'s housing crisis, compassionate capitalism, and how private sector solutions can help address the affordable housing shortage.',
    imageUrl: '/images/podcasts/robert-pradolin-housing.jpg',
    imageAlt: 'Robert Pradolin Housing Crisis',
    href: '/podcasts/robert-pradolin-on-housing-crisis-private-sector-solutions',
    date: '2024-10-28',
    duration: '52:18',
    episodeNumber: '5',
    audioUrl: 'https://example.com/podcast5.mp3'
  },
  {
    id: '4',
    title: 'Steve Chandler on Approvals & Key Relationships',
    description: 'Episode 4 How to be a property developer series - talking with Steve Chandler about navigating authority approvals and building key relationships in property development.',
    imageUrl: '/images/podcasts/steve-chandler-approvals.jpg',
    imageAlt: 'Steve Chandler Approvals',
    href: '/podcasts/steve-chandler-on-approvals-key-relationships',
    date: '2024-10-12',
    duration: '41:22',
    episodeNumber: '4',
    audioUrl: 'https://example.com/podcast4.mp3'
  },
  {
    id: '5',
    title: 'Australia\'s Construction Labour Shortage with Robert Sobyra',
    description: 'Solving Australia\'s construction labour shortage - insights from Robert Sobyra of BuildSkills Australia on training, skills development and workforce solutions.',
    imageUrl: '/images/podcasts/robert-sobyra-labour.jpg',
    imageAlt: 'Robert Sobyra Labour Shortage',
    href: '/podcasts/australia-s-construction-labour-shortage-with-robert-sobyra',
    date: '2024-09-25',
    duration: '47:15',
    episodeNumber: '3',
    audioUrl: 'https://example.com/podcast3.mp3'
  },
  {
    id: '6',
    title: 'Aussie Property Development Challenges with Illan Samuel',
    description: 'Unlocking Australian property development challenges - in-depth discussion with industry expert Illan Samuel about market trends, challenges and opportunities.',
    imageUrl: '/images/podcasts/illan-samuel-challenges.jpg',
    imageAlt: 'Illan Samuel Property Development',
    href: '/podcasts/aussie-property-development-challenges-with-illan-samuel',
    date: '2024-09-08',
    duration: '56:33',
    episodeNumber: '2',
    audioUrl: 'https://example.com/podcast2.mp3'
  }
]

export default function PodcastsPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-red-600 rounded-full mb-6">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-8h2v8zm4 0h-2v-8h2v8z"/>
                  <path d="M9 8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S11.33 10 10.5 10 9 9.33 9 8.5zm4 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5z"/>
                </svg>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate__animated animate__fadeInUp">
              Building Talks Podcast
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 animate__animated animate__fadeInUp animate__delay-1s">
              Expert insights, interviews and discussions about the construction and property industry in Australia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate__animated animate__fadeInUp animate__delay-2s">
              <button className="px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Play Latest Episode
              </button>
              <button className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
                Subscribe on Spotify
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Episode */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Latest Episode
            </h2>
            <PodcastCard
              {...mockPodcastEpisodes[0]}
              variant="featured"
              className="mb-8"
            />
          </div>
        </div>
      </section>

      {/* All Episodes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                All Episodes
              </h2>
              <div className="flex items-center space-x-4">
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                  <option value="recent">Most Recent</option>
                  <option value="popular">Most Popular</option>
                  <option value="series">By Series</option>
                </select>
              </div>
            </div>

            {/* Episodes Grid */}
            <div className="space-y-8">
              {mockPodcastEpisodes.slice(1).map((episode) => (
                <PodcastCard
                  key={episode.id}
                  {...episode}
                  variant="default"
                />
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
                Load More Episodes
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Never Miss an Episode
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Subscribe to Building Talks podcast on your favorite platform and get notified when new episodes are released.
            </p>
            
            {/* Podcast Platform Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
              <a href="#" className="flex items-center justify-center p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-colors">
                <span className="font-semibold">Spotify</span>
              </a>
              <a href="#" className="flex items-center justify-center p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-colors">
                <span className="font-semibold">Apple Podcasts</span>
              </a>
              <a href="#" className="flex items-center justify-center p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-colors">
                <span className="font-semibold">Google Podcasts</span>
              </a>
              <a href="#" className="flex items-center justify-center p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-colors">
                <span className="font-semibold">RSS Feed</span>
              </a>
            </div>

            {/* Newsletter Signup */}
            <div className="max-w-md mx-auto">
              <p className="mb-4 text-red-100">Or get episode updates via email:</p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-white text-red-600 font-semibold rounded hover:bg-gray-100 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* About the Podcast */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              About Building Talks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Industry Experts</h3>
                <p className="text-gray-600">
                  Interviews with leading professionals in construction, property development, and engineering.
                </p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Real Insights</h3>
                <p className="text-gray-600">
                  Practical advice, market trends, and insider knowledge from industry veterans.
                </p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Career Focus</h3>
                <p className="text-gray-600">
                  Career development tips and recruitment insights for construction professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
