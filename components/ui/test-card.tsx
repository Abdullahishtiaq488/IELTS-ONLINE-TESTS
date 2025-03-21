import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, StarHalf } from 'lucide-react';

interface TestCardProps {
    title: string;
    image: string;
    rating: number;
    votes: number;
    link: string;
}

export function TestCard({ title, image, rating, votes, link }: TestCardProps) {
    // Calculate full stars, half stars, and empty stars
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.3 && rating % 1 <= 0.7;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <Link href={link}>
            <div className="flex flex-col h-full rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-md border border-gray-200 bg-white">
                {/* Card Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-0 right-0 bg-secondary-600 text-white px-2 py-1 text-xs font-bold rounded-bl-lg">
                        NEW
                    </div>
                </div>

                {/* Card Content */}
                <div className="px-4 py-4 flex flex-col flex-grow">
                    <h3 className="text-sm font-bold text-gray-800 mb-3 line-clamp-2 hover:text-blue-600">{title}</h3>

                    {/* Rating with Stars */}
                    <div className="flex items-center mt-auto">
                        <div className="flex mr-2">
                            {/* Full stars */}
                            {[...Array(fullStars)].map((_, i) => (
                                <Star key={`full-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}

                            {/* Half star if needed */}
                            {hasHalfStar && (
                                <StarHalf className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            )}

                            {/* Empty stars */}
                            {[...Array(emptyStars)].map((_, i) => (
                                <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
                            ))}
                        </div>

                        <span className="text-sm font-medium text-gray-700">{rating.toFixed(1)}</span>
                        <span className="text-xs text-gray-500 ml-2">({votes.toLocaleString()} votes)</span>
                    </div>
                    
                    <div className="mt-4 text-center">
                        <span className="inline-block bg-blue-100 text-blue-700 text-xs px-4 py-1.5 rounded-full font-medium hover:bg-blue-200 transition-colors">
                            Take Test
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
} 