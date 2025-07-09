import { Play } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export interface PodcastCardProps {
  title: string
  date: string  // ISO date string
  image: string  // URL or path to art
  href: string  // link to the episode
}

export default function PodcastCard({
  title,
  date,
  image,
  href,
}: PodcastCardProps) {
  const formatDate = (dateString: string) => {
    const dateObj = new Date(dateString)
    const day = String(dateObj.getDate()).padStart(2, '0')
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const month = monthNames[dateObj.getMonth()]
    const year = dateObj.getFullYear()
    return `${day} ${month} ${year}`
  }

  return (
    // Slightly wider than tall: using 10:9 aspect ratio, max width, and equal margins
    <div className="relative w-full max-w-[520px] aspect-[10/9] mx-6 my-4">
      {/* Gray background offset layer */}
      <div className="absolute top-4 left-4 w-full h-full bg-[#c4c4c4] rounded-lg z-0" />

      {/* Actual card content with overflow-hidden and rounded corners */}
      <div className="relative w-full h-full rounded-lg overflow-hidden z-10 flex flex-col justify-end">
        {/* Image layer with darkening filter */}
        <div className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden z-10">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-lg shadow-lg filter brightness-75"
            sizes="(max-width: 768px) 100vw, 520px"
          />
        </div>

        {/* Content overlay */}
        <div className="relative z-20 w-full bg-gradient-to-t from-black/80 via-black/30 to-transparent px-6 pt-24 pb-6 text-white flex flex-col justify-end">
          <div className="text-sm mb-2">Published {formatDate(date)}</div>
          <Link href={href} title={title}>
            <h3 className="font-bold text-lg leading-tight mb-3 cursor-pointer">
              {title}
            </h3>
          </Link>
          <Link href={href}>
            <div className="inline-flex items-center px-4 py-2 bg-transparent border border-white text-white rounded-lg hover:border-red-600 hover:text-red-600 transition-colors font-medium cursor-pointer">
              <Play className="w-4 h-4 mr-2 fill-current" />
              Listen
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}