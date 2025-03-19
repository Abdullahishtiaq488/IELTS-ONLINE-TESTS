export interface LiveEvent {
    category: string;
    title: string;
    author: string;
    authorImage: string;
    cardImage: string;
    organizationLogo: string;
    organizationName: string;
    date: string;
    time: string;
    attendees: number;
    language: string;
    joinLink: string;
}

export interface MockTest {
    title: string;
    image: string;
    rating: number;
    votes: number;
    link: string;
}

export interface IELTSTip {
    title: string;
    image: string;
    rating: number;
    votes: number;
    description: string;
    category: 'Listening Tips' | 'Reading Tips' | 'Writing Tips' | 'Speaking tips';
    views: number;
    link: string;
}

export interface WhyUseFeature {
    title: string;
    description: string;
    image: string;
}

export interface IELTSStat {
    value: string;
    label: string;
    image: string;
}

export interface Testimonial {
    name: string;
    image: string;
    text: string;
}

export interface TestFeature {
    id: string;
    title: string;
    description: string;
    image: string;
}

export interface Partner {
    name: string;
    image: string;
    link: string;
} 