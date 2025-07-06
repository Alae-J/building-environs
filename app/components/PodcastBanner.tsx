// components/Banner.tsx
import React from 'react'
import PodcastBannerLeft from './PodcastBannerLeft'
import PodcastBannerRight from './PodcastBannerRight'

const Banner: React.FC = () => (
    <section
        className="
        bg-neutral-dark
        py-12  
        px-4 md:px-8
        text-white
        "
     >
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 items-stretch gap-8">
                <PodcastBannerLeft />
                <PodcastBannerRight />
            </div>
        </div>
    </section>
)

export default Banner
