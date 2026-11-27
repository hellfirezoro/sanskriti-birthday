import confetti from 'canvas-confetti';

/**
 * Trigger vibrant pastel & celebratory confetti bursts
 */
export const triggerRealisticConfetti = () => {
  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
    zIndex: 9999
  };

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
      colors: ['#FFB6C1', '#FFC0CB', '#E6E6FA', '#FFF0F5', '#F5DEB3', '#D8BFD8', '#FFD700', '#B0E0E6']
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
};

/**
 * Continuous gentle side cannons for the cake blowout
 */
export const triggerSideCannons = () => {
  const end = Date.now() + 3 * 1000;
  const colors = ['#f472b6', '#c084fc', '#fde047', '#fb7185', '#a78bfa'];

  (function frame() {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.8 },
      colors: colors,
      zIndex: 9999
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.8 },
      colors: colors,
      zIndex: 9999
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
};
