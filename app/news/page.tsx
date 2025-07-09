"use client";

import LoadMoreButton from '@/app/components/LoadMoreButton';
import { useMemo, useState } from 'react';
import ArticlesGrid from '../components/ArticlesGrid';
import FeaturedSlider, { BlogPost } from '../components/FeaturedSlider';
import PageLayout from '../components/Layout/PageLayout';
import Banner from '../components/NewsBanner';
import SearchFilter from '../components/SearchFilter';
import indexData from '../data/news/index.json';

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const pageSize = 9;

  const featured = useMemo(
    () =>
      (indexData.featured as (BlogPost & { order: number })[])
        .slice()
        .sort((a, b) => a.order - b.order),
    []
  );

  const allArticles = useMemo(
    () =>
      (indexData.articles as (BlogPost & { order: number })[])
        .slice()
        .sort((a, b) => a.order - b.order),
    []
  );

  const filteredArticles = useMemo(() => {
    const keywords = searchTerm
      .toLowerCase()
      .split(' ')
      .filter((w) => w.trim() !== '');

    return allArticles.filter((article) => {
      const title = article.title.toLowerCase();
      const excerpt = article.excerpt.toLowerCase();

      const matchesSearch =
        keywords.length === 0 ||
        keywords.every((word) => title.includes(word) || excerpt.includes(word));

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(article.category?.toLowerCase() || 'uncategorized');

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategories, allArticles]);

  // only show up to page * pageSize articles
  const visibleArticles = useMemo(
    () => filteredArticles.slice(0, page * pageSize),
    [filteredArticles, page]
  );

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const loadMore = () => setPage((p) => p + 1);

  return (
    <PageLayout>
      <Banner />
      <SearchFilter
        searchTerm={searchTerm}
        selectedCategories={selectedCategories}
        onSearchTermChange={setSearchTerm}
        onCategoryToggle={toggleCategory}
      />

      <FeaturedSlider posts={featured} />

      <ArticlesGrid articles={visibleArticles} />

      {visibleArticles.length < filteredArticles.length && (
        <div className="flex justify-center m-4">
          <LoadMoreButton onClick={loadMore} />
        </div>
      )}
    </PageLayout>
  );
}
