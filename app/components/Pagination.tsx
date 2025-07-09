'use client'

import Link from 'next/link'

interface PaginationProps {
  currentPage: number
  totalPages: number
  basePath: string   // e.g. '/news' or '/podcasts'
}

export default function Pagination({
  currentPage,
  totalPages,
  basePath,
}: PaginationProps) {
  // clamp
  const pg = Math.min(Math.max(1, currentPage), totalPages)

  // build a window around currentPage (±2 pages)
  const start = Math.max(1, pg - 2)
  const end = Math.min(totalPages, pg + 2)
  const pages = []
  for (let i = start; i <= end; i++) pages.push(i)

  return (
    <nav className="flex items-center justify-center space-x-2 my-8">
      {pg > 1 && (
        <Link
          href={`${basePath}?page=${pg - 1}`}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          Prev
        </Link>
      )}

      {start > 1 && (
        <>
          <Link href={`${basePath}?page=1`} className="px-3 py-1">
            1
          </Link>
          {start > 2 && <span className="px-1">…</span>}
        </>
      )}

      {pages.map((p) => (
        <Link
          key={p}
          href={`${basePath}?page=${p}`}
          className={`px-3 py-1 rounded ${
            p === pg ? 'bg-blue-600 text-white' : 'bg-gray-100'
          }`}
        >
          {p}
        </Link>
      ))}

      {end < totalPages && (
        <>
          {end < totalPages - 1 && <span className="px-1">…</span>}
          <Link href={`${basePath}?page=${totalPages}`} className="px-3 py-1">
            {totalPages}
          </Link>
        </>
      )}

      {pg < totalPages && (
        <Link
          href={`${basePath}?page=${pg + 1}`}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          Next
        </Link>
      )}
    </nav>
  )
}
