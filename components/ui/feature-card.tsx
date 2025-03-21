import React from 'react';
import Image from 'next/image';
import { WhyUseFeature } from '@/types/data';

interface FeatureCardProps {
    feature: WhyUseFeature;
}

export function FeatureCard({ feature }: FeatureCardProps) {
    return (
        <div className="flex flex-col items-center text-center">
            <div className="relative h-[90px] w-[90px] mb-5">
                <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    sizes="90px"
                    priority={false}
                    className="object-contain"
                />
            </div>
            <h3 className="text-xl font-semibold text-primary-900 mb-3">{feature.title}</h3>
            <p className="text-sm text-primary-700 max-w-sm mx-auto leading-relaxed">{feature.description}</p>
        </div>
    );
}