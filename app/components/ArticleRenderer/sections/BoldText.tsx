import { parseFormattedText } from '@/app/lib/textFormatter'
import type { ArticleSection } from '@/app/types/article'

interface BoldTextProps {
  section: ArticleSection
}

export default function BoldText({ section }: BoldTextProps) {
  return (
    <p className="text-base font-bold mb-4 text-center">
      {parseFormattedText(section.content || '', 'text-red-600 underline hover:text-red-700')}
    </p>
  )
}
