import Image from 'next/image';
import Link from 'next/link';
import { Eye } from 'lucide-react';

const tips = [
    {
        id: 1,
        title: 'How to Get Band 8 in IELTS Writing Task 2',
        description: 'Master the art of essay writing with our comprehensive guide to achieving a Band 8 score.',
        image: '/images/tip-box1.png',
        category: 'Writing',
        views: 125390
    },
    {
        id: 2,
        title: 'IELTS Speaking: Common Topics and Sample Answers',
        description: 'Prepare for your speaking test with our collection of frequently asked questions and model responses.',
        image: '/images/tip-box2.png',
        category: 'Speaking',
        views: 98245
    },
    {
        id: 3,
        title: 'Top Reading Strategies for IELTS Success',
        description: 'Learn time-management techniques and effective approaches to tackle different question types.',
        image: '/images/tip-box3.png',
        category: 'Reading',
        views: 87632
    }
];

export function TipsSection() {
    return (
        <section className="bg-white rounded-xl shadow-sm p-6" aria-labelledby="tips-section-heading">
            <div className="flex items-center justify-between mb-6">
                <h2 id="tips-section-heading" className="text-xl font-bold text-primary-900">Popular IELTS Tips</h2>
                <button 
                    className="text-primary-600 hover:text-primary-700" 
                    aria-label="Refresh tips"
                    type="button"
                >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                </button>
            </div>

            <ul className="space-y-4">
                {tips.map((tip) => (
                    <li key={tip.id}>
                        <Link
                            href={`/ielts-tips/${tip.id}`}
                            className="flex gap-4 p-4 rounded-lg hover:bg-tertiary-50 transition-colors"
                            aria-labelledby={`tip-title-${tip.id}`}
                        >
                            <div className="w-24 h-24 flex-shrink-0">
                                <Image
                                    src={tip.image}
                                    alt=""
                                    width={96}
                                    height={96}
                                    className="w-full h-full object-cover rounded-lg"
                                    aria-hidden="true"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 id={`tip-title-${tip.id}`} className="text-primary-900 font-medium mb-1 line-clamp-2">
                                    {tip.title}
                                </h3>
                                <p className="text-sm text-tertiary-600 mb-2 line-clamp-2">
                                    {tip.description}
                                </p>
                                <div className="flex items-center text-sm text-tertiary-500">
                                    <span className="px-2 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium">
                                        {tip.category}
                                    </span>
                                    <span className="ml-3 flex items-center" aria-label={`${tip.views.toLocaleString()} views`}>
                                        <Eye className="h-4 w-4 mr-1" aria-hidden="true" />
                                        {tip.views.toLocaleString()}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
} 