import React from 'react';
import { Section } from '@/components/ui/section';
import { TestCard } from '@/components/ui/test-card';
import { latestMockTests } from '@/data/mock-tests';

export default function LatestTestsSection() {
    return (
        <Section background="white">
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary-900">Latest IELTS Test Releases</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {latestMockTests.map((test, index) => (
                    <TestCard
                        key={index}
                        title={test.title}
                        image={test.image}
                        rating={test.rating}
                        votes={test.votes}
                        link={test.link}
                    />
                ))}
            </div>
            <div className="mt-10 flex justify-center">
                <button className="bg-primary-800 hover:bg-primary-900 text-white font-semibold py-2.5 px-8 rounded-md transition-colors shadow-sm">
                    View all tests
                </button>
            </div>
        </Section>
    );
}