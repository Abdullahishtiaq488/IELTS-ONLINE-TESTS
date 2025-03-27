'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Home, ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import { navigationItems } from '@/data/navigation';
import type { NavItemArray } from '@/types/navigation';
import { Container } from '@/components/ui/container';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdowns, setActiveDropdowns] = useState<Record<string, boolean>>({});
    const dropdownTimersRef = useRef<Record<string, NodeJS.Timeout>>({});
    const pathname = usePathname();
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    // Close dropdowns when navigating
    useEffect(() => {
        const handleRouteChange = () => {
            setActiveDropdowns({});
            setIsMobileMenuOpen(false);
        };

        window.addEventListener('popstate', handleRouteChange);
        return () => {
            window.removeEventListener('popstate', handleRouteChange);
        };
    }, []);

    // Close dropdowns when pathname changes
    useEffect(() => {
        setActiveDropdowns({});
        setIsMobileMenuOpen(false);
    }, [pathname]);

    // Handle clicks outside mobile menu to close it
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isMobileMenuOpen &&
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(event.target as Node)) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

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
            const dropdownId = `dropdown-${itemKey}`;

            return (
                <div
                    key={itemKey}
                    className="relative"
                    onMouseEnter={() => hasItems && handleDropdownEnter(itemKey)}
                    onMouseLeave={() => hasItems && handleDropdownLeave(itemKey)}
                >
                    {hasItems ? (
                        <div className="flex items-center hover:bg-slate-600">
                            {item.href ? (
                                <Link
                                    href={item.href}
                                    className="flex-1 flex items-center gap-0.5 px-6 h-12 text-xs md:text-xs lg:text-sm font-bold text-white"
                                >
                                    <span>{item.label}</span>
                                </Link>
                            ) : (
                                <span className="flex-1 flex items-center gap-0.5 px-6 h-12 text-xs md:text-xs lg:text-sm font-bold text-white">
                                    {item.label}
                                </span>
                            )}
                            <button
                                className="flex items-center h-12 px-2 text-xs md:text-xs lg:text-sm font-bold text-white"
                                aria-expanded={isActive}
                                aria-controls={dropdownId}
                                aria-haspopup="true"
                            >
                                <ChevronDown
                                    className={`w-3 h-3 md:w-3.5 md:h-3.5 transition-transform ${isActive ? 'rotate-180' : ''}`}
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                    ) : (
                        <Link
                            href={item.href || '#'}
                            className={`flex items-center gap-0.5 px-6 h-12 text-xs md:text-xs lg:text-sm font-bold text-white hover:bg-slate-600 ${isNested ? 'pl-4 h-8' : ''}`}
                            onClick={() => setActiveDropdowns({})}
                        >
                            <span>{item.label}</span>
                        </Link>
                    )}

                    {hasItems && isActive && item.items && (
                        <div
                            id={dropdownId}
                            className={`absolute ${isNested ? 'left-full top-0 -ml-1' : 'left-0 top-full'} bg-blue-950/95 shadow-lg min-w-[200px] md:min-w-[220px] lg:min-w-[240px] z-50`}
                            onMouseEnter={() => handleDropdownEnter(itemKey)}
                            onMouseLeave={() => handleDropdownLeave(itemKey)}
                            role="menu"
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
            const mobileDropdownId = `mobile-dropdown-${itemKey}`;

            return (
                <div key={itemKey}>
                    {hasItems ? (
                        <div className="flex items-center w-full">
                            {item.href ? (
                                <Link
                                    href={item.href}
                                    className={`flex-1 px-3 py-3 text-sm font-bold text-secondary-700 hover:bg-secondary-50 ${isNested ? 'pl-6' : ''} transition-colors duration-200`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span className={`flex-1 px-3 py-3 text-sm font-bold text-secondary-700 ${isNested ? 'pl-6' : ''}`}>
                                    {item.label}
                                </span>
                            )}
                            <button
                                className={`px-3 py-3 text-sm font-bold text-secondary-700 hover:bg-secondary-50 transition-colors duration-200`}
                                onClick={() => {
                                    // Close other dropdowns at the same level
                                    const newDropdowns = { ...activeDropdowns };

                                    // Find and close siblings at the same level
                                    Object.keys(newDropdowns).forEach(key => {
                                        if (key.startsWith('mobile-') && key !== itemKey &&
                                            key.split('-').length === itemKey.split('-').length) {
                                            newDropdowns[key] = false;
                                        }
                                    });

                                    // Toggle current dropdown
                                    newDropdowns[itemKey] = !newDropdowns[itemKey];
                                    setActiveDropdowns(newDropdowns);
                                }}
                                aria-expanded={isActive}
                                aria-controls={mobileDropdownId}
                                aria-haspopup="true"
                            >
                                <ChevronRight
                                    className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'transform rotate-90' : ''}`}
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                    ) : (
                        <Link
                            href={item.href || '#'}
                            className={`block px-3 py-3 text-sm font-bold text-secondary-700 hover:bg-secondary-50 ${isNested ? 'pl-6' : ''} transition-colors duration-200`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    )}

                    {hasItems && item.items && (
                        <div
                            id={mobileDropdownId}
                            className={`bg-muted-50 overflow-hidden transition-all duration-300 ease-in-out ${isActive ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                            role="menu"
                        >
                            {renderMobileNavItems(item.items, true)}
                        </div>
                    )}
                </div>
            );
        });
    };

    return (
        <nav aria-label="Main navigation">
            {/* Top Section with Logo and Horizontal Image */}
            <div className="hidden md:block bg-white border-b">
                <Container>
                    <div className="flex justify-between items-center h-24 md:h-28 lg:h-32">
                        <div className="flex-shrink-0">
                            <Link href="/" className="flex items-center">
                                <Image
                                    src="/images/logo.jpg"
                                    alt="IELTS Online"
                                    width={1250}
                                    height={965}
                                    className="h-16 md:h-20 lg:h-24 w-auto object-contain"
                                    priority
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
            <div className="hidden md:block bg-primary-950">
                <Container>
                    <div className="flex items-center justify-between h-10 md:h-12 lg:h-14">
                        <div className="flex items-center">
                            <Link href="/" className="text-white hover:bg-slate-600 px-3 h-10 md:h-12 lg:h-14 flex items-center" aria-label="Home">
                                <Home className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" aria-hidden="true" />
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
                            src="/images/logo.jpg"
                            alt="IELTS Online"
                            width={1250}
                            height={965}
                            className="h-10 w-auto"
                        />
                    </Link>
                    <button
                        type="button"
                        className="inline-flex items-center justify-center p-2 rounded-md text-primary-900 hover:bg-secondary-100 transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-menu"
                        aria-label="Open main menu"
                    >
                        <Menu className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Slide in from right */}
            <div className={`fixed inset-0 overflow-hidden z-50 ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
                {/* Backdrop */}
                <div
                    className={`absolute inset-0 bg-black transition-opacity duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-25' : 'opacity-0'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-hidden="true"
                ></div>

                {/* Sidebar */}
                <div
                    id="mobile-menu"
                    ref={mobileMenuRef}
                    className={`absolute inset-y-0 right-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} no-scrollbar`}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Mobile navigation menu"
                >
                    <div className="flex items-center justify-between p-4 border-b">
                        <h2 className="text-base font-bold text-primary-900">Menu</h2>
                        <button
                            type="button"
                            className="text-secondary-500 hover:text-secondary-700 transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                            aria-label="Close menu"
                        >
                            <X className="h-5 w-5" aria-hidden="true" />
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
                                <Link href="/login" className="block px-3 py-2 text-sm font-bold text-primary-900 hover:bg-secondary-50 transition-colors duration-200">
                                    Log In
                                </Link>
                                <Link href="/signup" className="block px-3 py-2 text-sm font-bold text-primary-900 hover:bg-secondary-50 transition-colors duration-200">
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