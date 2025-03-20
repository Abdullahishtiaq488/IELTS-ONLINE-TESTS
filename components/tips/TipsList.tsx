'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Tip } from '@/types/tips';

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
            <div className="space-y-4 sm:space-y-6">
                {visibleTips.map((tip) => (
                    <Link
                        key={tip.id}
                        href={`/tips/${tip.id}`}
                        className="block bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-md transition-shadow"
                    >
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                            <div className="w-full sm:w-32 h-48 sm:h-26 rounded-lg sm:rounded-xl overflow-hidden relative flex-shrink-0">
                                <Image
                                    src={tip.image}
                                    alt={tip.title}
                                    fill
                                    className="object-cover rounded-lg"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-2 line-clamp-2">
                                    {tip.title}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-2">
                                    {tip.description}
                                </p>
                                <div className="flex flex-wrap gap-2 sm:gap-0 items-center text-xs sm:text-sm text-gray-500">
                                    <span className="px-2 sm:px-3 py-1 bg-blue-50 text-blue-700 rounded-full font-medium">
                                        {tip.category}
                                    </span>
                                    <span className="hidden sm:inline mx-4">|</span>
                                    <span>{tip.date}</span>
                                    <span className="hidden sm:inline mx-4">|</span>
                                    <span className="flex items-center">
                                        <Eye className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                                        {tip.views.toLocaleString()}
                                    </span>
                                    {tip.votes && (
                                        <>
                                            <span className="hidden sm:inline mx-4">|</span>
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
                <div className="flex flex-wrap items-center justify-center gap-2 mt-6 sm:mt-8">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="p-1.5 sm:p-2 rounded-lg border border-gray-200 hover:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>

                    <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-lg border transition-colors ${currentPage === page
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
                        className="p-1.5 sm:p-2 rounded-lg border border-gray-200 hover:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>
                </div>
            )}
        </div>
    );
}