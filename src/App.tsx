import React, { useState } from 'react';
import { birthdayData } from './data/birthdayData';
import { OpeningScreen } from './components/OpeningScreen';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PhotoMemories } from './components/PhotoMemories';
import { CherishedMoments } from './components/CherishedMoments';
import { FunTreasures } from './components/FunTreasures';
import { FriendshipReasons } from './components/FriendshipReasons';
import { InteractiveCake } from './components/InteractiveCake';
import { FloatingLetterModal, FloatingEnvelopeButton } from './components/FloatingLetterModal';
import { SecretVaultModal } from './components/SecretVaultModal';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [hasOpenedSurprise, setHasOpenedSurprise] = useState(false);
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [isSecretVaultOpen, setIsSecretVaultOpen] = useState(false);

  return (
    <div className="relative min-h-screen text-stone-800 font-sans selection:bg-pink-200 selection:text-pink-900 overflow-x-hidden">
      
      {/* 1. Opening Animation Screen */}
      {!hasOpenedSurprise && (
        <OpeningScreen
          onOpen={() => setHasOpenedSurprise(true)}
          friendName={birthdayData.friendName}
        />
      )}

      {/* Floating Aesthetic Background: Pastel Glows, Bows, Flowers & Hearts */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
        
        {/* Soft pastel ambient glows */}
        <div className="absolute top-[5%] left-[8%] w-72 h-72 rounded-full bg-pink-100/50 blur-3xl animate-float-slow" />
        <div className="absolute top-[40%] right-[5%] w-96 h-96 rounded-full bg-purple-100/40 blur-3xl animate-float-medium" />
        <div className="absolute bottom-[10%] left-[12%] w-80 h-80 rounded-full bg-amber-50/60 blur-3xl animate-float-slow" />

        {/* 🎀 FLOATING BOWS */}
        <div className="absolute top-[8%] left-[4%] text-2xl sm:text-3xl opacity-75 animate-float-slow rotate-[-12deg]">
          🎀
        </div>
        <div className="absolute top-[28%] right-[6%] text-3xl sm:text-4xl opacity-80 animate-float-medium rotate-[15deg]">
          🎀
        </div>
        <div className="absolute top-[52%] left-[3%] text-2xl sm:text-3xl opacity-75 animate-float-slow rotate-[8deg]">
          🎀
        </div>
        <div className="absolute top-[75%] right-[5%] text-3xl sm:text-4xl opacity-80 animate-float-medium rotate-[-10deg]">
          🎀
        </div>
        <div className="absolute bottom-[8%] left-[7%] text-2xl sm:text-3xl opacity-70 animate-float-slow rotate-[14deg]">
          🎀
        </div>

        {/* 🌸 FLOATING FLOWERS */}
        <div className="absolute top-[14%] right-[10%] text-2xl sm:text-3xl opacity-75 animate-float-medium">
          🌸
        </div>
        <div className="absolute top-[22%] left-[12%] text-xl sm:text-2xl opacity-70 animate-float-slow">
          🌷
        </div>
        <div className="absolute top-[38%] left-[5%] text-2xl sm:text-3xl opacity-75 animate-float-medium">
          🌺
        </div>
        <div className="absolute top-[48%] right-[8%] text-2xl sm:text-3xl opacity-70 animate-float-slow">
          🌼
        </div>
        <div className="absolute top-[68%] left-[9%] text-3xl sm:text-4xl opacity-80 animate-float-medium">
          🌸
        </div>
        <div className="absolute top-[82%] right-[12%] text-2xl sm:text-3xl opacity-75 animate-float-slow">
          🌷
        </div>
        <div className="absolute bottom-[4%] right-[8%] text-3xl sm:text-4xl opacity-80 animate-float-medium">
          🌸
        </div>

        {/* 💖 FLOATING HEARTS */}
        <div className="absolute top-[6%] right-[18%] text-xl sm:text-2xl opacity-75 animate-float-medium">
          💖
        </div>
        <div className="absolute top-[18%] left-[6%] text-2xl sm:text-3xl opacity-80 animate-float-slow">
          💕
        </div>
        <div className="absolute top-[32%] right-[3%] text-2xl sm:text-3xl opacity-70 animate-float-fast">
          💗
        </div>
        <div className="absolute top-[60%] right-[4%] text-2xl sm:text-3xl opacity-80 animate-float-slow">
          💖
        </div>
        <div className="absolute top-[64%] left-[4%] text-xl sm:text-2xl opacity-75 animate-float-medium">
          💝
        </div>
        <div className="absolute top-[88%] left-[8%] text-2xl sm:text-3xl opacity-80 animate-float-slow">
          💕
        </div>
        <div className="absolute bottom-[12%] right-[15%] text-xl sm:text-2xl opacity-75 animate-float-medium">
          💗
        </div>

      </div>

      {/* Main Website Content (Visible after opening) */}
      <main className={`relative z-10 transition-opacity duration-1000 ${hasOpenedSurprise ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Floating Navbar */}
        <Navbar
          onOpenLetter={() => setIsLetterOpen(true)}
          friendName={birthdayData.friendName}
        />

        {hasOpenedSurprise && (
          <FloatingEnvelopeButton onClick={() => setIsLetterOpen(true)} />
        )}

        {/* Hero Welcome Section */}
        <HeroSection
          data={birthdayData}
          onOpenLetter={() => setIsLetterOpen(true)}
        />

        {/* 1. Moments (Sanskriti's portraits & smile paragraph) */}
        <PhotoMemories
          memories={birthdayData.memories}
          friendName={birthdayData.friendName}
        />

        {/* 2. Cherished Moments Together (Photos together & cherish paragraph) */}
        <CherishedMoments
          friendName={birthdayData.friendName}
        />

        {/* 3. The Cutest & Funniest Treasures (Filter screenshots & vault paragraph) */}
        <FunTreasures />

        {/* 4. Friendship Reasons Section */}
        <FriendshipReasons
          reasons={birthdayData.reasons}
          friendName={birthdayData.friendName}
        />

        {/* 5. Interactive Chocolate Cake Section with Teddy, Oreo & KitKat */}
        <InteractiveCake
          friendName={birthdayData.friendName}
          onOpenSecretModal={() => setIsSecretVaultOpen(true)}
        />

        {/* 6. Footer */}
        <Footer
          footer={birthdayData.footer}
          friendName={birthdayData.friendName}
        />

        {/* Modals */}
        <FloatingLetterModal
          isOpen={isLetterOpen}
          onClose={() => setIsLetterOpen(false)}
          letter={birthdayData.letter}
          friendName={birthdayData.friendName}
        />

        <SecretVaultModal
          isOpen={isSecretVaultOpen}
          onClose={() => setIsSecretVaultOpen(false)}
          friendName={birthdayData.friendName}
        />

      </main>

    </div>
  );
};

export default App;
