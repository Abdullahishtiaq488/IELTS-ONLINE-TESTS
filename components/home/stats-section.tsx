import React from 'react';
import { Section } from '@/components/ui/section';
// StatCard and ieltsStats are no longer used since the section is commented out
// import { StatCard } from '@/components/ui/stat-card';
// import { ieltsStats } from '@/data/stats';

export default function StatsSection() {
    return (
        <Section background="white">
            <div className="mb-12 text-center">
                {/* Commented out as requested */}
                {/* <h2 className="text-3xl font-bold text-primary-900">Number #1 for IELTS Preparation</h2>
                <p className="text-primary-600 mt-3 max-w-2xl mx-auto">Join thousands of successful test-takers who have achieved their target scores with our comprehensive preparation platform.</p> */}
            </div>
            {/* Commented out stats grid as requested 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {ieltsStats.map((stat, index) => (
                    <StatCard key={index} stat={stat} />
                ))}
            </div>
            */}
        </Section>
    );
} 