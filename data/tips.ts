import { IELTSTip } from '@/types/data';

export const ieltsTips: IELTSTip[] = [
    {
        title: "5 Penalty Areas for Indian Students in IELTS Listening",
        image: "/images/tip-image1.jpg",
        rating: 3.5,
        votes: 352,
        description: "Since Indian students are writing and speaking in English with Indian accent, with not much exposure to foreign accent, it can be the cause of s...",
        category: "Listening Tips",
        views: 87051,
        link: "/tips/listening/indian-students-penalty-areas"
    },
    {
        title: "110 IELTS Words, IELTS Vocabulary List",
        image: "/images/tip-image2.jpg",
        rating: 3.3,
        votes: 1035,
        description: "1.analogy 2.analysis 3.analyze 4.annotate 5.anticipate 6.application 7.apply 8.approach 9.associate 10.assume 11.assumpt...",
        category: "Reading Tips",
        views: 209682,
        link: "/tips/reading/ielts-vocabulary-list"
    },
    {
        title: "Common Spelling Errors and How to Avoid Them",
        image: "/images/tip-image3.jpg",
        rating: 3.3,
        votes: 294,
        description: "Many students often make mistakes in writing some words incorrectly as they are ambiguous about their spellings. Committing spelling errors can...",
        category: "Writing Tips",
        views: 81618,
        link: "/tips/writing/common-spelling-errors"
    },
    {
        title: "How To Improve Your Pronunciation",
        image: "/images/tip-image4.jpg",
        rating: 3.4,
        votes: 359,
        description: "Below we share with you ten tips that will help improve your pronunciations 1. Decide on the option of English English has different ways of pro...",
        category: "Speaking tips",
        views: 52493,
        link: "/tips/speaking/improve-pronunciation"
    }
];

// Popular Tips Data
export const popularTips = {
    reading: [
        {
            id: '1',
            title: '30 Words That Can Be Confusing Even To Native Speakers',
            description: 'Have you ever come across some words that just simply don\'t make sense?',
            image: '/images/tip-box1.png',
            category: 'Reading Tips',
            views: 137646
        },
        {
            id: '2',
            title: 'Top Reading Strategies for IELTS Success',
            description: 'Learn time-management techniques and effective approaches to tackle different question types.',
            image: '/images/tip-box2.png',
            category: 'Reading Tips',
            views: 87632
        },
        {
            id: '3',
            title: 'How to Improve Your Reading Speed',
            description: 'Master speed reading techniques while maintaining comprehension accuracy.',
            image: '/images/tip-box3.png',
            category: 'Reading Tips',
            views: 76543
        }
    ],
    listening: [
        {
            id: '1',
            title: '10 techniques for IELTS Listening',
            description: 'These IELTS Listening Tips provide you with essential strategies for success.',
            image: '/images/tip-box4.png',
            category: 'Listening Tips',
            views: 98245
        },
        {
            id: '2',
            title: 'Common Listening Mistakes to Avoid',
            description: 'Learn about the most frequent errors candidates make and how to avoid them.',
            image: '/images/tip-box5.png',
            category: 'Listening Tips',
            views: 87654
        },
        {
            id: '3',
            title: 'Note-Taking Strategies for Listening',
            description: 'Effective techniques for taking notes during the listening test.',
            image: '/images/tip-box6.png',
            category: 'Listening Tips',
            views: 76543
        }
    ],
    writing: [
        {
            id: '1',
            title: 'How to Write a Band 8 Essay',
            description: 'Step-by-step guide to writing high-scoring IELTS essays.',
            image: '/images/tip-box1.png',
            category: 'Writing Tips',
            views: 156789
        },
        {
            id: '2',
            title: 'Task 1 Writing: Graph Description',
            description: 'Learn how to describe graphs, charts, and diagrams effectively.',
            image: '/images/tip-box2.png',
            category: 'Writing Tips',
            views: 143567
        },
        {
            id: '3',
            title: 'Common Writing Task 2 Topics',
            description: 'Prepare for the most frequently appearing essay topics.',
            image: '/images/tip-box3.png',
            category: 'Writing Tips',
            views: 132456
        }
    ],
    speaking: [
        {
            id: '1',
            title: 'Speaking Part 2: How to Talk for 2 Minutes',
            description: 'Master the art of speaking continuously on any topic.',
            image: '/images/tip-box4.png',
            category: 'Speaking Tips',
            views: 178901
        },
        {
            id: '2',
            title: 'Common Speaking Topics and Sample Answers',
            description: 'Practice with real IELTS speaking questions and model responses.',
            image: '/images/tip-box5.png',
            category: 'Speaking Tips',
            views: 165432
        },
        {
            id: '3',
            title: 'Pronunciation Tips for Higher Scores',
            description: 'Improve your pronunciation and fluency for better speaking scores.',
            image: '/images/tip-box6.png',
            category: 'Speaking Tips',
            views: 154321
        }
    ]
};

