import React from 'react';
import { Mail, X, Heart, Feather } from 'lucide-react';
import { BirthdayData } from '../types';
import { soundManager } from '../utils/audio';

interface FloatingLetterModalProps {
  isOpen: boolean;
  onClose: () => void;
  letter: BirthdayData['letter'];
  friendName: string;
}

export const FloatingLetterModal: React.FC<FloatingLetterModalProps> = ({
  isOpen,
  onClose,
  letter,
  friendName,
}) => {
  if (!isOpen) return null;

  const handleClose = () => {
    soundManager.playChime(440, 0.25);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-stone-900/65 backdrop-blur-md animate-fade-in"
      onClick={handleClose}
    >
      <div
        className="relative max-w-2xl w-full max-h-[92vh] overflow-y-auto scrapbook-paper p-6 sm:p-10 rounded-3xl border border-pink-200/90 shadow-2xl bg-[#FFFDF9] animate-wax-stamp text-stone-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top washi tape */}
        <div className="washi-tape washi-tape-top bg-pink-200/90" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-stone-100 hover:bg-pink-100 text-stone-500 hover:text-pink-600 transition-colors"
          title="Close letter"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Letter Stamp / Badge */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-200">
          <div className="flex items-center gap-2">
            <Feather className="w-5 h-5 text-pink-500" />
            <span className="font-handwriting text-xl text-stone-500">
              {letter.date}
            </span>
          </div>

          <div className="w-10 h-10 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-md rotate-[-8deg] border-2 border-rose-300">
            <Heart className="w-5 h-5 fill-white" />
          </div>
        </div>

        {/* Heading */}
        <div className="mt-6 mb-4 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-stone-800 font-bold">
            {letter.heading}
          </h2>
          <p className="font-handwriting text-lg text-pink-600 mt-1">
            {letter.subheading}
          </p>
        </div>

        {/* Salutation */}
        <p className="font-handwriting text-2xl sm:text-3xl text-stone-800 font-bold mt-6 mb-4">
          {letter.salutation}
        </p>

        {/* Paragraphs */}
        <div className="space-y-4 text-stone-700 leading-relaxed font-sans text-sm sm:text-base">
          {letter.paragraphs.map((paragraph, index) => {
            const isSmileParagraph = paragraph.includes('You have this little charm in your smile');
            const isCallout = paragraph.includes('Please stay the same adorable');
            const isBirthdayWish = paragraph.includes('Happy Birthday once again');

            if (isSmileParagraph) {
              return (
                <div key={index} className="space-y-4">
                  {/* The Two Photos of Sanskriti placed right above this paragraph */}
                  <div className="my-6 grid grid-cols-2 gap-3 sm:gap-6 max-w-md mx-auto">
                    <div className="relative transform -rotate-2 hover:rotate-0 transition-transform">
                      <div className="washi-tape washi-tape-top bg-pink-200/90" />
                      <div className="p-2 sm:p-2.5 bg-white rounded-xl shadow-md border border-stone-200">
                        <div className="aspect-[4/5] rounded-lg overflow-hidden">
                          <img
                            src="/photos/sanskriti1.jpg"
                            alt="Sanskriti smiling"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="font-handwriting text-center text-sm sm:text-base text-stone-700 mt-1.5">
                          That radiant smile ✨
                        </p>
                      </div>
                    </div>

                    <div className="relative transform rotate-2 hover:rotate-0 transition-transform">
                      <div className="washi-tape washi-tape-top bg-purple-200/90" />
                      <div className="p-2 sm:p-2.5 bg-white rounded-xl shadow-md border border-stone-200">
                        <div className="aspect-[4/5] rounded-lg overflow-hidden">
                          <img
                            src="/photos/sanskriti2.jpg"
                            alt="Sanskriti"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="font-handwriting text-center text-sm sm:text-base text-stone-700 mt-1.5">
                          Precious moments 🌸
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Paragraph with soft quote border */}
                  <div className="p-4 rounded-2xl bg-pink-50/90 border border-pink-200 text-stone-800 shadow-xs">
                    <p className="italic font-serif leading-relaxed text-sm sm:text-base">
                      "{paragraph}"
                    </p>
                  </div>
                </div>
              );
            }

            if (isCallout) {
              return (
                <div
                  key={index}
                  className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-pink-100/90 via-rose-100/90 to-purple-100/90 border-l-4 border-pink-500 shadow-xs my-4"
                >
                  <p className="font-serif text-sm sm:text-base font-bold text-pink-950 italic">
                    "{paragraph}"
                  </p>
                </div>
              );
            }

            if (isBirthdayWish) {
              return (
                <p key={index} className="font-serif font-bold text-base sm:text-lg text-stone-800 pt-2">
                  {paragraph}
                </p>
              );
            }

            return (
              <p key={index}>
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Sign Off */}
        <div className="mt-8 pt-6 border-t border-dashed border-stone-200 flex flex-col items-end">
          <p className="font-handwriting text-xl text-stone-600">
            {letter.closing}
          </p>
          <p className="font-handwriting text-3xl font-extrabold text-pink-600 mt-1">
            {letter.signOff}
          </p>
        </div>
      </div>
    </div>
  );
};

/**
 * Floating cute envelope badge positioned in the bottom corner
 */
export const FloatingEnvelopeButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      title="Open Sanskriti's Letter 💌"
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 text-white shadow-xl shadow-pink-500/30 hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 animate-float-medium"
    >
      <div className="relative">
        <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-yellow-300 rounded-full animate-ping" />
      </div>
      <span className="font-medium text-xs sm:text-sm tracking-wide hidden sm:inline">
        Read Letter 💌
      </span>
    </button>
  );
};
