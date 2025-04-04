import React from 'react';
import Link from 'next/link';
import { Section } from '@/components/ui/section';
import { partnerDescription } from '@/data/partners';
import { ieltsStats } from '@/data/stats';
import { StatCard } from '@/components/ui/stat-card';

export default function PartnersSection() {
    // Filter to only show the first 4 stats
    const displayStats = ieltsStats.slice(0, 4);

    return (
        <Section background="white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 md:py-8">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
                        Why Partner With Us?
                    </h2>
                    <div className="w-20 h-1 bg-accent-500 mx-auto mb-6 rounded-full"></div>
                </div>

                <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary-50 to-primary-100 p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl mb-16">
                    <div className="h-full flex flex-col">
                        <h3 className="text-2xl font-bold text-primary-900 mb-4 text-center">
                            Join Our Global IELTS Community
                        </h3>
                        <p className="text-primary-700 leading-relaxed text-lg text-center flex-grow mb-6">
                            {partnerDescription}
                        </p>
                        <div className="text-center">
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
                </div>

                {/* Stats Section (moved from stats section) */}
                {/* <div className="mt-16">
                    <h2 className="text-3xl font-bold text-primary-900 text-center mb-16">
                        Our Global Impact
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                        {displayStats.map((stat, index) => (
                            <StatCard key={index} stat={stat} />
                        ))}
                    </div>
                </div> */}
            </div>
        </Section>
    );
}