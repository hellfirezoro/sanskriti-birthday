import React, { useState } from 'react';
import { Heart, Sparkles, X, ZoomIn } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface CherishedMomentsProps {
  friendName: string;
}

interface TogetherPhoto {
  id: string;
  url: string;
  caption: string;
  subcaption?: string;
  rotationClass: string;
  tapeColor: string;
}

export const CherishedMoments: React.FC<CherishedMomentsProps> = ({ friendName }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<TogetherPhoto | null>(null);

  const togetherPhotos: TogetherPhoto[] = [
    {
      id: "tog-1",
      url: "/photos/together1.jpg",
      caption: "Partners in crime & forever smiles ✨",
      subcaption: "Always matching energy",
      rotationClass: "-rotate-2 hover:rotate-0",
      tapeColor: "bg-pink-200/90"
    },
    {
      id: "tog-2",
      url: "/photos/together2.jpg",
      caption: "Unfiltered laughter & endless goofy talks 🤪",
      subcaption: "Real candid joy",
      rotationClass: "rotate-2 hover:rotate-0",
      tapeColor: "bg-purple-200/90"
    },
    {
      id: "tog-3",
      url: "/photos/together3.jpg",
      caption: "City lights, quiet talks & peaceful skies 🌃",
      subcaption: "Golden conversations",
      rotationClass: "-rotate-1 hover:rotate-0",
      tapeColor: "bg-amber-200/90"
    }
  ];

  const handlePhotoClick = (photo: TogetherPhoto) => {
    soundManager.playChime(659.25, 0.4);
    setSelectedPhoto(photo);
  };

  const handleCloseLightbox = () => {
    setSelectedPhoto(null);
  };

  return (
    <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100/80 text-rose-700 text-xs sm:text-sm font-medium mb-3">
          <Sparkles className="w-4 h-4 text-rose-500 fill-rose-500" />
          <span>Every Second With You</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl text-stone-800 font-bold">
          Cherished Moments Together 💫
        </h2>
        <p className="font-handwriting text-2xl text-stone-600 mt-2">
          Because life is so much more colourful with you by my side!
        </p>
      </div>

      {/* 3 Polaroids Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 max-w-5xl mx-auto">
        {togetherPhotos.map((photo, idx) => (
          <div
            key={photo.id}
            onClick={() => handlePhotoClick(photo)}
            className={`group relative cursor-pointer transform transition-all duration-300 hover:scale-105 hover:z-20 ${photo.rotationClass}`}
          >
            {/* Washi Tape Strip */}
            <div className={`washi-tape washi-tape-top ${photo.tapeColor}`} />

            {/* Polaroid Frame */}
            <div className="scrapbook-paper p-4 pb-6 rounded-2xl border border-stone-200/80 shadow-xl hover:shadow-2xl transition-shadow bg-[#FFFDF9]">
              {/* Photo Container */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-stone-100">
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

                {/* Subcaption tag */}
                {photo.subcaption && (
                  <div className="absolute top-2 right-2 px-2.5 py-0.5 rounded-full bg-black/50 text-white text-[11px] font-medium backdrop-blur-xs">
                    {photo.subcaption}
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
                  <span>Us #{idx + 1}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Heartfelt Paragraph Below The Photos */}
      <div className="mt-14 max-w-3xl mx-auto text-center">
        <div className="relative scrapbook-paper p-6 sm:p-10 rounded-3xl border border-pink-200/90 shadow-lg bg-white/95">
          <div className="washi-tape washi-tape-top bg-purple-200/90" />
          
          <p className="font-serif text-lg sm:text-2xl text-stone-800 leading-relaxed italic font-medium">
            "I genuinely cherish every little moment and every second I get to spend with you. Whether we're laughing over something silly, having random conversations or simply doing nothing, every moment becomes a memory I want to hold on to. I don't think you realise how much those little moments mean to me."
          </p>

          <div className="mt-5 flex items-center justify-center gap-2 text-pink-600 font-handwriting text-2xl">
            <Heart className="w-4 h-4 fill-pink-500 text-pink-500" />
            <span>Always holding on to every memory with {friendName} 💖</span>
            <Heart className="w-4 h-4 fill-pink-500 text-pink-500" />
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
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
            <div className="relative aspect-[3/4] max-h-[75vh] w-full rounded-xl overflow-hidden bg-stone-100">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.caption}
                className="w-full h-full object-contain bg-stone-900/10"
              />
            </div>

            {/* Modal Caption */}
            <div className="mt-4 text-center">
              <p className="font-handwriting text-2xl sm:text-3xl text-stone-800">
                "{selectedPhoto.caption}"
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
