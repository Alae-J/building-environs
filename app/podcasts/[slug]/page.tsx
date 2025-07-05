
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import PageLayout from '../../components/Layout/PageLayout'
import PodcastCard from '../../components/PodcastCard'

interface PodcastEpisodePageProps {
  params: {
    slug: string
  }
}

// Mock data - replace with actual data fetching
const mockEpisodes = {
  'talking-with-steve-chandler-de-risking-property-development': {
    id: '1',
    title: 'Talking with Steve Chandler: De-Risking Property Development',
    description: 'Episode 6 How to be a property developer series - talking with Steve Chandler about de-risking property development and the key strategies successful developers use to minimize risk while maximizing returns.',
    content: `
      <div class="podcast-content">
        <p>In this episode of our "How to be a property developer" series, we sit down with Steve Chandler to discuss one of the most critical aspects of property development: risk management.</p>
        
        <p>Steve shares his decades of experience in property development and reveals the strategies that successful developers use to minimize risk while maximizing returns on their investments.</p>
        
        <h2>Key Topics Covered</h2>
        <ul>
          <li>Understanding different types of development risks</li>
          <li>Market research and feasibility studies</li>
          <li>Financial planning and contingency management</li>
          <li>Building the right team of professionals</li>
          <li>Timing your market entry and exit strategies</li>
          <li>Regulatory compliance and planning considerations</li>
        </ul>
        
        <h2>About Steve Chandler</h2>
        <p>Steve Chandler is a seasoned property developer with over 25 years of experience in the Australian property market. He has successfully delivered numerous residential and commercial developments across Melbourne and has mentored hundreds of aspiring developers.</p>
        
        <p>His practical approach to property development combines financial acumen with market insight, making him one of the most respected voices in the industry.</p>
        
        <h2>Episode Highlights</h2>
        <p>Some of the key insights from this episode include:</p>
        <ul>
          <li><strong>The 3-Point Risk Assessment Framework:</strong> Steve's proven method for evaluating development opportunities</li>
          <li><strong>Financial Buffer Strategies:</strong> How much contingency to build into your projects</li>
          <li><strong>Market Timing Indicators:</strong> Key signals to watch when entering or exiting markets</li>
          <li><strong>Team Assembly:</strong> The essential professionals every developer needs</li>
        </ul>
        
        <p>This episode is essential listening for anyone serious about entering the property development industry or improving their existing development strategies.</p>
      </div>
    `,
    imageUrl: '/images/podcasts/steve-chandler-derisking.jpg',
    imageAlt: 'Steve Chandler Property Development',
    date: '2024-12-01',
    duration: '45:32',
    episodeNumber: '6',
    audioUrl: 'https://example.com/podcast6.mp3',
    series: 'How to be a property developer',
    host: 'Building Environs Team',
    guest: 'Steve Chandler',
    tags: ['Property Development', 'Risk Management', 'Investment', 'Real Estate']
  }
}

const relatedEpisodes = [
  {
    id: '2',
    title: 'Chat with Steve Chandler: Steps into Property Development',
    description: 'Episode 7 How to be a property developer series - talking with Steve Chandler about taking your first steps into property development.',
    imageUrl: '/images/podcasts/steve-chandler-steps.jpg',
    imageAlt: 'Steve Chandler First Steps',
    href: '/podcasts/chat-with-steve-chandler-steps-into-property-development',
    date: '2024-11-15',
    duration: '38:45',
    episodeNumber: '7'
  },
  {
    id: '3',
    title: 'Steve Chandler on Approvals & Key Relationships',
    description: 'Episode 4 How to be a property developer series - talking about navigating authority approvals and building key relationships.',
    imageUrl: '/images/podcasts/steve-chandler-approvals.jpg',
    imageAlt: 'Steve Chandler Approvals',
    href: '/podcasts/steve-chandler-on-approvals-key-relationships',
    date: '2024-10-12',
    duration: '41:22',
    episodeNumber: '4'
  }
]

