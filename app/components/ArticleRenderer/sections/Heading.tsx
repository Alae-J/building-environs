import { parseFormattedText } from '@/app/lib/textFormatter'
import type { ArticleSection } from '@/app/types/article'
import React from 'react'

interface HeadingProps {
  section: ArticleSection
}

export default function Heading({ section }: HeadingProps) {
  const { level, content } = section

  const tag = level === 1 ? 'h1' : level === 2 ? 'h2' : 'h3'
  const sizeClass =
    level === 1 ? 'text-3xl' : level === 2 ? 'text-2xl' : 'text-xl'

  return React.createElement(
    tag,
    { className: `${sizeClass} font-bold mb-4` },
    parseFormattedText(content || '', 'text-red-600 underline hover:text-red-700')
  )
}
