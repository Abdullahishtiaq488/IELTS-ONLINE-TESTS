import React from 'react';
import { Section } from '@/components/ui/section';
import { TipCard } from '@/components/ui/tips-card';
import { ieltsTips } from '@/data/tips';

export default function TipsSection() {
    return (
        <Section background="blue-950">
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-white">IELTS tip of the day</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {ieltsTips.map((tip, index) => (
                    <TipCard key={index} tip={tip} />
                ))}
            </div>
            <div className="mt-10 flex justify-center">
                <button className="bg-warning-500 hover:bg-warning-600 text-white font-semibold py-2 px-8 rounded-md transition-colors">
                    See more
                </button>
            </div>
        </Section>
    );
} 