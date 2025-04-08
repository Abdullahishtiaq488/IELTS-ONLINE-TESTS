'use client';

import React, { useState } from 'react';
import { Section } from '@/components/ui/section';
import { FeatureTabs } from '@/components/ui/feature-tabs';
import { FeatureContent } from '@/components/ui/feature-content';
import { testFeatures } from '@/data/test-features';

export default function FeaturesSection() {
    const [activeFeatureId, setActiveFeatureId] = useState('band-scores');

    const activeFeature = testFeatures.find(feature => feature.id === activeFeatureId) || testFeatures[0];

    return (
        <Section background="white" >
            <div className="mb-12 text-center">
                <h2 className="text-xl md:text-3xl font-bold text-primary-900">Our IELTS tests features</h2>
            </div>

            <div className="border border-seconday-200 rounded-md overflow-hidden shadow-sm">
                <FeatureTabs
                    features={testFeatures}
                    activeFeatureId={activeFeatureId}
                    onTabChange={setActiveFeatureId}
                />
                <FeatureContent feature={activeFeature} />
            </div>
        </Section>
    );
} 