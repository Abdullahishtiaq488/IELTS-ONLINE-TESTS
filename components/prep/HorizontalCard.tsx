import Image from 'next/image';
import Link from 'next/link';
import { PrepCard as PrepCardType } from '@/types/prep';

interface HorizontalCardProps {
    card: PrepCardType;
}

export function HorizontalCard({ card }: HorizontalCardProps) {
    // Define color schemes for each segment
    const colorScheme = {
        reading: {
            title: 'text-green-600',
            button: 'bg-green-600 hover:bg-green-700',
            shadow: 'hover:shadow-green-200'
        },
        writing: {
            title: 'text-amber-600',
            button: 'bg-amber-600 hover:bg-amber-700',
            shadow: 'hover:shadow-amber-200'
        },
        listening: {
            title: 'text-primary-600',
            button: 'bg-primary-600 hover:bg-primary-700',
            shadow: 'hover:shadow-primary-200'
        },
        speaking: {
            title: 'text-pink-600',
            button: 'bg-pink-600 hover:bg-pink-700',
            shadow: 'hover:shadow-pink-200'
        },
        bestSeller: {
            title: 'text-primary-950',
            button: 'bg-primary-950 hover:bg-primary-900',
            shadow: 'hover:shadow-primary-200'
        }
    };

    // Default to bestSeller if no segment specified
    const segment = card.segment || (card.isBestSeller ? 'bestSeller' : 'speaking');
    const colors = colorScheme[segment];

    return (
        <div className={`bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex transition-shadow ${colors.shadow}`}>
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

            {/* Card Content - Middle */}
            <div className="p-6 flex-grow">
                <h3 className={`text-xl font-semibold ${colors.title} mb-3`}>
                    {card.title}
                </h3>

                <p className="text-md text-gray-600 mb-4">
                    {card.description}
                </p>

                {/* Additional description */}
                <p className="text-gray-600 mb-4 hidden md:block">
                    This video series includes all the videos from our IELTS expert Jamie, who gives
                    thorough instruction on how to tackle specific questions type to achieve target scores.
                </p>

                <div className="text-orange-500 text-sm mt-auto">
                    🔥 {card.soldCount.toLocaleString()} sold
                </div>
            </div>

            {/* Price and Buy Button - Right Side */}
            <div className="p-6 flex flex-col justify-center gap-4 min-w-[200px] border-l border-gray-100">
                <div className="flex flex-col items-center">
                    <span className="font-bold text-2xl text-gray-900 mb-1">
                        {card.price} {card.currency}
                    </span>
                    {card.originalPrice && (
                        <span className="text-gray-400 line-through text-sm mb-1">
                            {card.originalPrice} {card.currency}
                        </span>
                    )}
                    <span className="text-xs text-gray-500 mb-4">
                        ~ {card.localPrice.toLocaleString()} {card.localCurrency}
                    </span>
                </div>

                <Link
                    href={card.url}
                    className={`${colors.button} text-white font-medium py-3 px-6 rounded-md transition-colors text-center`}
                >
                    Buy Now
                </Link>
            </div>
        </div>
    );
} 