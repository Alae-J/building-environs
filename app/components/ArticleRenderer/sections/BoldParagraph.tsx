import { parseFormattedText } from '@/app/lib/textFormatter'
import type { ArticleSection } from '@/app/types/article'

interface BoldParagraphProps {
  section: ArticleSection
}

export default function BoldParagraph({ section }: BoldParagraphProps) {
  return (
    <h2 className="text-2xl font-bold mb-4 leading-relaxed">
      {parseFormattedText(section.content || '', 'text-red-600 underline hover:text-red-700')}
    </h2>
  )
}
