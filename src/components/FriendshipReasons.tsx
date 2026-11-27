import React from 'react';
import { 
  Sparkles, 
  HeartHandshake, 
  Smile, 
  Compass, 
  MessageCircleHeart, 
  Gift, 
  Heart,
  Star,
  Sun
} from 'lucide-react';
import { FriendshipReason } from '../types';
import { soundManager } from '../utils/audio';

interface FriendshipReasonsProps {
  reasons: FriendshipReason[];
  friendName: string;
}

// Icon mapping
const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-6 h-6 text-pink-500" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6 text-purple-500" />,
  Smile: <Smile className="w-6 h-6 text-amber-500" />,
  Compass: <Compass className="w-6 h-6 text-rose-500" />,
  MessageCircleHeart: <MessageCircleHeart className="w-6 h-6 text-pink-600" />,
  Gift: <Gift className="w-6 h-6 text-indigo-500" />,
  Sun: <Sun className="w-6 h-6 text-amber-500" />,
  Heart: <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />,
};

export const FriendshipReasons: React.FC<FriendshipReasonsProps> = ({ reasons, friendName }) => {
  const handleCardClick = () => {
    soundManager.playChime(587.33, 0.35);
  };

  return (
    <section id="reasons" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      
      {/* Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100/80 text-pink-700 text-xs sm:text-sm font-medium mb-3">
          <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
          <span>The Greatest Bestie Traits</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl text-stone-800 font-bold">
          Reasons Why You're My Favourite Person 💖
        </h2>
        <p className="font-handwriting text-2xl text-stone-600 mt-2">
          Out of 8 billion people, nobody does friendship quite like {friendName}!
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((reason, index) => (
          <div
            key={reason.id}
            onClick={handleCardClick}
            className="group relative scrapbook-paper p-6 rounded-2xl border border-stone-200/80 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer bg-white/95 flex flex-col justify-between"
          >
            {/* Top decorative pin or washi corner */}
            <div className="absolute -top-2.5 right-5 w-7 h-7 rounded-full bg-pink-100 border border-pink-200 flex items-center justify-center text-xs shadow-2xs">
              <Star className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
            </div>

            <div>
              {/* Tag badge */}
              <div className="inline-block px-2.5 py-0.5 rounded-md bg-stone-100 text-stone-600 text-[11px] font-semibold uppercase tracking-wider mb-4 group-hover:bg-pink-100 group-hover:text-pink-700 transition-colors">
                {reason.tag}
              </div>

              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-pink-50 group-hover:scale-110 transition-transform shrink-0">
                  {iconMap[reason.icon] || <Sparkles className="w-6 h-6 text-pink-500" />}
                </div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-stone-800 group-hover:text-pink-600 transition-colors leading-snug">
                  {reason.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                {reason.description}
              </p>
            </div>

            {/* Bottom Number */}
            <div className="mt-5 pt-3 border-t border-dashed border-stone-200 flex items-center justify-between text-xs text-stone-400">
              <span className="font-handwriting text-base text-pink-500 font-semibold">
                Reason #{index + 1}
              </span>
              <span>Tap to cherish 🌸</span>
            </div>
          </div>
        ))}
      </div>

      {/* Friendship Mantra Banner */}
      <div className="mt-14 max-w-2xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-pink-100/80 via-purple-100/80 to-rose-100/80 border border-pink-200 text-center shadow-sm">
        <p className="font-handwriting text-2xl sm:text-3xl text-stone-800 font-semibold">
          "More adventures, more laughter and more madness with Sanskriti!"
        </p>
        <p className="text-xs text-stone-500 uppercase tracking-widest mt-1 font-semibold">
          — The Forever Bestie Contract ✨
        </p>
      </div>

    </section>
  );
};
