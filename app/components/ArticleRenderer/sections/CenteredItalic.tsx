import { parseFormattedText } from '@/app/lib/textFormatter'
import type { ArticleSection } from '@/app/types/article'

interface CenteredItalicProps {
  section: ArticleSection
}

export default function CenteredItalic({ section }: CenteredItalicProps) {
  return (
    <div className="mb-6 text-center italic text-gray-600">
      {parseFormattedText(section.content || '', 'text-red-600 underline hover:text-red-700')}
    </div>
  )
}
