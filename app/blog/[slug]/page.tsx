import React from 'react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import Image from 'next/image';
import Link from 'next/link';

// Define proper interfaces for the data structure
interface BlogSectionItem {
    title: string;
    type: 'list' | 'ordered-list' | 'text' | 'link';
    items?: string[];
    content?: string;
    link?: string;
    linkText?: string;
    style: string;
}

interface BlogContent {
    intro: string;
    sections: BlogSectionItem[];
}

interface BlogPost {
    title: string;
    date: string;
    readTime: string;
    image: string;
    content: BlogContent;
}

interface BlogPosts {
    [key: string]: BlogPost;
}

// Sample blog posts data - in a real app this would be fetched from an API or database
const blogPosts: BlogPosts = {
    'ielts-reading-guide': {
        title: 'IELTS Reading: Simple Guide to Success',
        date: 'April 4, 2024',
        readTime: '10 min read',
        image: '/images/reading.jpg',
        content: {
            intro: 'The IELTS Reading test checks how well you understand written English. You&apos;ll face 3 sections, 40 questions, and only 60 minutes—so time and strategy matter!',
            sections: [
                {
                    title: '🧾 What to Expect',
                    type: 'list',
                    items: [
                        '<span class="font-medium">Academic:</span> 3 long texts from books, journals, or articles',
                        '<span class="font-medium">General Training:</span> Everyday texts like ads, notices, and instruction manuals',
                        '<span class="font-medium">Total time:</span> 60 minutes',
                        '<span class="font-medium">No extra time</span> to transfer answers'
                    ],
                    style: 'bg-blue-50 p-6 rounded-lg'
                },
                {
                    title: '📌 Common Question Types',
                    type: 'list',
                    items: [
                        '✅ Multiple choice',
                        '✅ True/False/Not Given',
                        '✅ Matching headings',
                        '✅ Sentence & summary completion',
                        '✅ Diagram labeling'
                    ],
                    style: 'border-l-4 border-primary-600 pl-6'
                },
                {
                    title: '✔️ Quick Tips',
                    type: 'ordered-list',
                    items: [
                        '<span class="font-medium">Skim first,</span> scan for answers',
                        '<span class="font-medium">Underline keywords</span> in questions',
                        '<span class="font-medium">Don&apos;t spend too long</span> on one question',
                        '<span class="font-medium">Don&apos;t leave blanks</span>—guess if unsure',
                        '<span class="font-medium">Stick to what&apos;s in the text only</span>'
                    ],
                    style: 'bg-gray-50 p-6 rounded-lg'
                },
                {
                    title: '📚 Best Way to Improve',
                    type: 'list',
                    items: [
                        'Practice daily',
                        'Read articles and note keywords',
                        'Use past test papers',
                        'Learn synonyms and paraphrasing'
                    ],
                    style: 'bg-primary-50 p-6 rounded-lg'
                },
                {
                    title: '🔗 Try This',
                    type: 'link',
                    link: '/ielts-exam-library',
                    linkText: '👉 IELTS Reading Test Pdf',
                    style: 'bg-primary-100 p-6 rounded-lg'
                },
                {
                    title: 'Final Tip:',
                    type: 'text',
                    content: 'Stay calm, read with focus, and practice under timed conditions. With the right habits, your score will improve!',
                    style: 'bg-primary-600 text-white p-6 rounded-lg'
                }
            ]
        }
    },
    'ielts-listening-strategies': {
        title: 'IELTS Listening: Essential Strategies',
        date: 'March 14, 2024',
        readTime: '9 min read',
        image: '/images/listening.jpg',
        content: {
            intro: 'The IELTS Listening test evaluates your ability to understand spoken English in various situations. With these strategies, you can improve your performance and score higher.',
            sections: [
                {
                    title: '🎧 Format Overview',
                    type: 'list',
                    items: [
                        '4 sections with increasing difficulty',
                        '40 questions in 30 minutes',
                        'Additional 10 minutes to transfer answers',
                        'Only played ONCE'
                    ],
                    style: 'bg-blue-50 p-6 rounded-lg'
                },
                {
                    title: '📝 Effective Note-taking',
                    type: 'list',
                    items: [
                        'Use abbreviations and symbols',
                        'Write down numbers, dates, and names',
                        'Listen for signpost words (firstly, finally, etc.)',
                        'Create a shorthand system that works for you'
                    ],
                    style: 'border-l-4 border-primary-600 pl-6'
                },
                {
                    title: '🎯 Common Question Types',
                    type: 'list',
                    items: [
                        'Multiple choice',
                        'Matching',
                        'Form/note completion',
                        'Sentence completion',
                        'Short answers'
                    ],
                    style: 'bg-gray-50 p-6 rounded-lg'
                },
                {
                    title: '⚡ Quick Tips',
                    type: 'ordered-list',
                    items: [
                        'Read instructions carefully',
                        'Predict answers before listening',
                        'Don\'t get stuck on missed questions',
                        'Pay attention to limit words (e.g., "no more than three words")',
                        'Check your spelling and grammar'
                    ],
                    style: 'bg-primary-50 p-6 rounded-lg'
                },
                {
                    title: '🔗 Try This',
                    type: 'link',
                    link: '/ielts-exam-library',
                    linkText: '👉 IELTS Listening Practice Test',
                    style: 'bg-primary-100 p-6 rounded-lg'
                },
                {
                    title: 'Final Advice:',
                    type: 'text',
                    content: 'Regular practice with authentic materials is key to success. Focus on improving your concentration and prediction skills.',
                    style: 'bg-primary-600 text-white p-6 rounded-lg'
                }
            ]
        }
    },
    'ielts-writing-tips': {
        title: 'Master IELTS Writing: Tips for Task 1 & 2',
        date: 'March 28, 2024',
        readTime: '12 min read',
        image: '/images/writing.jpg',
        content: {
            intro: 'The IELTS Writing section challenges many test-takers. This guide breaks down both Task 1 and Task 2, providing actionable strategies to boost your score.',
            sections: [
                {
                    title: '📊 Task 1 Overview',
                    type: 'list',
                    items: [
                        '<span class="font-medium">Academic:</span> Describe visual data (graph, chart, process, map)',
                        '<span class="font-medium">General:</span> Write a letter (formal, semi-formal, informal)',
                        '<span class="font-medium">Word count:</span> 150+ words',
                        '<span class="font-medium">Time:</span> 20 minutes'
                    ],
                    style: 'bg-blue-50 p-6 rounded-lg'
                },
                {
                    title: '📝 Task 2 Overview',
                    type: 'list',
                    items: [
                        'Essay writing (opinion, problem/solution, etc.)',
                        'More important than Task 1 (weighted more)',
                        'Word count: 250+ words',
                        'Time: 40 minutes'
                    ],
                    style: 'border-l-4 border-primary-600 pl-6'
                }
            ]
        }
    },
    'ielts-speaking-success': {
        title: 'IELTS Speaking: Keys to Success',
        date: 'April 10, 2024',
        readTime: '8 min read',
        image: '/images/speaking.jpeg',
        content: {
            intro: 'The IELTS Speaking test assesses your ability to communicate effectively in English during a face-to-face interview. This guide provides strategies to help you perform confidently and achieve a higher band score.',
            sections: [
                {
                    title: '🗣️ Test Format',
                    type: 'list',
                    items: [
                        '<span class="font-medium">Part 1:</span> Introduction and general questions (4-5 minutes)',
                        '<span class="font-medium">Part 2:</span> Individual long turn - speaking on a topic card (1 minute prep, 2 minutes speaking)',
                        '<span class="font-medium">Part 3:</span> Discussion related to Part 2 topic (4-5 minutes)',
                        '<span class="font-medium">Total time:</span> 11-14 minutes'
                    ],
                    style: 'bg-blue-50 p-6 rounded-lg'
                },
                {
                    title: '🌟 Scoring Criteria',
                    type: 'list',
                    items: [
                        'Fluency and Coherence',
                        'Lexical Resource (vocabulary)',
                        'Grammatical Range and Accuracy',
                        'Pronunciation'
                    ],
                    style: 'border-l-4 border-primary-600 pl-6'
                }
            ]
        }
    }
};