export async function generateMetadata({ params }: PodcastEpisodePageProps): Promise<Metadata> {
  const episode = mockEpisodes[params.slug as keyof typeof mockEpisodes]
  
  if (!episode) {
    return {
      title: 'Episode Not Found'
    }
  }

  return {
    title: `${episode.title} | Building Talks Podcast`,
    description: episode.description,
    openGraph: {
      title: `${episode.title} | Building Talks Podcast`,
      description: episode.description,
      images: [
        {
          url: episode.imageUrl,
          width: 1200,
          height: 630,
          alt: episode.imageAlt,
        },
      ],
      type: 'article',
      publishedTime: episode.date,
      authors: [episode.host],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${episode.title} | Building Talks Podcast`,
      description: episode.description,
      images: [episode.imageUrl],
    },
  }
}

export default function PodcastEpisodePage({ params }: PodcastEpisodePageProps) {
  const episode = mockEpisodes[params.slug as keyof typeof mockEpisodes]

  if (!episode) {
    notFound()
  }

  return (
    <PageLayout>
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-red-600">Home</Link>
            <span>/</span>
            <Link href="/podcasts" className="hover:text-red-600">Podcasts</Link>
            <span>/</span>
            <span className="text-gray-900">{episode.title}</span>
          </div>
        </div>
      </nav>

      {/* Episode Header */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Episode Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                Episode {episode.episodeNumber}
              </span>
              {episode.series && (
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                  {episode.series}
                </span>
              )}
              <time className="text-gray-500 text-sm" dateTime={episode.date}>
                {new Date(episode.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </time>
              <span className="text-gray-500 text-sm flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {episode.duration}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {episode.title}
            </h1>

            {/* Host and Guest */}
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  BT
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{episode.host}</p>
                  <p className="text-gray-600 text-sm">Host</p>
                </div>
              </div>
              {episode.guest && (
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {episode.guest.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{episode.guest}</p>
                    <p className="text-gray-600 text-sm">Guest</p>
                  </div>
                </div>
              )}
            </div>

            {/* Episode Cover Art */}
            <div className="relative aspect-video mb-8 rounded-lg overflow-hidden bg-gradient-to-br from-red-600 to-red-800">
              <Image
                src={episode.imageUrl}
                alt={episode.imageAlt}
                fill
                className="object-cover"
                priority
              />
              
              {/* Audio Player Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white">
                  <button className="mb-4 w-20 h-20 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                    <svg className="w-10 h-10 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                  <p className="text-lg font-semibold">Play Episode</p>
                  <p className="text-sm opacity-75">{episode.duration}</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button className="flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Play Episode
              </button>
              <button className="flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download
              </button>
              <button className="flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
                Share
              </button>
            </div>

            {/* Episode Description */}
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                {episode.description}
              </p>
            </div>

            {/* Tags */}
            {episode.tags && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {episode.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Episode Content */}
            <div 
              className="prose prose-lg max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: episode.content }}
            />

            {/* Subscribe CTAs */}
            <div className="border-t border-gray-200 pt-8 mb-12">
              <h3 className="text-lg font-semibold mb-4">Listen on your favorite platform</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <a href="#" className="flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="font-medium text-sm">Spotify</span>
                </a>
                <a href="#" className="flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="font-medium text-sm">Apple Podcasts</span>
                </a>
                <a href="#" className="flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="font-medium text-sm">Google Podcasts</span>
                </a>
                <a href="#" className="flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="font-medium text-sm">RSS Feed</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Episodes */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">More from this series</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedEpisodes.map((relatedEpisode) => (
                <PodcastCard
                  key={relatedEpisode.id}
                  title={relatedEpisode.title}
                  description={relatedEpisode.description}
                  imageUrl={relatedEpisode.imageUrl}
                  imageAlt={relatedEpisode.imageAlt}
                  href={relatedEpisode.href}
                  date={relatedEpisode.date}
                  duration={relatedEpisode.duration}
                  episodeNumber={relatedEpisode.episodeNumber}
                  variant="compact"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Subscribe to Building Talks
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Get notified when new episodes are released and never miss an interview with industry experts.
            </p>
            <div className="max-w-md mx-auto">
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
    </PageLayout>
  )
}
