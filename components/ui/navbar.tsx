'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Home, ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import { navigationItems } from '@/data/navigation';
import type { NavItem, NavItemArray } from '@/types/navigation';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdowns, setActiveDropdowns] = useState<Record<string, boolean>>({});
    const dropdownTimersRef = useRef<Record<string, NodeJS.Timeout>>({});

    const handleDropdownEnter = (key: string) => {
        if (dropdownTimersRef.current[key]) {
            clearTimeout(dropdownTimersRef.current[key]);
        }

        setActiveDropdowns(prev => ({
            ...prev,
            [key]: true
        }));
    };

    const handleDropdownLeave = (key: string) => {
        dropdownTimersRef.current[key] = setTimeout(() => {
            setActiveDropdowns(prev => ({
                ...prev,
                [key]: false
            }));
        }, 150);
    };

    useEffect(() => {
        return () => {
            Object.values(dropdownTimersRef.current).forEach(timer => {
                clearTimeout(timer);
            });
        };
    }, []);

    const renderNavItems = (items: NavItemArray, isNested = false, parentKey = '') => {
        return items.map((item, index) => {
            const hasItems = item.items && item.items.length > 0;
            const itemKey = parentKey ? `${parentKey}-${index}` : `item-${index}`;
            const isActive = activeDropdowns[itemKey];

            return (
                <div
                    key={itemKey}
                    className="relative"
                    onMouseEnter={() => hasItems && handleDropdownEnter(itemKey)}
                    onMouseLeave={() => hasItems && handleDropdownLeave(itemKey)}
                >
                    <Link
                        href={item.href || '#'}
                        className={`flex items-center gap-0.5 px-3 py-2 text-sm font-medium text-white hover:bg-blue-800 ${isNested ? 'pl-5' : ''
                            }`}
                    >
                        <span>{item.label}</span>
                        {hasItems && (
                            <ChevronDown
                                className={`w-3.5 h-3.5 ml-0.5 transition-transform ${isActive ? 'rotate-180' : ''
                                    }`}
                            />
                        )}
                    </Link>
                    {hasItems && isActive && item.items && (
                        <div
                            className={`absolute ${isNested ? 'left-full top-0 -ml-1' : 'left-0 top-[calc(100%+1px)]'
                                } bg-blue-900/95 backdrop-blur-sm shadow-lg border border-blue-800 min-w-[200px] z-50`}
                            onMouseEnter={() => handleDropdownEnter(itemKey)}
                            onMouseLeave={() => handleDropdownLeave(itemKey)}
                        >
                            {renderNavItems(item.items, true, itemKey)}
                        </div>
                    )}
                </div>
            );
        });
    };

    const renderMobileNavItems = (items: NavItemArray, isNested = false) => {
        return items.map((item, index) => {
            const hasItems = item.items && item.items.length > 0;
            const itemKey = `mobile-${item.label}-${index}`;
            const isActive = activeDropdowns[itemKey];

            return (
                <div key={itemKey}>
                    <div
                        className={`flex items-center justify-between px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${isNested ? 'pl-8' : ''
                            }`}
                        onClick={() => {
                            if (hasItems) {
                                setActiveDropdowns(prev => ({
                                    ...prev,
                                    [itemKey]: !prev[itemKey]
                                }));
                            }
                        }}
                    >
                        <span>{item.label}</span>
                        {hasItems && (
                            <ChevronRight
                                className={`w-4 h-4 transition-transform ${isActive ? 'transform rotate-90' : ''
                                    }`}
                            />
                        )}
                    </div>
                    {hasItems && isActive && item.items && (
                        <div className="bg-gray-50">
                            {renderMobileNavItems(item.items, true)}
                        </div>
                    )}
                </div>
            );
        });
    };

    return (
        <nav>
            {/* Top Section with Logo and Horizontal Image */}
            <div className="hidden sm:block bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-24">
                        <div className="flex-shrink-0">
                            <Link href="/" className="flex items-center">
                                <Image
                                    src="/images/logo.svg"
                                    alt="IELTS Online"
                                    width={180}
                                    height={180}
                                    className="h-16 w-auto"
                                />
                            </Link>
                        </div>
                        <div className="flex-shrink-0">
                            <Image
                                src="/images/top-nav-horizontal.png"
                                alt="IELTS Online Banner"
                                width={600}
                                height={80}
                                className="h-16 w-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="hidden sm:block bg-blue-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-12">
                        <div className="flex items-center space-x-4">
                            <Link href="/" className="text-white hover:text-blue-200 p-2">
                                <Home className="w-5 h-5" />
                            </Link>
                            {Object.entries(navigationItems).map(([key, item], index) => (
                                <div key={key} className="relative">
                                    {renderNavItems([item], false, `main-${index}`)}
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center space-x-6">
                            <Link href="/login" className="text-white hover:text-blue-200 text-sm font-medium">
                                Log In
                            </Link>
                            <Link
                                href="/signup"
                                className="text-white hover:text-blue-200 text-sm font-medium"
                            >
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className="sm:hidden bg-white border-b">
                <div className="flex justify-between items-center h-16 px-4">
                    <Link href="/" className="flex-shrink-0">
                        <Image
                            src="/images/logo.svg"
                            alt="IELTS Online"
                            width={120}
                            height={120}
                            className="h-10 w-auto"
                        />
                    </Link>
                    <button
                        type="button"
                        className="inline-flex items-center justify-center p-2 rounded-md text-blue-900 hover:bg-gray-100"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Menu className="h-6 w-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Slide in from right */}
            <div className={`fixed inset-0 overflow-hidden z-50 ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
                {/* Backdrop */}
                <div
                    className={`absolute inset-0 bg-black transition-opacity duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-25' : 'opacity-0'
                        }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                ></div>

                {/* Sidebar */}
                <div className={`absolute inset-y-0 right-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}>
                    <div className="flex items-center justify-between p-4 border-b">
                        <h2 className="text-lg font-medium text-blue-900">Menu</h2>
                        <button
                            type="button"
                            className="text-gray-500 hover:text-gray-700"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <X className="h-6 w-6" />
                        </button>
                    </div>

                    <div className="px-2 py-3 h-[calc(100%-4rem)] overflow-y-auto scrollbar-hide">
                        <div className="space-y-1">
                            {Object.entries(navigationItems).map(([key, item]) => (
                                <div key={`mobile-${key}`}>
                                    {renderMobileNavItems([item])}
                                </div>
                            ))}
                        </div>

                        <div className="mt-auto pt-4 border-t mt-4">
                            <Link href="/login" className="block px-4 py-2 text-sm font-medium text-blue-900 hover:bg-gray-50">
                                Log In
                            </Link>
                            <Link href="/signup" className="block px-4 py-2 text-sm font-medium text-blue-900 hover:bg-gray-50">
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
} 