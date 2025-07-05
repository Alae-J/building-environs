// components/ArticleRenderer.tsx
import { Article } from '@/app/types/article';
import Image from 'next/image';

interface ArticleRendererProps {
  article: Article;
}

export default function ArticleRenderer({ article }: ArticleRendererProps) {
  // Universal function to parse bold and italic text
  const parseFormattedText = (text: string) => {
    // First handle bold text (double asterisks)
    let parts = text.split(/(\*\*[^*]+\*\*)/g);
    
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      
      // Then handle italic text (single asterisks) in remaining parts
      const italicParts = part.split(/(\*[^*]+\*)/g);
      return italicParts.map((italicPart, j) => {
        if (italicPart.startsWith('*') && italicPart.endsWith('*') && !italicPart.startsWith('**')) {
          return <em key={`${i}-${j}`}>{italicPart.slice(1, -1)}</em>;
        }
        return italicPart;
      });
    }).flat();
  };

  // Universal function to render text content with bullets and bold
  const renderTextContent = (content: string) => {
    return content.split('\n\n').map((paragraph: string, i: number) => {
      // Check if this paragraph is a bullet point
      if (paragraph.startsWith('• ')) {
        const bulletText = paragraph.substring(2); // Remove the bullet
        return (
          <div key={i} className="flex mb-4 last:mb-0">
            <span className="inline-block w-1.5 h-1.5 bg-gray-600 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
            <div className="text-gray-700 leading-relaxed flex-1">
              {parseFormattedText(bulletText)}
            </div>
          </div>
        );
      }
      
      // Regular paragraph
      return (
        <p key={i} className="mb-4 last:mb-0">
          {parseFormattedText(paragraph)}
        </p>
      );
    });
  };

  const renderSection = (section: any, index: number) => {
    switch (section.type) {
      case 'paragraph':
        return (
          <div key={index} className="mb-6 text-gray-700 leading-relaxed">
            {renderTextContent(section.content)}
          </div>
        );
      
      case 'heading':
        switch (section.level) {
          case 1:
            return (
              <h1 key={index} className="text-3xl font-bold text-gray-900 mb-4">
                {section.content}
              </h1>
            );
          case 2:
            return (
              <h2 key={index} className="text-2xl font-bold text-gray-900 mb-4">
                {section.content}
              </h2>
            );
          case 3:
            return (
              <h3 key={index} className="text-xl font-bold text-gray-900 mb-4">
                {section.content}
              </h3>
            );
          default:
            return (
              <h2 key={index} className="text-2xl font-bold text-gray-900 mb-4">
                {section.content}
              </h2>
            );
        }
      
      case 'hero_image':
        return (
          <div key={index} className="w-full mb-8">
            <Image
              src={section.src}
              alt={section.alt}
              width={800}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </div>
        );

      case 'image_with_text':
        return (
          <div key={index} className="mb-8">
            {/* Mobile: Stack vertically */}
            <div className="lg:hidden flex flex-col gap-6">
              <Image
                src={section.image.src}
                alt={section.image.alt}
                width={300}
                height={212}
                className="w-full h-auto rounded-lg"
              />
              <div className="text-gray-700 leading-relaxed">
                {renderTextContent(section.text.content)}
              </div>
            </div>

            {/* Desktop: CSS Float for text wrapping */}
            <div className="hidden lg:block">
              <div 
                className="text-gray-700 leading-relaxed"
                style={{
                  overflow: 'hidden' // Creates block formatting context
                }}
              >
                <img
                  src={section.image.src}
                  alt={section.image.alt}
                  className="rounded-lg"
                  style={{
                    float: 'left',
                    width: '300px',
                    height: '212px',
                    objectFit: 'cover',
                    marginRight: '1.5rem',
                    marginBottom: '1rem',
                    shapeOutside: 'margin-box'
                  }}
                />
                <div dangerouslySetInnerHTML={{
                  __html: section.text.content
                    .split('\n')
                    .map(line => {
                      if (line.startsWith('• ')) {
                        const bulletText = line.substring(2);
                        return `<div style="display: flex; margin-bottom: 1rem;">
                          <span style="display: inline-block; width: 8px; height: 8px; background-color: #4b5563; border-radius: 50%; margin-top: 8px; margin-right: 12px; flex-shrink: 0;"></span>
                          <div>${bulletText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*([^*]+)\*/g, '<em>$1</em>')}</div>
                        </div>`;
                      } else if (line.trim() === '') {
                        return '<br>';
                      } else if (line.trim() !== '') {
                        return `<p style="margin-bottom: 1rem;">${line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*([^*]+)\*/g, '<em>$1</em>')}</p>`;
                      }
                      return '';
                    })
                    .join('')
                }} />
              </div>
            </div>
          </div>
        );

      case 'text_with_image':
        return (
          <div key={index} className="mb-8">
            {/* Mobile: Stack vertically */}
            <div className="lg:hidden flex flex-col gap-6">
              <div className="text-gray-700 leading-relaxed">
                {renderTextContent(section.text.content)}
              </div>
              <Image
                src={section.image.src}
                alt={section.image.alt}
                width={300}
                height={212}
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Desktop: CSS Float for text wrapping */}
            <div className="hidden lg:block">
              <div 
                className="text-gray-700 leading-relaxed"
                style={{
                  overflow: 'hidden' // Creates block formatting context
                }}
              >
                <img
                  src={section.image.src}
                  alt={section.image.alt}
                  className="rounded-lg"
                  style={{
                    float: 'right',
                    width: '300px',
                    height: '212px',
                    objectFit: 'cover',
                    marginLeft: '1.5rem',
                    marginBottom: '1rem',
                    shapeOutside: 'margin-box'
                  }}
                />
                <div dangerouslySetInnerHTML={{
                  __html: section.text.content
                    .split('\n')
                    .map(line => {
                      if (line.startsWith('• ')) {
                        const bulletText = line.substring(2);
                        return `<div style="display: flex; margin-bottom: 1rem;">
                          <span style="display: inline-block; width: 8px; height: 8px; background-color: #4b5563; border-radius: 50%; margin-top: 8px; margin-right: 12px; flex-shrink: 0;"></span>
                          <div>${bulletText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*([^*]+)\*/g, '<em>$1</em>')}</div>
                        </div>`;
                      } else if (line.trim() === '') {
                        return '<br>';
                      } else if (line.trim() !== '') {
                        return `<p style="margin-bottom: 1rem;">${line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*([^*]+)\*/g, '<em>$1</em>')}</p>`;
                      }
                      return '';
                    })
                    .join('')
                }} />
              </div>
            </div>
          </div>
        );

      case 'statistics_block':
        return (
          <div key={index} className="mb-6 text-gray-700 leading-relaxed">
            {renderTextContent(section.content)}
          </div>
        );

      case 'bullet_list':
        return (
          <ul key={index} className="mb-6 space-y-3">
            {section.items.map((item: string, i: number) => (
              <li key={i} className="flex">
                <span className="inline-block w-1.5 h-1.5 bg-gray-600 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                <div className="text-gray-700 leading-relaxed flex-1">{parseFormattedText(item)}</div>
              </li>
            ))}
          </ul>
        );

      case 'call_to_action':
        // Function to parse markdown-style links
        const parseLink = (content: string) => {
          const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
          const parts = content.split(linkRegex);
          
          const result = [];
          for (let i = 0; i < parts.length; i += 3) {
            if (parts[i]) result.push(parts[i]); // Text before link
            if (parts[i + 1] && parts[i + 2]) { // Link text and URL
              result.push(
                <a 
                  key={i} 
                  href={parts[i + 2]} 
                  className="text-red-600 underline hover:text-red-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {parts[i + 1]}
                </a>
              );
            }
          }
          return result;
        };

        return (
          <p key={index} className="mb-6 text-gray-700 leading-relaxed">
            {parseLink(section.content)}
          </p>
        );
      
      default:
        return (
          <div key={index} className="p-4 bg-red-100 border border-red-300 rounded mb-4">
            <p className="text-red-700">Unknown section type: {section.type}</p>
            <pre className="text-xs text-gray-600 mt-2">
              {JSON.stringify(section, null, 2)}
            </pre>
          </div>
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Article Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {article.title}
        </h1>
        <div className="flex items-center text-gray-500 text-sm mb-6">
          <span>{article.publishDate}</span>
          <span className="mx-2">•</span>
          <span>{article.author}</span>
        </div>
      </header>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none">
        {article.content.sections.map(renderSection)}
      </div>
    </div>
  );
}