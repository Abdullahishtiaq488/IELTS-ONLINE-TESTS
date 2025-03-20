'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface Tip {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    date: string;
    views: number;
    votes?: number;
}

interface TipsListProps {
    tips: Tip[];
}

export function TipsList({ tips }: TipsListProps) {
    const ITEMS_PER_PAGE = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(tips.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const visibleTips = tips.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            {/* Tips List */}
            <div className="space-y-6">
                {visibleTips.map((tip) => (
                    <Link
                        key={tip.id}
                        href={`/tips/${tip.id}`}
                        className="block bg-white rounded-xl p-6 hover:shadow-md transition-shadow"
                    >
                        <div className="flex gap-6">
                            <div className="w-32 h-26 rounded-xl overflow-hidden relative flex-shrink-0">
                                <Image
                                    src={tip.image}
                                    alt={tip.title}
                                    fill
                                    className=" object-cover rounded-lg"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-xl font-semibold text-blue-900 mb-2 line-clamp-2">
                                    {tip.title}
                                </h3>
                                <p className="text-gray-600 mb-4 line-clamp-2">
                                    {tip.description}
                                </p>
                                <div className="flex items-center text-sm text-gray-500">
                                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full font-medium">
                                        {tip.category}
                                    </span>
                                    <span className="mx-4">|</span>
                                    <span>{tip.date}</span>
                                    <span className="mx-4">|</span>
                                    <span className="flex items-center">
                                        <Eye className="h-4 w-4 mr-1" />
                                        {tip.views.toLocaleString()}
                                    </span>
                                    {tip.votes && (
                                        <>
                                            <span className="mx-4">|</span>
                                            <span>{tip.votes} votes</span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-8">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="p-2 rounded-lg border border-gray-200 hover:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>

                    <div className="flex items-center gap-2">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`px-4 py-2 rounded-lg border transition-colors ${currentPage === page
                                    ? 'bg-blue-600 text-white border-blue-600'
                                    : 'border-gray-200 hover:border-blue-500'
                                    }`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="p-2 rounded-lg border border-gray-200 hover:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </div>
            )}
        </div>
    );
} 