'use client';

import { useSearchParams } from 'next/navigation';
import { ExamLibraryTabs } from '@/components/exam-library/ExamLibraryTabs';
import { SkillTabs } from '@/components/exam-library/SkillTabs';
import { SearchFilter } from '@/components/exam-library/SearchFilter';
import { MockTestCards } from '@/components/exam-library/MockTestCards';

export default function ExamLibraryContent() {
    const searchParams = useSearchParams();
    const currentSkill = searchParams.get('skill') || 'all';
    const currentTab = searchParams.get('tab') || 'all';

    return (
        <>
            <ExamLibraryTabs currentTab={currentTab} />
            <SkillTabs currentSkill={currentSkill} />
            <SearchFilter />
            <MockTestCards currentSkill={currentSkill} />
        </>
    );
} 