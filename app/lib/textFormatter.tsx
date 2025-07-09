// app/lib/textFormatter.tsx
import React, { Fragment } from 'react'

/**
 * Splits a text block into React nodes handling:
 *  - custom link syntaxes (***[text](url)***, **[text](url)**, etc.)
 *  - bold, italic, links, superscript
 */
export function parseFormattedText(
  text: string,
  linkClass = 'text-red-600 underline hover:text-red-700'
): React.ReactNode {
  const customLinkRegex = /(\*\*\*\[[^\]]+\]\([^)]+\)\*\*\*|~\[[^\]]+\]\([^)]+\)~|\*\[[^\]]+\]\([^)]+\)\*|\^\[[^\]]+\]\([^)]+\)\^|\*\*\[[^\]]+\]\([^)]+\)\*\*|\+\[[^\]]+\]\([^)]+\)\+)/g
  const segments = text.split(customLinkRegex).filter(Boolean)

  return segments.map((seg, i) => {
    // ***[text](url)*** = italic + bold + red link
    let m = seg.match(/^\*\*\*\[([^\]]+)\]\(([^)]+)\)\*\*\*$/)
    if (m) {
      const [, label, url] = m
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
      )
    }

    // **[text](url)** = bold + red link
    m = seg.match(/^\*\*\[([^\]]+)\]\(([^)]+)\)\*\*$/)
    if (m) {
      const [, label, url] = m
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
      )
    }

    // *[text](url)* = italic link
    m = seg.match(/^\*\[([^\]]+)\]\(([^)]+)\)\*$/)
    if (m) {
      const [, label, url] = m
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
      )
    }

    // ^[text](url)^ = plain red link
    m = seg.match(/^\^\[([^\]]+)\]\(([^)]+)\)\^$/)
    if (m) {
      const [, label, url] = m
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
      )
    }

    // +[text](url)+ = bold red link
    m = seg.match(/^\+\[([^\]]+)\]\(([^)]+)\)\+$/)
    if (m) {
      const [, label, url] = m
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
      )
    }

    // ~[text](url)~ = italic red no-underline
    m = seg.match(/^~\[([^\]]+)\]\(([^)]+)\)~$/)
    if (m) {
      const [, label, url] = m
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
      )
    }

    // fallback to deeper formatting
    return processTextFormatting(seg, i, linkClass)
  })
}

/**
 * Handles ***bold+italic***, **bold**, and inlined [links](url) inside bold.
 */
export function processTextFormatting(
  text: string,
  segmentIndex: number,
  linkClass: string
): React.ReactNode {
  const boldItalicRegex = /(\*\*\*[^*]+\*\*\*)/g
  const parts = text.split(boldItalicRegex).filter(Boolean)

  return parts.map((part, i) => {
    const mBI = part.match(/^\*\*\*([^*]+)\*\*\*$/)
    if (mBI) {
      return (
        <strong key={`${segmentIndex}-bolditalic-${i}`} className="italic">
          {mBI[1]}
        </strong>
      )
    }

    const boldRegex = /(\*\*[^*]+\*\*)/g
    const boldParts = part.split(boldRegex).filter(Boolean)

    return boldParts.map((bp, j) => {
      const mB = bp.match(/^\*\*([^*]+)\*\*$/)
      if (mB) {
        const content = mB[1]
        const linkRegex = /(\[[^\]]+\]\([^)]*\))/g
        const linkParts = content.split(linkRegex).filter(Boolean)

        return (
          <strong key={`${segmentIndex}-${i}-bold-${j}`}>
            {linkParts.map((lp, k) => {
              const mL = lp.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
              if (mL) {
                const [, label, url] = mL
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
                )
              }
              return <Fragment key={k}>{processItalicAndLinks(lp, linkClass)}</Fragment>
            })}
          </strong>
        )
      }
      return <Fragment key={`${segmentIndex}-${i}-${j}`}>{processItalicAndLinks(bp, linkClass)}</Fragment>
    })
  })
}

/**
 * Handles *italic*, [links](url), and ^superscript^ inside a text chunk.
 */
export function processItalicAndLinks(
  text: string,
  linkClass: string
): React.ReactNode {
  const italicRegex = /(\*[^*]+\*)/g
  const parts = text.split(italicRegex).filter(Boolean)

  return parts.map((part, i) => {
    const mI = part.match(/^\*([^*]+)\*$/)
    if (mI) {
      return <em key={`italic-${i}`}>{mI[1]}</em>
    }

    const linkRegex = /(\[[^\]]+\]\([^)]*\))/g
    const linkParts = part.split(linkRegex).filter(Boolean)

    return linkParts.map((lp, j) => {
      const mL = lp.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
      if (mL) {
        const [, label, url] = mL
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
        )
      }

      const supRegex = /(\^[^^]+\^)/g
      const supParts = lp.split(supRegex).filter(Boolean)
      return supParts.map((sp, k) => {
        const mS = sp.match(/^\^([^^]+)\^$/)
        if (mS) {
          return <sup key={`${i}-${j}-sup-${k}`}>{mS[1]}</sup>
        }
        return <Fragment key={`${i}-${j}-${k}`}>{sp}</Fragment>
      })
    })
  })
}

/**
 * Splits on double-newlines and renders paragraphs or manual bullets (•).
 */
export function renderTextContent(
  content: string,
  linkClass?: string
): React.ReactNode {
  return content.split('\n\n').map((block, i) => {
    if (/^•\s+/.test(block)) {
      const txt = block.replace(/^•\s+/, '')
      return (
        <div key={i} className="flex mb-4 last:mb-0">
          <span className="inline-block w-1.5 h-1.5 bg-gray-600 rounded-full mt-2.5 mr-3 flex-shrink-0" />
          <div className="leading-relaxed">{parseFormattedText(txt, linkClass)}</div>
        </div>
      )
    }

    return (
      <p key={i} className="mb-4 last:mb-0">
        {parseFormattedText(block, linkClass)}
      </p>
    )
  })
}
