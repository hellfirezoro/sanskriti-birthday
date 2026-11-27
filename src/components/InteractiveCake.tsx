import React, { useState } from 'react';
import { Sparkles, Gift, Wind, RefreshCw } from 'lucide-react';
import { soundManager } from '../utils/audio';
import { triggerSideCannons, triggerRealisticConfetti } from '../utils/confetti';

interface InteractiveCakeProps {
  friendName: string;
  onOpenSecretModal: () => void;
}

export const InteractiveCake: React.FC<InteractiveCakeProps> = ({ friendName, onOpenSecretModal }) => {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [, setRevealedSecret] = useState(false);

  const handleBlowCandles = () => {
    if (candlesBlown) return;

    soundManager.playBlowCandle();
    setCandlesBlown(true);

    // Trigger double confetti blast
    triggerRealisticConfetti();
    triggerSideCannons();
  };

  const handleRelight = () => {
    soundManager.playChime(440, 0.3);
    setCandlesBlown(false);
  };

  const handleRevealSecret = () => {
    soundManager.playCelebration();
    setRevealedSecret(true);
    triggerRealisticConfetti();
    onOpenSecretModal();
  };

  return (
    <section id="cake" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto text-center relative">
      
      {/* Background soft glow circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-200/25 rounded-full blur-3xl pointer-events-none" />

      {/* Title */}
      <div className="relative z-10 mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100/80 text-pink-700 text-xs sm:text-sm font-medium mb-3">
          <Sparkles className="w-4 h-4 text-pink-500 fill-pink-500" />
          <span>Interactive Birthday Celebration</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl text-stone-800 font-bold">
          Make A Wish, {friendName}! 🎂
        </h2>
        <p className="font-handwriting text-2xl text-stone-600 mt-2">
          Close your eyes, make your biggest wish, and blow out the candles!
        </p>
      </div>

      {/* The Cake & Treats Stage Container */}
      <div className="relative z-10 max-w-5xl mx-auto my-10 p-6 sm:p-12 rounded-3xl bg-white/85 backdrop-blur-md border border-pink-100 shadow-2xl">
        
        {/* Main Stage: Bigger Grand Chocolate Cake + Treats Tied With Ribbon & Bow */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-10 sm:gap-14 py-4 select-none">
          
          {/* 🎂 1. BIGGER GRAND BELGIAN CHOCOLATE CAKE */}
          <div 
            onClick={handleBlowCandles}
            className="relative cursor-pointer py-6 group flex flex-col items-center justify-center"
            title={candlesBlown ? "Candles are blown out!" : "Click to blow out candles!"}
          >
            {/* 3 Tall Candles */}
            <div className="flex justify-center items-end gap-8 sm:gap-12 mb-[-6px] z-20">
              {[0, 1, 2].map((candleIndex) => (
                <div key={candleIndex} className="flex flex-col items-center relative">
                  
                  {/* Glowing Flame or Smoke Puff */}
                  {!candlesBlown ? (
                    <div className="candle-flame w-5 h-8 sm:w-6 sm:h-9 rounded-full bg-gradient-to-t from-orange-500 via-amber-400 to-yellow-200 shadow-lg shadow-amber-400 cursor-pointer" />
                  ) : (
                    <div className="h-8 flex items-center justify-center text-sm text-stone-400 animate-fade-in">
                      💨
                    </div>
                  )}

                  {/* Candle wick */}
                  <div className="w-1 h-3 bg-stone-800" />

                  {/* Taller Candle stick */}
                  <div className={`w-4 sm:w-5 h-16 sm:h-20 rounded-t shadow-sm ${
                    candleIndex === 0 ? 'bg-gradient-to-b from-rose-300 via-rose-400 to-rose-500' :
                    candleIndex === 1 ? 'bg-gradient-to-b from-amber-200 via-amber-300 to-amber-400' :
                    'bg-gradient-to-b from-purple-300 via-purple-400 to-purple-500'
                  } border-x border-t border-white/70`} />
                </div>
              ))}
            </div>

            {/* Top Chocolate Tier */}
            <div className="w-56 sm:w-72 h-18 sm:h-22 rounded-t-3xl bg-gradient-to-r from-[#3A201A] via-[#4E2B23] to-[#3A201A] border-2 border-[#24130E] shadow-inner relative z-10 flex items-center justify-center">
              {/* Dripping Chocolate Ganache Glaze */}
              <div className="absolute -bottom-3 inset-x-0 flex justify-around">
                <span className="w-7 h-6 bg-[#21110B] rounded-b-full shadow-xs" />
                <span className="w-8 h-7 bg-[#21110B] rounded-b-full shadow-xs" />
                <span className="w-6 h-5 bg-[#21110B] rounded-b-full shadow-xs" />
                <span className="w-8 h-7 bg-[#21110B] rounded-b-full shadow-xs" />
                <span className="w-6 h-5 bg-[#21110B] rounded-b-full shadow-xs" />
              </div>
              
              {/* Edible Gold Stars & Sprinkles */}
              <div className="flex gap-6 text-sm">
                <span className="w-2.5 h-2 bg-amber-300 rounded-full rotate-45 shadow-sm" />
                <span className="w-2.5 h-2 bg-rose-300 rounded-full -rotate-12 shadow-sm" />
                <span className="w-2.5 h-2 bg-yellow-200 rounded-full rotate-30 shadow-sm" />
                <span className="w-2.5 h-2 bg-white rounded-full -rotate-45 shadow-sm" />
              </div>
            </div>

            {/* Bottom Chocolate Tier (Bigger & Grand) */}
            <div className="w-72 sm:w-96 h-24 sm:h-28 rounded-b-3xl bg-gradient-to-r from-[#2B1713] via-[#3E231D] to-[#2B1713] border-2 border-[#190C08] shadow-2xl relative flex items-center justify-center overflow-hidden">
              {/* Sanskriti's Name in Cream Piped Frosting */}
              <span className="font-handwriting text-3xl sm:text-5xl font-bold text-[#FFF8E7] tracking-wider filter drop-shadow-md">
                {friendName}
              </span>
              
              {/* Chocolate Swirl Rosettes on bottom border */}
              <div className="absolute inset-x-0 bottom-1.5 flex justify-around opacity-80">
                <div className="w-4 h-4 rounded-full bg-[#180C08] shadow-xs" />
                <div className="w-4 h-4 rounded-full bg-[#523028] shadow-xs" />
                <div className="w-4 h-4 rounded-full bg-[#180C08] shadow-xs" />
                <div className="w-4 h-4 rounded-full bg-[#523028] shadow-xs" />
                <div className="w-4 h-4 rounded-full bg-[#180C08] shadow-xs" />
                <div className="w-4 h-4 rounded-full bg-[#523028] shadow-xs" />
              </div>
            </div>

            {/* Cake Stand Plate (Wider & Polished) */}
            <div className="w-80 sm:w-[410px] h-5 rounded-full bg-gradient-to-r from-stone-200 via-white to-stone-200 border border-stone-300 shadow-xl mt-0.5" />
            <div className="w-36 h-5 bg-stone-300 rounded-b-2xl shadow-sm" />
          </div>

          {/* 🧺 2. TREATS BASKET TIED WITH A SILK RIBBON & BOW */}
          <div className="relative group cursor-pointer" onClick={() => soundManager.playCelebration()}>
            
            {/* The Basket Container */}
            <div className="relative w-64 sm:w-72 bg-gradient-to-b from-[#E2C799] via-[#D3B47F] to-[#B8935F] p-4 rounded-3xl border-4 border-[#9E7B4A] shadow-2xl overflow-visible">
              
              {/* Basket Handle Arc */}
              <div className="absolute -top-14 inset-x-8 h-20 border-4 border-[#8B6B3F] rounded-t-full pointer-events-none" />

              {/* Items Peeking Out */}
              <div className="relative z-10 flex items-end justify-center gap-2 mb-[-8px] pt-4">
                
                {/* 🧸 Plush Teddy Bear */}
                <div 
                  className="flex flex-col items-center transform hover:scale-115 transition-transform"
                  onClick={(e) => { e.stopPropagation(); soundManager.playChime(659.25, 0.35); }}
                  title="Bestie Teddy"
                >
                  <div className="text-6xl sm:text-7xl filter drop-shadow-md">
                    🧸
                  </div>
                </div>

                {/* 🍫 KitKat Bar */}
                <div 
                  className="w-13 h-20 rounded-md bg-gradient-to-b from-red-600 to-red-700 shadow-lg p-1.5 flex flex-col justify-between border-2 border-red-800 rotate-12 hover:rotate-0 transition-transform"
                  onClick={(e) => { e.stopPropagation(); soundManager.playChime(698.46, 0.3); }}
                  title="KitKat Bar"
                >
                  <div className="h-1.5 bg-gradient-to-r from-stone-200 via-stone-100 to-stone-300 rounded-t-xs" />
                  <div className="flex justify-center gap-1 my-auto">
                    <div className="w-2 h-8 bg-[#3E231D] rounded-t-xs" />
                    <div className="w-2 h-8 bg-[#3E231D] rounded-t-xs" />
                  </div>
                  <div className="text-[9px] font-black text-white italic tracking-tighter text-center">
                    KitKat
                  </div>
                </div>

                {/* 🍪 Oreo Cookie */}
                <div 
                  className="w-13 h-13 rounded-full bg-[#1A110D] border-4 border-[#2D1E17] shadow-lg flex items-center justify-center relative -rotate-12 hover:rotate-0 transition-transform"
                  onClick={(e) => { e.stopPropagation(); soundManager.playChime(587.33, 0.3); }}
                  title="Oreo Cookie"
                >
                  <div className="w-8 h-8 rounded-full border border-dashed border-stone-500/40 flex items-center justify-center">
                    <span className="text-[8px] font-black text-stone-400">OREO</span>
                  </div>
                  <div className="absolute inset-x-0 h-1 bg-white/95 top-1/2 -translate-y-1/2 opacity-90" />
                </div>

                {/* 🍫 Rich Chocolate Bar */}
                <div 
                  className="w-11 h-16 rounded bg-gradient-to-b from-[#4A2E2B] to-[#361E1B] shadow-md p-1 grid grid-cols-2 gap-0.5 border border-[#2B1512] rotate-6 hover:rotate-0 transition-transform"
                  onClick={(e) => { e.stopPropagation(); soundManager.playChime(523.25, 0.3); }}
                  title="Dairy Chocolate"
                >
                  <div className="rounded-xs bg-[#5A3834]" />
                  <div className="rounded-xs bg-[#5A3834]" />
                  <div className="rounded-xs bg-[#5A3834]" />
                  <div className="rounded-xs bg-[#5A3834]" />
                </div>

              </div>

              {/* Basket Front with Ribbon Tied Across & Center Bow */}
              <div className="relative z-20 mt-2 h-16 bg-gradient-to-r from-[#C29E6B] via-[#D3B47F] to-[#C29E6B] rounded-2xl border-2 border-[#8B6B3F] shadow-inner flex items-center justify-center overflow-visible">
                
                {/* Horizontal Pink Satin Ribbon */}
                <div className="absolute inset-x-0 h-7 bg-gradient-to-r from-pink-400 via-rose-400 to-pink-400 shadow-sm border-y border-pink-200/80" />

                {/* Vertical Pink Satin Ribbon */}
                <div className="absolute inset-y-0 w-7 bg-gradient-to-b from-pink-400 via-rose-400 to-pink-400 shadow-sm border-x border-pink-200/80" />

                {/* Big Beautiful Bow in the Center tying them together */}
                <div className="relative z-30 flex items-center justify-center filter drop-shadow-lg animate-pulse-subtle">
                  <span className="text-5xl">🎀</span>
                </div>
              </div>

            </div>

            {/* Gentle hint note */}
            <p className="text-xs font-handwriting text-stone-500 mt-2 font-semibold">
              Tied with love & sweet treats 🎀✨
            </p>
          </div>

        </div>

        {/* Action Button & Blow feedback */}
        <div className="mt-6">
          {!candlesBlown ? (
            <button
              onClick={handleBlowCandles}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold shadow-lg shadow-pink-300/60 hover:shadow-xl hover:scale-105 active:scale-95 transition-all text-base sm:text-lg cursor-pointer"
            >
              <Wind className="w-5 h-5 animate-pulse" />
              <span>Click to Blow Out Candles! 🎂</span>
            </button>
          ) : (
            <div className="space-y-4 animate-fade-in max-w-xl mx-auto">
              <div className="p-5 rounded-3xl bg-pink-50 border border-pink-200 text-pink-900 shadow-sm">
                <p className="font-handwriting text-3xl sm:text-4xl font-bold text-pink-700">
                  🎉 Wish Made! Happy Birthday, {friendName}! 🌟
                </p>
                <p className="text-xs sm:text-sm text-stone-600 mt-2">
                  May this year bring you all the endless joy, belly laughs, chocolates, and dreams you deserve!
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={handleRelight}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-medium transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Light Candles Again</span>
                </button>

                <button
                  onClick={handleRevealSecret}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all"
                >
                  <Gift className="w-4 h-4 text-yellow-200" />
                  <span>Reveal Secret Bestie Message! 🎁</span>
                </button>
              </div>
            </div>
          )}
        </div>

      </div>

    </section>
  );
};
