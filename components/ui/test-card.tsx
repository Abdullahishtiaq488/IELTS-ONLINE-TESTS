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

    // Create accessible rating text
    const ratingText = `${rating.toFixed(1)} out of 5 stars, based on ${votes.toLocaleString()} votes`;

    return (
        <a href="/test.pdf" download className="block h-full" aria-label={`Download ${title} - ${ratingText}`}>
            <div className="h-full rounded-lg overflow-hidden shadow-md border border-tertiary-200 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                {/* Card Image */}
                <div className="relative aspect-[4/3] w-full">
                    <Image
                        src={image}
                        alt={`Preview of ${title}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        priority={false}
                        className="object-cover"
                    />
                    <div className="absolute top-0 right-0 bg-secondary-600 text-white px-2 py-1 text-xs font-bold rounded-bl-lg" aria-label="New test">
                        NEW
                    </div>
                </div>

                {/* Card Content */}
                <div className="px-3 py-3 sm:px-4 sm:py-4">
                    <h3 className="text-sm font-bold text-tertiary-800 mb-2 line-clamp-2 hover:text-primary-600">{title}</h3>

                    {/* Rating with Stars */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center" aria-hidden="true">
                            <div className="flex mr-1">
                                {/* Full stars */}
                                {[...Array(fullStars)].map((_, i) => (
                                    <Star key={`full-${i}`} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                                ))}

                                {/* Half star if needed */}
                                {hasHalfStar && (
                                    <StarHalf className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                                )}

                                {/* Empty stars */}
                                {[...Array(emptyStars)].map((_, i) => (
                                    <Star key={`empty-${i}`} className="w-3 h-3 sm:w-4 sm:h-4 text-tertiary-300" />
                                ))}
                            </div>
                            <span className="text-xs sm:text-sm font-medium text-tertiary-700">{rating.toFixed(1)}</span>
                        </div>

                        {/* Votes moved to right side */}
                        <span className="text-xs text-tertiary-500 truncate">({votes.toLocaleString()} votes)</span>
                    </div>

                    <div className="mt-3 sm:mt-4 text-center">
                        <span className="inline-block bg-primary-100 text-primary-700 text-xs px-3 sm:px-4 py-1 sm:py-1.5 rounded-full font-medium hover:bg-primary-200 transition-colors">
                            Download Test
                        </span>
                    </div>
                </div>
            </div>
        </a>
    );
}