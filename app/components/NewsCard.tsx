import Image from 'next/image'
import Link from 'next/link'

export interface NewsCardProps {
  slug: string
  title: string
  excerpt: string
  image: string
  date?: string
}

export default function NewsCard({ slug, title, excerpt, image, date }: NewsCardProps) {
  return (
    <article className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 overflow-hidden">
      <Link href={`/news/${slug}`} className="block flex flex-col md:flex-row">
        {/* Thumbnail */}
        <div className="relative w-full md:w-1/3 h-48 md:h-auto flex-shrink-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover w-full h-full"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {date && (
            <time
              dateTime={date}
              className="text-gray-500 text-sm mb-2"
            >
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </time>
          )}

          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {title}
          </h3>

          <p className="text-gray-600 text-sm flex-1 line-clamp-3">
            {excerpt}
          </p>

          <span className="mt-4 text-red-600 font-medium text-sm hover:underline">
            Read more →
          </span>
        </div>
      </Link>
    </article>
  )
}
