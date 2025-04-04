import React from 'react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Testimonial } from '@/types/data';
import { TestimonialSlider } from '@/components/ui/testimonial-slider';

export const metadata = {
    title: 'Testimonials | The IELTS Project',
    description: 'Read success stories from students who have used The IELTS Project to achieve their target IELTS scores.',
};

// Sample testimonial data
const testimonials: Testimonial[] = [
    {
        name: "Sarah Johnson",
        role: "Achieved Band 8",
        text: "The IELTS Project helped me get the score I needed for my university application. The practice tests were incredibly similar to the actual exam, which made me feel confident on test day.",
        image: "/images/testimon-f1.jpg",
        rating: 5
    },
    {
        name: "David Chen",
        role: "Achieved Band 7.5",
        text: "I struggled with the speaking section, but the tips and practice materials from The IELTS Project made a huge difference. The detailed feedback was invaluable.",
        image: "/images/testimon-m1.jpg",
        rating: 5
    },
    {
        name: "Aisha Patel",
        role: "Achieved Band 8.5",
        text: "I had taken the IELTS test twice before using The IELTS Project resources, and I couldn't break the 7.0 barrier. The strategies I learned here helped me exceed my target score.",
        image: "/images/testimon-f2.jpg",
        rating: 5
    },
    {
        name: "Michael Kim",
        role: "Achieved Band 7",
        text: "What I appreciate most about The IELTS Project is how it breaks down complex writing tasks into manageable steps. My writing score improved from 6 to 7.5!",
        image: "/images/testimon-m2.jpg",
        rating: 4
    },
    {
        name: "Elena Rodriguez",
        role: "Achieved Band 7.5",
        text: "The listening practice tests with varied accents were exactly what I needed. This platform offers much more realistic practice than any other resources I tried.",
        image: "/images/testimon-f3.jpg",
        rating: 5
    },
    {
        name: "Ahmed Hassan",
        role: "Achieved Band 8",
        text: "From the practice tests to the study guides, everything is designed to give you the skills and confidence you need for the test. Worth every penny!",
        image: "/images/testimon-m3.jpg",
        rating: 5
    },
    {
        name: "Fatima Al-Farsi",
        role: "Achieved Band 7",
        text: "I only had three weeks to prepare for my IELTS exam. The structured study plans and focused practice materials helped me efficiently prepare in a short time.",
        image: "/images/testimon-f1.jpg",
        rating: 4
    },
    {
        name: "James Wilson",
        role: "Achieved Band 7.5",
        text: "The reading strategies taught on The IELTS Project transformed my approach to the reading section. I went from running out of time to finishing with minutes to spare.",
        image: "/images/testimon-m1.jpg",
        rating: 5
    }
];

export default function TestimonialsPage() {
    return (
        <main className="flex-1">
            <Section background="blue">
                <Container>
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">Student Success Stories</h1>
                        <p className="text-lg text-primary-700">
                            Read what students from around the world are saying about their experience with The IELTS Project&apos;s preparation materials.
                        </p>
                    </div>
                </Container>
            </Section>

            <Section background="white">
                <Container>
                    <div className="max-w-6xl mx-auto mb-16">
                        <TestimonialSlider testimonials={testimonials} />
                    </div>

                    <div className="max-w-3xl mx-auto text-center mt-20">
                        <h2 className="text-2xl font-bold text-primary-900 mb-4">Share Your Success Story</h2>
                        <p className="text-primary-700 mb-8">
                            Have you achieved your target IELTS score using our materials? We&apos;d love to hear about your experience!
                            Send us your story at testimonials@theieltsproject.com.
                        </p>
                    </div>
                </Container>
            </Section>
        </main>
    );
} 