// Featured Tips Data (Common across all sections)
export const featuredTips = [
    {
        id: '1',
        title: 'IELTS Grammar 101 by IOT',
        description: 'In the journey towards achieving success in the IELTS examination, a solid grasp of grammar is essential. The IELTS Grammar 101 course is designed...',
        image: '/images/featured-ielts-tips1.png',
        category: 'IELTS Grammar',
        date: '05/26/2023',
        views: 275132,
        rating: 3.6,
        votes: 261
    },
    {
        id: '2',
        title: 'Actual tests in May 11th, 2023 Writing Task 2 (paper-based): Opinion',
        description: 'WRITING TASK 2 You should spend about 40 minutes on this task. Advertising is becoming more and more common in everyday life. Is it a positive...',
        image: '/images/featured-ielts-tips2.png',
        category: 'Writing Recent Actual Tests',
        date: '05/11/2023',
        views: 12957,
        rating: 3.4,
        votes: 113
    },
    {
        id: '3',
        title: 'Actual tests in May 11th, 2023 Writing Task 1 (paper-based): Barchart',
        description: 'WRITING TASK 1 You should spend about 20 minutes on this task. The chart below compare the number of people per household* in the...',
        image: '/images/featured-ielts-tips3.png',
        category: 'Writing Recent Actual Tests',
        date: '05/11/2023',
        views: 11794,
        rating: 3.4,
        votes: 72
    },
    {
        id: '4',
        title: 'Actual tests in May 10th, 2023 Writing Task 1 (paper-based): Line Graph',
        description: 'WRITING TASK 1 You should spend about 20 minutes on this task. The line graph shows the number of overseas visitors who came to the...',
        image: '/images/featured-ielts-tips4.png',
        category: 'Writing Recent Actual Tests',
        date: '05/10/2023',
        views: 20425,
        rating: 3.3,
        votes: 117
    }
];

// Main Content Tips Data
export const mainTips = {
    reading: [
        {
            id: '1',
            title: 'IELTS Academic Reading Practice #1: How Pterosaurs- a prehistoric predator took to the skies',
            description: 'Practice your reading skills with this fascinating article about prehistoric flying creatures.',
            image: '/images/tip-image1.jpg',
            category: 'Reading Tips',
            date: '11/04/2022',
            views: 17255,
            votes: 23
        },
        {
            id: '2',
            title: '110 IELTS Words, IELTS Vocabulary List',
            description: 'Essential vocabulary for IELTS success',
            image: '/images/tip-image2.jpg',
            category: 'Reading Tips',
            date: '11/18/2020',
            views: 209920,
            votes: 1035
        },
        {
            id: '3',
            title: 'Reading Comprehension Strategies',
            description: 'Master the art of understanding complex academic texts.',
            image: '/images/tip-image3.jpg',
            category: 'Reading Tips',
            date: '10/15/2023',
            views: 156789,
            votes: 456
        }
    ],
    listening: [
        {
            id: '1',
            title: 'Understanding Different Accents in IELTS Listening',
            description: 'Tips for comprehending various English accents in the test.',
            image: '/images/tip-image1.jpg',
            category: 'Listening Tips',
            date: '12/01/2023',
            views: 18654,
            votes: 45
        },
        {
            id: '2',
            title: 'IELTS Listening Section 3: Academic Discussion',
            description: 'How to handle academic discussions in the listening test.',
            image: '/images/tip-image2.jpg',
            category: 'Listening Tips',
            date: '11/28/2023',
            views: 15789,
            votes: 32
        }
    ],
    writing: [
        {
            id: '1',
            title: 'IELTS Writing Task 2: Opinion Essays',
            description: 'Learn how to structure and write effective opinion essays.',
            image: '/images/tip-image3.jpg',
            category: 'Writing Tips',
            date: '12/05/2023',
            views: 23456,
            votes: 67
        },
        {
            id: '2',
            title: 'Task 1 Academic: Process Diagrams',
            description: 'Step-by-step guide to describing process diagrams.',
            image: '/images/tip-image4.jpg',
            category: 'Writing Tips',
            date: '12/02/2023',
            views: 19876,
            votes: 54
        }
    ],
    speaking: [
        {
            id: '1',
            title: 'IELTS Speaking Part 1: Personal Questions',
            description: 'How to answer common personal questions naturally.',
            image: '/images/tip-image1.jpg',
            category: 'Speaking Tips',
            date: '12/10/2023',
            views: 25678,
            votes: 89
        },
        {
            id: '2',
            title: 'Body Language Tips for Speaking Test',
            description: 'Non-verbal communication strategies for better scores.',
            image: '/images/tip-image2.jpg',
            category: 'Speaking Tips',
            date: '12/07/2023',
            views: 21345,
            votes: 76
        }
    ]
}; 