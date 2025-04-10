import { TipsPageLayout } from '@/components/tips-page/TipsPageLayout';
import { TipsList } from '@/components/tips-page/TipsList';
import { Container } from '@/components/ui/container';
import { popularTips, featuredTips, mainTips } from '@/data/tips';

export default function SpeakingTipsPage() {
    return (
        <Container>
            <TipsPageLayout
                pageTitle="IELTS Speaking Tips"
                pageDescription="Master your IELTS Speaking test with our comprehensive tips and strategies. Learn how to express yourself confidently, handle different topics, and achieve your target score."
                breadcrumbItems={[
                    { label: 'Home', href: '/' },
                    { label: 'Speaking Tips', href: '/speaking-tips' }
                ]}
                popularTips={popularTips.speaking}
                featuredTips={featuredTips}
            >
                <TipsList tips={mainTips.speaking} />
            </TipsPageLayout>
        </Container>
    );
} 