import ArticleRenderer from '@/app/components/ArticleRenderer';
import PageLayout from '@/app/components/Layout/PageLayout';
import { articleMap } from '@/app/data/news'; // ← point at your barrel
import index from '@/app/data/news/index.json';
import { Article } from '@/app/types/article';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// build a flat list of every slug in your index.json:
const allEntries = [
  ...index.featured,
  ...index.articles,
] as Array<{
  slug: string
  title: string
  excerpt: string
  featuredImage: string
  imageAlt: string
  publishDate: string
}>

export function generateStaticParams() {
  return allEntries.map((entry) => ({
    slug: entry.slug,
  }))
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const { slug } = params
  const meta = allEntries.find((e) => e.slug === slug)
  if (!meta) notFound()

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
  const pageUrl = `${baseUrl}/news/${slug}`

  return {
    title:       meta.title,
    description: meta.excerpt,
    metadataBase: new URL(baseUrl),
    alternates: { canonical: pageUrl },
    openGraph: {
      title:         meta.title,
      description:   meta.excerpt,
      url:           pageUrl,
      type:          'article',
      publishedTime: meta.publishDate,
      images: [{
        url: meta.featuredImage,
        alt: meta.imageAlt || meta.title,
      }],
    },
    twitter: {
      card:        'summary_large_image',
      title:       meta.title,
      description: meta.excerpt,
      images:      [meta.featuredImage],
    },
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  // ← use articleMap here
  const article = articleMap[params.slug] as Article
  if (!article) notFound()
  return (
    <PageLayout>
      <ArticleRenderer content={article} />
    </PageLayout>
  )
}
