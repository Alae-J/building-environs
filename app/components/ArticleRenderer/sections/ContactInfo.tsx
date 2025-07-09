import { renderTextContent } from '@/app/lib/textFormatter'
import type { ArticleSection } from '@/app/types/article'

export function ContactInfo({ section }: { section: ArticleSection }) {
  return (
    <div className="mb-6 leading-relaxed text-center bg-gray-50 p-4 rounded-lg">
      {renderTextContent(
        section.content || '',
        'text-red-600 underline hover:text-red-700'
      )}
    </div>
  )
}