import { parseFormattedText } from '@/app/lib/textFormatter'
import type { ArticleSection } from '@/app/types/article'

interface EmojiBulletListProps {
  section: ArticleSection
}

export function EmojiBulletList({ section }: EmojiBulletListProps) {
  return (
    <ul className="mb-6 space-y-1 list-none">
      {section.items?.map((item, i) => (
        <li key={i} className="flex">
          <span className="mr-3 flex-shrink-0 text-lg mt-0.5">
            {section.emoji || '•'}
          </span>
          <div className="leading-relaxed">
            {parseFormattedText(
              item,
              'text-red-600 underline hover:text-red-700'
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}