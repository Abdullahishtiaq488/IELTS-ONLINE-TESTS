import { TipsPageLayout } from '@/components/tips-page/TipsPageLayout';
import { TipsList } from '@/components/tips-page/TipsList';
import { Container } from '@/components/ui/container';
import { popularTips, featuredTips, mainTips } from '@/data/tips';

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