'use client';

import React, { useState } from 'react';
import { TestFeature } from '@/types/data';

interface FeatureTabsProps {
    features: TestFeature[];
    activeFeatureId: string;
    onTabChange: (id: string) => void;
}

export function FeatureTabs({ features, activeFeatureId, onTabChange }: FeatureTabsProps) {
    const [clickedTab, setClickedTab] = useState<string | null>(null);

    const handleTabClick = (id: string) => {
        setClickedTab(id);
        onTabChange(id);

        // Reset the clicked state after the flash effect
        setTimeout(() => {
            setClickedTab(null);
        }, 400); // Extended duration for more noticeable effect
    };

    return (
        <div className="flex w-full overflow-x-auto">
            {features.map((feature) => (
                <button
                    key={feature.id}
                    onClick={() => handleTabClick(feature.id)}
                    className={`flex-1 py-4 px-4 text-center text-sm sm:text-base whitespace-nowrap font-medium 
                        transition-all duration-300
                        ${clickedTab === feature.id ? 'scale-90 brightness-125 shadow-md' : ''}
                        ${feature.id === activeFeatureId
                            ? 'bg-accent-400 text-primary-900'
                            : 'bg-primary-900 text-white hover:bg-primary-800 hover:opacity-80'}`}
                >
                    {feature.title}
                </button>
            ))}
        </div>
    );
} 