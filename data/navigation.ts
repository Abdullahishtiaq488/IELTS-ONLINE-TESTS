import { NavigationItems } from '@/types/navigation';

export const navigationItems: NavigationItems = {
    examLibrary: {
        label: 'IELTS Exam Library',
        href: '/ielts-exam-library',
        items: [
            { label: 'IELTS Listening Tests', href: '/ielts-exam-library?skill=listening' },
            { label: 'IELTS Reading Tests', href: '/ielts-exam-library?skill=reading' },
            { label: 'IELTS Writing Tests', href: '/ielts-exam-library?skill=writing' },
            { label: 'IELTS Speaking Tests', href: '/ielts-exam-library?skill=speaking' },
            { label: 'IELTS Test Collection', href: '/ielts-exam-library?skill=speaking' },
        ],
    },
    tips: {
        label: 'IELTS Tips',
        href: '/ielts-tips',
        items: [
            { label: 'Listening Tips', href: '/listening-tips' },
            { label: 'Reading Tips', href: '/reading-tips' },
            { label: 'Writing Tips', href: '/writing-tips' },
            { label: 'Speaking Tips', href: '/speaking-tips' },
            { label: 'IELTS Grammar', href: '/ielts-grammar' },
            { label: 'Announcements', href: '/announcements' },
        ],
    },
    prep: {
        label: 'IELTS Prep',
        href: '/ielts-prep',
        items: [
            {
                label: 'IELTS Writing Services',
                href: '/ielts-writing-prep',
                items: [
                    { label: 'GPT Evaluation', href: '/ielts-writing-prep' },
                    { label: 'Examiners Evaluation', href: '/ielts-writing-prep' },
                    { label: 'Sample Essays - Academic', href: '/ielts-writing-prep' },
                    { label: 'Sample Essays - GT', href: '/ielts-writing-prep' },
                ],
            },
            {
                label: 'IELTS Speaking Services',
                href: '/ielts-speaking-prep',
                items: [{ label: 'GPT Evaluation', href: '/ielts-speaking-prep' }],
            },
            {
                label: 'IELTS Listening Services',
                href: '/ielts-listening-prep',
                items: [{ label: 'Super PDF Pack', href: '/ielts-listening-prep' }],
            },
            {
                label: 'IELTS Reading Services',
                href: '/ielts-reading-prep',
                items: [{ label: 'Super PDF Pack', href: '/ielts-reading-prep' }],
            },
            {
                label: 'Video Learning',
                href: '/ielts-prep',
                items: [
                    { label: 'IELTS Explained - All Videos', href: '/ielts-prep' },
                    { label: 'IELTS Self-Study Course', href: '/ielts-prep' },
                    { label: 'IELTS Live Lessons - Recorded', href: '/ielts-prep' },
                    { label: 'IELTS Video Courses', href: '/ielts-prep' },
                ],
            },
            { label: 'IELTS AI Checker', href: '/ielts-prep' },
        ],
    },
}; 