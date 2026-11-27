/**
 * Web Audio API synthesizer for adorable sound effects and warm lofi ambient background music
 * No external audio files or broken links required!
 */

class SoundManager {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private isBgmPlaying: boolean = false;
  private bgmTimer: number | null = null;

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  // Play a gentle bell/chime note
  playChime(freq = 587.33, duration = 0.6) {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Audio autoplay policy fallback
    }
  }

  // Cute unwrapping present / pop effect
  playUnwrap() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playChime(freq, 0.45);
      }, idx * 90);
    });
  }

  // Candle blow wind swoosh + twinkle
  playBlowCandle() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      // Gentle wind filter
      const bufferSize = ctx.sampleRate * 0.4;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.35);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noise.start();
      noise.stop(ctx.currentTime + 0.35);

      // Sparkle sequence after blow
      setTimeout(() => {
        this.playCelebration();
      }, 350);
    } catch {
      // Audio context handled
    }
  }

  // Celebratory birthday fanfare
  playCelebration() {
    if (this.isMuted) return;
    const chords = [523.25, 659.25, 783.99, 987.77, 1046.50]; // C E G B C
    chords.forEach((note, i) => {
      setTimeout(() => {
        this.playChime(note, 0.7);
      }, i * 75);
    });
  }

  // Toggle ambient gentle acoustic notes loop
  toggleBgm(): boolean {
    const ctx = this.getContext();
    if (!ctx) return false;

    if (this.isBgmPlaying) {
      this.stopBgm();
      return false;
    } else {
      this.startBgm();
      return true;
    }
  }

  startBgm() {
    this.isBgmPlaying = true;
    const melody = [
      { f: 392.00, d: 0.8 }, // G4
      { f: 440.00, d: 0.8 }, // A4
      { f: 493.88, d: 0.8 }, // B4
      { f: 523.25, d: 1.2 }, // C5
      { f: 440.00, d: 0.8 }, // A4
      { f: 392.00, d: 1.4 }, // G4
    ];

    let noteIdx = 0;
    const playNext = () => {
      if (!this.isBgmPlaying) return;
      const note = melody[noteIdx % melody.length];
      this.playChime(note.f, note.d);
      noteIdx++;
      this.bgmTimer = window.setTimeout(playNext, 1100);
    };

    playNext();
  }

  stopBgm() {
    this.isBgmPlaying = false;
    if (this.bgmTimer) {
      clearTimeout(this.bgmTimer);
      this.bgmTimer = null;
    }
  }

  getIsBgmPlaying() {
    return this.isBgmPlaying;
  }
}

export const soundManager = new SoundManager();
