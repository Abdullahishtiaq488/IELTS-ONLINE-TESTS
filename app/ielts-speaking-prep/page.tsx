'use client';

import { PrepPageLayout } from '@/components/prep/PrepPageLayout';
import { prepData } from '@/data/prep';

export default function SpeakingPrepPage() {
    return (
        <PrepPageLayout
            section={prepData.speaking}
            breadcrumbItems={[
                { label: 'Home', href: '/' },
                { label: 'IELTS Prep', href: '/ielts-prep' },
                { label: 'IELTS Speaking Prep', href: '/ielts-speaking-prep' }
            ]}
            activeSkill="speaking"
        />
    );
} 