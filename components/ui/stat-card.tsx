import React from 'react';
import Image from 'next/image';
import { IELTSStat } from '@/types/data';

interface StatCardProps {
    stat: IELTSStat;
}

export function StatCard({ stat }: StatCardProps) {
    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex items-center border-l-4 border-accent-100 hover:border-accent-500 duration-300">
            <div className="mr-5 bg-primary-50 p-3 rounded-full relative w-[66px] h-[66px] flex items-center justify-center">
                <Image
                    src={stat.image}
                    alt={stat.label}
                    width={60}
                    height={60}
                    className="object-contain"
                    priority
                    loading="eager"
                    sizes="60px"
                    quality={90}
                />
            </div>
            <div>
                <h3 className="text-3xl font-bold text-primary-800 mb-1">{stat.value}</h3>
                <p className="text-primary-600 font-medium">{stat.label}</p>
            </div>
        </div>
    );
} 