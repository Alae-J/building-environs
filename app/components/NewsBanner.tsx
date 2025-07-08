import Image from 'next/image';

const NewsBanner = () => {
  return (
    <div className="relative w-full h-[280px] bg-black text-white overflow-hidden">
      {/* Background image */}
      <Image
        src="https://cdn-01.cms-ap-v2i.applyflow.com/building-environs/wp-content/uploads/2022/06/blogSectionBImages.png"
        alt="News Banner Background"
        fill
        className="z-0 object-cover"
        priority
      />

      {/* Text Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            News & Articles
          </h1>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-full lg:max-w-[50%]">
            Our thoughts on recruitment, construction, engineering, and everything in between
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsBanner;
