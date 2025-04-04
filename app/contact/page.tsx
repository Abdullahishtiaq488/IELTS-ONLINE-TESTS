import React from 'react';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import Image from 'next/image';

export const metadata = {
    title: 'Contact Us | The IELTS Project',
    description: 'Get in touch with The IELTS Project team for support, feedback, or partnership inquiries.',
};

export default function ContactPage() {
    return (
        <main className="flex-1">
            <Section background="blue-50">
                <Container>
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">Contact Us</h1>
                        <p className="text-lg text-primary-700">
                            Have questions or feedback? We'd love to hear from you.
                        </p>
                    </div>
                </Container>
            </Section>

            <Section background="white">
                <Container>
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                            {/* Contact Form - 3 columns */}
                            <div className="lg:col-span-3 bg-white p-8 rounded-xl shadow-md">
                                <h2 className="text-2xl font-bold text-primary-900 mb-6">Send us a message</h2>
                                <form>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-medium text-primary-700 mb-2">
                                                First Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                className="w-full px-4 py-3 rounded-md border border-muted-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-medium text-primary-700 mb-2">
                                                Last Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                className="w-full px-4 py-3 rounded-md border border-muted-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full px-4 py-3 rounded-md border border-muted-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                            required
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="subject" className="block text-sm font-medium text-primary-700 mb-2">
                                            Subject *
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            className="w-full px-4 py-3 rounded-md border border-muted-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                            required
                                        >
                                            <option value="">Please select</option>
                                            <option value="general">General Inquiry</option>
                                            <option value="support">Technical Support</option>
                                            <option value="feedback">Feedback</option>
                                            <option value="partnership">Partnership Opportunities</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="message" className="block text-sm font-medium text-primary-700 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={6}
                                            className="w-full px-4 py-3 rounded-md border border-muted-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                            required
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-md transition-colors shadow-sm"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>

                            {/* Contact Information - 2 columns */}
                            <div className="lg:col-span-2">
                                <div className="bg-primary-50 p-8 rounded-xl h-full">
                                    <h2 className="text-2xl font-bold text-primary-900 mb-6">Contact Information</h2>

                                    <div className="space-y-8">
                                        <div className="flex items-start">
                                            <div className="mr-4 mt-1">
                                                <div className="bg-primary-100 p-2 rounded-full">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-700">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-primary-900 mb-1">Email Us</h3>
                                                <p className="text-primary-700">support@theieltsproject.com</p>
                                                <p className="text-primary-700 mt-1">partners@theieltsproject.com</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="mr-4 mt-1">
                                                <div className="bg-primary-100 p-2 rounded-full">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-700">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-primary-900 mb-1">Call Us</h3>
                                                <p className="text-primary-700">+44 (0) 123 456 7890</p>
                                                <p className="text-primary-600 text-sm mt-1">Monday-Friday, 9am-5pm GMT</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="mr-4 mt-1">
                                                <div className="bg-primary-100 p-2 rounded-full">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary-700">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-primary-900 mb-1">Visit Us</h3>
                                                <p className="text-primary-700">123 Academic Street</p>
                                                <p className="text-primary-700">Suite 101</p>
                                                <p className="text-primary-700">London, UK</p>
                                            </div>
                                        </div>

                                        <div className="mt-10">
                                            <h3 className="text-lg font-semibold text-primary-900 mb-3">Follow Us</h3>
                                            <div className="flex space-x-4">
                                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full hover:bg-primary-100 transition-colors" aria-label="Facebook">
                                                    <svg className="w-5 h-5 text-primary-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                                    </svg>
                                                </a>
                                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full hover:bg-primary-100 transition-colors" aria-label="Twitter">
                                                    <svg className="w-5 h-5 text-primary-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                                    </svg>
                                                </a>
                                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full hover:bg-primary-100 transition-colors" aria-label="LinkedIn">
                                                    <svg className="w-5 h-5 text-primary-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                                                    </svg>
                                                </a>
                                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full hover:bg-primary-100 transition-colors" aria-label="YouTube">
                                                    <svg className="w-5 h-5 text-primary-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 max-w-3xl mx-auto text-center">
                            <h2 className="text-2xl font-bold text-primary-900 mb-4">Frequently Asked Questions</h2>
                            <p className="text-primary-700 mb-8">
                                For quick answers to common questions, please visit our
                                <a href="/faq" className="text-primary-600 hover:text-primary-700 font-medium ml-1">FAQ page</a>.
                            </p>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
} 