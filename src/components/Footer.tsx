import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { BirthdayData } from '../types';
import { soundManager } from '../utils/audio';

interface FooterProps {
  footer: BirthdayData['footer'];
  friendName: string;
}

export const Footer: React.FC<FooterProps> = ({ footer, friendName }) => {
  const handleLoveClick = () => {
    soundManager.playCelebration();
  };

  return (
    <footer className="mt-20 py-12 px-4 sm:px-6 text-center border-t border-pink-200/60 bg-gradient-to-b from-transparent to-pink-50/60">
      <div className="max-w-xl mx-auto space-y-4">
        
        {/* Floating Heart Button */}
        <button
          onClick={handleLoveClick}
          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 hover:bg-pink-200 text-pink-600 transition-all hover:scale-110 active:scale-90 shadow-sm"
          title="Send Extra Love"
        >
          <Heart className="w-6 h-6 fill-pink-500 text-pink-500 animate-pulse" />
        </button>

        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-800">
          {footer.message}
        </h3>

        <p className="font-handwriting text-xl sm:text-2xl text-stone-600">
          {footer.submessage}
        </p>

        <div className="pt-4 flex items-center justify-center gap-2 text-xs text-stone-400">
          <Sparkles className="w-3.5 h-3.5 text-pink-400" />
          <span>Made with love for Sanskriti's special day</span>
          <Sparkles className="w-3.5 h-3.5 text-pink-400" />
        </div>
      </div>
    </footer>
  );
};
