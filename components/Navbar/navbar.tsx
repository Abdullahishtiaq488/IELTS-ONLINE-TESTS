'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Home, ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import { navigationItems } from '@/data/navigation';
import type { NavItemArray } from '@/types/navigation';
import { Container } from '@/components/ui/container';

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
        // Store the reference to prevent issues with cleanup
        const timers = dropdownTimersRef.current;

        return () => {
            Object.values(timers).forEach(timer => {
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
                        className={`flex items-center gap-0.5 px-6 h-12 text-xs md:text-xs lg:text-sm font-bold text-white hover:bg-slate-600 ${isNested ? 'pl-4 h-8' : ''
                            }`}
                    >
                        <span>{item.label}</span>
                        {hasItems && (
                            <ChevronDown
                                className={`w-3 h-3 md:w-3.5 md:h-3.5 ml-0.5 transition-transform ${isActive ? 'rotate-180' : ''
                                    }`}
                            />
                        )}
                    </Link>
                    {hasItems && isActive && item.items && (
                        <div
                            className={`absolute ${isNested ? 'left-full top-0 -ml-1' : 'left-0 top-full'
                                } bg-blue-950/95 backdrop-blur-sm shadow-lg min-w-[200px] md:min-w-[220px] lg:min-w-[240px] z-50`}
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
                        className={`flex items-center justify-between px-3 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 ${isNested ? 'pl-6' : ''
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
            <div className="hidden md:block bg-white border-b">
                <Container>
                    <div className="flex justify-between items-center h-24 md:h-28 lg:h-32">
                        <div className="flex-shrink-0">
                            <Link href="/" className="flex items-center">
                                <Image
                                    src="/images/logo.svg"
                                    alt="IELTS Online"
                                    width={180}
                                    height={180}
                                    className="h-16 md:h-20 lg:h-24 w-auto"
                                />
                            </Link>
                        </div>
                        <div className="flex-shrink-0">
                            <Image
                                src="/images/top-nav-horizontal.png"
                                alt="IELTS Online Banner"
                                width={600}
                                height={80}
                                className="h-16 md:h-20 lg:h-24 w-auto"
                            />
                        </div>
                    </div>
                </Container>
            </div>

            {/* Main Navigation */}
            <div className="hidden md:block bg-blue-950">
                <Container>
                    <div className="flex items-center justify-between h-10 md:h-12 lg:h-14">
                        <div className="flex items-center">
                            <Link href="/" className="text-white hover:bg-slate-600 px-3 h-10 md:h-12 lg:h-14 flex items-center">
                                <Home className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                            </Link>
                            <div className="flex items-center space-x-2 md:space-x-0 md:text-xs">
                                {Object.entries(navigationItems).map(([key, item], index) => (
                                    <div key={key}>
                                        {renderNavItems([item], false, `main-${index}`)}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 md:space-x-1 lg:space-x-4">
                            <Link href="/login" className="text-white hover:underline text-xs md:text-xs lg:text-sm font-bold h-10 md:h-12 lg:h-14 px-3 flex items-center">
                                Log In
                            </Link>
                            <Link
                                href="/signup"
                                className="text-white hover:underline text-xs md:text-xs lg:text-sm font-bold h-10 md:h-12 lg:h-14 px-3 flex items-center"
                            >
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden bg-white border-b">
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
                    } no-scrollbar`}>
                    <div className="flex items-center justify-between p-4 border-b">
                        <h2 className="text-base font-bold text-blue-900">Menu</h2>
                        <button
                            type="button"
                            className="text-gray-500 hover:text-gray-700"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="h-[calc(100%-4rem)] overflow-y-auto no-scrollbar">
                        <div className="px-2 py-3">
                            <div className="space-y-0.5">
                                {Object.entries(navigationItems).map(([key, item]) => (
                                    <div key={`mobile-${key}`}>
                                        {renderMobileNavItems([item])}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-4 pt-4 border-t">
                                <Link href="/login" className="block px-3 py-2 text-sm font-bold text-blue-900 hover:bg-gray-50">
                                    Log In
                                </Link>
                                <Link href="/signup" className="block px-3 py-2 text-sm font-bold text-blue-900 hover:bg-gray-50">
                                    Sign Up
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
} 