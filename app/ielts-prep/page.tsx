'use client';

import { PrepPageLayout } from '@/components/prep/PrepPageLayout';
import { prepData } from '@/data/prep';

export default function IELTSPrepPage() {
    // Create a combined section with all best sellers
    const bestSellerSection = {
        title: "Get Ready for Your IELTS Test",
        description: "Comprehensive IELTS Preparation Resources for Reading, Writing, Listening, and Speaking",
        cards: [
            ...prepData.reading.cards.filter(card => card.isBestSeller),
            ...prepData.writing.cards.filter(card => card.isBestSeller),
            ...prepData.listening.cards.filter(card => card.isBestSeller),
            ...prepData.speaking.cards.filter(card => card.isBestSeller),
            // If no best sellers found, include the first card from each category
            ...(!prepData.reading.cards.some(card => card.isBestSeller) ? [prepData.reading.cards[0]] : []),
            ...(!prepData.writing.cards.some(card => card.isBestSeller) ? [prepData.writing.cards[0]] : []),
            ...(!prepData.listening.cards.some(card => card.isBestSeller) ? [prepData.listening.cards[0]] : []),
            ...(!prepData.speaking.cards.some(card => card.isBestSeller) ? [prepData.speaking.cards[0]] : []),
        ]
    };

    return (
        <PrepPageLayout
            section={bestSellerSection}
            breadcrumbItems={[
                { label: 'Home', href: '/' },
                { label: 'IELTS Prep', href: '/ielts-prep' }
            ]}
            activeSkill="best-seller"
        >
            {/* About Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">About IELTS Preparation</h2>
                <p className="text-gray-600 mb-4">
                    Our comprehensive IELTS preparation materials are designed to help you achieve your target band score.
                    Whether you need help with Reading, Writing, Listening, or Speaking, we have resources tailored to each section of the exam.
                </p>
                <p className="text-gray-600">
                    All our materials are created by experienced IELTS instructors and examiners, ensuring you receive accurate and effective guidance.
                    Start your IELTS preparation journey today and take a step closer to achieving your goals.
                </p>
            </section>
        </PrepPageLayout>
    );
} 