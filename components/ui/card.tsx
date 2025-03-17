'use client';

import { CalendarIcon, Clock, Users, MessageSquare, DollarSign } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface CardProps {
    category: string;
    bgColor: string;
    textColor: string;
    title: string;
    author: string;
    authorImage: string;
    cardImage: string;
    organizationLogo: string;
    organizationName: string;
    date: string;
    time: string;
    attendees: number;
    language: string;
    price?: string;
    joinLink: string;
}

export function EventCard({
    category,
    bgColor,
    textColor,
    title,
    author,
    authorImage,
    cardImage,
    organizationLogo,
    organizationName,
    date,
    time,
    attendees,
    language,
    price = "Free",
    joinLink,
}: CardProps) {
    const [isHovered, setIsHovered] = useState(false);

    // Use specific colors
    const categoryBgColor = category === "Speaking" ? "#c86478" : "#faaa5a";

    return (
        <div
            className="rounded-lg overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full transform transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Category header - half width */}
            <div className="flex justify-between">
                <div
                    className="py-2 px-5 rounded-tr-xl z-10"
                    style={{ backgroundColor: categoryBgColor }}
                >
                    <span className="font-medium text-white">{category}</span>
                </div>
                <div className="flex-grow"></div>
            </div>

            {/* Image section with author overlay */}
            <div className="relative h-48 -mt-8 overflow-hidden rounded-t-lg">
                <div className="absolute inset-0 transition-transform duration-700 ease-out"
                    style={{ transform: isHovered ? 'scale(1.07)' : 'scale(1)' }}>
                    <Image
                        src={cardImage}
                        alt={title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80 transition-opacity duration-300"
                    style={{ opacity: isHovered ? 0.9 : 0.7 }}>
                    <div className="absolute bottom-0 left-0 p-4 text-white transition-transform duration-300"
                        style={{ transform: isHovered ? 'translateY(-4px)' : 'translateY(0)' }}>
                        <h3 className="text-xl font-bold leading-tight mb-1">
                            {title}
                        </h3>
                        <p className="text-sm text-white/90">{author}</p>
                    </div>
                </div>

                {/* Author image - appears in the bottom right */}
                <div className="absolute -bottom-6 right-6 group z-20">
                    <div className="relative w-16 h-16 border-2 border-white rounded-full overflow-hidden transition-all duration-300 shadow-md hover:shadow-lg"
                        style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}>
                        <Image
                            src={authorImage}
                            alt={author}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-1 right-0 w-5 h-5 bg-green-500 rounded-full border-2 border-white transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
                </div>
            </div>

            {/* Organization section */}
            <div className="flex items-center px-4 pt-5 pb-3 mt-4">
                <div className="w-7 h-7 mr-2 relative">
                    <Image
                        src={organizationLogo}
                        alt={organizationName}
                        fill
                        className="object-contain rounded-full"
                    />
                </div>
                <span className="text-sm text-gray-700">{organizationName}</span>
            </div>

            {/* Details with animated icons */}
            <div className="px-4 pb-3">
                <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600 group">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full mr-2 transition-colors duration-300 group-hover:bg-gray-50"
                            style={{ backgroundColor: isHovered ? `${categoryBgColor}10` : '' }}>
                            <CalendarIcon className="w-4 h-4 text-gray-400 transition-colors duration-300"
                                style={{ color: isHovered ? categoryBgColor : '' }} />
                        </div>
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 group">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full mr-2 transition-colors duration-300 group-hover:bg-gray-50"
                            style={{ backgroundColor: isHovered ? `${categoryBgColor}10` : '' }}>
                            <Clock className="w-4 h-4 text-gray-400 transition-colors duration-300"
                                style={{ color: isHovered ? categoryBgColor : '' }} />
                        </div>
                        <span>{time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 group">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full mr-2 transition-colors duration-300 group-hover:bg-gray-50"
                            style={{ backgroundColor: isHovered ? `${categoryBgColor}10` : '' }}>
                            <Users className="w-4 h-4 text-gray-400 transition-colors duration-300"
                                style={{ color: isHovered ? categoryBgColor : '' }} />
                        </div>
                        <span><span className="font-medium">{attendees.toLocaleString()}+</span> Attending</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 group">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full mr-2 transition-colors duration-300 group-hover:bg-gray-50"
                            style={{ backgroundColor: isHovered ? `${categoryBgColor}10` : '' }}>
                            <MessageSquare className="w-4 h-4 text-gray-400 transition-colors duration-300"
                                style={{ color: isHovered ? categoryBgColor : '' }} />
                        </div>
                        <span>{language}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 group">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full mr-2 transition-colors duration-300 group-hover:bg-gray-50"
                            style={{ backgroundColor: isHovered ? `${categoryBgColor}10` : '' }}>
                            <DollarSign className="w-4 h-4 text-gray-400 transition-colors duration-300"
                                style={{ color: isHovered ? categoryBgColor : '' }} />
                        </div>
                        <span className="font-medium">{price}</span>
                    </div>
                </div>
            </div>

            {/* Join button with reduced padding */}
            <div className="px-4 pb-4 mt-auto">
                <Link href={joinLink} passHref>
                    <button
                        className="w-full py-2 text-center font-medium rounded-md transition-all duration-300 text-white hover:shadow-md active:translate-y-px overflow-hidden relative"
                        style={{ backgroundColor: categoryBgColor }}
                    >
                        <span className="relative z-10">Join</span>
                        <div className="absolute inset-0 opacity-0 hover:opacity-20 bg-white transition-opacity duration-300"></div>
                    </button>
                </Link>
            </div>
        </div>
    );
} 