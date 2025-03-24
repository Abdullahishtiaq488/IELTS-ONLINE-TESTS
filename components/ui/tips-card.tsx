import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IELTSTip } from '@/types/data';
import { Eye } from 'lucide-react';

interface TipCardProps {
    tip: IELTSTip;
}

export function TipCard({ tip }: TipCardProps) {
    const renderStars = (rating: number) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        
        // Create accessible rating text
        const ratingText = `${rating} out of 5 stars`;

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(<span key={i} className="text-warning-500" aria-hidden="true">★</span>);
            } else if (i === fullStars && hasHalfStar) {
                stars.push(<span key={i} className="text-warning-500" aria-hidden="true">★</span>);
            } else {
                stars.push(<span key={i} className="text-muted-900" aria-hidden="true">★</span>);
            }
        }

        return (
            <div className="flex ml-1 mr-2" aria-label={ratingText}>
                {stars}
            </div>
        );
    };

    const formatViews = (views: number) => {
        return new Intl.NumberFormat().format(views);
    };

    return (
        <article className="bg-white rounded-lg shadow-md overflow-hidden p-4">
            {/* Top section with image and title side by side */}
            <div className="flex mb-3">
                <div className="mr-4">
                    <Image
                        src={tip.image}
                        alt=""
                        width={100}
                        height={100}
                        className="rounded-md"
                        aria-hidden="true"
                    />
                </div>
                <div className="flex-1">
                    <Link href={tip.link} aria-label={`Read tip: ${tip.title}`}>
                        <h3 className="text-lg font-semibold text-primary-900 hover:text-primary-700 mb-1">{tip.title}</h3>
                    </Link>
                    <div className="flex items-center mb-2">
                        <span className="text-sm text-black">{tip.rating}</span>
                        {renderStars(tip.rating)}
                        <span className="text-xs text-black">({tip.votes} votes)</span>
                    </div>
                </div>
            </div>

            {/* Bottom section with full-width paragraph */}
            <div>
                <p className="text-sm text-tertiary-600 mb-3">{tip.description}</p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <span className="inline-block bg-tertiary-100 text-tertiary-800 px-2 py-1 rounded-md text-xs">
                            {tip.category}
                        </span>
                    </div>
                    <div className="flex items-center text-xs text-tertiary-500" aria-label={`${formatViews(tip.views)} views`}>
                        <Eye className="h-4 w-4 mr-1" aria-hidden="true" />
                        {formatViews(tip.views)}
                    </div>
                </div>
            </div>
        </article>
    );
} 