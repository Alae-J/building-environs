import { renderTextContent } from '@/app/lib/textFormatter'
import type { ArticleSection } from '@/app/types/article'
import Image from 'next/image'

export function ImageWithText({ section }: { section: ArticleSection }) {
  return (
    <div className="mb-8">
      {/* Mobile */}
      <div className="lg:hidden flex flex-col gap-6">
        <Image
          src={section.image!.src}
          alt={section.image!.alt}
          width={300}
          height={212}
          className="w-full h-auto rounded-lg"
        />
        <div className="leading-relaxed">
          {renderTextContent(
            section.text!.content,
            'text-red-600 underline hover:text-red-700'
          )}
        </div>
      </div>
      {/* Desktop */}
      <div className="hidden lg:block">
        <div className="leading-relaxed">
          <img
            src={section.image!.src}
            alt={section.image!.alt}
            className="rounded-lg float-left w-[300px] h-[212px] object-cover mr-6 mb-4"
          />
          {renderTextContent(
            section.text!.content,
            'text-red-600 underline hover:text-red-700'
          )}
        </div>
      </div>
    </div>
  )
}