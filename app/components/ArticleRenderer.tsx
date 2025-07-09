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
import { parseFormattedText } from '@/app/lib/textFormatter';
import { Article, ArticleSection, AudioSection, HeroBannerSection } from '@/app/types/article';
import { Podcast, PodcastSection } from '@/app/types/podcast';
import React from 'react';

interface ArticleRendererProps {
  content: Article | Podcast;
}

function isArticle(content: Article | Podcast): content is Article {
  return 'content' in content; // Article has a `content` field with sections
}

type RendererProps = ArticleRendererProps;

export default function ArticleRenderer({ content }: ArticleRendererProps) {
  if (!content) return null; // Prevents crashing if content is undefined

  if (!isArticle(content)) {
    return null; // or handle Podcast rendering here
  }

  const sections = content.content.sections;
  const isHeroFirst =
    sections.length > 0 && sections[0].type === 'hero_banner';

  // Render paragraphs and manual bullets (•)
  const renderTextContent = (
    content: string,
    linkClass?: string
  ): React.ReactNode =>
    content.split('\n\n').map((block, i) => {
      if (/^•\s+/.test(block)) {
        const txt = block.replace(/^•\s+/, '');
        return (
          <div key={i} className="flex mb-4 last:mb-0">
            <span className="inline-block w-1.5 h-1.5 bg-gray-600 rounded-full mt-2.5 mr-3 flex-shrink-0" />
            <div className="leading-relaxed">
              {parseFormattedText(txt, linkClass)}
            </div>
          </div>
        );
      }
      return (
        <p key={i} className="mb-4 last:mb-0">
          {parseFormattedText(block, linkClass)}
        </p>
      );
    });

    const renderSection = (section: ArticleSection | PodcastSection, idx: number): React.ReactNode => {
      // Handle type casting for specific sections that need it
      const sectionWithEmoji = section as ArticleSection | PodcastSection;
      
      switch (section.type) {
        
        case 'hero_image': 
          return <HeroImage key={idx} section={section as ArticleSection} />

        case 'hero_banner': 
          return <HeroBanner key={idx} section={section as HeroBannerSection} />

        case 'standalone_image': 
          return <StandaloneImage key={idx} section={section as ArticleSection} />
      
        case 'heading': 
          return <Heading key={idx} section={section as ArticleSection} />

        case 'paragraph':
          return <Paragraph key={idx} section={section as ArticleSection} />;

        case 'italic_text':
          return <ItalicText key={idx} section={section as ArticleSection} />

        case 'bullet_list':
          return <BulletList key={idx} section={section as ArticleSection} />

        case 'emoji_bullet_list':
          return <EmojiBulletList key={idx} section={section as ArticleSection} />

        case 'ordered_list':
          return <OrderedList key={idx} section={section as ArticleSection} />

        case 'bold_text':
        return <BoldText key={idx} section={section as ArticleSection} />
    
        case 'centered_italic':
          return <CenteredItalic key={idx} section={section as ArticleSection} />
    
        case 'bold_paragraph':
          return <BoldParagraph  key={idx} section={section as ArticleSection} />
      
        case 'image_with_text':
          return <ImageWithText key={idx} section={section as ArticleSection} />
    
        case 'text_with_image':
          return <TextWithImage key={idx} section={section as ArticleSection} />
    
        case 'call_to_action':
          return <CallToAction key={idx} section={section as ArticleSection} />
    
        case 'centered_content':
          return <CenteredContent key={idx} section={section as ArticleSection} />
      
          case 'audio':
            return (
              <AudioSectionClient
                key={idx}
                section={section as AudioSection}
              />
            )          
        
         case 'contact_info':
           return <ContactInfo     key={idx} section={section as ArticleSection} />
        
         default:
           return <UnknownSection  key={idx} section={section as ArticleSection} />
       }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {!isHeroFirst && (
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {content.title}
          </h1>
          <div className="flex items-center text-gray-500 text-sm mb-6">
            <span>{content.publishDate}</span>
            <span className="mx-2">•</span>
            <span>{content.author}</span>
            {content.category && (
              <>
                <span className="mx-2">•</span>
                <span className="capitalize">{content.category}</span>
              </>
            )}
            {content.readTime && (
              <>
                <span className="mx-2">•</span>
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