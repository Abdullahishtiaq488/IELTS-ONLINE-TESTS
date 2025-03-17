'use client';

import Image from 'next/image';
import { EventCard } from '@/components/ui/card';

export default function HeroSection() {
    // Event data with updated styling
    const events = [
        {
            category: "Speaking",
            title: "Speaking - Talking about People",
            author: "Gillian S.",
            authorImage: "/images/professor1.jpg",
            cardImage: "/images/card-image1.jpg",
            organizationLogo: "/images/intergreat-logo-en.svg",
            organizationName: "InterGreat Education Group",
            date: "20/03/2025",
            time: "18:00 - 19:00 (GMT +5)",
            attendees: 1350,
            language: "English",
            joinLink: "/events/speaking-talking-about-people"
        },
        {
            category: "Writing",
            title: "Academic Writing Task 2 - Direct Question Essays - Full Lesson",
            author: "Tomas T.",
            authorImage: "/images/professor2.jpg",
            cardImage: "/images/card-image2.jpg",
            organizationLogo: "/images/intergreat-logo-en.svg",
            organizationName: "InterGreat Education Group",
            date: "24/03/2025",
            time: "18:00 - 19:00 (GMT +5)",
            attendees: 700,
            language: "English",
            joinLink: "/events/academic-writing-task-2"
        },
        {
            category: "Writing",
            title: "Academic Writing Task 1: Describing Maps: Changes in the Past",
            author: "Gillian S.",
            authorImage: "/images/professor1.jpg",
            cardImage: "/images/card-image3.jpg",
            organizationLogo: "/images/intergreat-logo-en.svg",
            organizationName: "InterGreat Education Group",
            date: "27/03/2025",
            time: "18:00 - 19:00 (GMT +5)",
            attendees: 350,
            language: "English",
            joinLink: "/events/academic-writing-task-1-maps"
        }
    ];

    return (
        <section className="w-full py-12 bg-gray-50">
            {/* Live Lessons Header */}
            <div className="container mx-auto px-4 text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
                    Join our live lessons for advice from the experts
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Build your confidence in all IELTS skills and prepare for studying abroad with our daily live lessons
                </p>
            </div>

            {/* Hero Image Section */}
            <div className="w-full bg-blue-900 relative h-48 mb-16">
                <Image
                    src="/images/hero-live-lessons.jpg"
                    alt="Live lessons by expert tutors"
                    fill
                    className="object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h2 className="text-4xl font-bold mb-2">Learn from Experts</h2>
                        <p className="text-xl max-w-2xl">Enhance your IELTS skills with our professional tutors</p>
                    </div>
                </div>
            </div>

            {/* Event Cards */}
            <div className="container mx-auto px-4">
                <h3 className="text-2xl font-bold text-blue-950 mb-8">Upcoming Live Lessons</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <EventCard
                            key={index}
                            category={event.category}
                            title={event.title}
                            author={event.author}
                            authorImage={event.authorImage}
                            cardImage={event.cardImage}
                            organizationLogo={event.organizationLogo}
                            organizationName={event.organizationName}
                            date={event.date}
                            time={event.time}
                            attendees={event.attendees}
                            language={event.language}
                            joinLink={event.joinLink}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
} 