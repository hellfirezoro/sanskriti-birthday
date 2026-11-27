import React from 'react';
import { Heart, Sparkles, X, Feather } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface SecretVaultModalProps {
  isOpen: boolean;
  onClose: () => void;
  friendName: string;
}

export const SecretVaultModal: React.FC<SecretVaultModalProps> = ({
  isOpen,
  onClose,
  friendName,
}) => {
  if (!isOpen) return null;

  const handleClose = () => {
    soundManager.playChime(523.25, 0.3);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-stone-900/65 backdrop-blur-md animate-fade-in"
      onClick={handleClose}
    >
      <div
        className="relative max-w-2xl w-full max-h-[92vh] overflow-y-auto scrapbook-paper p-6 sm:p-10 rounded-3xl border-2 border-pink-200/90 shadow-2xl bg-[#FFFDF9] animate-wax-stamp text-stone-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top washi tape */}
        <div className="washi-tape washi-tape-top bg-pink-200/90" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-stone-100/80 hover:bg-pink-100 text-stone-500 hover:text-pink-600 transition-colors shadow-xs"
          title="Close Secret Message"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Letter Stamp Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-200/80">
          <div className="flex items-center gap-2">
            <Feather className="w-5 h-5 text-pink-500" />
            <span className="font-handwriting text-xl text-stone-500">
              A Secret Note From The Heart 🌸
            </span>
          </div>

          <div className="w-10 h-10 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-md rotate-[-6deg] border-2 border-rose-200">
            <Heart className="w-5 h-5 fill-white" />
          </div>
        </div>

        {/* Title */}
        <div className="my-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 fill-pink-500 text-pink-500" />
            <span>Hidden Birthday Letter</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-stone-800">
            To My Favourite person, {friendName} ❤️
          </h2>
          <p className="font-handwriting text-xl text-pink-600 mt-1">
            (Yes, this secret message is just for you!)
          </p>
        </div>

        {/* Salutation */}
        <p className="font-handwriting text-2xl sm:text-3xl font-bold text-stone-800 mb-4">
          Hey {friendName},
        </p>

        {/* Letter Body */}
        <div className="space-y-4 font-sans text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>
            I don't think words will ever be enough to explain how much you mean to me, but I still want to try.
          </p>

          <p>
            You have this beautiful way of bringing positive vibes wherever you go. There's something about your presence that makes everything feel lighter, happier and more peaceful. Honestly, you are my comfort place. No matter how my day is going, talking to you or simply spending time with you somehow makes everything better.
          </p>

          <p>
            One thing I've realised is that there has never really been a moment when I've felt bored with you. Not once. Every conversation, every little moment, every random laugh and even our most meaningless talks have always felt beautiful. It's never about what we're doing; it's simply about having you around. Somehow, even the simplest moments become special when you're there.
          </p>

          <p>
            I genuinely cherish every little moment and every second I get to spend with you. Whether we're laughing over something silly, having random conversations or simply doing nothing, every moment becomes a memory I want to hold on to. I don't think you realise how much those little moments mean to me.
          </p>

          <p>
            And can we talk about how adorable and cute you are? Because seriously, you are SOOO adorable! Your little ways, your energy, your personality and just the way you are make you so special. Never lose that beautiful side of yourself because it's one of the many things that make you, YOU.
          </p>

          <p>
            So, here are some of the cutest and funniest pictures I have of you. 😂❤️ And I promise, these little treasures are staying with me — no one else gets to have this exclusive collection! Some memories are just too precious to share with the world. 😭
          </p>

          {/* Mini Polaroid Photos of Sanskriti */}
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

          {/* Beautiful paragraph about her smile */}
          <div className="p-4 rounded-2xl bg-pink-50/90 border border-pink-200 text-stone-800 shadow-xs">
            <p className="italic font-serif leading-relaxed text-sm sm:text-base">
              "You have this little charm in your smile that somehow makes this harsh world feel a little softer and easier to get through. Even on the days when everything feels exhausting, seeing you smile reminds me that there are still beautiful things in life worth smiling about."
            </p>
          </div>

          <p>
            There's something else I want you to know. Seeing you happy genuinely makes me happy. Your smile means more to me than you probably realise. And whenever you're sad, lost or going through something, somehow I end up feeling upset too. I always find myself wanting to do anything and everything just to bring that smile back to your face. Even if it's something small, if it makes you smile, I'll happily do it. Because honestly, seeing you happy is one of the best feelings in this world for me.
          </p>

          <p>
            You are someone I can be myself around, someone whose presence feels peaceful, and someone I never want to lose. Out of all the people who come and go in life, you are the one person I truly wish to keep close forever.
          </p>

          <p>
            I'm genuinely grateful that I have you in my life. Thank you for being my happy place, for all the smiles, all the laughs and for making even ordinary days feel extraordinary. You might not realise it, but your presence makes a bigger difference in my life than you can imagine.
          </p>

          <p>
            On your birthday, I just wish you endless happiness, beautiful opportunities, countless reasons to smile and everything your heart wishes for. You deserve all the good things this world has to offer.
          </p>

          <p>
            And lastly, I really hope we stay this close, no matter how much life changes or where it takes us. I hope our bond keeps growing stronger and stronger with every passing day. More memories, more laughter, more silly conversations, more adventures and countless birthdays together.
          </p>

          <p>
            I don't know what the future holds, but I genuinely hope it always has a little space for us and our bond.
          </p>

          {/* Highlighted Quote Callout */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-pink-100/90 via-rose-100/90 to-purple-100/90 border-l-4 border-pink-500 shadow-xs my-5">
            <p className="font-serif text-sm sm:text-base font-bold text-pink-950 italic">
              "Please stay the same adorable, precious and beautiful person you are. I never want to lose you or the chaotic bond we share."
            </p>
          </div>

          <p className="font-serif font-bold text-base sm:text-lg text-stone-800">
            Happy Birthday once again, {friendName}! ❤️
          </p>
        </div>

        {/* Sign Off */}
        <div className="mt-8 pt-6 border-t border-dashed border-stone-200 flex flex-col items-end">
          <p className="font-handwriting text-xl text-stone-600">
            With lots of love,
          </p>
          <p className="font-handwriting text-3xl font-extrabold text-pink-600 mt-1">
            Shreyash 😁🫶🏻
          </p>
        </div>

        {/* Bottom Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleClose}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white text-sm font-semibold shadow-md shadow-pink-300 hover:shadow-lg hover:scale-105 active:scale-95 transition-all"
          >
            I Cherish This Forever 💖
          </button>
        </div>
      </div>
    </div>
  );
};
