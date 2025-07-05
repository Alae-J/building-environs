import ArticleRenderer from '@/app/components/ArticleRenderer';
import whatMelbournesBestInConstructionProperty from '@/app/data/news/articles/2025-05-01--what-melbournes-best-in-construction-property-do-to-get-the-guernsey.json';
import salaryReviewArticle from '@/app/data/news/articles/2025-06-26--salary-review-season-where-everyones-underpaid-just-ask-them.json';
import hiddenCostsChasing from '@/app/data/news/articles/2025-07-04--the-hidden-costs-of-chasing-the-money.json';
import testArticle from '@/app/data/test-article.json';
import { notFound } from 'next/navigation';

interface PageProps {
  params: { slug: string }
}

export default function ArticlePage({ params }: PageProps) {
  // Check for both articles
  if (params.slug === 'test-article-dynamic-layout') {
    return <ArticleRenderer article={testArticle} />;
  }
  
  if (params.slug === 'salary-review-season-where-everyones-underpaid-just-ask-them') {
    return <ArticleRenderer article={salaryReviewArticle} />;
  }

  if (params.slug === 'the-hidden-costs-of-chasing-the-money') {
    return <ArticleRenderer article={hiddenCostsChasing} />;
  }
  
  if (params.slug === 'what-melbournes-best-in-construction-property') {
    return <ArticleRenderer article={whatMelbournesBestInConstructionProperty} />;
  }
  
  // Return 404 for other slugs
  notFound();
}