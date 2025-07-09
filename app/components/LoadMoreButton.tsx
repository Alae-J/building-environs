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
        w-full
        max-w-4xl
        border-2 border-black
        text-black
        bg-transparent
        py-4
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
