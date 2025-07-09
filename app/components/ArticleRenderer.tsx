import AudioSectionClient from '@/app/components/ArticleRenderer/sections/AudioSection.client';
import BoldParagraph from '@/app/components/ArticleRenderer/sections/BoldParagraph';
import BoldText from '@/app/components/ArticleRenderer/sections/BoldText';
import { BulletList } from '@/app/components/ArticleRenderer/sections/BulletList';
import { CallToAction } from '@/app/components/ArticleRenderer/sections/CallToAction';
import { CenteredContent } from '@/app/components/ArticleRenderer/sections/CenteredContent';
import CenteredItalic from '@/app/components/ArticleRenderer/sections/CenteredItalic';
import { ContactInfo } from '@/app/components/ArticleRenderer/sections/ContactInfo';
import { EmojiBulletList } from '@/app/components/ArticleRenderer/sections/EmojiBulletList';
import Heading from '@/app/components/ArticleRenderer/sections/Heading';
import HeroBanner from '@/app/components/ArticleRenderer/sections/HeroBanner';
import HeroImage from '@/app/components/ArticleRenderer/sections/HeroImage';
import { ImageWithText } from '@/app/components/ArticleRenderer/sections/ImageWithText';
import { ItalicText } from '@/app/components/ArticleRenderer/sections/ItalicText';
import OrderedList from '@/app/components/ArticleRenderer/sections/OrderedList';
import Paragraph from '@/app/components/ArticleRenderer/sections/Paragraph';
import StandaloneImage from '@/app/components/ArticleRenderer/sections/StandaloneImage';
import { TextWithImage } from '@/app/components/ArticleRenderer/sections/TextWithImage';
import { UnknownSection } from '@/app/components/ArticleRenderer/sections/UnknownSection';
import { Article, ArticleSection, AudioSection, HeroBannerSection } from '@/app/types/article';
import { Podcast, PodcastSection } from '@/app/types/podcast';
import React from 'react';

interface ArticleRendererProps {
  content: Article | Podcast;
}

function isArticle(content: Article | Podcast): content is Article {
  return 'content' in content;
}

export default function ArticleRenderer({ content }: ArticleRendererProps) {
  if (!content) return null;
  if (!isArticle(content)) return null;

  const defaultFont = { fontFamily: 'var(--af-fontFamily--primary, "Manrope")' };
  const bulletFont  = { fontFamily: 'var(--af-fontFamily--primary, "Avenir")' };

  const sections = content.content.sections;
  const isHeroFirst = sections[0]?.type === 'hero_banner';

  const renderSection = (
    section: ArticleSection | PodcastSection,
    idx: number
  ): React.ReactNode => {
    // Choose Avenir for list types, Manrope otherwise
    const style = ['bullet_list', 'emoji_bullet_list', 'ordered_list'].includes(section.type)
      ? bulletFont
      : defaultFont;

    // Pick the right renderer
    let SectionComponent: React.ReactNode;
    switch (section.type) {
      case 'hero_image':
        SectionComponent = <HeroImage section={section as ArticleSection} />;
        break;
      case 'hero_banner':
        SectionComponent = <HeroBanner section={section as HeroBannerSection} />;
        break;
      case 'standalone_image':
        SectionComponent = <StandaloneImage section={section as ArticleSection} />;
        break;
      case 'heading':
        SectionComponent = <Heading section={section as ArticleSection} />;
        break;
      case 'paragraph':
        SectionComponent = <Paragraph section={section as ArticleSection} />;
        break;
      case 'italic_text':
        SectionComponent = <ItalicText section={section as ArticleSection} />;
        break;
      case 'bullet_list':
        SectionComponent = <BulletList section={section as ArticleSection} />;
        break;
      case 'emoji_bullet_list':
        SectionComponent = <EmojiBulletList section={section as ArticleSection} />;
        break;
      case 'ordered_list':
        SectionComponent = <OrderedList section={section as ArticleSection} />;
        break;
      case 'bold_text':
        SectionComponent = <BoldText section={section as ArticleSection} />;
        break;
      case 'centered_italic':
        SectionComponent = <CenteredItalic section={section as ArticleSection} />;
        break;
      case 'bold_paragraph':
        SectionComponent = <BoldParagraph section={section as ArticleSection} />;
        break;
      case 'image_with_text':
        SectionComponent = <ImageWithText section={section as ArticleSection} />;
        break;
      case 'text_with_image':
        SectionComponent = <TextWithImage section={section as ArticleSection} />;
        break;
      case 'call_to_action':
        SectionComponent = <CallToAction section={section as ArticleSection} />;
        break;
      case 'centered_content':
        SectionComponent = <CenteredContent section={section as ArticleSection} />;
        break;
      case 'audio':
        SectionComponent = <AudioSectionClient section={section as AudioSection} />;
        break;
      case 'contact_info':
        SectionComponent = <ContactInfo section={section as ArticleSection} />;
        break;
      default:
        SectionComponent = <UnknownSection section={section as ArticleSection} />;
    }

    // Wrap with the chosen font style
    return (
      <div key={idx} style={style}>
        {SectionComponent}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {!isHeroFirst && (
        <header className="mb-8 px-4 sm:px-0">
          {/* Title */}
          <h1
            className="
              text-3xl sm:text-4xl md:text-5xl 
              font-bold text-gray-900 
              leading-tight
              mb-4
            "
          >
            {content.title}
          </h1>

          {/* Meta info */}
          <div
            className="
              flex flex-wrap items-center 
              text-gray-500 
              text-xs sm:text-sm 
              gap-x-2 gap-y-1
              mb-6
            "
          >
            <span>{content.publishDate}</span>
            <span aria-hidden="true">•</span>
            <span>{content.author}</span>

            {content.category && (
              <>
                <span aria-hidden="true">•</span>
                <span className="capitalize">{content.category}</span>
              </>
            )}

            {content.readTime && (
              <>
                <span aria-hidden="true">•</span>
                <span>{content.readTime}</span>
              </>
            )}
          </div>
        </header>
      )}


      <div className="prose prose-lg max-w-none text-gray-700">
        {sections.map(renderSection)}
      </div>
    </div>
  );
}
