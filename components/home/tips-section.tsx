import React from 'react';
import { Section } from '@/components/ui/section';
import { TipCard } from '@/components/ui/tips-card';
import { ieltsTips } from '@/data/tips';
import Link from 'next/link';

export default function TipsSection() {
    // Make a copy of ieltsTips and ensure they have the correct links
    const tips = ieltsTips.map((tip) => {
        const updatedTip = { ...tip };

        // Map each category to the corresponding blog page
        if (tip.category === "Listening Tips") {
            updatedTip.link = "/blog/ielts-listening-strategies";
        } else if (tip.category === "Reading Tips") {
            updatedTip.link = "/blog/ielts-reading-guide";
        } else if (tip.category === "Writing Tips") {
            updatedTip.link = "/blog/ielts-writing-tips";
        } else if (tip.category === "Speaking tips") {
            updatedTip.link = "/blog/ielts-speaking-success";
        }

        return updatedTip;
    });

    return (
        <Section background="blue-950">
            <div className="mb-12">
                <h2 className="text-xl text-center md:text-start md:text-3xl font-bold text-white">Quick IELTS Hacks for Success</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {tips.map((tip, index) => (
                    <TipCard key={index} tip={tip} />
                ))}
            </div>
            <div className="mt-10 flex justify-center">
                <Link href="/ielts-tips" className="bg-warning-500 hover:bg-warning-600 text-white font-semibold py-2 px-8 rounded-md transition-colors">
                    See more
                </Link>
            </div>
        </Section>
    );
} 