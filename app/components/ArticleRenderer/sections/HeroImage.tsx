import type { ArticleSection } from '@/app/types/article'
import Image from 'next/image'

interface HeroImageProps {
  section: ArticleSection
}

export default function HeroImage({ section }: HeroImageProps) {
  const figWidth = section.width || '800px'
  const figHeight = section.height || '400px'

  let imgWidth = parseInt(figWidth, 10)
  let imgHeight = parseInt(figHeight, 10)

  // Apply max width and height constraints
  const maxWidth = 1020
  const maxHeight = 720
  if (imgWidth > maxWidth || imgHeight > maxHeight) {
    const widthRatio = maxWidth / imgWidth
    const heightRatio = maxHeight / imgHeight
    const ratio = Math.min(widthRatio, heightRatio)

    imgWidth = Math.round(imgWidth * ratio)
    imgHeight = Math.round(imgHeight * ratio)
  }

  // Classes for layout and optional caption styling
  const baseClasses = 'mx-auto mb-8'
  const captionBoxClasses = section.caption
    ? 'bg-gray-100 border border-gray-300 px-2 py-2'
    : ''

  return (
    <figure
      style={{ width: `${imgWidth}px` }}
      className={`${baseClasses} ${captionBoxClasses}`}
    >
      <Image
        src={section.src!}
        alt={section.alt || ''}
        width={imgWidth}
        height={imgHeight}
        className="w-full h-auto rounded-lg"
      />

      {section.caption && (
        <figcaption className="mt-1 text-xs text-gray-400 text-center">
          {section.caption}
        </figcaption>
      )}
    </figure>
  )
}
