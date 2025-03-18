import React from 'react';
import { Section } from '@/components/ui/section';
import { TestCard } from '@/components/ui/test-card';

export default function LatestTestsSection() {
    // Latest tests data matching the image
    const latestTests = [
        {
            title: "IELTS Mock Test 2023 December",
            image: "/images/mock-test1.jpg",
            rating: 3.5,
            votes: 2099,
            link: "/mock-tests/december-2023"
        },
        {
            title: "IELTS Mock Test 2023 September",
            image: "/images/mock-test1.jpg",
            rating: 3.3,
            votes: 884,
            link: "/mock-tests/september-2023"
        },
        {
            title: "IELTS Practice Test Volume 8",
            image: "/images/mock-test2.jpg",
            rating: 3.6,
            votes: 1489,
            link: "/practice-tests/volume-8"
        },
        {
            title: "Prepare for IELTS General Training Volume 2",
            image: "/images/mock-test3.jpg",
            rating: 3.3,
            votes: 1022,
            link: "/general-training/volume-2"
        }
    ];

    return (
        <Section background="white">
            <h2 className="text-2xl font-bold text-blue-950 mb-6">Latest IELTS test releases:</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {latestTests.map((test, index) => (
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