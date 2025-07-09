import { renderTextContent } from '@/app/lib/textFormatter'
import type { ArticleSection } from '@/app/types/article'

interface ItalicTextProps {
  section: ArticleSection
}

export function ItalicText({ section }: ItalicTextProps) {
  return (
    <div className="mb-6 leading-relaxed italic text-gray-600">
      {renderTextContent(
        section.content || '',
        'text-red-600 underline hover:text-red-700'
      )}
    </div>
  )
}