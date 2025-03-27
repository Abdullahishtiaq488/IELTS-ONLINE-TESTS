'use client';

import { PrepPageLayout } from '@/components/prep/PrepPageLayout';
import { prepData } from '@/data/prep';

export default function ReadingPrepPage() {
    return (
        <PrepPageLayout
            section={prepData.reading}
            breadcrumbItems={[
                { label: 'Home', href: '/' },
                { label: 'IELTS Prep', href: '/ielts-prep' },
                { label: 'IELTS Reading Prep', href: '/ielts-reading-prep' }
            ]}
            activeSkill="reading"
        />
    );
} 