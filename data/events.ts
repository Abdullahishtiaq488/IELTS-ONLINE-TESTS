import { LiveEvent } from '@/types/data';

// Array of upcoming live events with details like category, title, author, images, 
// organization info, date/time, attendees count, language, and join link
export const upcomingLiveEvents: LiveEvent[] = [
    {
        category: "Speaking", // Event category (Speaking/Writing)
        title: "Speaking - Talking about People",
        author: "Gillian S.",
        authorImage: "/images/professor1.jpg",
        cardImage: "/images/card-image1.jpg",
        organizationLogo: "/images/intergreat-logo-en.svg",
        organizationName: "InterGreat Education Group",
        date: "20/03/2025",
        time: "18:00 - 19:00 (GMT +5)",
        attendees: 1350, // Number of registered attendees
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