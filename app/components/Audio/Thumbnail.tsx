// src/app/components/Audio/Thumbnail.tsx
import React from 'react';

interface ThumbnailProps {
  displayThumbnail: string;
  title: string;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ displayThumbnail, title }) => {
  // If no episode-specific image, show your default podcast branding
  if (displayThumbnail === "/api/placeholder/120/120") {
    return (
      <div className="w-36 h-36 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center relative">
        <div className="text-white text-center">
          <div className="text-xs font-bold bg-red-500 px-1 rounded mb-1">THE</div>
          <div className="text-sm font-bold leading-tight">Building</div>
          <div className="text-sm font-bold leading-tight">Talks</div>
          <div className="text-xs mt-1">PODCAST</div>
        </div>
        <div className="absolute bottom-1 right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-gray-300 rounded-full" />
        </div>
      </div>
    );
  }

  // Otherwise show the episode thumbnail
  return (
    <div className="w-46 h-46 rounded-lg overflow-hidden">
      <img
        src={displayThumbnail}
        alt={`${title} episode thumbnail`}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Thumbnail;
