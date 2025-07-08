// components/ArticleRenderer.tsx
import AudioPlayer from '@/app/components/AudioPlayer';
import { Article, ArticleSection, AudioSection, HeroBannerSection } from '@/app/types/article';
import { Podcast, PodcastSection } from '@/app/types/podcast';
import Image from 'next/image';
import React, { Fragment } from 'react';

interface ArticleRendererProps {
  article: Article;
}

interface PodcastRendererProps {
  podcast: Podcast;
}

type RendererProps = ArticleRendererProps | PodcastRendererProps;

export default function ArticleRenderer(props: RendererProps) {
  const isArticle = 'article' in props;
  const content = isArticle ? props.article : props.podcast;
  
  const sections = content.content.sections;
  const isHeroFirst =
    sections.length > 0 && sections[0].type === 'hero_banner';
  // Parse Markdown links, bold (**text**) and italics (*text*) with configurable link style
  const parseFormattedText = (
    text: string,
    linkClass = 'text-red-600 underline hover:text-red-700'
  ): React.ReactNode => {
    // First, handle custom link formats
    const customLinkRegex = /(\*\*\*\[[^\]]+\]\([^)]+\)\*\*\*|~\[[^\]]+\]\([^)]+\)~|\*\[[^\]]+\]\([^)]+\)\*|\^\[[^\]]+\]\([^)]+\)\^|\*\*\[[^\]]+\]\([^)]+\)\*\*|\+\[[^\]]+\]\([^)]+\)\+)/g;
    const segments = text.split(customLinkRegex).filter(Boolean);
  
    return segments.map((seg, i) => {
      // Handle ***[text](url)*** = italic + bold + red link
      const boldItalicLinkMatch = seg.match(/^\*\*\*\[([^\]]+)\]\(([^)]+)\)\*\*\*$/);
      if (boldItalicLinkMatch) {
        const [, label, url] = boldItalicLinkMatch;
        return (
          <a
            key={`bolditalic-link-${i}`}
            href={url}
            className="text-red-600 hover:text-red-700 italic font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            {label}
          </a>
        );
      }
  
      // Handle **[text](url)** = bold + red link
      const boldLinkMatch = seg.match(/^\*\*\[([^\]]+)\]\(([^)]+)\)\*\*$/);
      if (boldLinkMatch) {
        const [, label, url] = boldLinkMatch;
        return (
          <a
            key={`bold-link-${i}`}
            href={url}
            className="text-red-600 underline hover:text-red-700 font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            {label}
          </a>
        );
      }
  
      // Handle *[text](url)* = italic link
      const italicLinkMatch = seg.match(/^\*\[([^\]]+)\]\(([^)]+)\)\*$/);
      if (italicLinkMatch) {
        const [, label, url] = italicLinkMatch;
        return (
          <a
            key={`italic-link-${i}`}
            href={url}
            className={`${linkClass} italic`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {label}
          </a>
        );
      }
  
      // Handle ^[text](url)^ = plain red link (no underline)
      const plainRedMatch = seg.match(/^\^\[([^\]]+)\]\(([^)]+)\)\^$/);
      if (plainRedMatch) {
        const [, label, url] = plainRedMatch;
        return (
          <a
            key={`plain-red-${i}`}
            href={url}
            className="text-red-600 hover:text-red-700 no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {label}
          </a>
        );
      }
  
      // Handle +[text](url)+ = bold red link (no underline)
      const boldRedNoUnderlineMatch = seg.match(/^\+\[([^\]]+)\]\(([^)]+)\)\+$/);
      if (boldRedNoUnderlineMatch) {
        const [, label, url] = boldRedNoUnderlineMatch;
        return (
          <a
            key={`bold-red-nounderline-${i}`}
            href={url}
            className="text-red-600 hover:text-red-700 font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            {label}
          </a>
        );
      }
  
      // Handle ~[text](url)~ = italic + red (no underline)
      const italicNoUnderlineMatch = seg.match(/^~\[([^\]]+)\]\(([^)]+)\)~$/);
      if (italicNoUnderlineMatch) {
        const [, label, url] = italicNoUnderlineMatch;
        return (
          <a
            key={`italic-red-${i}`}
            href={url}
            className="text-red-600 hover:text-red-700 italic"
            target="_blank"
            rel="noopener noreferrer"
          >
            {label}
          </a>
        );
      }
  
      // Now handle the remaining text with formatting (bold, italic, links)
      return processTextFormatting(seg, i, linkClass);
    });
  };
  
  const processTextFormatting = (text: string, segmentIndex: number, linkClass: string): React.ReactNode => {
    // Handle bold italic text: ***text***
    const boldItalicRegex = /(\*\*\*[^*]+\*\*\*)/g;
    const boldItalicSegments = text.split(boldItalicRegex).filter(Boolean);
  
    return boldItalicSegments.map((boldItalicSeg, i) => {
      const boldItalicMatch = boldItalicSeg.match(/^\*\*\*([^*]+)\*\*\*$/);
      if (boldItalicMatch) {
        return (
          <strong key={`${segmentIndex}-bolditalic-${i}`} className="italic">
            {boldItalicMatch[1]}
          </strong>
        );
      }
  
      // Handle bold text: **text**
      const boldRegex = /(\*\*[^*]+\*\*)/g;
      const boldSegments = boldItalicSeg.split(boldRegex).filter(Boolean);
  
      return boldSegments.map((boldSeg, j) => {
        const boldMatch = boldSeg.match(/^\*\*([^*]+)\*\*$/);
        if (boldMatch) {
          const boldContent = boldMatch[1];
          
          // Check if bold content contains links
          const linkRegex = /(\[[^\]]+\]\([^)]*\))/g;
          const linkSegments = boldContent.split(linkRegex).filter(Boolean);
          
          return (
            <strong key={`${segmentIndex}-${i}-bold-${j}`}>
              {linkSegments.map((linkSeg, k) => {
                const linkMatch = linkSeg.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
                if (linkMatch) {
                  const [, label, url] = linkMatch;
                  return (
                    <a
                      key={k}
                      href={url}
                      className={linkClass}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {label}
                    </a>
                  );
                }
                return <Fragment key={k}>{processItalicAndLinks(linkSeg, linkClass)}</Fragment>;
              })}
            </strong>
          );
        }
  
        // Handle remaining text (italic, links, plain text)
        return (
          <Fragment key={`${segmentIndex}-${i}-${j}`}>
            {processItalicAndLinks(boldSeg, linkClass)}
          </Fragment>
        );
      });
    });
  };
  
  const processItalicAndLinks = (text: string, linkClass: string): React.ReactNode => {
    // Handle italic text: *text*
    const italicRegex = /(\*[^*]+\*)/g;
    const italicSegments = text.split(italicRegex).filter(Boolean);
  
    return italicSegments.map((italicSeg, i) => {
      const italicMatch = italicSeg.match(/^\*([^*]+)\*$/);
      if (italicMatch) {
        return <em key={`italic-${i}`}>{italicMatch[1]}</em>;
      }
  
      // Handle regular links: [text](url)
      const linkRegex = /(\[[^\]]+\]\([^)]*\))/g;
      const linkSegments = italicSeg.split(linkRegex).filter(Boolean);
  
      return linkSegments.map((linkSeg, j) => {
        const linkMatch = linkSeg.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (linkMatch) {
          const [, label, url] = linkMatch;
          return (
            <a
              key={`${i}-link-${j}`}
              href={url}
              className={linkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </a>
          );
        }
  
        // Handle superscript: ^text^
        const supRegex = /(\^[^^]+\^)/g;
        const supSegments = linkSeg.split(supRegex).filter(Boolean);
        
        return supSegments.map((supSeg, k) => {
          const supMatch = supSeg.match(/^\^([^^]+)\^$/);
          if (supMatch) {
            return <sup key={`${i}-${j}-sup-${k}`}>{supMatch[1]}</sup>;
          }
          return <Fragment key={`${i}-${j}-${k}`}>{supSeg}</Fragment>;
        });
      });
    });
  };

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
        case 'hero_image': {
          const figWidth = section.width || '800px'
          const figHeight = section.height || '400px'
          
          let imgWidth = parseInt(figWidth, 10)
          let imgHeight = parseInt(figHeight, 10)
          
          // Apply max width and height constraints
          const maxWidth = 1020
          const maxHeight = 720
          
          if (imgWidth > maxWidth || imgHeight > maxHeight) {
            const widthRatio = maxWidth / imgWidth
            const heightRatio = maxHeight / imgHeight
            const ratio = Math.min(widthRatio, heightRatio)
            
            imgWidth = Math.round(imgWidth * ratio)
            imgHeight = Math.round(imgHeight * ratio)
          }
        
          // Build a class string that only includes the
          // border + background + padding if caption exists.
          const baseClasses = 'mx-auto mb-8'
          const captionBoxClasses = section.caption
            ? 'bg-gray-100 border border-gray-300 px-2 py-2'
            : ''
        
          return (
            <figure
              key={idx}
              style={{ width: `${imgWidth}px` }}
              className={`${baseClasses} ${captionBoxClasses}`}
            >
              <Image
                src={section.src!}
                alt={section.alt || ''}
                width={imgWidth}
                height={imgHeight}
                className="w-full h-auto rounded-lg"
              />
        
              {section.caption && (
                <figcaption className="mt-1 text-xs text-gray-400 text-center">
                  {section.caption}
                </figcaption>
              )}
            </figure>
          )
        }

      case 'hero_banner': {
        // cast to our HeroBannerSection for TS
        const s = section as HeroBannerSection;
        
        return (
          <div key={idx} className="relative w-screen left-1/2 right-1/2 -translate-x-1/2 bg-gray-100 py-8 mb-12">
            <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
              {/* Back button row */}
              <div className="mb-8">
              <a
                href={s.button.url}
                className="inline-block bg-white text-gray-700 px-6 py-3 rounded-lg hover:bg-black hover:text-white transition-colors duration-200"
              >
                {s.button.text}
              </a>
              </div>
      
              {/* Two-column layout: text left, image right */}
              <div className="flex flex-col lg:flex-row lg:items-start gap-12">
                {/* Text column */}
                <div className="flex-1">
                  <p className="text-sm uppercase text-gray-500 mb-4">
                    Published {s.publishDate}
                  </p>
                  <h1 className="text-2xl lg:text-3xl font-bold leading-tight" style={{ color: 'var(--af-primary--dark, #030303)' }}>
                    {s.heading}
                  </h1>
                </div>
      
                {/* Image column */}
                <div className="flex-shrink-0">
                  <div className="relative inline-block max-w-full">
                    {/* Gray background layer - positioned to top right */}
                    <div 
                      className="absolute -top-8 -right-8 w-full max-w-[600px] h-80 rounded-lg -z-10"
                      style={{ backgroundColor: 'rgb(170, 170, 170)' }}
                    ></div>
                    
                    {/* Main image */}
                    <div className="w-full max-w-[600px] h-80">
                      <img
                        src={s.image.src}
                        alt={s.image.alt}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }

      case 'standalone_image': {
        const figWidth = section.width || '800px'
        const figHeight = section.height || '400px'
      
        let imgWidth = parseInt(figWidth, 10)
        let imgHeight = parseInt(figHeight, 10)
      
        // Apply max width and height constraints
        const maxWidth = 1020
        const maxHeight = 720
      
        if (imgWidth > maxWidth || imgHeight > maxHeight) {
          const widthRatio = maxWidth / imgWidth
          const heightRatio = maxHeight / imgHeight
          const ratio = Math.min(widthRatio, heightRatio)
      
          imgWidth = Math.round(imgWidth * ratio)
          imgHeight = Math.round(imgHeight * ratio)
        }
      
        // no float, full block-level figure, left-aligned by default
        const baseClasses = 'mb-8 w-full'
        const captionBoxClasses = section.caption
          ? 'bg-gray-100 border border-gray-300 px-2 py-2'
          : ''
      
        return (
          <figure
            key={idx}
            style={{ maxWidth: `${imgWidth}px` }}
            className={`${baseClasses} ${captionBoxClasses}`}
          >
            <Image
              src={section.src!}
              alt={section.alt || ''}
              width={imgWidth}
              height={imgHeight}
              className="w-full h-auto rounded-lg"
            />
      
            {section.caption && (
              <figcaption className="mt-1 text-xs text-gray-400 text-center">
                {section.caption}
              </figcaption>
            )}
          </figure>
        )
      }
      

      case 'heading': {
        const tag = section.level === 1 ? 'h1' : section.level === 2 ? 'h2' : 'h3';
        const sizeClass =
          section.level === 1
            ? 'text-3xl'
            : section.level === 2
            ? 'text-2xl'
            : 'text-xl';
        return React.createElement(
          tag,
          { key: idx, className: `${sizeClass} font-bold mb-4` },
          parseFormattedText(
            section.content || '',
            'text-red-600 underline hover:text-red-700'
          )
        );
      }

      case 'paragraph':
        return (
          <div key={idx} className="mb-6 leading-relaxed">
            {renderTextContent(
              section.content || '',
              'text-red-600 underline hover:text-red-700'
            )}
          </div>
        );

      case 'italic_text':
        return (
          <div key={idx} className="mb-6 leading-relaxed italic text-gray-600">
            {renderTextContent(
              section.content || '',
              'text-red-600 underline hover:text-red-700'
            )}
          </div>
        );

      case 'bullet_list':
        return (
          <ul key={idx} className="mb-6 space-y-1 list-none">
            {section.items?.map((item, i) => (
              <li key={i} className="flex">
                <span className="inline-block w-1.5 h-1.5 bg-gray-600 rounded-full mt-2.5 mr-3 flex-shrink-0" />
                <div className="leading-relaxed">
                  {parseFormattedText(
                    item,
                    'text-red-600 underline hover:text-red-700'
                  )}
                </div>
              </li>
            ))}
          </ul>
        );

        case 'emoji_bullet_list':
          return (
            <ul key={idx} className="mb-6 space-y-1 list-none">
              {sectionWithEmoji.items?.map((item, i) => (
                <li key={i} className="flex">
                  <span className="mr-3 flex-shrink-0 text-lg mt-0.5">
                    {sectionWithEmoji.emoji || '•'}
                  </span>
                  <div className="leading-relaxed">
                    {parseFormattedText(
                      item,
                      'text-red-600 underline hover:text-red-700'
                    )}
                  </div>
                </li>
              ))}
            </ul>
          );

      case 'ordered_list':
        return (
          <ol key={idx} className="mb-6 space-y-3 list-decimal list-inside">
            {section.items?.map((item, i) => (
              <li key={i} className="leading-relaxed pl-2">
                {parseFormattedText(
                  item,
                  'text-red-600 underline hover:text-red-700'
                )}
              </li>
            ))}
          </ol>
        );

      case 'bold_text':
        return (
          <p key={idx} className="text-base font-bold mb-4 text-center">
            {parseFormattedText(
              section.content || '',
              'text-red-600 underline hover:text-red-700'
            )}
          </p>
        );

        case 'centered_italic':
          return (
            <div key={idx} className="mb-6 text-center italic text-gray-600">
              {parseFormattedText(
                section.content || '',
                'text-red-600 underline hover:text-red-700'
              )}
            </div>
          );        

      case 'bold_paragraph':
        return (
          <h2 key={idx} className="text-2xl font-bold mb-4 leading-relaxed">
            {parseFormattedText(
              section.content || '',
              'text-red-600 underline hover:text-red-700'
            )}
          </h2>
        );

      case 'image_with_text':
        return (
          <div key={idx} className="mb-8">
            {/* Mobile */}
            <div className="lg:hidden flex flex-col gap-6">
              <Image
                src={section.image!.src}
                alt={section.image!.alt}
                width={300}
                height={212}
                className="w-full h-auto rounded-lg"
              />
              <div className="leading-relaxed">
                {renderTextContent(
                  section.text!.content,
                  'text-red-600 underline hover:text-red-700'
                )}
              </div>
            </div>
            {/* Desktop */}
            <div className="hidden lg:block">
              <div className="leading-relaxed">
                <img
                  src={section.image!.src}
                  alt={section.image!.alt}
                  className="rounded-lg float-left w-[300px] h-[212px] object-cover mr-6 mb-4"
                />
                {renderTextContent(
                  section.text!.content,
                  'text-red-600 underline hover:text-red-700'
                )}
              </div>
            </div>
          </div>
        );

      case 'text_with_image':
        return (
          <div key={idx} className="mb-8">
            <div className="lg:hidden flex flex-col gap-6">
              <div className="leading-relaxed">
                {renderTextContent(
                  section.text!.content,
                  'text-red-600 underline hover:text-red-700'
                )}
              </div>
              <Image
                src={section.image!.src}
                alt={section.image!.alt}
                width={300}
                height={212}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="hidden lg:block">
              <div className="leading-relaxed">
                <img
                  src={section.image!.src}
                  alt={section.image!.alt}
                  className="rounded-lg float-right w-[300px] h-[212px] object-cover ml-6 mb-4"
                />
                {renderTextContent(
                  section.text!.content,
                  'text-red-600 underline hover:text-red-700'
                )}
              </div>
            </div>
          </div>
        );

      case 'call_to_action':
        return (
          <p key={idx} className="mb-6 leading-relaxed">
            {parseFormattedText(
              section.content || '',
              'text-red-600 underline hover:text-red-700'
            )}
          </p>
        );

      case 'centered_content':
        return (
          <div key={idx} className="mb-6 text-center">
            {section.content?.split('\n\n').map((block, i) => {
              // Check if this is a bold heading (standalone **text** that may contain links)
              const trimmedBlock = block.trim();
              if (/^\*\*.*\*\*$/.test(trimmedBlock)) {
                const headingContent = trimmedBlock.slice(2, -2);
                // First bold text is H2, subsequent ones are H3
                const isMainHeading = i === 0;
                const headingClass = isMainHeading 
                  ? "text-2xl font-bold mb-4" 
                  : "text-lg font-semibold mb-3";
                const HeadingTag = isMainHeading ? 'h2' : 'h3';
                
                return React.createElement(
                  HeadingTag,
                  { key: i, className: headingClass },
                  parseFormattedText(headingContent, 'text-red-600 underline hover:text-red-700')
                );
              }
              return (
                <p key={i} className="mb-4 last:mb-0">
                  {parseFormattedText(block, 'text-red-600 underline hover:text-red-700')}
                </p>
              );
            })}
          </div>
        );

        case 'audio': {
          const a = section as AudioSection;
          return (
            <div key={idx} className="mb-8">
              <AudioPlayer
                title={a.title}
                subtitle={a.subtitle}
                thumbnailUrl={a.thumbnailUrl}
                audioUrl={a.audioUrl}
                duration={a.duration}
              />
            </div>
          );
        }
        

      case 'contact_info':
        return (
          <div key={idx} className="mb-6 leading-relaxed text-center bg-gray-50 p-4 rounded-lg">
            {renderTextContent(
              section.content || '',
              'text-red-600 underline hover:text-red-700'
            )}
          </div>
        );

      default:
        return (
          <div key={idx} className="p-4 bg-red-100 border border-red-300 rounded mb-4">
            <p className="text-red-700 mb-2">
              Unknown section type: {section.type}
            </p>
            <pre className="text-xs text-gray-600">
              {JSON.stringify(section, null, 2)}
            </pre>
          </div>
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      { !isHeroFirst && (
        <header className="mb-8">
          {/* … your existing header markup … */}
        </header>
      )}

      <div className="prose prose-lg max-w-none text-gray-700">
        { sections.map(renderSection) }
      </div>
    </div>
  )
}