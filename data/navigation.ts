import { NavigationItems } from '@/types/navigation';

export const navigationItems: NavigationItems = {
    examLibrary: {
        label: 'IELTS Exam Library',
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
}; 