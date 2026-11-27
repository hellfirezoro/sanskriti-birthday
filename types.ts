export interface MemoryPhoto {
  id: string;
  url: string;
  caption: string;
  date?: string;
  rotationClass: string;
  tapeColor?: string;
}

export interface FriendshipReason {
  id: string;
  icon: string;
  title: string;
  description: string;
  tag: string;
}

export interface BirthdayData {
  friendName: string;
  nicknames: string[];
  hero: {
    title: string;
    subtitle: string;
    quotes: string[];
  };
  letter: {
    heading: string;
    subheading: string;
    date: string;
    salutation: string;
    paragraphs: string[];
    closing: string;
    signOff: string;
  };
  memories: MemoryPhoto[];
  reasons: FriendshipReason[];
  cakeSection: {
    title: string;
    subtitle: string;
    wishMessage: string;
    surpriseMessageTitle: string;
    surpriseMessageBody: string;
  };
  footer: {
    message: string;
    submessage: string;
  };
}
