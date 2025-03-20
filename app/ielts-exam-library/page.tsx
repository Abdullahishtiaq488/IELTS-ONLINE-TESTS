'use client';

import { useSearchParams } from 'next/navigation';
import { Container } from '@/components/ui/container';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { ExamLibraryHeader } from '@/components/exam-library/ExamLibraryHeader';
import { ExamLibraryTabs } from '@/components/exam-library/ExamLibraryTabs';
import { SkillTabs } from '@/components/exam-library/SkillTabs';
import { SearchFilter } from '@/components/exam-library/SearchFilter';
import { MockTestCards } from '@/components/exam-library/MockTestCards';
import { TipsSection } from '@/components/exam-library/TipsSection';
import { BelowTipsBanner } from '@/components/exam-library/BelowTipsBanner';

export default function ExamLibraryPage() {
  const searchParams = useSearchParams();
  const currentSkill = searchParams.get('skill') || 'all';
  const currentTab = searchParams.get('tab') || 'all';

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Container>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Main Content */}
          <div className="flex-1">
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'IELTS Exam Library', href: '/ielts-exam-library' }
              ]}
            />

            <ExamLibraryHeader />
            <ExamLibraryTabs currentTab={currentTab} />
            <SkillTabs currentSkill={currentSkill} />
            <SearchFilter />
            <MockTestCards currentSkill={currentSkill} />
          </div>

          {/* Right Column - Tips and Banner */}
          <div className="lg:w-[380px] space-y-6">
            <TipsSection currentSkill={currentSkill} />
            <BelowTipsBanner />
          </div>
        </div>
      </Container>
    </div>
  );
}
