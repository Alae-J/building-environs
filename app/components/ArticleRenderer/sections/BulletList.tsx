import { parseFormattedText } from '@/app/lib/textFormatter'
import type { ArticleSection } from '@/app/types/article'

interface BulletListProps {
  section: ArticleSection
}

export function BulletList({ section }: BulletListProps) {
  return (
    <ul className="mb-6 space-y-1 list-none">
      {section.items?.map((item, i) => (
        <li key={i} className="flex">
          <span className="inline-block w-1.5 h-1.5 bg-gray-600 rounded-full mt-2.5 mr-3 flex-shrink-0" />
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
