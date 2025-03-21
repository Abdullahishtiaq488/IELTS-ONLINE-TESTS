import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/ui/section';
import { partners, partnerDescription } from '@/data/partners';

export default function PartnersSection() {
    return (
        <Section background="white">
            <div className="max-w-7xl mx-auto">
                <div className="mb-10">
                    <h2 className="text-3xl font-bold text-primary-900">Partner</h2>
                </div>

                <div className="flex flex-col md:flex-row">
                    {/* Description on the left */}
                    <div className="w-full md:w-1/3 pr-0 md:pr-8 mb-6 md:mb-0">
                        <p className="text-primary-950 leading-relaxed">{partnerDescription}</p>
                    </div>

                    {/* Logos on the right */}
                    <div className="w-full md:w-2/3">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                            {partners.map((partner, index) => (
                                <div key={index} className="flex items-center justify-center h-24">
                                    <Link href={partner.link} target="_blank" rel="noopener noreferrer">
                                        <Image
                                            src={partner.image}
                                            alt={partner.name}
                                            width={150}
                                            height={80}
                                            className="max-h-full w-auto object-contain"
                                        />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
} 