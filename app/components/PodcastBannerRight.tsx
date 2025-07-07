// components/PodcastBannerRight.tsx

const PodcastBannerRight = () => {
  const src = 'https://cdn-01.cms-ap-v2i.applyflow.com/building-environs/wp-content/uploads/2022/06/Group-5054.png'

  return (
    <div className="md:col-span-7 relative flex items-center justify-center">
      {/* Purple/blue gradient background layer - positioned behind and offset */}
      <div className="absolute top-6 left-6 right-0 bottom-0 bg-gradient-to-br from-purple-300 via-purple-200 to-blue-200 rounded-[24px] opacity-90"></div>

      {/* Main image - no background, just the image itself with shadow */}
      <img
        src={src}
        alt="Building Talks Podcast Host"
        className="relative rounded-[24px] shadow-2xl w-full h-auto"
      />
    </div>
  )
}

export default PodcastBannerRight