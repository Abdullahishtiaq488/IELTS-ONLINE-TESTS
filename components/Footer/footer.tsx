import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';

export default function Footer() {
    return (
        <footer className="bg-primary-950 text-white pt-12 pb-6">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* Left Column - Links */}
                    <div className="md:col-span-4">
                        <nav aria-label="Footer navigation">
                            <ul className="space-y-3">
                                <li><Link href="/contact" className="block hover:text-secondary-300 focus:outline-none focus:underline">Contact Us</Link></li>
                                <li><Link href="/privacy" className="block hover:text-secondary-300 focus:outline-none focus:underline">Privacy Policy</Link></li>
                                <li><Link href="/sitemap" className="block hover:text-secondary-300 focus:outline-none focus:underline">Site Map</Link></li>
                                <li><Link href="/faq" className="block hover:text-secondary-300 focus:outline-none focus:underline">Frequently Asked Questions</Link></li>
                                <li><Link href="/terms" className="block hover:text-secondary-300 focus:outline-none focus:underline">Terms & Conditions</Link></li>
                                <li><Link href="/testimonials" className="block hover:text-secondary-300 focus:outline-none focus:underline">Testimonials</Link></li>
                                <li><Link href="/careers" className="block hover:text-secondary-300 focus:outline-none focus:underline">Careers</Link></li>
                            </ul>
                        </nav>

                        <div className="mt-6 flex flex-col gap-3">
                            <div className="relative inline-block w-44">
                                <label htmlFor="currency-selector" className="sr-only">Select currency</label>
                                <select 
                                    id="currency-selector"
                                    className="block appearance-none w-full bg-muted-100 border border-muted-300 text-black py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary-500" 
                                >
                                    <option>PKR ₨</option>
                                    <option>USD $</option>
                                    <option>EUR €</option>
                                    <option>GBP £</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-primary-900">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="relative inline-block w-44">
                                <label htmlFor="language-selector" className="sr-only">Select language</label>
                                <select 
                                    id="language-selector"
                                    className="block appearance-none w-full bg-muted-100 border border-muted-300 text-primary-900 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:ring-2 focus:ring-primary-500" 
                                >
                                    <option>English</option>
                                    <option>Español</option>
                                    <option>Français</option>
                                    <option>Deutsch</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-primary-900">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - About & Mission */}
                    <div className="md:col-span-8">
                        <section aria-labelledby="about-heading" className="mb-8">
                            <h2 id="about-heading" className="text-xl font-bold mb-4">About us</h2>
                            <p className="text-white text-base">
                                IELTS Online Tests (IOT) belongs to InterGreat Education Group, founded in 2008, with branch offices located in 12
                                countries around the world. InterGreat&apos;s head office is situated on Threadneedle Street in London, the iconic home
                                of the Bank of England.
                            </p>
                        </section>

                        <section aria-labelledby="mission-heading" className="mb-8">
                            <h2 id="mission-heading" className="text-xl font-bold mb-4">Our mission</h2>
                            <p className="text-white text-base">
                                IOT has currently been the most visited website in over 120 countries with more than 28 million students. We are
                                aiming toward a community website that provides IELTS test questions and exam tips for free. Students can easily
                                take the IELTS tests on the website to improve their band scores effectively within a short time through our modern
                                e-learning platform. Moreover, we have developed an ecosystem centred around transnational education, online
                                learning, and study abroad to assist students in the pursuit of international education.
                            </p>
                        </section>

                        <section aria-labelledby="social-heading" className="mb-8">
                            <h2 id="social-heading" className="text-xl font-bold mb-4">Follow us:</h2>
                            <ul className="flex space-x-4">
                                <li>
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-secondary-300 rounded-full" aria-label="Follow us on Facebook">
                                        <div className="bg-white rounded-full p-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary-900" aria-hidden="true">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                            </svg>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-secondary-300 rounded-full" aria-label="Follow us on YouTube">
                                        <div className="bg-white rounded-full p-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary-900" aria-hidden="true">
                                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                            </svg>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>

                {/* Copyright and Disclaimers */}
                <div className="border-t border-muted-700 pt-6 mt-6 text-xs text-white/80">
                    <p className="mb-3">© 2017-2025 InterGreat Education Group</p>

                    <p className="mb-3">
                        IELTS is a registered trademark of University of Cambridge, the British Council, and IDP Education Australia. This site and its owners are not affiliated,
                        approved or endorsed by the University of Cambridge ESOL, the British Council, and IDP Education Australia.
                    </p>

                    <p className="mb-3">
                        &quot;IELTS Online&quot; is the name of the online version of the official IELTS test and is in no way affiliated with this website. To find out more about the official IELTS
                        Online please visit <a href="https://www.ielts.org/" className="underline hover:text-white focus:outline-none focus:ring-2 focus:ring-secondary-300 rounded">https://www.ielts.org/</a>.
                    </p>

                    <p className="text-center mt-6">粤ICP备2022086094号-5</p>
                </div>
            </Container>
        </footer>
    );
} 