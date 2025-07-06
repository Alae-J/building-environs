// components/PodcastBannerRight.tsx
import React from 'react'

const PodcastBannerRight: React.FC = () => {
  const src =
    'https://cdn-01.cms-ap-v2i.applyflow.com/building-environs/wp-content/uploads/2022/06/Group-5054.png'

  return (
    <div className="md:col-span-7 relative flex items-center justify-center">
      {/* grey “shadow” behind — pull out 1.5rem (24px) to match FL */}
      <div className="absolute top-6 left-6 right-0 bottom-0 bg-gray-400 rounded-[24px]"></div>

      {/* main image with exactly the same rounding & drop shadow */}
      <img
        src={src}
        alt="Building Talks Podcast Host"
        className="relative rounded-[24px] shadow-2xl"
      />
    </div>
  )
}

export default PodcastBannerRight
