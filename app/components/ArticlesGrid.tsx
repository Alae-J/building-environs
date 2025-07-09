import React from 'react';
import ArticleCard from './ArticleCard';
import { BlogPost } from './FeaturedSlider';
import HorizontalArticleCard from './HorizontalArticleCard';
import MiniArticleCard from './MiniArticleCard';

interface ArticlesGridProps {
  articles: BlogPost[];
}

const ArticlesGrid: React.FC<ArticlesGridProps> = ({ articles }) => {
  const rows: React.ReactNode[] = [];

  // Cycle: 6 + 1 + 2 = 9 articles per pattern
  for (let i = 0; i < articles.length; i += 9) {
    const chunk = articles.slice(i, i + 9);

    const sixArticleCards = chunk.slice(0, 6);
    const oneHorizontalCard = chunk[6];
    const twoMiniCards = chunk.slice(7, 9);

    // 6 ArticleCards (3 per row)
    if (sixArticleCards.length > 0) {
      rows.push(
        <div key={`articles-${i}`} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sixArticleCards.map((article) => (
            <div key={article.id}>              
              <ArticleCard {...article} />
            </div>
          ))}
        </div>
      );
    }

    // 1 HorizontalArticleCard
    if (oneHorizontalCard) {
      rows.push(
        <div key={`horizontal-${i}`}>
          <HorizontalArticleCard {...oneHorizontalCard} />
        </div>
      );
    }

    // 2 MiniArticleCards (2 per row)
    if (twoMiniCards.length > 0) {
      rows.push(
        <div key={`mini-${i}`} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {twoMiniCards.map((article) => (
            <div key={article.id}>              
              <MiniArticleCard {...article} />
            </div>
          ))}
        </div>
      );
    }
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto flex flex-col gap-y-4"> {/* 👈 Consistent vertical spacing */}
          {rows}
        </div>
      </div>
    </section>
  );
};

export default ArticlesGrid;
