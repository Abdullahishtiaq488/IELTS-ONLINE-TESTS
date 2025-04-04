import React from 'react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import Image from 'next/image';

export const metadata = {
    title: 'Testimonials | The IELTS Project',
    description: 'Read what students are saying about The IELTS Project\'s IELTS preparation materials and practice tests.',
};

const testimonials = [
    {
        id: 1,
        name: 'Arjun Patel',
        country: 'India',
        image: '/images/testimon-m1.jpg',
        score: 'Band 8.0',
        text: 'The practice tests on this platform were extremely similar to my actual IELTS exam. The detailed feedback after each test helped me identify my weak areas and improve them. I managed to achieve a band 8.0 on my first attempt!'
    },
    {
        id: 2,
        name: 'Fatima Ahmed',
        country: 'Pakistan',
        image: '/images/testimon-f1.jpg',
        score: 'Band 7.5',
        text: 'I struggled with the writing section until I found The IELTS Project. The sample answers and examiner comments were invaluable. The structure and approach they suggested helped me improve from a 6.0 to a 7.5 in just two months.'
    },
    {
        id: 3,
        name: 'Chen Wei',
        country: 'China',
        image: '/images/testimon-m2.jpg',
        score: 'Band 7.0',
        text: 'As a non-native English speaker, the listening section was always challenging for me. The varied accents and realistic test conditions on this platform prepared me perfectly. The tips section gave me strategies that made a real difference.'
    },
    {
        id: 4,
        name: 'Maria Rodriguez',
        country: 'Colombia',
        image: '/images/testimon-f2.jpg',
        score: 'Band 7.5',
        text: 'What I love about The IELTS Project is how comprehensive it is. From vocabulary exercises to full practice tests, everything I needed was in one place. The speaking practice tools with AI feedback were especially helpful.'
    },
    {
        id: 5,
        name: 'Ahmed Hassan',
        country: 'Egypt',
        image: '/images/testimon-m3.jpg',
        score: 'Band 8.0',
        text: 'After failing to achieve my target score twice, I found The IELTS Project. The methodical approach to preparation and high-quality practice materials made all the difference. The reading strategies they taught were game-changers!'
    },
    {
        id: 6,
        name: 'Sophia Kim',
        country: 'South Korea',
        image: '/images/testimon-f3.jpg',
        score: 'Band 7.0',
        text: 'The mock tests on this platform accurately reflected the real IELTS exam format and difficulty level. The personalized study plan helped me focus my efforts efficiently. I especially appreciated the quick response from support when I had questions.'
    }
];

export default function TestimonialsPage() {
    return (
        <main className="flex-1">
            <Section background="blue-50">
                <Container>
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">Student Success Stories</h1>
                        <p className="text-lg text-primary-700">
                            Read what students from around the world are saying about their experience with The IELTS Project's preparation materials.
                        </p>
                    </div>
                </Container>
            </Section>

            <Section background="white">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-muted-200">
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <div className="mr-4">
                                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary-100">
                                                <Image
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    width={64}
                                                    height={64}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-primary-900">{testimonial.name}</h3>
                                            <p className="text-primary-600 text-sm">{testimonial.country}</p>
                                            <div className="mt-1 inline-block bg-success-100 px-2 py-1 rounded text-xs font-medium text-success-800">
                                                {testimonial.score}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <svg className="absolute -top-2 -left-2 w-8 h-8 text-primary-200" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                        </svg>
                                        <p className="text-primary-700 mt-2 pl-6">{testimonial.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <h2 className="text-2xl font-bold text-primary-900 mb-6">Join thousands of successful students</h2>
                        <a href="/ielts-exam-library" className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-md transition-colors shadow-sm">
                            Start practicing now
                        </a>
                    </div>
                </Container>
            </Section>
        </main>
    );
} 