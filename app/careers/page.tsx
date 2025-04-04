import React from 'react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import Image from 'next/image';

export const metadata = {
    title: 'Careers | The IELTS Project',
    description: 'Join our team at The IELTS Project and help students worldwide achieve their IELTS goals.',
};

const values = [
    {
        title: 'Innovation',
        description: 'We embrace new technologies and ideas to continuously improve our platform.',
        icon: '/images/value-innovation.svg'
    },
    {
        title: 'Accessibility',
        description: 'We believe in making quality IELTS preparation available to students worldwide.',
        icon: '/images/value-accessibility.svg'
    },
    {
        title: 'Excellence',
        description: 'We strive for the highest standards in all our educational content and features.',
        icon: '/images/value-excellence.svg'
    },
    {
        title: 'Community',
        description: 'We foster a supportive environment for both our team and our users.',
        icon: '/images/value-community.svg'
    }
];

export default function CareersPage() {
    return (
        <main className="flex-1">
            <Section background="blue-50">
                <Container>
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">Join The IELTS Project</h1>
                        <p className="text-lg text-primary-700 mb-10">
                            Help us empower students worldwide to achieve their IELTS goals and unlock international opportunities.
                        </p>
                        <div className="relative w-full max-w-2xl mx-auto aspect-video rounded-xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/studying.jpg"
                                alt="Students studying for IELTS"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </Container>
            </Section>

            <Section background="white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-primary-900 mb-6 text-center">Our Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            {values.map((value, index) => (
                                <div key={index} className="bg-primary-50 p-6 rounded-lg border border-primary-100">
                                    <div className="flex items-start">
                                        <div className="mr-4">
                                            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary-700">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-primary-900 mb-2">{value.title}</h3>
                                            <p className="text-primary-700">{value.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 text-center bg-primary-50 p-8 rounded-xl">
                            <h2 className="text-2xl font-bold text-primary-900 mb-4">Want to join our team?</h2>
                            <p className="text-primary-700 mb-6 max-w-2xl mx-auto">
                                We're always looking for talented individuals to join our team. Send us your resume and tell us how you can contribute to The IELTS Project.
                            </p>
                            <a href="mailto:careers@theieltsproject.com" className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-md transition-colors shadow-sm">
                                Send Your Resume
                            </a>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
}