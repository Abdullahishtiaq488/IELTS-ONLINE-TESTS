import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { TestFeature } from '@/types/data';

interface FeatureContentProps {
    feature: TestFeature;
}

export function FeatureContent({ feature }: FeatureContentProps) {
    const [isAnimating, setIsAnimating] = useState(false);

    // Trigger animation effect when feature changes
    useEffect(() => {
        setIsAnimating(true);
        const timer = setTimeout(() => {
            setIsAnimating(false);
        }, 400); // Extended duration for more noticeable effect

        return () => clearTimeout(timer);
    }, [feature.id]);

    return (
        <div className="bg-muted-600 p-6 md:p-10">
            <div className={`max-w-5xl mx-auto bg-white rounded-md shadow-sm overflow-hidden transition-all duration-400 ${isAnimating ? 'opacity-50 scale-[0.97] brightness-110' : 'opacity-100 scale-100'}`}>
                <div className="flex flex-col md:flex-row">
                    <div className="w-full px-4 md:w-1/2">
                        <div className="relative h-[300px] md:h-[400px] w-full">
                            <Image
                                src={feature.image}
                                alt={feature.title}
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                        <h3 className="text-xl font-bold text-primary-900 mb-4">{feature.title}</h3>
                        <p className="text-primary-700 leading-relaxed">{feature.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
} 