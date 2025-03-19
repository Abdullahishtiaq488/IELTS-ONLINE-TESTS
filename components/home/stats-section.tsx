import React from 'react';
import { Section } from '@/components/ui/section';
import { StatCard } from '@/components/ui/stat-card';
import { ieltsStats } from '@/data/stats';

export default function StatsSection() {
    return (
        <Section background="white">
            <div className="mb-10 text-center">
                <h2 className="text-3xl font-bold text-blue-900">Number #1 for IELTS Preparation</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {ieltsStats.map((stat, index) => (
                    <StatCard key={index} stat={stat} />
                ))}
            </div>
        </Section>
    );
} 