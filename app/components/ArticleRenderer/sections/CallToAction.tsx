import { parseFormattedText } from '@/app/lib/textFormatter'
import type { ArticleSection } from '@/app/types/article'

export function CallToAction({ section }: { section: ArticleSection }) {
  return (
    <p className="mb-6 leading-relaxed">
      {parseFormattedText(
        section.content || '',
        'text-red-600 underline hover:text-red-700'
      )}
    </p>
  )
}