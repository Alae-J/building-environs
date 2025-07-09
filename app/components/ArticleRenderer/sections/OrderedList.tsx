import { parseFormattedText } from '@/app/lib/textFormatter'
import type { ArticleSection } from '@/app/types/article'

interface OrderedListProps {
  section: ArticleSection
}

export default function OrderedList({ section }: OrderedListProps) {
  return (
    <ol className="mb-6 space-y-3 list-decimal list-inside">
      {section.items?.map((item, i) => (
        <li key={i} className="leading-relaxed pl-2">
          {parseFormattedText(item, 'text-red-600 underline hover:text-red-700')}
        </li>
      ))}
    </ol>
  )
}
