'use client';

import React, { useState } from 'react';
import { Testimonial } from '@/types/data';
import { TestimonialCard } from './testimonial-card';

interface TestimonialSliderProps {
    testimonials: Testimonial[];
}

export function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    // Display 3 testimonials at a time
    const visibleTestimonials = [
        testimonials[activeIndex],
        testimonials[(activeIndex + 1) % testimonials.length],
        testimonials[(activeIndex + 2) % testimonials.length]
    ];

    const goToSlide = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                {visibleTestimonials.map((testimonial, idx) => (
                    <TestimonialCard
                        key={idx}
                        testimonial={testimonial}
                        className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                    />
                ))}
            </div>

            <div className="flex justify-center gap-3">
                {testimonials.slice(0, Math.ceil(testimonials.length / 3)).map((_, idx) => {
                    const slideIndex = idx * 3;
                    return (
                        <button
                            key={idx}
                            onClick={() => goToSlide(slideIndex)}
                            className={`w-3 h-3 rounded-full transition-colors ${activeIndex === slideIndex ? 'bg-blue-800' : 'bg-gray-300 hover:bg-blue-300'}`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    );
                })}
            </div>
        </div>
    );
} 