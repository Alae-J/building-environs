import type { ArticleSection } from '@/app/types/article'

export function UnknownSection({ section }: { section: ArticleSection }) {
  return (
    <div className="p-4 bg-red-100 border border-red-300 rounded mb-4">
      <p className="text-red-700 mb-2">Unknown section type: {section.type}</p>
      <pre className="text-xs text-gray-600">{JSON.stringify(section, null, 2)}</pre>
    </div>
  )
}
