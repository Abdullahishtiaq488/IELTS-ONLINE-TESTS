'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef } from 'react';
import { Tip } from '@/types/tips';

interface TipsListProps {
    tips: Tip[];
}

export function TipsList({ tips }: TipsListProps) {
    const ITEMS_PER_PAGE = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const tipsListRef = useRef<HTMLDivElement>(null);

    const totalPages = Math.ceil(tips.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const visibleTips = tips.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        // Scroll only to the top of this component instead of the whole page
        if (tipsListRef.current) {
            tipsListRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div ref={tipsListRef}>
            <h2 id="tips-list-heading" className="sr-only">IELTS Tips List</h2>
            {/* Tips List */}
            <div className="space-y-4 sm:space-y-6" aria-labelledby="tips-list-heading">
                {visibleTips.map((tip) => (
                    <Link
                        key={tip.id}
                        href={`/tips/${tip.id}`}
                        className="block bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-primary-500"
                        aria-label={`Read tip: ${tip.title}`}
                    >
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                            <div className="w-full sm:w-32 h-48 sm:h-26 rounded-lg sm:rounded-xl overflow-hidden relative flex-shrink-0">
                                <Image
                                    src={tip.image}
                                    alt=""
                                    fill
                                    className="object-cover rounded-lg"
                                    aria-hidden="true"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-lg sm:text-xl font-semibold text-primary-900 mb-2 line-clamp-2">
                                    {tip.title}
                                </h3>
                                <p className="text-sm sm:text-base text-tertiary-600 mb-3 sm:mb-4 line-clamp-2">
                                    {tip.description}
                                </p>
                                <div className="flex flex-wrap gap-2 sm:gap-0 items-center text-xs sm:text-sm text-tertiary-500">
                                    <span className="px-2 sm:px-3 py-1 bg-primary-50 text-primary-700 rounded-full font-medium">
                                        {tip.category}
                                    </span>
                                    <span className="hidden sm:inline mx-4" aria-hidden="true">|</span>
                                    <span>{tip.date}</span>
                                    <span className="hidden sm:inline mx-4" aria-hidden="true">|</span>
                                    <span className="flex items-center">
                                        <Eye className="h-3 w-3 sm:h-4 sm:w-4 mr-1" aria-hidden="true" />
                                        <span>{tip.views.toLocaleString()} views</span>
                                    </span>
                                    {tip.votes && (
                                        <>
                                            <span className="hidden sm:inline mx-4" aria-hidden="true">|</span>
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
                <nav aria-label="Tips pagination" className="mt-6 sm:mt-8">
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="p-1.5 sm:p-2 rounded-lg border border-muted-900 hover:border-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
                            aria-label="Previous page"
                        >
                            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                        </button>

                        <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => handlePageChange(page)}
                                    className={`px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 ${currentPage === page
                                        ? 'bg-primary-600 text-white border-primary-600'
                                        : 'border-muted-900 hover:border-primary-500'
                                        }`}
                                    aria-label={`Page ${page}`}
                                    aria-current={currentPage === page ? 'page' : undefined}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="p-1.5 sm:p-2 rounded-lg border border-muted-900 hover:border-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
                            aria-label="Next page"
                        >
                            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                        </button>
                    </div>
                </nav>
            )}
        </div>
    );
}