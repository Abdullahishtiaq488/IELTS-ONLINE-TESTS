'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Eye } from 'lucide-react';

interface FeaturedTip {
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

interface FeaturedTipsProps {
    tips: FeaturedTip[];
}

export function FeaturedTips({ tips }: FeaturedTipsProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const TIPS_PER_SLIDE = 4;
    const totalSlides = Math.ceil(tips.length / TIPS_PER_SLIDE);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, [totalSlides]);

    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            const starClass = i <= Math.floor(rating)
                ? 'text-yellow-400'
                : i - rating <= 0.5
                    ? 'text-yellow-400'
                    : 'text-gray-300';
            stars.push(
                <svg key={i} className={`h-4 w-4 ${starClass}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            );
        }
        return stars;
    };

    const startIndex = currentSlide * TIPS_PER_SLIDE;
    const visibleTips = tips.slice(startIndex, startIndex + TIPS_PER_SLIDE);

    return (
        <div>
            <h2 className="text-2xl font-bold text-white text-center mb-6">FEATURED IELTS TIPS:</h2>
            <div>
                {visibleTips.map((tip) => (
                    <Link key={tip.id} href={`/tips/${tip.id}`}>
                        <div className=" p-2 hover:shadow-lg space transition-shadow">
                            <div className="flex gap-4 bg-white p-4">
                                <div className="w-32 h-24 flex-shrink-0">
                                    <Image
                                        src={tip.image}
                                        alt={tip.title}
                                        width={128}
                                        height={96}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">
                                        {tip.title}
                                    </h3>
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="flex">{renderStars(tip.rating)}</div>
                                        <span className="text-gray-600">({tip.votes} votes)</span>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-500 mb-2">
                                        <span className="text-blue-600">{tip.category}</span>
                                        <span className="mx-2">•</span>
                                        <div className="flex items-center">
                                            <Eye className="h-4 w-4 mr-1" />
                                            {tip.views.toLocaleString()}
                                        </div>
                                        <span className="mx-2">•</span>
                                        <span>{tip.date}</span>
                                    </div>
                                    <p className="text-sm text-gray-600 line-clamp-3">
                                        {tip.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="flex justify-center gap-2 mt-4">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${index === currentSlide ? 'bg-white' : 'bg-gray-400'
                            }`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
}