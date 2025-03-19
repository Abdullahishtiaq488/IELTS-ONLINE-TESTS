'use client';

import { EventCard } from '@/components/ui/card';
import { Section } from '@/components/ui/section';

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
        <Section background="gray">
            <h3 className="text-2xl font-bold text-blue-950">Upcoming Live Lessons</h3>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </Section>
    );
} 