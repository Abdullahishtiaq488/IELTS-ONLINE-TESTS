export interface Tip {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    date?: string;
    views: number;
    votes?: number;
}

export interface FeaturedTip {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    date: string;
    views: number;
    rating: number;
    votes: number;
}

export interface PopularTip {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    views: number;
} 