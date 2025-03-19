import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IELTSTip } from '@/types/data';

interface TipCardProps {
    tip: IELTSTip;
}

export function TipCard({ tip }: TipCardProps) {
    const renderStars = (rating: number) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(<span key={i} className="text-yellow-400">★</span>);
            } else if (i === fullStars && hasHalfStar) {
                stars.push(<span key={i} className="text-yellow-400">★</span>);
            } else {
                stars.push(<span key={i} className="text-gray-300">★</span>);
            }
        }

        return stars;
    };

    const formatViews = (views: number) => {
        return new Intl.NumberFormat().format(views);
    };

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden p-4">
            {/* Top section with image and title side by side */}
            <div className="flex mb-3">
                <div className="mr-4">
                    <Image
                        src={tip.image}
                        alt={tip.title}
                        width={100}
                        height={100}
                        className="rounded-md"
                    />
                </div>
                <div className="flex-1">
                    <Link href={tip.link}>
                        <h3 className="text-lg font-semibold text-blue-900 hover:text-blue-700 mb-1">{tip.title}</h3>
                    </Link>
                    <div className="flex items-center mb-2">
                        <span className="text-sm text-gray-600">{tip.rating}</span>
                        <div className="flex ml-1 mr-2">{renderStars(tip.rating)}</div>
                        <span className="text-xs text-gray-500">({tip.votes} votes)</span>
                    </div>
                </div>
            </div>

            {/* Bottom section with full-width paragraph */}
            <div>
                <p className="text-sm text-gray-600 mb-3">{tip.description}</p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <span className="inline-block bg-gray-100 text-gray-800 px-2 py-1 rounded-md text-xs">
                            {tip.category}
                        </span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        {formatViews(tip.views)}
                    </div>
                </div>
            </div>
        </div>
    );
} 