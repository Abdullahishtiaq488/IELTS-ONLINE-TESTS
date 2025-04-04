import React from 'react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import Link from 'next/link';

export const metadata = {
    title: 'Sitemap | The IELTS Project',
    description: 'Browse all pages of The IELTS Project website in one convenient location.',
};

interface SitemapItem {
    title: string;
    description: string;
    url: string;
    children?: SitemapItem[];
}

export default function SitemapPage() {
    const sitemapData: SitemapItem[] = [
        {
            title: 'Home',
            description: 'The main landing page of The IELTS Project.',
            url: '/',
        },
        {
            title: 'IELTS Exam Library',
            description: 'Access our comprehensive collection of IELTS practice materials.',
            url: '/ielts-exam-library',
        },
        {
            title: 'IELTS Preparation',
            description: 'Explore our IELTS preparation resources and guidance.',
            url: '/ielts-prep',
            children: [
                {
                    title: 'Listening Preparation',
                    description: 'Strategies and practice for the IELTS Listening test.',
                    url: '/ielts-listening-prep',
                },
                {
                    title: 'Reading Preparation',
                    description: 'Strategies and practice for the IELTS Reading test.',
                    url: '/ielts-reading-prep',
                },
                {
                    title: 'Writing Preparation',
                    description: 'Strategies and practice for the IELTS Writing test.',
                    url: '/ielts-writing-prep',
                },
                {
                    title: 'Speaking Preparation',
                    description: 'Strategies and practice for the IELTS Speaking test.',
                    url: '/ielts-speaking-prep',
                },
            ],
        },
        {
            title: 'IELTS Tips',
            description: 'Expert tips and strategies for IELTS success.',
            url: '/ielts-tips',
            children: [
                {
                    title: 'Listening Tips',
                    description: 'Expert tips to improve your IELTS Listening score.',
                    url: '/listening-tips',
                },
                {
                    title: 'Reading Tips',
                    description: 'Expert tips to improve your IELTS Reading score.',
                    url: '/reading-tips',
                },
                {
                    title: 'Writing Tips',
                    description: 'Expert tips to improve your IELTS Writing score.',
                    url: '/writing-tips',
                },
                {
                    title: 'Speaking Tips',
                    description: 'Expert tips to improve your IELTS Speaking score.',
                    url: '/speaking-tips',
                },
            ],
        },
        {
            title: 'About Us',
            description: 'Learn about The IELTS Project team and mission.',
            url: '/about',
        },
        {
            title: 'Testimonials',
            description: 'Success stories from our students.',
            url: '/testimonials',
        },
        {
            title: 'FAQ',
            description: 'Frequently asked questions about IELTS and our platform.',
            url: '/faq',
        },
        {
            title: 'Careers',
            description: 'Join our team at The IELTS Project.',
            url: '/careers',
        },
        {
            title: 'Contact Us',
            description: 'Get in touch with The IELTS Project team.',
            url: '/contact',
        },
        {
            title: 'Privacy Policy',
            description: 'Our privacy policy and data protection information.',
            url: '/privacy',
        },
        {
            title: 'Terms & Conditions',
            description: 'Terms and conditions for using our platform.',
            url: '/terms',
        },
        {
            title: 'Authentication',
            description: 'Sign in or register for an account.',
            url: '/auth',
        },
    ];

    const renderSitemapItem = (item: SitemapItem) => (
        <div key={item.url} className="mb-6">
            <h3 className="text-xl font-semibold text-primary-900 mb-1">
                <Link href={item.url} className="text-primary-600 hover:text-primary-700 hover:underline">
                    {item.title}
                </Link>
            </h3>
            <p className="text-primary-700 mb-2">{item.description}</p>
            {item.children && (
                <div className="ml-8 mt-2 border-l-2 border-primary-100 pl-6 space-y-4">
                    {item.children.map((child) => (
                        <div key={child.url}>
                            <h4 className="text-lg font-medium text-primary-900 mb-1">
                                <Link href={child.url} className="text-primary-600 hover:text-primary-700 hover:underline">
                                    {child.title}
                                </Link>
                            </h4>
                            <p className="text-primary-700">{child.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );

    return (
        <main className="flex-1">
            <Section background="blue-50">
                <Container>
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">Sitemap</h1>
                        <p className="text-lg text-primary-700">
                            Find all pages of The IELTS Project website in one convenient location.
                        </p>
                    </div>
                </Container>
            </Section>

            <Section background="white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 gap-8">
                            <div className="bg-white p-8 rounded-xl shadow-sm">
                                <h2 className="text-2xl font-bold text-primary-900 mb-8">Website Pages</h2>
                                {sitemapData.map(renderSitemapItem)}
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
}