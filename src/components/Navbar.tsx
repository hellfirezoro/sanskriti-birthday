import React, { useState } from 'react';
import { Sparkles, Music, VolumeX, Mail } from 'lucide-react';
import { soundManager } from '../utils/audio';
import { triggerRealisticConfetti } from '../utils/confetti';

interface NavbarProps {
  onOpenLetter: () => void;
  friendName: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLetter, friendName }) => {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  const toggleMusic = () => {
    const isPlaying = soundManager.toggleBgm();
    setIsPlayingMusic(isPlaying);
    if (isPlaying) {
      soundManager.playChime(659.25, 0.4);
    }
  };

  const handleConfettiPop = () => {
    soundManager.playCelebration();
    triggerRealisticConfetti();
  };

  return (
    <header className="sticky top-4 z-40 max-w-4xl mx-auto px-4 sm:px-6">
      <nav className="flex items-center justify-between px-4 sm:px-6 py-3 rounded-full bg-white/70 backdrop-blur-md shadow-md shadow-pink-100/50 border border-pink-100/80">
        
        {/* Brand / Name badge */}
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-serif font-bold text-sm group-hover:scale-110 transition-transform">
            S
          </span>
          <span className="font-serif font-semibold text-stone-800 text-sm sm:text-base tracking-wide">
            {friendName}'s Day
          </span>
        </a>

        {/* Section shortcuts */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
          <a href="#memories" className="hover:text-pink-600 transition-colors">
            Memories
          </a>
          <a href="#reasons" className="hover:text-pink-600 transition-colors">
            Why You
          </a>
          <a href="#cake" className="hover:text-pink-600 transition-colors">
            Birthday Cake
          </a>
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Confetti button */}
          <button
            onClick={handleConfettiPop}
            title="Pop Birthday Confetti!"
            className="p-2 sm:px-3 sm:py-1.5 rounded-full bg-pink-50 hover:bg-pink-100 text-pink-600 text-xs font-medium flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-pink-500 fill-pink-500" />
            <span className="hidden sm:inline">Celebrate!</span>
          </button>

          {/* Background Ambient Melody Toggle */}
          <button
            onClick={toggleMusic}
            title={isPlayingMusic ? "Mute Background Melody" : "Play Gentle Birthday Melody"}
            className={`p-2 rounded-full transition-all hover:scale-105 active:scale-95 ${
              isPlayingMusic 
                ? 'bg-pink-500 text-white shadow-sm shadow-pink-300' 
                : 'bg-stone-100 hover:bg-pink-100 text-stone-600'
            }`}
          >
            {isPlayingMusic ? <Music className="w-4 h-4 animate-spin" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Open Letter button */}
          <button
            onClick={onOpenLetter}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 text-white text-xs sm:text-sm font-medium shadow-sm hover:shadow hover:scale-105 active:scale-95 transition-all"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Open Letter</span>
          </button>
        </div>
      </nav>
    </header>
  );
};
