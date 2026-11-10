export type Language = 'en' | 'ta';

export interface ServiceItem {
  id: string;
  name: { en: string; ta: string };
  shortDesc: { en: string; ta: string };
  fullDesc: { en: string; ta: string };
  priceStarts: string;
  duration: string;
  features: { en: string[]; ta: string[] };
  iconName: string;
  recommendedFor: { en: string; ta: string };
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  date: string;
  rating: number;
  comment: { en: string; ta: string };
  serviceUsed: { en: string; ta: string };
  verified: boolean;
}

export interface GalleryItem {
  id: string;
  title: { en: string; ta: string };
  category: 'cleaning' | 'installation' | 'repair' | 'commercial';
  categoryLabel: { en: string; ta: string };
  image: string;
  description: { en: string; ta: string };
}

export interface TiruppurArea {
  name: string;
  tamilName: string;
  estimatedArrival: string;
  zone: string;
}
