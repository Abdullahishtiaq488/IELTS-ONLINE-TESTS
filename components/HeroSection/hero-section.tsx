'use client';

import { EventCard } from '@/components/ui/card';
import { Section } from '@/components/ui/section';
import { upcomingLiveEvents } from '@/data/events';

export default function HeroSection() {
    return (
        <Section background="gray">
            <h3 className="text-2xl font-bold text-blue-950">Upcoming Live Lessons</h3>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingLiveEvents.map((event, index) => (
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