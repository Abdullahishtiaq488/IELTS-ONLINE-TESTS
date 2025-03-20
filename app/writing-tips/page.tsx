import { TipsPageLayout } from '@/components/tips/TipsPageLayout';
import { TipsList } from '@/components/tips/TipsList';
import { popularTips, featuredTips, mainTips } from '@/data/tips-data';
import { Container } from '@/components/ui/container';

export default function WritingTipsPage() {
    return (
        <Container>
            <TipsPageLayout
                pageTitle="IELTS Writing Tips"
                pageDescription="Improve your IELTS Writing score with our comprehensive tips and guidance. Learn how to write effective essays, reports, and letters while mastering grammar, vocabulary, and coherence."
                breadcrumbItems={[
                    { label: 'Home', href: '/' },
                    { label: 'Writing Tips', href: '/writing-tips' }
                ]}
                popularTips={popularTips.writing}
                featuredTips={featuredTips}
            >
                <TipsList tips={mainTips.writing} />
            </TipsPageLayout>
        </Container>
    );
} 