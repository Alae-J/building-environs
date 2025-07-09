import { parseFormattedText } from '@/app/lib/textFormatter'
import type { ArticleSection } from '@/app/types/article'
import React from 'react'

export function CenteredContent({ section }: { section: ArticleSection }) {
  return (
    <div className="mb-6 text-center">
      {section.content?.split('\n\n').map((block, i) => {
        const trimmed = block.trim()
        if (/^\*\*.*\*\*$/.test(trimmed)) {
          const inner = trimmed.slice(2, -2)
          const isMain = i === 0
          const Tag = isMain ? 'h2' : 'h3'
          const cls = isMain
            ? 'text-2xl font-bold mb-4'
            : 'text-lg font-semibold mb-3'
          return React.createElement(
            Tag,
            { key: i, className: cls },
            parseFormattedText(inner, 'text-red-600 underline hover:text-red-700')
          )
        }
        return (
          <p key={i} className="mb-4 last:mb-0">
            {parseFormattedText(block, 'text-red-600 underline hover:text-red-700')}
          </p>
        )
      })}
    </div>
  )
}
