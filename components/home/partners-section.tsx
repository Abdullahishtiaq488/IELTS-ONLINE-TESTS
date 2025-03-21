import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/ui/section';
import { partners, partnerDescription } from '@/data/partners';

export default function PartnersSection() {
    return (
        <Section background="white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 md:py-8">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
                        Our Partners
                    </h2>
                    <div className="w-20 h-1 bg-accent-500 mx-auto mb-6 rounded-full"></div>
                    <p className="text-primary-600 text-lg max-w-2xl mx-auto">
                        Trusted by leading organizations worldwide
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 rounded-2xl overflow-hidden shadow-xl">
                    {/* Description card */}
                    <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 sm:p-8 lg:p-10">
                        <div className="h-full flex flex-col">
                            <h3 className="text-2xl font-bold text-primary-900 mb-4">
                                Why Partner With Us?
                            </h3>
                            <p className="text-primary-700 leading-relaxed flex-grow mb-6">
                                {partnerDescription}
                            </p>
                            <Link 
                                href="/about-partners" 
                                className="inline-flex items-center justify-center bg-primary-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors duration-300 shadow-md hover:shadow-lg"
                            >
                                <span>Join our partnership program</span>
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Logos grid */}
                    <div className="bg-white p-6 sm:p-8 lg:col-span-2">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                            {partners.map((partner, index) => (
                                <div 
                                    key={index} 
                                    className="flex items-center justify-center p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-muted-200 hover:border-primary-300 group"
                                >
                                    <Link 
                                        href={partner.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="w-full h-full flex items-center justify-center"
                                        aria-label={`Visit ${partner.name}`}
                                    >
                                        <Image
                                            src={partner.image}
                                            alt={partner.name}
                                            width={120}
                                            height={60}
                                            className="max-h-16 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                                        />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="mt-8 text-center">
                    <Link 
                        href="/partners" 
                        className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium transition-colors"
                    >
                        <span>View all our partners</span>
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </Section>
    );
}