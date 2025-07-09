// components/ArticlesGrid.tsx
import React from 'react'
import ArticleCard from './ArticleCard'
import { BlogPost } from './FeaturedSlider'
import HorizontalArticleCard from './HorizontalArticleCard'
import MiniArticleCard from './MiniArticleCard'

interface ArticlesGridProps {
  articles: BlogPost[]
}

const ArticlesGrid: React.FC<ArticlesGridProps> = ({ articles }) => {
  const rows: React.ReactNode[] = []

  for (let i = 0; i < articles.length; i += 9) {
    const chunk = articles.slice(i, i + 9)
    const six = chunk.slice(0, 6)
    const one = chunk[6]
    const two = chunk.slice(7, 9)

    // 6-up grid
    if (six.length) {
      rows.push(
        <div
          key={`articles-${i}`}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {six.map((a) => (
            <ArticleCard key={a.id} {...a} />
          ))}
        </div>
      )
    }

    // single horizontal
    if (one) {
      rows.push(
        <HorizontalArticleCard
          key={`horizontal-${i}`}
          {...one}
        />
      )
    }

    // 2-up mini
    if (two.length) {
      rows.push(
        <div
          key={`mini-${i}`}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {two.map((a) => (
            <MiniArticleCard key={a.id} {...a} />
          ))}
        </div>
      )
    }
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* space-y-6 gives each row exactly the same 1.5rem gap */}
        <div className="max-w-7xl mx-auto flex flex-col space-y-6">
          {rows}
        </div>
      </div>
    </section>
  )
}

export default ArticlesGrid
