import { TipsPageLayout } from '@/components/tips-page/TipsPageLayout';
import { TipsList } from '@/components/tips-page/TipsList';
import { Container } from '@/components/ui/container';
import { popularTips, featuredTips, mainTips } from '@/data/tips';

export default function ReadingTipsPage() {
    return (
        <Container>
            <TipsPageLayout
                pageTitle="IELTS Reading Tips"
                pageDescription="Enhance your IELTS Reading performance with our expert tips and techniques. From skimming and scanning to time management, discover strategies to tackle any reading passage effectively."
                breadcrumbItems={[
                    { label: 'Home', href: '/' },
                    { label: 'Reading Tips', href: '/reading-tips' }
                ]}
                popularTips={popularTips.reading}
                featuredTips={featuredTips}
            >
                <TipsList tips={mainTips.reading} />
            </TipsPageLayout>
        </Container>
    );
} 