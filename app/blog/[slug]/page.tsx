import React from 'react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import Image from 'next/image';
import Link from 'next/link';

// Sample blog posts data - in a real app this would be fetched from an API or database
const blogPosts = {
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
                    style: ''
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
            <Section background="white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-8 text-center">
                            <h1 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">{post.title}</h1>
                            <div className="flex items-center justify-center gap-2 text-primary-600">
                                <span>Published: {post.date}</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-primary-600"></span>
                                <span>{post.readTime}</span>
                            </div>
                        </div>

                        <div className="mb-10 rounded-lg overflow-hidden shadow-md">
                            <Image
                                src={post.image}
                                alt={post.title}
                                width={800}
                                height={450}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="lead text-xl text-primary-700 mb-8">
                                {post.content.intro}
                            </p>

                            {post.content.sections.map((section, index) => (
                                <div key={index} className={`${section.style} mb-8`}>
                                    <h2 className="text-2xl font-bold text-primary-900 mb-4">{section.title}</h2>

                                    {section.type === 'list' && (
                                        <ul className="list-disc pl-6 space-y-2">
                                            {section.items.map((item, i) => (
                                                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                                            ))}
                                        </ul>
                                    )}

                                    {section.type === 'ordered-list' && (
                                        <ol className="list-decimal pl-6 space-y-3">
                                            {section.items.map((item, i) => (
                                                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                                            ))}
                                        </ol>
                                    )}

                                    {section.type === 'text' && (
                                        <p className="text-lg">{section.content}</p>
                                    )}

                                    {section.type === 'link' && (
                                        <div className="flex">
                                            <Link
                                                href={section.link}
                                                className="inline-flex items-center text-lg font-semibold text-primary-700 hover:text-primary-900"
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

                            <div className="mt-12 pt-8 border-t border-gray-200">
                                <h3 className="text-xl font-bold text-primary-900 mb-4">Share this article</h3>
                                <div className="flex space-x-4">
                                    <a href="#" className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                    <a href="#" className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                        </svg>
                                    </a>
                                    <a href="#" className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
} 