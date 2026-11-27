import React, { useState } from 'react';
import { Gift, Sparkles, Heart } from 'lucide-react';
import { soundManager } from '../utils/audio';
import { triggerRealisticConfetti } from '../utils/confetti';

interface OpeningScreenProps {
  onOpen: () => void;
  friendName: string;
}

export const OpeningScreen: React.FC<OpeningScreenProps> = ({ onOpen, friendName }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    soundManager.playUnwrap();
    triggerRealisticConfetti();
    
    // Give time for ribbon unwrap and transition
    setTimeout(() => {
      onOpen();
    }, 1100);
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-1000 ${
      isOpening ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
    } bg-gradient-to-br from-[#FFF5F7] via-[#FAF7F0] to-[#F3EBF9]`}>
      
      {/* Decorative floating pastel bubbles / sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[15%] w-24 h-24 rounded-full bg-pink-200/40 blur-xl animate-float-slow" />
        <div className="absolute top-[65%] left-[10%] w-32 h-32 rounded-full bg-purple-200/40 blur-xl animate-float-medium" />
        <div className="absolute top-[20%] right-[15%] w-28 h-28 rounded-full bg-amber-100/60 blur-xl animate-float-slow" />
        <div className="absolute bottom-[15%] right-[12%] w-36 h-36 rounded-full bg-rose-200/40 blur-xl animate-float-medium" />
      </div>

      <div className="relative max-w-lg w-full text-center px-6 py-10 rounded-3xl bg-white/80 backdrop-blur-md shadow-2xl border border-pink-100/80">
        
        {/* Floating Cute Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100/80 text-pink-700 text-xs sm:text-sm font-medium tracking-wide mb-6 shadow-sm border border-pink-200/50 animate-bounce">
          <Sparkles className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
          <span>A Special Gift Just For You</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
        </div>

        {/* Gift Box Graphic */}
        <div className="relative my-4 flex justify-center">
          <div className="relative group cursor-pointer" onClick={handleOpen}>
            <div className={`w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-tr from-pink-300 via-rose-300 to-purple-300 shadow-xl flex items-center justify-center transition-transform duration-500 ${
              isOpening ? 'scale-125 rotate-6' : 'hover:scale-105 animate-float-gentle'
            }`}>
              {/* Ribbon cross */}
              <div className="absolute inset-x-0 h-6 bg-white/90 shadow-sm top-1/2 -translate-y-1/2" />
              <div className="absolute inset-y-0 w-6 bg-white/90 shadow-sm left-1/2 -translate-x-1/2" />
              
              {/* Bow on top */}
              <div className="absolute -top-4 text-pink-500 filter drop-shadow-md">
                <Gift className="w-12 h-12 stroke-[1.5]" />
              </div>

              <span className="relative z-10 text-white font-serif font-bold text-lg tracking-wider drop-shadow">
                {friendName}
              </span>
            </div>
            {/* Sparkle indicators around box */}
            <div className="absolute -top-2 -right-2 text-amber-400 animate-sparkle">✨</div>
            <div className="absolute -bottom-1 -left-2 text-pink-400 animate-sparkle delay-700">💖</div>
          </div>
        </div>

        {/* Welcome Text */}
        <h1 className="font-serif text-2xl sm:text-3xl text-stone-800 font-bold tracking-tight mt-6">
          Something special is waiting for you, <span className="text-pink-600 underline decoration-pink-300 decoration-wavy decoration-2">{friendName}</span>...
        </h1>
        
        <p className="font-handwriting text-xl sm:text-2xl text-stone-600 mt-3 font-medium">
          A digital scrapbook made with love, laughter & endless memories! 🎀
        </p>

        {/* Action Button */}
        <div className="mt-8">
          <button
            onClick={handleOpen}
            disabled={isOpening}
            className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 text-white font-medium text-base sm:text-lg shadow-lg shadow-pink-300/40 hover:shadow-xl hover:shadow-pink-300/60 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <span>Open Your Surprise, Bestie!</span>
            <Sparkles className="w-5 h-5 text-yellow-200 group-hover:rotate-45 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>

        <p className="text-xs text-stone-400 mt-5">
          Tap the button or the present to unwrap your surprise ✨
        </p>
      </div>
    </div>
  );
};
