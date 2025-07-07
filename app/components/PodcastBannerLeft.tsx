// components/PodcastBannerLeft.tsx
"use client"

import { useState } from 'react'

const PodcastBannerLeft = () => {
  const [email, setEmail] = useState('')
  
  const handleSubscribe = () => {
    if (email) {
      console.log('Subscribing email:', email)
      setEmail('')
    }
  }

  return (
    <div className="w-[517px] h-[349px] absolute bottom-[11px] left-0 z-10">
      {/* Title */}
      <h1 className="block h-[44px] font-['Inter'] text-[30.3px] font-bold leading-[36.67px] text-[#252326] whitespace-nowrap z-30 mt-[24px] ml-[12px]">
        Building Talks Podcast
      </h1>
      
      {/* Subtitle */}
      <p className="flex w-[451px] h-[99px] justify-start items-center font-['Inter'] text-[22.7px] font-normal leading-[30.661px] text-[#7a777c] overflow-hidden z-[29] mt-[19px] ml-[10.091px]">
        Talking to professionals in construction,<br />
        property development, architecture, and<br />
        beyond.
      </p>
      
      {/* Podcast Platform Buttons */}
      <div className="w-[483px] h-[52px] relative z-[25] mt-[14px] ml-[11px]">
        {/* Apple Podcasts */}
        <div className="w-[173px] h-[52px] absolute bottom-0 left-0 z-[25]">
          <div className="w-[168px] h-[44px] bg-[#fefefe] rounded-tr-[4px] rounded-br-[4px] relative z-[26] mt-[5px] ml-[5px]">
            <span className="flex h-[18px] justify-start items-center font-['Inter'] text-[12.4px] font-bold leading-[15.007px] text-[#7c7a7e] absolute bottom-[14px] left-[15px] whitespace-nowrap z-[27]">
              Apple Podcasts
            </span>
            <div className="w-[20px] h-[20px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-06/AbWXXxLT4O.png)] bg-cover bg-no-repeat absolute bottom-[12px] left-[15px] z-[28]" />
          </div>
        </div>
        
        {/* Google Podcasts */}
        <div className="w-[183px] h-[52px] absolute bottom-0 left-[175px] z-[21]">
          <div className="w-[176px] h-[44px] bg-[#fff] relative z-[22] mt-[5px] ml-[4px]">
            <div className="w-[20px] h-[21px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-06/ALMDD5Bb4M.png)] bg-cover bg-no-repeat absolute bottom-[12px] left-[16px] z-[24]" />
            <span className="flex h-[18px] justify-start items-center font-['Inter'] text-[12px] font-bold leading-[14.523px] text-[#7c7c81] absolute bottom-[14px] left-[41px] whitespace-nowrap z-[23]">
              Google Podcasts
            </span>
          </div>
        </div>
        
        {/* Spotify */}
        <div className="w-[123px] h-[52px] absolute bottom-0 right-0 z-[17]">
          <div className="w-[115px] h-[44px] bg-[#fff] relative z-[18] mt-[5px] ml-[5px]">
            <span className="flex h-[18px] justify-start items-center font-['Inter'] text-[11.7px] font-bold leading-[14.16px] text-[#828185] absolute bottom-[14px] left-[35px] whitespace-nowrap z-[19]">
              Spotify
            </span>
            <div className="w-[20px] h-[20px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-07-06/tGotaz7EP0.png)] bg-cover bg-no-repeat absolute bottom-[12px] left-[15px] z-20" />
          </div>
        </div>
      </div>
      
      {/* Subscribe Form */}
      <div className="flex w-[500px] h-[56px] justify-between items-center relative z-[14] mt-[21px] ml-[6px]">
        <div className="w-[358px] h-[55px] shrink-0 relative z-[14]">
          <input
            type="email"
            placeholder="Never miss an episode..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[354px] h-[48px] bg-[#fefefe] rounded-tl-[4px] rounded-tr-[3px] rounded-bl-[4px] border border-[#f4f4fb] font-['Inter'] text-[13.3px] font-normal leading-[16.096px] text-[#dedcdd] pl-4 mt-[5px] ml-[4px] focus:outline-none"
          />
        </div>
        <div className="w-[138px] h-[56px] shrink-0 relative z-[11]">
          <button
            onClick={handleSubscribe}
            className="w-[134px] h-[48px] bg-[#282828] rounded-[3px] font-['Inter'] text-[14.1px] font-bold leading-[17.064px] text-[#bdbfbd] mt-[5px] ml-px hover:bg-[#333] transition-colors"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

export default PodcastBannerLeft;