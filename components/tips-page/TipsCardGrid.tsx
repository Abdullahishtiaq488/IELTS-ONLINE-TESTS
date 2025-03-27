import Image from 'next/image';
import Link from 'next/link';

interface TipsCardGridProps {
    tipsCards: {
        title: string;
        image: string;
        description: string;
        link: string;
    }[];
}

export function TipsCardGrid({ tipsCards }: TipsCardGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {tipsCards.map((card, index) => (
                <Link
                    key={index}
                    href={card.link}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col h-full group"
                >
                    <div className="relative aspect-[16/9] w-full">
                        <Image
                            src={card.image}
                            alt={card.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                    <div className="p-5 flex-grow flex flex-col">
                        <h3 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-primary-600 transition-colors">
                            {card.title}
                        </h3>
                        <p className="text-gray-600 mb-4 flex-grow">
                            {card.description}
                        </p>
                        <div className="flex items-center justify-end">
                            <span className="inline-flex items-center text-sm font-medium text-primary-600 group-hover:text-primary-500">
                                View Resources
                                <svg className="ml-1 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                                </svg>
                            </span>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
} 