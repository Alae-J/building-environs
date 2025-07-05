// components/ArticlesGrid.tsx
import React from 'react';
import ArticleCard from './ArticleCard';
import { BlogPost } from './FeaturedSlider';

interface ArticlesGridProps {
  articles: BlogPost[];
}

const ArticlesGrid: React.FC<ArticlesGridProps> = ({ articles }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticleCard
                key={article.id}
                {...article}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesGrid;