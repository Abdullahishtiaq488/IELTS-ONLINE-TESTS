import Image from 'next/image';
import Link from 'next/link';
import { PrepCard as PrepCardType } from '@/types/prep';

interface HorizontalCardProps {
    card: PrepCardType;
}

export function HorizontalCard({ card }: HorizontalCardProps) {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex">
            {/* Card Image - Left Side */}
            <div className="relative w-[280px] min-w-[280px]">
                <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 280px, 280px"
                />
                {/* NEW Label */}
                {card.isNew && (
                    <div className="absolute top-3 left-3 bg-rose-500 text-white font-semibold py-1 px-3 rounded-md text-sm">
                        NEW
                    </div>
                )}
            </div>

            {/* Card Content - Right Side */}
            <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {card.title}
                    </h3>

                    <p className="text-md text-gray-600 mb-4 line-clamp-2">
                        {card.description}
                    </p>

                    {/* Additional description that might appear in expanded format */}
                    <p className="text-gray-600 mb-4 hidden md:block">
                        This video series includes all the videos from our IELTS expert Jamie, who gives
                        thorough instruction on how to tackle specific questions type to achieve target scores.
                    </p>
                </div>

                {/* Bottom Row with Price and Button */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                                <span className="font-bold text-2xl text-gray-900">
                                    {card.price} {card.currency}
                                </span>
                                {card.originalPrice && (
                                    <span className="text-gray-400 line-through text-sm">
                                        {card.originalPrice} {card.currency}
                                    </span>
                                )}
                            </div>
                            <span className="text-xs text-gray-500">
                                ~ {card.localPrice.toLocaleString()} {card.localCurrency}
                            </span>
                        </div>

                        <span className="text-orange-500 text-sm hidden md:block">
                            🔥 {card.soldCount.toLocaleString()} sold
                        </span>
                    </div>

                    <Link
                        href={card.url}
                        className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
                    >
                        Buy Now
                    </Link>
                </div>
            </div>
        </div>
    );
} 