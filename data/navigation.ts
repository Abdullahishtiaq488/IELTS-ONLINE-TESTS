import { NavigationItems } from '@/types/navigation';

export const navigationItems: NavigationItems = {
    examLibrary: {
        label: 'IELTS Exam Library',
        items: [
            { label: 'IELTS Listening Tests', href: '/listening-tests' },
            { label: 'IELTS Reading Tests', href: '/reading-tests' },
            { label: 'IELTS Writing Tests', href: '/writing-tests' },
            { label: 'IELTS Speaking Tests', href: '/speaking-tests' },
            { label: 'IELTS Test Collection', href: '/test-collection' },
        ],
    },
    tips: {
        label: 'IELTS Tips',
        items: [
            { label: 'Listening Tips', href: '/tips/listening' },
            { label: 'Reading Tips', href: '/tips/reading' },
            { label: 'Writing Tips', href: '/tips/writing' },
            { label: 'Speaking Tips', href: '/tips/speaking' },
            { label: 'IELTS Grammar', href: '/tips/grammar' },
            { label: 'Announcements', href: '/tips/announcements' },
        ],
    },
    prep: {
        label: 'IELTS Prep',
        items: [
            {
                label: 'IELTS Writing Services',
                items: [
                    { label: 'GPT Evaluation', href: '/writing/gpt-evaluation' },
                    { label: 'Examiners Evaluation', href: '/writing/examiners-evaluation' },
                    { label: 'Sample Essays - Academic', href: '/writing/academic-samples' },
                    { label: 'Sample Essays - GT', href: '/writing/gt-samples' },
                ],
            },
            {
                label: 'IELTS Speaking Services',
                items: [{ label: 'GPT Evaluation', href: '/speaking/gpt-evaluation' }],
            },
            {
                label: 'IELTS Listening Services',
                items: [{ label: 'Super PDF Pack', href: '/listening/pdf-pack' }],
            },
            {
                label: 'IELTS Reading Services',
                items: [{ label: 'Super PDF Pack', href: '/reading/pdf-pack' }],
            },
            {
                label: 'Video Learning',
                items: [
                    { label: 'IELTS Explained - All Videos', href: '/videos/explained' },
                    { label: 'IELTS Self-Study Course', href: '/videos/self-study' },
                    { label: 'IELTS Live Lessons - Recorded', href: '/videos/recorded' },
                    { label: 'IELTS Video Courses', href: '/videos/courses' },
                ],
            },
            { label: 'IELTS AI Checker', href: '/ai-checker' },
        ],
    },
    liveLessons: {
        label: 'Live Lessons',
        items: [
            { label: 'Reading', href: '/live/reading' },
            { label: 'Speaking', href: '/live/speaking' },
            { label: 'Listening', href: '/live/listening' },
            { label: 'Writing', href: '/live/writing' },
            { label: 'Study Abroad', href: '/live/study-abroad' },
            { label: 'Vocabulary', href: '/live/vocabulary' },
        ],
    },
    ieltsCourse: {
        label: 'IELTS Course',
        items: [
            { label: 'IELTS Master Class v6', href: '/course/master-class' },
            { label: 'IELTS 1V1', href: '/course/1v1' },
        ],
    },
    studyAbroad: {
        label: 'Intergreat Study Abroad',
        items: [
            { label: 'UK Study Abroad', href: '/study-abroad/uk' },
            { label: 'US Study Abroad', href: '/study-abroad/us' },
            { label: 'Australia Study Abroad', href: '/study-abroad/australia' },
            { label: 'Canada Study Abroad', href: '/study-abroad/canada' },
            { label: 'Schools Lists', href: '/study-abroad/schools' },
        ],
    },
}; 