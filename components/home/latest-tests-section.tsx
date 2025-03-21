import React from 'react';
import { Section } from '@/components/ui/section';
import { TestCard } from '@/components/ui/test-card';
import { latestMockTests } from '@/data/mock-tests';

export default function LatestTestsSection() {
    return (
        <Section background="white">
            <h2 className="text-2xl font-bold text-primary-950 mb-6">Latest IELTS test releases:</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
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
        </Section>
    );
} 