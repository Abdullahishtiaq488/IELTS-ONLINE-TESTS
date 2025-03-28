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
    // Define color schemes for each segment
    const colorScheme = {
        reading: {
            text: 'text-green-600',
        },
        writing: {
            text: 'text-amber-600',
        },
        listening: {
            text: 'text-primary-600',
        },
        speaking: {
            text: 'text-pink-600',
        },
        'best-seller': {
            text: 'text-primary-950',
        }
    };

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
            <Container className="py-4 md:py-6">
                <div className="mb-2 md:mb-4">
                    <Breadcrumb items={breadcrumbItems} />
                </div>
            </Container>

            {/* Hero Section with Background Image - Full Width */}
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] mb-6 md:mb-10 overflow-hidden">
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
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4 drop-shadow-md">{section.title}</h1>
                        <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto drop-shadow">{section.description}</p>
                    </Container>
                </div>
            </div>

            <Container>
                {/* Category Navigation */}
                <div className="bg-gray-800 rounded-lg mb-6 md:mb-10 flex flex-wrap sm:flex-nowrap overflow-hidden">
                    <div className={`flex-1 min-w-[20%] ${activeSkill === 'best-seller' ? 'bg-white rounded-t-lg sm:rounded-t-none sm:rounded-l-lg' : ''}`}>
                        <a
                            href="/ielts-prep"
                            className={`flex flex-col items-center justify-center py-3 sm:py-4 px-2 transition-colors duration-200 w-full h-full
                                ${activeSkill === 'best-seller'
                                    ? colorScheme['best-seller'].text
                                    : 'text-gray-300'} 
                                ${activeSkill !== 'best-seller' ? 'hover:bg-white category-tab-best-seller' : ''}`}
                            aria-current={activeSkill === 'best-seller' ? 'page' : undefined}
                        >
                            <Star className="h-5 w-5 sm:h-6 sm:w-6 mb-1 sm:mb-2" aria-hidden="true" />
                            <span className="font-medium text-xs sm:text-sm">Best seller</span>
                        </a>
                    </div>
                    <div className={`flex-1 min-w-[20%] ${activeSkill === 'reading' ? 'bg-white' : ''}`}>
                        <a
                            href="/ielts-reading-prep"
                            className={`flex flex-col items-center justify-center py-3 sm:py-4 px-2 transition-colors duration-200 w-full h-full
                                ${activeSkill === 'reading'
                                    ? colorScheme.reading.text
                                    : 'text-gray-300'}
                                ${activeSkill !== 'reading' ? 'hover:bg-white category-tab-reading' : ''}`}
                            aria-current={activeSkill === 'reading' ? 'page' : undefined}
                        >
                            <Book className="h-5 w-5 sm:h-6 sm:w-6 mb-1 sm:mb-2" aria-hidden="true" />
                            <span className="font-medium text-xs sm:text-sm">Reading</span>
                        </a>
                    </div>
                    <div className={`flex-1 min-w-[20%] ${activeSkill === 'writing' ? 'bg-white' : ''}`}>
                        <a
                            href="/ielts-writing-prep"
                            className={`flex flex-col items-center justify-center py-3 sm:py-4 px-2 transition-colors duration-200 w-full h-full
                                ${activeSkill === 'writing'
                                    ? colorScheme.writing.text
                                    : 'text-gray-300'}
                                ${activeSkill !== 'writing' ? 'hover:bg-white category-tab-writing' : ''}`}
                            aria-current={activeSkill === 'writing' ? 'page' : undefined}
                        >
                            <PenTool className="h-5 w-5 sm:h-6 sm:w-6 mb-1 sm:mb-2" aria-hidden="true" />
                            <span className="font-medium text-xs sm:text-sm">Writing</span>
                        </a>
                    </div>
                    <div className={`flex-1 min-w-[20%] ${activeSkill === 'listening' ? 'bg-white' : ''}`}>
                        <a
                            href="/ielts-listening-prep"
                            className={`flex flex-col items-center justify-center py-3 sm:py-4 px-2 transition-colors duration-200 w-full h-full
                                ${activeSkill === 'listening'
                                    ? colorScheme.listening.text
                                    : 'text-gray-300'}
                                ${activeSkill !== 'listening' ? 'hover:bg-white category-tab-listening' : ''}`}
                            aria-current={activeSkill === 'listening' ? 'page' : undefined}
                        >
                            <Headphones className="h-5 w-5 sm:h-6 sm:w-6 mb-1 sm:mb-2" aria-hidden="true" />
                            <span className="font-medium text-xs sm:text-sm">Listening</span>
                        </a>
                    </div>
                    <div className={`flex-1 min-w-[20%] ${activeSkill === 'speaking' ? 'bg-white rounded-b-lg sm:rounded-b-none sm:rounded-r-lg' : ''}`}>
                        <a
                            href="/ielts-speaking-prep"
                            className={`flex flex-col items-center justify-center py-3 sm:py-4 px-2 transition-colors duration-200 w-full h-full
                                ${activeSkill === 'speaking'
                                    ? colorScheme.speaking.text
                                    : 'text-gray-300'}
                                ${activeSkill !== 'speaking' ? 'hover:bg-white category-tab-speaking' : ''}`}
                            aria-current={activeSkill === 'speaking' ? 'page' : undefined}
                        >
                            <Mic className="h-5 w-5 sm:h-6 sm:w-6 mb-1 sm:mb-2" aria-hidden="true" />
                            <span className="font-medium text-xs sm:text-sm">Speaking</span>
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