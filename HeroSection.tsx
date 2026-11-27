import React, { useState } from 'react';
import { Heart, Sparkles, Cake, Compass, Star } from 'lucide-react';
import { BirthdayData } from '../types';
import { soundManager } from '../utils/audio';

interface HeroSectionProps {
  data: BirthdayData;
  onOpenLetter: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ data, onOpenLetter }) => {
  const [activeQuoteIdx, setActiveQuoteIdx] = useState(0);

  const handleNextQuote = () => {
    soundManager.playChime(523.25, 0.3);
    setActiveQuoteIdx((prev) => (prev + 1) % data.hero.quotes.length);
  };

  return (
    <section id="hero" className="relative pt-8 pb-16 px-4 sm:px-6 max-w-4xl mx-auto text-center">
      
      {/* Decorative scrap tape & stamps */}
      <div className="absolute top-2 left-6 hidden sm:block rotate-[-12deg] opacity-75">
        <div className="px-3 py-1 bg-pink-100/90 border border-dashed border-pink-300 rounded text-xs font-handwriting text-pink-700 shadow-sm">
          Bestie Edition 💖
        </div>
      </div>
      <div className="absolute top-4 right-8 hidden sm:block rotate-[14deg] opacity-75">
        <div className="px-3 py-1 bg-purple-100/90 border border-dashed border-purple-300 rounded text-xs font-handwriting text-purple-700 shadow-sm">
          Happy Birthday! 🎂
        </div>
      </div>

      {/* Ribbon Badge */}
      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 border border-pink-200 shadow-sm backdrop-blur-sm mb-6">
        <Sparkles className="w-4 h-4 text-pink-500 fill-pink-500 animate-spin" />
        <span className="font-handwriting text-xl sm:text-2xl text-pink-700 font-semibold">
          {data.hero.subtitle}
        </span>
        <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
      </div>

      {/* Main Animated Title */}
      <div className="relative my-4">
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-stone-800 leading-tight">
          HAPPY BIRTHDAY,{' '}
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 animate-pulse-subtle">
            {data.friendName}!
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 9.5C65 2.5 195 2.5 297.5 9.5" stroke="#F472B6" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </span>
        </h1>
      </div>

      {/* Friendship Subtitles Carousel / Badges */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 my-6 max-w-2xl mx-auto">
        {data.nicknames.map((nick, idx) => (
          <span
            key={idx}
            className="px-3 py-1 rounded-full bg-white/70 border border-stone-200/80 text-xs sm:text-sm font-medium text-stone-600 shadow-xs hover:border-pink-300 hover:text-pink-600 transition-colors"
          >
            {nick}
          </span>
        ))}
      </div>

      {/* Quote Scrap Card */}
      <div className="mt-8 max-w-xl mx-auto relative group">
        {/* Scrap tape decoration */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-pink-200/70 rotate-[-1deg] shadow-xs z-10" />

        <div className="scrapbook-paper p-6 sm:p-8 rounded-2xl border border-stone-200/60 relative">
          <p className="font-handwriting text-2xl sm:text-3xl text-stone-700 leading-relaxed italic">
            "{data.hero.quotes[activeQuoteIdx]}"
          </p>
          <div className="mt-4 flex items-center justify-between pt-4 border-t border-dashed border-stone-200">
            <span className="text-xs text-stone-400 font-medium">
              Click note for another friendship thought 💭
            </span>
            <button
              onClick={handleNextQuote}
              className="text-xs font-semibold text-pink-600 hover:text-pink-700 underline flex items-center gap-1 cursor-pointer"
            >
              Next thought →
            </button>
          </div>
        </div>
      </div>

      {/* Quick Action Navigation */}
      <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
        <a
          href="#memories"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-stone-700 font-medium text-sm shadow-md hover:shadow-lg hover:border-pink-300 border border-stone-200 transition-all hover:scale-105 active:scale-95"
        >
          <Compass className="w-4 h-4 text-pink-500" />
          <span>Explore Memories</span>
        </a>

        <a
          href="#cake"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-pink-100/80 text-pink-800 font-medium text-sm shadow-md hover:shadow-lg hover:bg-pink-200/80 transition-all hover:scale-105 active:scale-95"
        >
          <Cake className="w-4 h-4 text-pink-600" />
          <span>Blow Out Birthday Candles</span>
        </a>

        <button
          onClick={onOpenLetter}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 text-white font-medium text-sm shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95"
        >
          <Star className="w-4 h-4 text-yellow-200 fill-yellow-200" />
          <span>Read Sanskriti's Letter</span>
        </button>
      </div>

    </section>
  );
};
