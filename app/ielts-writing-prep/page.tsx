'use client';

import { PrepPageLayout } from '@/components/prep/PrepPageLayout';
import { prepData } from '@/data/prep';

export default function WritingPrepPage() {
    return (
        <PrepPageLayout
            section={prepData.writing}
            breadcrumbItems={[
                { label: 'Home', href: '/' },
                { label: 'IELTS Prep', href: '/ielts-prep' },
                { label: 'IELTS Writing Prep', href: '/ielts-writing-prep' }
            ]}
            activeSkill="writing"
        />
    );
} 