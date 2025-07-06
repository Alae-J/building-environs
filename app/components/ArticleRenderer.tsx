// components/ArticleRenderer.tsx
import { Article, ArticleSection } from '@/app/types/article';
import Image from 'next/image';
import React, { Fragment } from 'react';

interface ArticleRendererProps {
  article: Article;
}

export default function ArticleRenderer({ article }: ArticleRendererProps) {
  // Parse Markdown links, bold (**text**) and italics (*text*) with configurable link style
  const parseFormattedText = (
    text: string,
    linkClass = 'text-blue-600 underline hover:text-blue-800'
  ): React.ReactNode => {
    // First, handle italic links specifically: *[text](url)*
    const italicLinkRegex = /(\*\[[^\]]+\]\([^)]*\)\*)/g;
    const italicLinkSegments = text.split(italicLinkRegex).filter(Boolean);
    
    return italicLinkSegments.map((seg, i) => {
      // Check for italic link pattern: *[text](url)*
      const italicLinkMatch = seg.match(/^\*(\[[^\]]+\]\([^)]*\))\*$/);
      if (italicLinkMatch) {
        const linkPart = italicLinkMatch[1];
        const linkMatch = linkPart.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (linkMatch) {
          const [, label, url] = linkMatch;
          return (
            <a
              key={i}
              href={url}
              className={`${linkClass} italic`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </a>
          );
        }
      }
      
      // Handle bold FIRST, before processing links
      const boldParts = seg.split(/(\*\*[^*]+(?:\*[^*]*\*[^*]*)*[^*]*\*\*)/g).filter(Boolean);
      
      return boldParts.map((boldPart, j) => {
        if (/^\*\*.*\*\*$/.test(boldPart)) {
          // This is bold text - extract content and handle links within it
          const boldContent = boldPart.slice(2, -2);
          
          // Process links within bold content
          const linkRegex = /(\[[^\]]+\]\([^)]*\))/g;
          const linkSegments = boldContent.split(linkRegex).filter(Boolean);
          
          return (
            <strong key={`${i}-${j}`}>
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
                // Handle italic within bold
                const parts = linkSeg.split(/(\*[^*]+\*|\^[^^]+\^)/g).filter(Boolean);
                return (
                  <Fragment key={k}>
                    {parts.map((part, l) => {
                      if (/^\*[^*]+\*$/.test(part)) {
                        return <em key={l}>{part.slice(1, -1)}</em>;
                      }
                      if (/^\^[^^]+\^$/.test(part)) {
                        return <sup key={l}>{part.slice(1, -1)}</sup>;
                      }
                      return <Fragment key={l}>{part}</Fragment>;
                    })}
                  </Fragment>
                );
              })}
            </strong>
          );
        }
        
        // Handle non-bold content - process links and other formatting
        const linkRegex = /(\[[^\]]+\]\([^)]*\))/g;
        const segments = boldPart.split(linkRegex).filter(Boolean);
        
        return segments.map((subSeg, k) => {
          const linkMatch = subSeg.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
          if (linkMatch) {
            const [, label, url] = linkMatch;
            return (
              <a
                key={`${i}-${j}-${k}`}
                href={url}
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                {label}
              </a>
            );
          }
  
          const parts = subSeg.split(/(\*[^*]+\*|\^[^^]+\^)/g).filter(Boolean);
          return (
            <Fragment key={`${i}-${j}-${k}`}>
              {parts.map((part, l) => {
                if (/^\*[^*]+\*$/.test(part)) {
                  return <em key={l}>{part.slice(1, -1)}</em>;
                }
                if (/^\^[^^]+\^$/.test(part)) {
                  return <sup key={l}>{part.slice(1, -1)}</sup>;
                }
                return <Fragment key={l}>{part}</Fragment>;
              })}
            </Fragment>
          );
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

  const renderSection = (section: ArticleSection, idx: number): React.ReactNode => {
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
          <ul key={idx} className="mb-6 space-y-3 list-none">
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
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {article.title}
        </h1>
        <div className="flex items-center text-gray-500 text-sm mb-6">
          <span>{article.publishDate}</span>
          <span className="mx-2">•</span>
          <span>{article.author}</span>
          {article.category && (
            <>
              <span className="mx-2">•</span>
              <span className="capitalize">{article.category}</span>
            </>
          )}
          {article.readTime && (
            <>
              <span className="mx-2">•</span>
              <span>{article.readTime}</span>
            </>
          )}
        </div>
      </header>

      <div className="prose prose-lg max-w-none text-gray-700">
        {article.content.sections.map(renderSection)}
      </div>
    </div>
  );
}