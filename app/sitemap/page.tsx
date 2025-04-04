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
            title: 'Mock Tests',
            description: 'Practice with our comprehensive IELTS mock tests.',
            url: '/mock-tests',
            children: [
                {
                    title: 'Listening Tests',
                    description: 'IELTS Listening practice tests with detailed feedback.',
                    url: '/mock-tests/listening',
                },
                {
                    title: 'Reading Tests',
                    description: 'IELTS Reading practice tests with detailed feedback.',
                    url: '/mock-tests/reading',
                },
                {
                    title: 'Writing Tests',
                    description: 'IELTS Writing practice tests with detailed feedback.',
                    url: '/mock-tests/writing',
                },
                {
                    title: 'Speaking Tests',
                    description: 'IELTS Speaking practice tests with detailed feedback.',
                    url: '/mock-tests/speaking',
                },
            ],
        },
        {
            title: 'Study Materials',
            description: 'Comprehensive IELTS study resources and guides.',
            url: '/resources',
            children: [
                {
                    title: 'Vocabulary Lists',
                    description: 'Essential vocabulary for IELTS success.',
                    url: '/resources/vocabulary',
                },
                {
                    title: 'Grammar Guides',
                    description: 'Key grammar points for the IELTS exam.',
                    url: '/resources/grammar',
                },
                {
                    title: 'Writing Templates',
                    description: 'Useful templates for IELTS Writing tasks.',
                    url: '/resources/writing-templates',
                },
                {
                    title: 'Practice Tips',
                    description: 'Effective strategies for IELTS preparation.',
                    url: '/resources/tips',
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
            title: 'Terms of Service',
            description: 'Terms and conditions for using our platform.',
            url: '/terms',
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