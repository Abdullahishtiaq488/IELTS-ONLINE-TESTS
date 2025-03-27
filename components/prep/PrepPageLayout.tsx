import { ReactNode, useMemo } from 'react';
import Image from 'next/image';
import { Breadcrumb } from '@/components/exam-library/Breadcrumb';
import { Container } from '@/components/ui/container';
import { PrepSection } from '@/types/prep';
import { PrepCardList } from './PrepCardList';
import { PaymentMethods } from './PaymentMethods';
import { Book, Headphones, Mic, PenTool, Star } from 'lucide-react';

interface PrepPageLayoutProps {
    section: PrepSection;
    breadcrumbItems: { label: string; href: string }[];
    activeSkill: 'reading' | 'writing' | 'listening' | 'speaking' | 'best-seller';
    children?: ReactNode;
}

export function PrepPageLayout({
    section,
    breadcrumbItems,
    activeSkill,
    children
}: PrepPageLayoutProps) {
    // Determine the background image based on the active skill
    const backgroundImage = useMemo(() => {
        switch (activeSkill) {
            case 'reading':
                return '/images/reading.jpg';
            case 'writing':
                return '/images/writing.jpg';
            case 'listening':
                return '/images/listening.jpg';
            case 'speaking':
                return '/images/speaking.jpeg';
            case 'best-seller':
            default:
                return '/images/studying.jpg';
        }
    }, [activeSkill]);

    return (
        <main className="min-h-screen bg-gray-50">
            <Container className="py-8">
                <div className="mb-8">
                    <Breadcrumb items={breadcrumbItems} />
                </div>
            </Container>

            {/* Hero Section with Background Image - Full Width */}
            <div className="relative w-full h-[300px] mb-10 overflow-hidden">
                <div className="absolute inset-0 backdrop-blur-[2px] z-10"></div>
                <Image
                    src={backgroundImage}
                    alt={`IELTS ${activeSkill === 'best-seller' ? 'Preparation' : activeSkill} resources`}
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                    fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/70 z-20 flex flex-col justify-center items-center text-center px-4">
                    <Container>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-md">{section.title}</h1>
                        <p className="text-white text-lg md:text-xl max-w-3xl mx-auto drop-shadow">{section.description}</p>
                    </Container>
                </div>
            </div>

            <Container>
                {/* Category Navigation */}
                <div className="bg-gray-800 rounded-lg mb-10 flex">
                    <div className={`flex-1 ${activeSkill === 'best-seller' ? 'bg-white rounded-l-lg' : ''}`}>
                        <a
                            href="/ielts-prep"
                            className={`flex flex-col items-center justify-center py-4 px-2 transition-colors duration-200
                                ${activeSkill === 'best-seller' ? 'text-orange-500' : 'text-gray-300 hover:text-orange-300'}`}
                            aria-current={activeSkill === 'best-seller' ? 'page' : undefined}
                        >
                            <Star className="h-6 w-6 mb-2" aria-hidden="true" />
                            <span className="font-medium text-sm">Best seller</span>
                        </a>
                    </div>
                    <div className={`flex-1 ${activeSkill === 'reading' ? 'bg-white' : ''}`}>
                        <a
                            href="/ielts-reading-prep"
                            className={`flex flex-col items-center justify-center py-4 px-2 transition-colors duration-200
                                ${activeSkill === 'reading' ? 'text-accent-400' : 'text-gray-300 hover:text-accent-400'}`}
                            aria-current={activeSkill === 'reading' ? 'page' : undefined}
                        >
                            <Book className="h-6 w-6 mb-2" aria-hidden="true" />
                            <span className="font-medium text-sm">Reading</span>
                        </a>
                    </div>
                    <div className={`flex-1 ${activeSkill === 'writing' ? 'bg-white' : ''}`}>
                        <a
                            href="/ielts-writing-prep"
                            className={`flex flex-col items-center justify-center py-4 px-2 transition-colors duration-200
                                ${activeSkill === 'writing' ? 'text-warning-400' : 'text-gray-300 hover:text-warning-400'}`}
                            aria-current={activeSkill === 'writing' ? 'page' : undefined}
                        >
                            <PenTool className="h-6 w-6 mb-2" aria-hidden="true" />
                            <span className="font-medium text-sm">Writing</span>
                        </a>
                    </div>
                    <div className={`flex-1 ${activeSkill === 'listening' ? 'bg-white' : ''}`}>
                        <a
                            href="/ielts-listening-prep"
                            className={`flex flex-col items-center justify-center py-4 px-2 transition-colors duration-200
                                ${activeSkill === 'listening' ? 'text-primary-200' : 'text-gray-300 hover:text-primary-200'}`}
                            aria-current={activeSkill === 'listening' ? 'page' : undefined}
                        >
                            <Headphones className="h-6 w-6 mb-2" aria-hidden="true" />
                            <span className="font-medium text-sm">Listening</span>
                        </a>
                    </div>
                    <div className={`flex-1 ${activeSkill === 'speaking' ? 'bg-white rounded-r-lg' : ''}`}>
                        <a
                            href="/ielts-speaking-prep"
                            className={`flex flex-col items-center justify-center py-4 px-2 transition-colors duration-200
                                ${activeSkill === 'speaking' ? 'text-pink-500' : 'text-gray-300 hover:text-pink-300'}`}
                            aria-current={activeSkill === 'speaking' ? 'page' : undefined}
                        >
                            <Mic className="h-6 w-6 mb-2" aria-hidden="true" />
                            <span className="font-medium text-sm">Speaking</span>
                        </a>
                    </div>
                </div>

                {/* Cards Display */}
                <PrepCardList cards={section.cards} isBestSellerPage={activeSkill === 'best-seller'} />

                {/* Payment Methods */}
                <PaymentMethods />

                {/* Additional Content */}
                {children}
            </Container>
        </main>
    );
} 