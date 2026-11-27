import React, { useState } from 'react';
import { Camera, X, Heart, ZoomIn } from 'lucide-react';
import { MemoryPhoto } from '../types';
import { soundManager } from '../utils/audio';

interface PhotoMemoriesProps {
  memories: MemoryPhoto[];
  friendName: string;
}

export const PhotoMemories: React.FC<PhotoMemoriesProps> = ({ memories, friendName }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<MemoryPhoto | null>(null);

  const handlePhotoClick = (photo: MemoryPhoto) => {
    soundManager.playChime(659.25, 0.4);
    setSelectedPhoto(photo);
  };

  const handleCloseLightbox = () => {
    setSelectedPhoto(null);
  };

  return (
    <section id="memories" className="py-16 px-4 sm:px-6 max-w-5xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/80 text-purple-700 text-xs sm:text-sm font-medium mb-3">
          <Camera className="w-4 h-4 text-purple-600" />
          <span>Our Little World of Memories</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl text-stone-800 font-bold">
          Moments 📸
        </h2>
        <p className="font-handwriting text-2xl text-stone-600 mt-2">
          Unforgettable memories, laughs, and pure chaos captured in time!
        </p>
      </div>

      {/* Polaroid Scrapbook Grid - Centered for the 2 provided photos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 max-w-3xl mx-auto">
        {memories.map((photo, idx) => (
          <div
            key={photo.id}
            onClick={() => handlePhotoClick(photo)}
            className={`group relative cursor-pointer transform transition-all duration-300 hover:scale-105 hover:z-20 ${photo.rotationClass}`}
          >
            {/* Washi Tape Strip */}
            <div className={`washi-tape washi-tape-top ${photo.tapeColor || 'bg-pink-200/90'}`} />

            {/* Polaroid Frame */}
            <div className="scrapbook-paper p-4 pb-6 rounded-2xl border border-stone-200/80 shadow-xl hover:shadow-2xl transition-shadow bg-[#FFFDF9]">
              {/* Photo Container */}
              <div className="relative aspect-[4/5] sm:aspect-square w-full overflow-hidden rounded-xl bg-stone-100">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  loading="lazy"
                />
                
                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-stone-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-2.5 rounded-full bg-white/95 text-stone-800 shadow-md">
                    <ZoomIn className="w-5 h-5 text-pink-600" />
                  </div>
                </div>

                {/* Date tag */}
                {photo.date && (
                  <div className="absolute top-2 right-2 px-2.5 py-0.5 rounded-full bg-black/50 text-white text-[11px] font-medium backdrop-blur-xs">
                    {photo.date}
                  </div>
                )}
              </div>

              {/* Handwritten Caption */}
              <div className="mt-4 px-1 text-center">
                <p className="font-handwriting text-2xl text-stone-700 leading-snug">
                  {photo.caption}
                </p>
                <div className="mt-2 flex items-center justify-center gap-1.5 text-xs text-pink-600 font-medium">
                  <Heart className="w-3.5 h-3.5 fill-pink-500 text-pink-500" />
                  <span>Memory #{idx + 1}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Heartfelt Paragraph Below the Photos */}
      <div className="mt-14 max-w-2xl mx-auto text-center">
        <div className="relative scrapbook-paper p-6 sm:p-8 rounded-3xl border border-pink-200/90 shadow-md bg-white/95">
          <div className="washi-tape washi-tape-top bg-pink-200/90" />
          <p className="font-serif text-lg sm:text-xl text-stone-800 leading-relaxed italic">
            "You have this little charm in your smile that somehow makes this harsh world feel a little softer and easier to get through. Even on the days when everything feels exhausting, seeing you smile reminds me that there are still beautiful things in life worth smiling about."
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-pink-600 font-handwriting text-2xl">
            <Heart className="w-4 h-4 fill-pink-500 text-pink-500" />
            <span>Always smiling for you, {friendName} 💖</span>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/70 backdrop-blur-sm animate-fade-in"
          onClick={handleCloseLightbox}
        >
          <div
            className="relative max-w-2xl w-full bg-white rounded-2xl p-4 sm:p-6 shadow-2xl border border-pink-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseLightbox}
              className="absolute top-3 right-3 p-2 rounded-full bg-stone-100 hover:bg-pink-100 text-stone-600 hover:text-pink-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Big Image */}
            <div className="relative aspect-[4/5] sm:aspect-[4/3] w-full rounded-xl overflow-hidden bg-stone-100">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.caption}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Caption */}
            <div className="mt-4 text-center">
              <p className="font-handwriting text-2xl sm:text-3xl text-stone-800">
                "{selectedPhoto.caption}"
              </p>
              {selectedPhoto.date && (
                <p className="text-xs text-stone-400 mt-1 uppercase tracking-wider font-semibold">
                  {selectedPhoto.date}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
