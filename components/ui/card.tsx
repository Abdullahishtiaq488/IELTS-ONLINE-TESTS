'use client';

import { CalendarIcon, Clock, Users, MessageSquare, DollarSign } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

interface CardProps {
    category: string;
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
    const cardRef = useRef<HTMLDivElement>(null);

    // Optimize hover for mobile by maintaining state
    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const touchStartHandler = () => setIsHovered(true);
        const touchEndHandler = () => {
            // Small delay to prevent flickering
            setTimeout(() => setIsHovered(false), 100);
        };

        card.addEventListener('touchstart', touchStartHandler);
        card.addEventListener('touchend', touchEndHandler);

        return () => {
            card.removeEventListener('touchstart', touchStartHandler);
            card.removeEventListener('touchend', touchEndHandler);
        };
    }, []);

    // Use specific colors
    const categoryBgColor = category === "Speaking" ? "#c86478" : "#faaa5a";

    return (
        <div
            ref={cardRef}
            className="rounded-lg overflow-hidden shadow-sm flex flex-col h-full transform transition-all duration-300 ease-out hover:-translate-y-1 relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                borderWidth: '2px',
                borderStyle: 'solid',
                borderColor: isHovered ? categoryBgColor : 'transparent',
                boxShadow: isHovered ? `0 10px 25px -5px ${categoryBgColor}40, 0 0 15px -10px ${categoryBgColor}` : '0 1px 3px rgba(0,0,0,0.1)'
            }}
        >
            {/* Category header - as a sticker on top of image */}
            <div className="relative h-56 overflow-hidden rounded-t-lg">
                {/* Card background image */}
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

                {/* Category sticker on top */}
                <div className="absolute top-0 left-0 z-20">
                    <div
                        className="py-2 px-5 rounded-br-xl"
                        style={{ backgroundColor: categoryBgColor }}
                    >
                        <span className="font-medium text-white">{category}</span>
                    </div>
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80 transition-opacity duration-300"
                    style={{ opacity: isHovered ? 0.9 : 0.7 }}>

                    {/* Title and author info */}
                    <div className="absolute bottom-16 left-0 p-4 text-white transition-transform duration-300"
                        style={{ transform: isHovered ? 'translateY(-4px)' : 'translateY(0)' }}>
                        <h3 className="text-xl font-bold leading-tight mb-1">
                            {title}
                        </h3>
                        <p className="text-sm text-white/90">{author}</p>
                    </div>

                    {/* Organization section - now in the image area */}
                    <div className="absolute bottom-0 left-0 right-0 px-4 py-2.5 flex items-center bg-black/40 backdrop-blur-sm transition-opacity duration-300"
                        style={{ opacity: isHovered ? 0.95 : 0.8 }}>
                        <div className="w-6 h-6 mr-2 relative">
                            <Image
                                src={organizationLogo}
                                alt={organizationName}
                                fill
                                className="object-contain rounded-full"
                            />
                        </div>
                        <span className="text-sm text-white font-medium">{organizationName}</span>
                    </div>
                </div>

                {/* Author image - now larger and in bottom right corner */}
                <div className="absolute -bottom-6 -right-2 group z-20">
                    <div className="relative w-28 h-28 border-4 border-white rounded-full overflow-hidden transition-all duration-300 shadow-lg"
                        style={{
                            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                            boxShadow: isHovered ? `0 0 10px 2px ${categoryBgColor}40` : ''
                        }}>
                        <Image
                            src={authorImage}
                            alt={author}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute bottom-2 right-4 w-6 h-6 bg-green-500 rounded-full border-2 border-white transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
                </div>
            </div>

            {/* Details with animated icons */}
            <div className="px-4 pt-8 pb-3 mt-2">
                <div className="space-y-2.5">
                    <div className="flex items-center text-sm text-gray-600 group">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full mr-3 transition-colors duration-300 group-hover:bg-gray-50"
                            style={{ backgroundColor: isHovered ? `${categoryBgColor}10` : '' }}>
                            <CalendarIcon className="w-4 h-4 text-gray-400 transition-colors duration-300"
                                style={{ color: isHovered ? categoryBgColor : '' }} />
                        </div>
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 group">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full mr-3 transition-colors duration-300 group-hover:bg-gray-50"
                            style={{ backgroundColor: isHovered ? `${categoryBgColor}10` : '' }}>
                            <Clock className="w-4 h-4 text-gray-400 transition-colors duration-300"
                                style={{ color: isHovered ? categoryBgColor : '' }} />
                        </div>
                        <span>{time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 group">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full mr-3 transition-colors duration-300 group-hover:bg-gray-50"
                            style={{ backgroundColor: isHovered ? `${categoryBgColor}10` : '' }}>
                            <Users className="w-4 h-4 text-gray-400 transition-colors duration-300"
                                style={{ color: isHovered ? categoryBgColor : '' }} />
                        </div>
                        <span><span className="font-medium">{attendees.toLocaleString()}+</span> Attending</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 group">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full mr-3 transition-colors duration-300 group-hover:bg-gray-50"
                            style={{ backgroundColor: isHovered ? `${categoryBgColor}10` : '' }}>
                            <MessageSquare className="w-4 h-4 text-gray-400 transition-colors duration-300"
                                style={{ color: isHovered ? categoryBgColor : '' }} />
                        </div>
                        <span>{language}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 group">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full mr-3 transition-colors duration-300 group-hover:bg-gray-50"
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
                        className="w-full py-2.5 text-center font-medium rounded-md transition-all duration-300 text-white hover:shadow-md active:translate-y-px overflow-hidden relative"
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