export function generateMetadata({ params }: { params: { slug: string } }) {
    const post = blogPosts[params.slug];

    if (!post) {
        return {
            title: 'Blog Post Not Found | The IELTS Project',
            description: 'The requested blog post could not be found.'
        };
    }

    return {
        title: `${post.title} | The IELTS Project`,
        description: post.content.intro
    };
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
    // Get the blog post data based on the slug
    const post = blogPosts[params.slug];

    // If no post is found, display a not found message
    if (!post) {
        return (
            <main className="flex-1">
                <Section background="white">
                    <Container>
                        <div className="max-w-4xl mx-auto text-center py-20">
                            <h1 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Blog Post Not Found</h1>
                            <p className="text-lg text-primary-700 mb-8">
                                The blog post you&apos;re looking for doesn&apos;t exist or has been moved.
                            </p>
                            <Link href="/blog" className="bg-primary-600 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors">
                                Back to Blog
                            </Link>
                        </div>
                    </Container>
                </Section>
            </main>
        );
    }

    return (
        <main className="flex-1">
            {/* Hero section with image and title */}
            <section className="relative bg-gradient-to-b from-primary-900 to-primary-800 text-white">
                <div className="absolute inset-0">
                    <Image
                        src={post.image}
                        alt=""
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
                <div className="relative z-10 py-20 px-4 max-w-7xl mx-auto">
                    <Container>
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-2 text-white mb-4">
                                <span>{post.date}</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                                <span>{post.readTime}</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{post.title}</h1>
                        </div>
                    </Container>
                </div>
            </section>

            <Section background="white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        {/* Breadcrumb navigation */}
                        <div className="flex items-center text-sm text-primary-600 mb-8">
                            <Link href="/" className="hover:underline">Home</Link>
                            <span className="mx-2">/</span>
                            <Link href="/blog" className="hover:underline">Blog</Link>
                            <span className="mx-2">/</span>
                            <span className="text-primary-900">{post.title}</span>
                        </div>

                        {/* Main content area */}
                        <div className="prose prose-lg max-w-none">
                            <div className=" p-6 rounded-xl mb-8 border-l-4 border-primary-500">
                                <p className="text-xl text-primary-900 mb-0 font-medium">
                                    {post.content.intro}
                                </p>
                            </div>

                            <div className="grid gap-8 mb-12">
                                {post.content.sections.map((section, index) => (
                                    <div key={index} className={`${section.style} rounded-xl`}>
                                        <h2 className={`text-2xl font-bold mb-4 ${section.style.includes('bg-primary-600') || section.style.includes('text-white') ? 'text-white' : 'text-primary-900'}`}>{section.title}</h2>

                                        {section.type === 'list' && section.items && (
                                            <ul className="list-disc pl-6 space-y-2">
                                                {section.items.map((item, i) => (
                                                    <li key={i} className="text-primary-800" dangerouslySetInnerHTML={{ __html: item }} />
                                                ))}
                                            </ul>
                                        )}

                                        {section.type === 'ordered-list' && section.items && (
                                            <ol className="list-decimal pl-6 space-y-3">
                                                {section.items.map((item, i) => (
                                                    <li key={i} className="text-primary-800" dangerouslySetInnerHTML={{ __html: item }} />
                                                ))}
                                            </ol>
                                        )}

                                        {section.type === 'text' && section.content && (
                                            <p className="text-lg">{section.content}</p>
                                        )}

                                        {section.type === 'link' && section.link && section.linkText && (
                                            <div className="flex">
                                                <Link
                                                    href={section.link}
                                                    className="inline-flex items-center text-lg font-semibold text-primary-700 hover:text-primary-900 hover:underline transition-colors"
                                                >
                                                    {section.linkText}
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Author and sharing section */}
                            <div className="flex flex-col lg:flex-row gap-8 border-t border-gray-200 pt-8 mt-12">
                                <div className="lg:w-2/3">
                                    <h3 className="text-xl font-bold text-primary-900 mb-4">About the Author</h3>
                                    <div className="flex items-center gap-4">
                                        <div className="h-16 w-16 rounded-full overflow-hidden bg-primary-100">
                                            <Image
                                                src="/images/testimon-f1.jpg"
                                                alt="Author"
                                                width={64}
                                                height={64}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-primary-900">IELTS Expert</h4>
                                            <p className="text-sm text-primary-600">
                                                Our team of IELTS experts provides actionable tips based on years of teaching experience.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:w-1/3">
                                    <h3 className="text-xl font-bold text-primary-900 mb-4">Share this article</h3>
                                    <div className="flex gap-3">
                                        <a href="#" className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                        <a href="#" className="flex items-center justify-center w-10 h-10 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                            </svg>
                                        </a>
                                        <a href="#" className="flex items-center justify-center w-10 h-10 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                        <a href="#" className="flex items-center justify-center w-10 h-10 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Related articles section */}
                            <div className="mt-16">
                                <h3 className="text-2xl font-bold text-primary-900 mb-6">Related Articles</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {Object.entries(blogPosts)
                                        .filter(([slug]) => slug !== params.slug)
                                        .slice(0, 2)
                                        .map(([slug, relatedPost]) => (
                                            <Link
                                                key={slug}
                                                href={`/blog/${slug}`}
                                                className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                                            >
                                                <div className="relative h-48 w-full overflow-hidden">
                                                    <Image
                                                        src={relatedPost.image}
                                                        alt={relatedPost.title}
                                                        fill
                                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                    />
                                                </div>
                                                <div className="p-6">
                                                    <div className="flex items-center gap-2 text-sm text-primary-600 mb-2">
                                                        <span>{relatedPost.date}</span>
                                                        <span className="w-1 h-1 rounded-full bg-primary-600"></span>
                                                        <span>{relatedPost.readTime}</span>
                                                    </div>
                                                    <h4 className="text-xl font-semibold text-primary-900 mb-2 group-hover:text-primary-600 transition-colors">
                                                        {relatedPost.title}
                                                    </h4>
                                                    <p className="text-primary-700 line-clamp-2">{relatedPost.content.intro}</p>
                                                </div>
                                            </Link>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
} 