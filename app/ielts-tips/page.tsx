import { Container } from '@/components/ui/container';
import { Breadcrumb } from '@/components/exam-library/Breadcrumb';
import { TipsCardGrid } from '@/components/tips-page/TipsCardGrid';
import { ieltsTips } from '@/data/tips';
import Link from 'next/link';
import Image from 'next/image';
import { Eye, RefreshCw } from 'lucide-react';
export default function IELTSTipsPage() {
    // Define cards for each section
    const tipsCards = [
        {
            title: "Reading Tips",
            image: "/images/reading.jpg",
            description: "Improve your reading speed, comprehension, and test-taking strategies for the IELTS Reading section.",
            link: "/reading-tips"
        },
        {
            title: "Writing Tips",
            image: "/images/writing.jpg",
            description: "Learn how to write high-scoring essays, improve your grammar, and master Task 1 and Task 2 responses.",
            link: "/writing-tips"
        },
        {
            title: "Listening Tips",
            image: "/images/listening.jpg",
            description: "Develop effective listening strategies, note-taking skills, and techniques to excel in all question types.",
            link: "/listening-tips"
        },
        {
            title: "Speaking Tips",
            image: "/images/speaking.jpeg",
            description: "Build confidence, improve fluency, and learn strategies for all parts of the IELTS Speaking test.",
            link: "/speaking-tips"
        }
    ];

    // Select popular tips (one from each category)
    const selectedPopularTips = [
        ieltsTips[1], // Reading tip
        ieltsTips[2], // Writing tip
        ieltsTips[0], // Listening tip
        ieltsTips[3]  // Speaking tip
    ];

    return (
        <Container>
            <main className="h-auto bg-muted-300">
                <div className="container mx-auto px-4 py-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                        {/* Main Content - Left Side */}
                        <div className="lg:col-span-2">
                            <div className="container mx-auto px-2">
                                <Breadcrumb
                                    items={[
                                        { label: 'Home', href: '/' },
                                        { label: 'IELTS Tips', href: '/ielts-tips' }
                                    ]}
                                />
                            </div>
                            <div className="relative w-full h-[500px] mb-8">
                                <Image
                                    src="/images/ieltsgrammer101.png"
                                    alt="IELTS Tips and resources"
                                    fill
                                    priority
                                    className="object-contain rounded-xl"
                                    sizes="(max-width: 1024px) 100vw, 66vw"
                                />
                            </div>

                            {/* Page Title and Description */}
                            <div className="mb-8">
                                <h1 className="text-4xl font-bold text-primary-950 mb-4">IELTS Tips</h1>
                                <p className="text-primary-600">
                                    Boost your IELTS score with expert tips and strategies. Our comprehensive resources cover all four test sections: Reading, Writing, Listening, and Speaking.
                                </p>
                            </div>

                            {/* Tips Section Cards */}
                            <section aria-labelledby="tips-section-cards" className="mb-8 ">
                                <h2 id="tips-section-cards" className="text-2xl font-bold text-primary-900 mb-6">IELTS Sections</h2>
                                <TipsCardGrid tipsCards={tipsCards} />
                            </section>

                            {/* Recent IELTS Tips */}
                            <section aria-labelledby="recent-tips-heading" className="mb-8">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 id="recent-tips-heading" className="text-2xl font-bold text-primary-900">Recent IELTS Tips</h2>
                                    <Link href="/ielts-tips/all" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                                        View all tips
                                    </Link>
                                </div>

                                <div className="space-y-4">
                                    {ieltsTips.slice(0, 5).map((tip, index) => (
                                        <Link
                                            key={index}
                                            href={tip.link}
                                            className="flex gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all"
                                        >
                                            <Image
                                                src={tip.image}
                                                alt=""
                                                width={120}
                                                height={90}
                                                className="w-[120px] h-[90px] object-cover rounded-lg flex-shrink-0"
                                                aria-hidden="true"
                                            />
                                            <div className="flex-1">
                                                <h3 className="text-primary-900 font-medium mb-1">
                                                    {tip.title}
                                                </h3>
                                                <p className="text-sm text-tertiary-600 mb-2 line-clamp-2">
                                                    {tip.description}
                                                </p>
                                                <div className="flex items-center text-xs text-tertiary-500">
                                                    <span className="px-2 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium">
                                                        {tip.category}
                                                    </span>
                                                    <span className="ml-3 flex items-center">
                                                        <Eye className="h-4 w-4 mr-1" aria-hidden="true" />
                                                        <span>{tip.views.toLocaleString()} views</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>

                            
                        </div>

                        {/* Sidebar - Right Side */}
                        <aside className="lg:col-span-1">
                            {/* Popular Tips Box */}
                            <section aria-labelledby="popular-tips-heading" className="bg-white rounded-xl shadow-sm p-4 mb-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 id="popular-tips-heading" className="text-xl font-bold text-primary-900">Most popular IELTS tips</h2>
                                    <button
                                        className="text-primary-600 hover:text-primary-700"
                                        aria-label="Refresh popular tips"
                                    >
                                        <RefreshCw className="h-5 w-5" aria-hidden="true" />
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    {selectedPopularTips.map((tip, index) => (
                                        <Link
                                            key={index}
                                            href={tip.link}
                                            className="flex gap-4 p-2 rounded-xl hover:bg-secondary-50 transition-colors"
                                        >
                                            <Image
                                                src={tip.image}
                                                alt=""
                                                width={66}
                                                height={66}
                                                className="w-18 h-18 object-cover rounded-lg"
                                                aria-hidden="true"
                                            />
                                            <div className="flex-1">
                                                <h3 className="text-primary-900 font-medium mb-1 line-clamp-2">
                                                    {tip.title}
                                                </h3>
                                                <p className="text-sm text-tertiary-600 mb-2 line-clamp-2">
                                                    {tip.description}
                                                </p>
                                                <div className="flex items-center text-xs text-tertiary-500">
                                                    <span className="px-2 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium">
                                                        {tip.category}
                                                    </span>
                                                    <span className="ml-3 flex items-center">
                                                        <Eye className="h-4 w-4 mr-1" aria-hidden="true" />
                                                        <span>{tip.views.toLocaleString()} views</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>

                            {/* Below Tips Banner */}
                            <div className="bg-accent-400 rounded-xl overflow-hidden w-full" style={{ height: '700px' }}>
                                <Link
                                    href="/ielts-1-to-1"
                                    className="block h-full"
                                    aria-label="Learn more about IELTS one-to-one tutoring"
                                >
                                    <div className="relative w-full h-full">
                                        <Image
                                            src="/images/below-tips-banner1.png"
                                            alt=""
                                            className="object-cover"
                                            fill
                                            sizes="(max-width: 380px) 100vw"
                                            priority
                                            aria-hidden="true"
                                        />
                                    </div>
                                </Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
        </Container>
    );
} 