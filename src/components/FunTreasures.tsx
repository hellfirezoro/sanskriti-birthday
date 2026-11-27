import React, { useState } from 'react';
import { Sparkles, X, ZoomIn, Smile } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface FunPhoto {
  id: string;
  url: string;
  caption: string;
  tag: string;
  rotationClass: string;
  tapeColor: string;
}

export const FunTreasures: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<FunPhoto | null>(null);

  const funPhotos: FunPhoto[] = [
    {
      id: "fun-1",
      url: "/photos/funny1.png",
      caption: "Snowman brain moment ☃️😂",
      tag: "Pure Comedy",
      rotationClass: "-rotate-2 hover:rotate-0",
      tapeColor: "bg-amber-200/90"
    },
    {
      id: "fun-2",
      url: "/photos/funny2.jpg",
      caption: "Cat ears unlocked 🐱✨",
      tag: "100% Adorable",
      rotationClass: "rotate-2 hover:rotate-0",
      tapeColor: "bg-pink-200/90"
    },
    {
      id: "fun-3",
      url: "/photos/funny3.jpg",
      caption: "Rockstar wig rockin' out 🎸🔥",
      tag: "Iconic Energy",
      rotationClass: "-rotate-3 hover:rotate-0",
      tapeColor: "bg-purple-200/90"
    },
    {
      id: "fun-4",
      url: "/photos/funny4.jpg",
      caption: "Blushing cloud cuteness ☁️🌸",
      tag: "Too Cute",
      rotationClass: "rotate-3 hover:rotate-0",
      tapeColor: "bg-rose-200/90"
    }
  ];

  const handlePhotoClick = (photo: FunPhoto) => {
    soundManager.playChime(783.99, 0.35);
    setSelectedPhoto(photo);
  };

  const handleCloseLightbox = () => {
    setSelectedPhoto(null);
  };

  return (
    <section className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/80 text-amber-800 text-xs sm:text-sm font-medium mb-3 border border-amber-200">
          <Smile className="w-4 h-4 text-amber-600" />
          <span>Top Secret Bestie Vault</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl text-stone-800 font-bold">
          The Cutest & Funniest Treasures 😂❤️
        </h2>
        <p className="font-handwriting text-2xl text-stone-600 mt-2">
          Strictly classified archives — bestie eyes only!
        </p>
      </div>

      {/* 4 Photos Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
        {funPhotos.map((photo, idx) => (
          <div
            key={photo.id}
            onClick={() => handlePhotoClick(photo)}
            className={`group relative cursor-pointer transform transition-all duration-300 hover:scale-105 hover:z-20 ${photo.rotationClass}`}
          >
            {/* Washi Tape Strip */}
            <div className={`washi-tape washi-tape-top ${photo.tapeColor}`} />

            {/* Polaroid Frame */}
            <div className="scrapbook-paper p-3 pb-5 rounded-2xl border border-stone-200/80 shadow-lg hover:shadow-2xl transition-shadow bg-[#FFFDF9]">
              {/* Photo Container */}
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-stone-900/10 flex items-center justify-center">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  loading="lazy"
                />
                
                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-stone-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="p-2 rounded-full bg-white/95 text-stone-800 shadow-md">
                    <ZoomIn className="w-4 h-4 text-pink-600" />
                  </div>
                </div>

                {/* Tag badge */}
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-black/60 text-white text-[10px] font-medium backdrop-blur-xs">
                  {photo.tag}
                </div>
              </div>

              {/* Handwritten Caption */}
              <div className="mt-3 px-1 text-center">
                <p className="font-handwriting text-lg sm:text-xl text-stone-700 leading-snug">
                  {photo.caption}
                </p>
                <div className="mt-1 flex items-center justify-center gap-1 text-[11px] text-pink-600 font-medium">
                  <span>Treasure #{idx + 1}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Heartfelt & Funny Paragraph Card Below The Photos */}
      <div className="mt-14 max-w-3xl mx-auto text-center">
        <div className="relative scrapbook-paper p-6 sm:p-10 rounded-3xl border border-amber-200/90 shadow-lg bg-white/95">
          <div className="washi-tape washi-tape-top bg-amber-200/90" />

          {/* Stamp badge */}
          <div className="inline-block px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-bold tracking-wider uppercase mb-4 shadow-2xs">
            🔒 Strictly Confidential Bestie Vault
          </div>
          
          <p className="font-serif text-lg sm:text-2xl text-stone-800 leading-relaxed italic font-medium">
            "So, here are some of the cutest and funniest pictures I have of you. 😂❤️ And I promise, these little treasures are staying with me — no one else gets to have this exclusive collection! Some memories are just too precious to share with the world. 😭"
          </p>

          <div className="mt-5 flex items-center justify-center gap-2 text-rose-600 font-handwriting text-2xl font-bold">
            <span>Locked in my heart forever 🔐💖</span>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/75 backdrop-blur-sm animate-fade-in"
          onClick={handleCloseLightbox}
        >
          <div
            className="relative max-w-md w-full bg-white rounded-3xl p-4 sm:p-6 shadow-2xl border border-pink-100 text-center"
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
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-stone-900/10 mb-4">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.caption}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Caption */}
            <p className="font-handwriting text-2xl text-stone-800">
              "{selectedPhoto.caption}"
            </p>
            <p className="text-xs text-stone-400 mt-1 uppercase tracking-wider font-semibold">
              {selectedPhoto.tag} • Exclusive Collection
            </p>
          </div>
        </div>
      )}

    </section>
  );
};
