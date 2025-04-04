import React from 'react';
import { Section } from '@/components/ui/section';
import { TestimonialSlider } from '@/components/ui/testimonial-slider';
import { testimonials } from '@/data/testimonials';

export default function TestimonialsSection() {
    return (
        <Section background="gray">
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-secondary-900">Test Taker&apos;s Testimonials</h2>
                <h2 className="text-3xl font-bold text-primary-900">What IELTS test takers say about us</h2>
            </div>
            <TestimonialSlider testimonials={testimonials} />
            <div className="mt-12 flex justify-center">
                <button className="bg-primary-900 hover:bg-primary-950 text-white font-semibold py-2.5 px-10 rounded-md transition-colors shadow-sm">
                    View all
                </button>
            </div>
        </Section>
    );
} 