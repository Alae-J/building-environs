"use client";

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
      .filter((word) => word.trim() !== '');
  
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
  

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

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
      <ArticlesGrid articles={filteredArticles} />
    </PageLayout>
  );
}
