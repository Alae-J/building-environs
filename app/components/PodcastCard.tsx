// components/PodcastCard.tsx

export interface PodcastCardProps {
  title: string
  date:  string  // ISO date string
  image: string  // URL or path to art
  href:  string  // link to the episode
}

export default function PodcastCard({
  title,
  date,
  image,
  href,
}: PodcastCardProps) {
  return (
    <a href={href} className="group block overflow-hidden rounded-lg shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover group-hover:opacity-75 transition"
      />
      <div className="p-4 bg-white">
        <h3 className="font-semibold text-lg">{title}</h3>
        <time className="block mt-1 text-sm text-gray-500">
          {new Date(date).toLocaleDateString()}
        </time>
      </div>
    </a>
  )
}
