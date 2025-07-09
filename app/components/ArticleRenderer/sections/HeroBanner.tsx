import type { HeroBannerSection } from '@/app/types/article'

interface HeroBannerProps {
  section: HeroBannerSection
}

export default function HeroBanner({ section }: HeroBannerProps) {
  const { button, publishDate, heading, image } = section

  return (
    <div className="relative w-screen left-1/2 right-1/2 -translate-x-1/2 bg-gray-100 py-8 mb-12">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
        {/* Back button row */}
        <div className="mb-8">
          <a
            href={button.url}
            className="inline-block bg-white text-gray-700 px-6 py-3 rounded-lg hover:bg-black hover:text-white transition-colors duration-200"
          >
            {button.text}
          </a>
        </div>

        {/* Two-column layout: text left, image right */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-12">
          {/* Text column */}
          <div className="flex-1">
            <p className="text-sm uppercase text-gray-500 mb-4">
              Published {publishDate}
            </p>
            <h1
              className="text-2xl lg:text-3xl font-bold leading-tight"
              style={{ color: 'var(--af-primary--dark, #030303)' }}
            >
              {heading}
            </h1>
          </div>

          {/* Image column */}
          <div className="flex-shrink-0">
            <div className="relative inline-block max-w-full">
              {/* Gray background layer */}
              <div
                className="absolute -top-8 -right-8 w-full max-w-[600px] h-80 rounded-lg -z-10"
                style={{ backgroundColor: 'rgb(170, 170, 170)' }}
              />

              {/* Main image */}
              <div className="w-full max-w-[600px] h-80">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
