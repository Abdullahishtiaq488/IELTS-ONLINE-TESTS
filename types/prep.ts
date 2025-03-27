export interface PrepCard {
    id: string;
    title: string;
    description: string;
    image: string;
    price: number;
    originalPrice?: number;
    currency: string;
    localPrice: number;
    localCurrency: string;
    isBestSeller?: boolean;
    isNew?: boolean;
    soldCount: number;
    url: string;
    segment?: 'reading' | 'writing' | 'listening' | 'speaking' | 'bestSeller';
}

export interface PrepSection {
    title: string;
    description: string;
    backgroundImage?: string;
    cards: PrepCard[];
}

export interface PrepData {
    reading: PrepSection;
    writing: PrepSection;
    listening: PrepSection;
    speaking: PrepSection;
} 