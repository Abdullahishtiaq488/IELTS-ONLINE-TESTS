import React from 'react';
import { Section } from '@/components/ui/section';
import { FeatureCard } from '@/components/ui/feature-card';
import { whyUseFeatures } from '@/data/why-use';

export default function WhyUseSection() {
    return (
        <Section background="gray">
            <div className="mb-10 text-center bg">
                <h2 className="text-xl md:text-3xl font-bold text-primary-900">Why use IELTS Project?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                {whyUseFeatures.map((feature, index) => (
                    <FeatureCard key={index} feature={feature} />
                ))}
            </div>
        </Section>
    );
} 