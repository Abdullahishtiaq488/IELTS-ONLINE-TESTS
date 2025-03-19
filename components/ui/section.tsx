import React from 'react';
import { PageWrapper } from './page-wrapper';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    background?: 'white' | 'gray' | 'blue' | 'blue-950';
}

export function Section({
    children,
    className = '',
    background = 'white'
}: SectionProps) {
    const bgClasses = {
        white: 'bg-white',
        gray: 'bg-gray-50',
        blue: 'bg-blue-50',
        'blue-950': 'bg-blue-950'
    };

    return (
        <section className={`py-8 md:py-12 ${bgClasses[background]} ${className}`}>
            <PageWrapper>
                {children}
            </PageWrapper>
        </section>
    );
} 