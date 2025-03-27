'use client';

import { PrepPageLayout } from '@/components/prep/PrepPageLayout';
import { prepData } from '@/data/prep';

export default function ListeningPrepPage() {
    return (
        <PrepPageLayout
            section={prepData.listening}
            breadcrumbItems={[
                { label: 'Home', href: '/' },
                { label: 'IELTS Prep', href: '/ielts-prep' },
                { label: 'IELTS Listening Prep', href: '/ielts-listening-prep' }
            ]}
            activeSkill="listening"
        />
    );
} 