import React from 'react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'IELTS Reading: Simple Guide to Success | The IELTS Project',
    description: 'Learn effective strategies for IELTS Reading success. Tips for managing time, question types, and improving your score.',
};

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
    // This is a static implementation. In the future, this would fetch the blog post based on the slug parameter
    return (
        <main className="flex-1">
            <Section background="white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-8 text-center">
                            <h1 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">IELTS Reading: Simple Guide to Success</h1>
                            <div className="flex items-center justify-center gap-2 text-primary-600">
                                <span>Published: April 4, 2024</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-primary-600"></span>
                                <span>10 min read</span>
                            </div>
                        </div>

                        <div className="mb-10 rounded-lg overflow-hidden shadow-md">
                            <Image
                                src="/images/trending.jpg"
                                alt="IELTS Reading guide"
                                width={800}
                                height={450}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="lead text-xl text-primary-700 mb-8">
                                The IELTS Reading test checks how well you understand written English. You'll face 3 sections, 40 questions, and only 60 minutes—so time and strategy matter!
                            </p>

                            <div className="bg-blue-50 p-6 rounded-lg mb-8">
                                <h2 className="text-2xl font-bold text-primary-900 mb-4">🧾 What to Expect</h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><span className="font-medium">Academic:</span> 3 long texts from books, journals, or articles</li>
                                    <li><span className="font-medium">General Training:</span> Everyday texts like ads, notices, and instruction manuals</li>
                                    <li><span className="font-medium">Total time:</span> 60 minutes</li>
                                    <li><span className="font-medium">No extra time</span> to transfer answers</li>
                                </ul>
                            </div>

                            <div className="border-l-4 border-primary-600 pl-6 mb-8">
                                <h2 className="text-2xl font-bold text-primary-900 mb-4">📌 Common Question Types</h2>
                                <ul className="space-y-2">
                                    <li>✅ Multiple choice</li>
                                    <li>✅ True/False/Not Given</li>
                                    <li>✅ Matching headings</li>
                                    <li>✅ Sentence & summary completion</li>
                                    <li>✅ Diagram labeling</li>
                                </ul>
                            </div>

                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-primary-900 mb-4">✔️ Quick Tips</h2>
                                <ol className="list-decimal pl-6 space-y-3">
                                    <li><span className="font-medium">Skim first,</span> scan for answers</li>
                                    <li><span className="font-medium">Underline keywords</span> in questions</li>
                                    <li><span className="font-medium">Don't spend too long</span> on one question</li>
                                    <li><span className="font-medium">Don't leave blanks</span>—guess if unsure</li>
                                    <li><span className="font-medium">Stick to what's in the text only</span></li>
                                </ol>
                            </div>

                            <div className="bg-primary-50 p-6 rounded-lg mb-8">
                                <h2 className="text-2xl font-bold text-primary-900 mb-4">📚 Best Way to Improve</h2>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Practice daily</li>
                                    <li>Read articles and note keywords</li>
                                    <li>Use past test papers</li>
                                    <li>Learn synonyms and paraphrasing</li>
                                </ul>
                            </div>

                            <div className="bg-primary-100 p-6 rounded-lg mb-8">
                                <h2 className="text-2xl font-bold text-primary-900 mb-4">🔗 Try This</h2>
                                <div className="flex">
                                    <Link
                                        href="/ielts-exam-library"
                                        className="inline-flex items-center text-lg font-semibold text-primary-700 hover:text-primary-900"
                                    >
                                        👉 IELTS Reading Test Pdf
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                            <div className="bg-primary-600 text-white p-6 rounded-lg mb-8">
                                <h2 className="text-2xl font-bold mb-4">Final Tip:</h2>
                                <p className="text-lg">
                                    Stay calm, read with focus, and practice under timed conditions. With the right habits, your score will improve!
                                </p>
                            </div>

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