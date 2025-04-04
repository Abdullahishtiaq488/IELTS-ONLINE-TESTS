import React from 'react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'IELTS Blog | The IELTS Project',
    description: 'Explore our blog for expert IELTS tips, strategies, and success stories to help you achieve your target score.',
};

// These would typically come from a database or CMS
const blogPosts = [
    {
        id: 1,
        slug: 'ielts-reading-guide',
        title: 'IELTS Reading: Simple Guide to Success',
        excerpt: 'The IELTS Reading test checks how well you understand written English. You&apos;ll face 3 sections, 40 questions, and only 60 minutes—so time and strategy matter!',
        image: '/images/reading.jpg',
        date: 'April 4, 2024',
        readTime: '10 min read',
        author: 'IELTS Expert'
    },
    {
        id: 2,
        slug: 'ielts-writing-tips',
        title: 'Master IELTS Writing: Task 1 & 2 Strategies',
        excerpt: 'Discover proven techniques to improve your IELTS Writing score with our comprehensive guide to both Academic and General Training tasks.',
        image: '/images/writing.jpg',
        date: 'March 28, 2024',
        readTime: '12 min read',
        author: 'IELTS Expert'
    },
    {
        id: 3,
        slug: 'ielts-speaking-confidence',
        title: 'Building Confidence for IELTS Speaking',
        excerpt: 'Learn how to overcome nervousness and speak with confidence during your IELTS Speaking test with practical exercises and preparation tips.',
        image: '/images/speaking.jpeg',
        date: 'March 21, 2024',
        readTime: '8 min read',
        author: 'IELTS Expert'
    },
    {
        id: 4,
        slug: 'ielts-listening-strategies',
        title: 'IELTS Listening: Essential Strategies',
        excerpt: 'Improve your IELTS Listening score with our expert tips on note-taking, prediction, and handling different accent types.',
        image: '/images/listening.jpg',
        date: 'March 14, 2024',
        readTime: '9 min read',
        author: 'IELTS Expert'
    }
];

export default function BlogPage() {
    return (
        <main className="flex-1">
            <Section background="blue">
                <Container>
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">IELTS Blog</h1>
                        <p className="text-lg text-blue-100">
                            Expert insights, tips and strategies to help you succeed in your IELTS journey
                        </p>
                    </div>
                </Container>
            </Section>

            <Section background="white">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {blogPosts.map((post) => (
                            <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            width={400}
                                            height={250}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-6 flex-grow flex flex-col">
                                        <div className="flex items-center text-sm text-primary-600 mb-2">
                                            <span>{post.date}</span>
                                            <span className="mx-2">•</span>
                                            <span>{post.readTime}</span>
                                        </div>
                                        <h2 className="text-xl font-bold text-primary-900 mb-2 group-hover:text-primary-600 transition-colors">
                                            {post.title}
                                        </h2>
                                        <p className="text-primary-700 mb-4 line-clamp-3 flex-grow">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center mt-auto">
                                            <span className="text-primary-600 font-medium group-hover:text-primary-700 transition-colors flex items-center">
                                                Read more
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="max-w-2xl mx-auto text-center bg-primary-50 p-8 rounded-xl shadow-sm">
                        <h2 className="text-2xl font-bold text-primary-900 mb-4">Subscribe to Our Blog</h2>
                        <p className="text-primary-700 mb-6">
                            Get the latest IELTS tips, tricks, and resources delivered straight to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 sm:max-w-xs"
                            />
                            <button
                                type="button"
                                className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-md transition-colors shadow-sm"
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
} 