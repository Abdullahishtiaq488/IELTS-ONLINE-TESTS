import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Eye, RefreshCw } from 'lucide-react';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { FeaturedTips } from '@/components/tips-page/FeaturedTips';
import { FeaturedTip, PopularTip } from '@/types/tips';

interface TipsPageLayoutProps {
    pageTitle: string;
    pageDescription: string;
    breadcrumbItems: { label: string; href: string }[];
    popularTips: PopularTip[];
    featuredTips: FeaturedTip[];
    children: ReactNode;
}

export function TipsPageLayout({
    pageTitle,
    pageDescription,
    breadcrumbItems,
    popularTips,
    featuredTips,
    children
}: TipsPageLayoutProps) {
    return (
        <div className="h-auto bg-muted-300">

            <div className="container mx-auto px-4 py-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                    {/* Main Content - Left Side */}
                    <div className="lg:col-span-2">
                        <div className="container mx-auto px-2">
                            <Breadcrumb items={breadcrumbItems} />
                        </div>
                        <div className="relative w-full h-[500px] mb-8">
                            <Image
                                src="/images/ieltsgrammer101.png"
                                alt="IELTS Grammar"
                                fill
                                priority
                                className="object-contain rounded-xl"
                                sizes="(max-width: 1024px) 100vw, 66vw"
                            />
                        </div>

                        {/* Page Title and Description */}
                        <div className="mb-8">
                            <h1 className="text-4xl font-bold text-primary-950 mb-4">{pageTitle}</h1>
                            <p className="text-primary-600">{pageDescription}</p>
                        </div>
                        {/* Featured Tips */}
                        <div className="bg-primary-950 rounded-xl p-6 mb-8">
                            <FeaturedTips tips={featuredTips} />
                        </div>
                        {/* Tips Content */}
                        {children}
                    </div>

                    {/* Sidebar - Right Side */}
                    <div className="lg:col-span-1">

                        {/* Popular Tips Box */}
                        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-primary-900">Most popular IELTS tips</h2>
                                <button className="text-primary-600 hover:text-primary-700">
                                    <RefreshCw className="h-5 w-5" />
                                </button>
                            </div>

                            <div className="space-y-4">
                                {popularTips.map((tip) => (
                                    <Link
                                        key={tip.id}
                                        href={`/tips/${tip.id}`}
                                        className="flex gap-4 p-2 rounded-xl hover:bg-secondary-50 transition-colors"
                                    >
                                        <Image
                                            src={tip.image}
                                            alt={tip.title}
                                            width={66}
                                            height={66}
                                            className="w-18 h-18 object-cover rounded-lg"
                                        />
                                        <div className="flex-1">
                                            <h3 className="text-primary-900 font-medium mb-1 line-clamp-2">
                                                {tip.title}
                                            </h3>
                                            <p className="text-sm text-tertiary-600 mb-2 line-clamp-2">
                                                {tip.description}
                                            </p>
                                            <div className="flex items-center text-sm text-tertiary-500">
                                                <span className="px-2 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium">
                                                    {tip.category}
                                                </span>
                                                <span className="ml-3 flex items-center">
                                                    <Eye className="h-4 w-4 mr-1" />
                                                    {tip.views.toLocaleString()}
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Below Tips Banner */}
                        <div className="bg-accent-400 rounded-xl overflow-hidden w-full" style={{ height: '700px' }}>
                            <Link href="/ielts-1-to-1" className="block h-full">
                                <div className="relative w-full h-full">
                                    <Image
                                        src="/images/below-tips-banner1.png"
                                        alt="IELTS 1 to 1"
                                        className="object-cover"
                                        fill
                                        sizes="(max-width: 380px) 100vw"
                                        priority
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 