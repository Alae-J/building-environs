// pages/news.tsx
import { GetStaticProps } from 'next';
import React from 'react';
import MainContent from '../components/MainContent';
import PostsSlider, { BlogPost } from '../components/PostsSlider';
import SearchFilter from '../components/SearchFilter';
import Banner from './NewsBanner';

// You would typically have a Navbar component as well
// import Navbar from '../components/Navbar';

interface NewsPageProps {
  posts: BlogPost[];
}

const NewsPage: React.FC<NewsPageProps> = ({ posts }) => {
  const handleSearch = (searchTerm: string, categories: string[]) => {
    console.log('Search:', searchTerm, categories);
    // Implement search functionality here
  };

  return (
    <>
      {/* <Navbar /> */}
      <MainContent>
        <Banner />
        <SearchFilter onSearch={handleSearch} />
        <PostsSlider posts={posts} />
      </MainContent>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // Stub data - replace with your actual data fetching logic
  const posts: BlogPost[] = [
    {
      id: '1',
      title: "Salary Review Season: Where Everyone's Underpaid (Just Ask Them)",
      slug: 'salary-review-season-where-everyones-underpaid-just-ask-them',
      excerpt: "Every year like clockwork, the same thing happens. We hit the end of financial year, and suddenly the air thickens with passive-aggressive calendar invites titled \"Annual Review\". It's Salary Season. And if there's one thing I've learnt over 20 years in recruitment and about 4,000 face-to-face interviews, it's this: Almost no one thinks they're overpaid.…",
      featuredImage: '/images/cover-photo-june-2025-blog-1.png',
      imageAlt: 'Cover photo - June 2025 blog'
    },
    {
      id: '2',
      title: "What Melbourne's Best in Construction & Property Do to Get the Guernsey",
      slug: 'what-melbournes-best-in-construction-property-do-to-get-the-guernsey',
      excerpt: "In footy, it's the guernsey that matters. Not just because it says, \"You're in the side,\" but because it says, \"We back you.\" And in recruitment, especially in Melbourne's construction and property sector, it's not all that different. When hiring managers are shortlisting, when senior leaders are assembling project teams, when developers are building out…",
      featuredImage: '/images/cover-photo-blog-may-2025.png',
      imageAlt: "What Melbourne's Best in Construction & Property Do to Get the Guernsey"
    },
    {
      id: '3',
      title: "20 Years, 5 Lessons, and a Hell of a Lot of Coffee: A Recruiter's Survival Guide for Construction & Property!",
      slug: '20-years-5-lessons-and-a-hell-of-a-lot-of-coffee-a-recruiters-survival-guide-for-construction-property',
      excerpt: "It's April 2025. I've officially been in recruitment for two decades!! That's 20 years of dodgy CVs, nearly 4000 candidate interviews, around 1500 client meetings, panicked Monday morning phone calls, clients asking for \"unicorns but on a budget,\" and candidates ghosting like I'd just asked them to help me move house on a long weekend.…",
      featuredImage: '/images/cover-photo-article-april-2025.png',
      imageAlt: 'Cover photo - Article (April 2025)'
    },
    {
      id: '4',
      title: "The Law of Attraction (in Recruitment): Are You attractive \"Top Talent\"? Is your business attractive to Top Talent?",
      slug: 'the-law-of-attraction-in-recruitment-are-you-attractive-top-talent-is-your-business-attractive-to-top-talent',
      excerpt: "How Attractive Are You? Attractiveness in recruitment is far more than skin deep. When I talk about being attractive in the recruitment process, I'm not referring to physical appearances or superficial traits. Instead, I'm talking about the broader concept of attractiveness in the recruitment world, which involves a three-way street: candidates, employers, and recruitment companies.…",
      featuredImage: '/images/cover-photo-august-2024-blog.png',
      imageAlt: 'Cover photo August 2024 blog'
    }
  ];

  return {
    props: {
      posts,
    },
  };
};

export default NewsPage;