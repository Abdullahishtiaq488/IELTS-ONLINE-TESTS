'use client';

import React, { useState, useRef, useEffect } from 'react';
import { TestFeature } from '@/types/data';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface FeatureTabsProps {
    features: TestFeature[];
    activeFeatureId: string;
    onTabChange: (id: string) => void;
}

export function FeatureTabs({ features, activeFeatureId, onTabChange }: FeatureTabsProps) {
    const [clickedTab, setClickedTab] = useState<string | null>(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(false);
    const [isScrollable, setIsScrollable] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleTabClick = (id: string) => {
        setClickedTab(id);
        onTabChange(id);

        // Reset the clicked state after the flash effect
        setTimeout(() => {
            setClickedTab(null);
        }, 400); // Extended duration for more noticeable effect
    };

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    const checkScrollPosition = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            const hasHorizontalScroll = scrollWidth > clientWidth;

            setShowLeftArrow(scrollLeft > 0);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5); // 5px buffer
            setIsScrollable(hasHorizontalScroll);
        }
    };

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            checkScrollPosition();
            scrollContainer.addEventListener('scroll', checkScrollPosition);
            window.addEventListener('resize', checkScrollPosition);

            // Initial check after content is fully loaded
            setTimeout(checkScrollPosition, 100);

            return () => {
                scrollContainer.removeEventListener('scroll', checkScrollPosition);
                window.removeEventListener('resize', checkScrollPosition);
            };
        }
    }, []);

    return (
        <>
            {/* Mobile scroll hint - only visible on small screens when content is scrollable */}
            <div className={`flex items-center justify-center mb-2 md:hidden ${isScrollable ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'} transition-opacity duration-300`}>
                <div className="flex items-center text-xs text-primary-700 bg-secondary-100 px-3 py-1 rounded-full">
                    <ChevronLeft className="h-3 w-3 mr-1 animate-pulse" />
                    <span>Scroll to see more</span>
                    <ChevronRight className="h-3 w-3 ml-1 animate-pulse" />
                </div>
            </div>

            <div className="relative group">
                {/* Left scroll indicator */}
                <button
                    onClick={scrollLeft}
                    className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-primary-800 hover:bg-primary-700 text-white rounded-r-md p-2 shadow-lg transition-all duration-300 ${showLeftArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'} sm:opacity-100 md:opacity-90`}
                    aria-label="Scroll left"
                >
                    <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7 font-bold" />
                </button>

                {/* Scrollable tabs container */}
                <div
                    ref={scrollContainerRef}
                    className="flex w-full overflow-x-auto scrollbar-hide scroll-smooth"
                >
                    {features.map((feature) => (
                        <button
                            key={feature.id}
                            onClick={() => handleTabClick(feature.id)}
                            className={`flex-1 py-4 px-4 text-center text-sm sm:text-base whitespace-nowrap font-medium
                            transition-all duration-300
                            ${clickedTab === feature.id ? 'scale-90 brightness-125 shadow-md' : ''}
                            ${feature.id === activeFeatureId
                                    ? 'bg-accent-400 text-primary-900'
                                    : 'bg-primary-900 text-white hover:bg-primary-800 hover:opacity-80'}`}
                        >
                            {feature.title}
                        </button>
                    ))}
                </div>

                {/* Right scroll indicator */}
                <button
                    onClick={scrollRight}
                    className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-accent-400 hover:bg-accent-500 text-primary-900 rounded-l-md p-2 shadow-lg transition-all duration-300 ${showRightArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'} sm:opacity-100 md:opacity-90`}
                    aria-label="Scroll right"
                >
                    <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7 font-bold" />
                </button>
            </div>
        </>
    );
}