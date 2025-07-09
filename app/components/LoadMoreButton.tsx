'use client'

interface LoadMoreButtonProps {
  onClick: () => void
  label?: string
}

export default function LoadMoreButton({
  onClick,
  label = 'Load more articles',
}: LoadMoreButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        block           /* ensures mx-auto takes effect */
        w-full
        max-w-4xl
        mx-auto         /* center horizontally */
        border-2 border-black
        text-black
        bg-transparent
        py-4            /* vertical padding inside button */    
        mb-8            /* keep some bottom space */
        rounded-lg
        transition-colors
        duration-100
        hover:bg-gray-900
        hover:text-white
        cursor-pointer
      "
    >
      {label}
    </button>
  )
}
