import React from 'react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import Image from 'next/image';
import Link from 'next/link';

// Sample blog posts data - in a real app this would be fetched from an API or database
const blogPosts = [
    {
        slug: 'ielts-reading-guide',
        title: 'IELTS Reading: Simple Guide to Success',
        date: 'April 4, 2024',
        readTime: '10 min read',
        image: '/images/reading.jpg',
        excerpt: 'The IELTS Reading test checks how well you understand written English. You&apos;ll face 3 sections, 40 questions, and only 60 minutes—so time and strategy matter!',
        tags: ['Reading', 'Study Tips', 'IELTS Preparation']
    },
    {
        slug: 'ielts-listening-strategies',
        title: 'IELTS Listening: Essential Strategies',
        date: 'March 14, 2024',
        readTime: '9 min read',
        image: '/images/listening.jpg',
        excerpt: 'The IELTS Listening test evaluates your ability to understand spoken English in various situations. With these strategies, you can improve your performance and score higher.',
        tags: ['Listening', 'Study Tips', 'IELTS Preparation']
    },
    {
        slug: 'ielts-writing-tips',
        title: 'Master IELTS Writing: Tips for Task 1 & 2',
        date: 'March 28, 2024',
        readTime: '12 min read',
        image: '/images/writing.jpg',
        excerpt: 'The IELTS Writing section challenges many test-takers. This guide breaks down both Task 1 and Task 2, providing actionable strategies to boost your score.',
        tags: ['Writing', 'Essay Writing', 'IELTS Preparation']
    },
    {
        slug: 'ielts-speaking-success',
        title: 'IELTS Speaking: Keys to Success',
        date: 'April 10, 2024',
        readTime: '8 min read',
        image: '/images/speaking.jpeg',
        excerpt: 'The IELTS Speaking test assesses your ability to communicate effectively in English during a face-to-face interview. This guide provides strategies to help you perform confidently.',
        tags: ['Speaking', 'Fluency', 'IELTS Preparation']
    }
];

export const metadata = {
    title: 'IELTS Blogs & Tips | The IELTS Project',
    description: 'Explore our collection of IELTS preparation guides, tips, and strategies to help you achieve your target score.'
};

export default function BlogPage() {
    return (
        <main className="flex-1">
            <Section background="white">
                <Container>
                    {/* Page header */}
                    <div className="max-w-7xl mx-auto mb-16 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">IELTS Tips & Guides</h1>
                        <p className="text-xl text-primary-700 max-w-3xl mx-auto">
                            Discover expert strategies and practical advice to help you succeed in your IELTS exam
                        </p>
                    </div>

                    {/* Featured article */}
                    <div className="max-w-7xl mx-auto mb-16">
                        <Link
                            href={`/blog/${blogPosts[0].slug}`}
                            className="group block overflow-hidden rounded-2xl bg-gradient-to-br from-primary-900 to-primary-800 shadow-xl"
                        >
                            <div className="flex flex-col lg:flex-row">
                                <div className="lg:w-1/2 relative overflow-hidden">
                                    <div className="aspect-video lg:aspect-auto lg:h-full">
                                        <Image
                                            src={blogPosts[0].image}
                                            alt={blogPosts[0].title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            priority
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary-900/70 to-transparent lg:bg-none"></div>
                                </div>
                                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center relative">
                                    <div className="lg:max-w-xl">
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {blogPosts[0].tags.map((tag, index) => (
                                                <span key={index} className="px-3 py-1 bg-primary-700/30 text-primary-100 text-sm font-medium rounded-full">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-primary-200 transition-colors">
                                            {blogPosts[0].title}
                                        </h2>
                                        <p className="text-primary-100 text-lg mb-6 line-clamp-3">
                                            {blogPosts[0].excerpt}
                                        </p>
                                        <div className="flex items-center gap-2 text-primary-200 mb-6">
                                            <span>{blogPosts[0].date}</span>
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary-300"></span>
                                            <span>{blogPosts[0].readTime}</span>
                                        </div>
                                        <div className="inline-block">
                                            <span className="text-white group-hover:text-primary-200 font-medium flex items-center transition-colors">
                                                Read article
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* All articles */}
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl font-bold text-primary-900 mb-8">All Articles</h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogPosts.slice(1).map((post) => (
                                <Link
                                    key={post.slug}
                                    href={`/blog/${post.slug}`}
                                    className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                                >
                                    <div className="relative h-60 w-full overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="flex-1 p-6 flex flex-col">
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {post.tags.slice(0, 2).map((tag, index) => (
                                                <span key={index} className="px-2 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-primary-600 transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-primary-700 mb-4 flex-grow line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between text-sm text-primary-600 pt-4 border-t border-gray-100">
                                            <span>{post.date}</span>
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
} 