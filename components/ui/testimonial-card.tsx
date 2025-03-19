import React from 'react';
import Image from 'next/image';
import { Testimonial } from '@/types/data';

interface TestimonialCardProps {
    testimonial: Testimonial;
    className?: string;
}

export function TestimonialCard({ testimonial, className = '' }: TestimonialCardProps) {
    // Generate a random rating between 4 and 5 stars for visual appeal
    const rating = Math.floor(Math.random() * (5 - 4 + 1) + 4);

    const renderStars = (count: number) => {
        return Array(5).fill(0).map((_, i) => (
            <span key={i} className={`text-yellow-400 text-sm ${i >= count ? 'opacity-30' : ''}`}>★</span>
        ));
    };

    return (
        <div className={`flex flex-col items-center text-center p-6 mx-2 ${className}`}>
            <div className="mb-3">
                <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover border-2 border-gray-200"
                />
            </div>
            <h3 className="text-lg font-semibold text-blue-900 mb-1">{testimonial.name}</h3>
            <div className="flex items-center space-x-1 mb-3">
                {renderStars(rating)}
            </div>
            <p className="italic text-gray-600 leading-relaxed line-clamp-4">&quot;{testimonial.text}&quot;</p>
        </div>
    );
} 