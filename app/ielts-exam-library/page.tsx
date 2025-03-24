'use client';

import { Suspense } from 'react';
import { Container } from '@/components/ui/container';
import { Breadcrumb } from '@/components/exam-library/Breadcrumb';
import { ExamLibraryHeader } from '@/components/exam-library/ExamLibraryHeader';
import { TipsSection } from '@/components/exam-library/TipsSection';
import { BelowTipsBanner } from '@/components/exam-library/BelowTipsBanner';
import ExamLibraryContent from './content';

export default function ExamLibraryPage() {
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

            <Suspense fallback={<div className="p-4 text-center">Loading content...</div>}>
              <ExamLibraryContent />
            </Suspense>
          </div>

          {/* Right Column - Tips and Banner */}
          <div className="lg:w-[380px] space-y-6">
            <TipsSection />
            <BelowTipsBanner />
          </div>
        </div>
      </Container>
    </div>
  );
}
