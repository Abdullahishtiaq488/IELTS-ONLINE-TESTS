'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Eye } from 'lucide-react';
import { FeaturedTip } from '@/types/tips';

interface FeaturedTipsProps {
    tips?: FeaturedTip[];
}

export function FeaturedTips({ tips = [] }: FeaturedTipsProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const TIPS_PER_SLIDE = 4;
    const totalSlides = Math.ceil((tips?.length || 0) / TIPS_PER_SLIDE);

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
                ? 'text-warning-400'
                : i - rating <= 0.5
                    ? 'text-warning-400'
                    : 'text-muted-500';
            const starFilled = i <= Math.floor(rating) || (i - rating <= 0.5);
            stars.push(
                <svg 
                    key={i} 
                    className={`h-3 w-3 sm:h-4 sm:w-4 ${starClass}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            );
        }
        return stars;
    };

    if (!tips || tips.length === 0) {
        return null;
    }

    const startIndex = currentSlide * TIPS_PER_SLIDE;
    const visibleTips = tips.slice(startIndex, startIndex + TIPS_PER_SLIDE);

    return (
        <section aria-labelledby="featured-tips-heading" className="space-y-4">
            <h2 id="featured-tips-heading" className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">FEATURED IELTS TIPS:</h2>
            <div>
                {visibleTips.map((tip) => (
                    <Link key={tip.id} href={`/tips/${tip.id}`} aria-label={`Read tip: ${tip.title}`}>
                        <div className="bg-white rounded-lg my-3 sm:my-4 p-3 sm:p-4 hover:shadow-lg transition-shadow overflow-hidden">
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                <div className="w-full sm:w-32 h-48 sm:h-24 flex-shrink-0">
                                    <Image
                                        src={tip.image}
                                        alt={`Illustration for ${tip.title}`}
                                        width={128}
                                        height={96}
                                        className="w-full h-full object-cover rounded"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-base sm:text-lg font-semibold text-primary-900 mb-1 line-clamp-2 sm:line-clamp-1">
                                        {tip.title}
                                    </h3>
                                    <div className="flex items-center gap-1 sm:gap-2 mb-1">
                                        <div className="flex" aria-label={`Rating: ${tip.rating} out of 5 stars`}>{renderStars(tip.rating)}</div>
                                        <span className="text-sm text-tertiary-500">({tip.votes} votes)</span>
                                    </div>
                                    <div className="flex flex-wrap items-center text-xs sm:text-sm text-tertiary-500 mb-2">
                                        <span className="text-primary-800">{tip.category}</span>
                                        <span className="mx-1 sm:mx-2" aria-hidden="true">•</span>
                                        <div className="flex items-center">
                                            <Eye className="h-3 w-3 sm:h-4 sm:w-4 mr-1" aria-hidden="true" />
                                            <span>{tip.views.toLocaleString()} views</span>
                                        </div>
                                        <span className="mx-1 sm:mx-2" aria-hidden="true">•</span>
                                        <span>{tip.date}</span>
                                    </div>
                                    <p className="text-xs sm:text-sm text-tertiary-600 line-clamp-2 sm:line-clamp-3">
                                        {tip.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            {totalSlides > 1 && (
                <div className="flex justify-center gap-1 sm:gap-2 mt-3 sm:mt-4" role="navigation" aria-label="Tip slides">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${index === currentSlide ? 'bg-white' : 'bg-secondary-400'}`}
                            onClick={() => setCurrentSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                            aria-current={index === currentSlide ? 'true' : 'false'}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}