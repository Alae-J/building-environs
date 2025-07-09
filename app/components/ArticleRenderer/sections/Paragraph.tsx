import { renderTextContent } from '@/app/lib/textFormatter'
import type { ArticleSection } from '@/app/types/article'

interface ParagraphProps {
  section: ArticleSection
}

export default function Paragraph({ section }: ParagraphProps) {
  return (
    <div className="mb-6 leading-relaxed">
      {renderTextContent(
        section.content || '',
        'text-red-600 underline hover:text-red-700'
      )}
    </div>
  )
}
