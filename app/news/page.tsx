// app/news/page.tsx
"use client";

import ArticlesGrid from '../components/ArticlesGrid';
import FeaturedSlider, { BlogPost } from '../components/FeaturedSlider';
import PageLayout from '../components/Layout/PageLayout';
import Banner from '../components/NewsBanner';
import SearchFilter from '../components/SearchFilter';
import indexData from '../data/news/index.json';

export default function NewsPage() {
  const featured = (indexData.featured as (BlogPost & { order: number })[])
    .slice()
    .sort((a, b) => a.order - b.order)

  const articles = (indexData.articles as (BlogPost & { order: number })[])
    .slice()
    .sort((a, b) => a.order - b.order)
  return (
    <PageLayout>
      <Banner />
      <SearchFilter />
      <FeaturedSlider posts={featured} />
      <ArticlesGrid articles={articles} />
    </PageLayout>
  )
}