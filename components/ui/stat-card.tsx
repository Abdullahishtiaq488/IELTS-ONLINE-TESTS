import React from 'react';
import Image from 'next/image';
import { IELTSStat } from '@/types/data';

interface StatCardProps {
    stat: IELTSStat;
}

export function StatCard({ stat }: StatCardProps) {
    return (
        <div className="flex items-center">
            <div className="mr-5">
                <Image
                    src={stat.image}
                    alt={stat.label}
                    width={60}
                    height={60}
                />
            </div>
            <div>
                <h3 className="text-2xl font-bold text-primary-900">{stat.value}</h3>
                <p className="text-primary-700 font-medium">{stat.label}</p>
            </div>
        </div>
    );
} 