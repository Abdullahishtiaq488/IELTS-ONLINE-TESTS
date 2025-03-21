'use client';

import React from 'react';
import { TestFeature } from '@/types/data';

interface FeatureTabsProps {
    features: TestFeature[];
    activeFeatureId: string;
    onTabChange: (id: string) => void;
}

export function FeatureTabs({ features, activeFeatureId, onTabChange }: FeatureTabsProps) {
    return (
        <div className="flex w-full overflow-x-auto">
            {features.map((feature) => (
                <button
                    key={feature.id}
                    onClick={() => onTabChange(feature.id)}
                    className={`flex-1 py-4 px-4 text-center text-sm sm:text-base whitespace-nowrap font-medium transition-colors
                        ${feature.id === activeFeatureId
                            ? 'bg-accent-400 text-primary-900'
                            : 'bg-primary-900 text-white hover:bg-primary-800 hover:opacity-50'}`}
                >
                    {feature.title}
                </button>
            ))}
        </div>
    );
} 