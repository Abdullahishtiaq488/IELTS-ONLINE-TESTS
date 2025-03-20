import { TipsPageLayout } from '@/components/tips/TipsPageLayout';
import { TipsList } from '@/components/tips/TipsList';
import { popularTips, featuredTips, mainTips } from '@/data/tips-data';
import { Container } from '@/components/ui/container';

export default function ListeningTipsPage() {
    return (
        <Container>
            <TipsPageLayout
                pageTitle="IELTS Listening Tips"
                pageDescription="Improve your IELTS Listening score with our expert tips and practice materials. From understanding different accents to mastering note-taking, we've got you covered."
                breadcrumbItems={[
                    { label: 'Home', href: '/' },
                    { label: 'Listening Tips', href: '/listening-tips' }
                ]}
                popularTips={popularTips.listening}
                featuredTips={featuredTips}
            >
                <TipsList tips={mainTips.listening} />
            </TipsPageLayout>
        </Container>
    );
} 