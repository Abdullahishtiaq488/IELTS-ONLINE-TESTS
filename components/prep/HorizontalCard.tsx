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
            shadow: 'hover:shadow-[0_0_15px_rgba(22,163,74,0.4)]',
            new: 'bg-green-600'
        },
        writing: {
            title: 'text-amber-600',
            button: 'bg-amber-600 hover:bg-amber-700',
            shadow: 'hover:shadow-[0_0_15px_rgba(217,119,6,0.4)]',
            new: 'bg-amber-600'
        },
        listening: {
            title: 'text-primary-600',
            button: 'bg-primary-600 hover:bg-primary-700',
            shadow: 'hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]',
            new: 'bg-primary-600'
        },
        speaking: {
            title: 'text-pink-600',
            button: 'bg-pink-600 hover:bg-pink-700',
            shadow: 'hover:shadow-[0_0_15px_rgba(219,39,119,0.4)]',
            new: 'bg-pink-600'
        },
        bestSeller: {
            title: 'text-primary-950',
            button: 'bg-primary-950 hover:bg-primary-900',
            shadow: 'hover:shadow-[0_0_15px_rgba(17,24,39,0.4)]',
            new: 'bg-primary-950'
        }
    };

    // Default to bestSeller if no segment specified
    const segment = card.segment || (card.isBestSeller ? 'bestSeller' : 'speaking');
    const colors = colorScheme[segment];

    return (
        <div className={`bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row transition-all duration-300 ${colors.shadow}`}>
            {/* Card Image - Left Side (Top on mobile) */}
            <div className="relative w-full h-[200px] md:w-[280px] md:h-auto md:min-w-[280px]">
                <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 280px"
                    priority={false}
                    loading="lazy"
                />
                {/* NEW Label */}
                {card.isNew && (
                    <div className={`absolute top-3 left-3 ${colors.new} text-white font-semibold py-1 px-3 rounded-md text-sm`}>
                        NEW
                    </div>
                )}
            </div>

            {/* Card Content - Middle */}
            <div className="p-4 md:p-6 flex-grow">
                <h3 className={`text-lg md:text-xl font-semibold ${colors.title} mb-2 md:mb-3`}>
                    {card.title}
                </h3>

                <p className="text-sm md:text-md text-gray-600 mb-3 md:mb-4">
                    {card.description}
                </p>

                {/* Additional description */}
                <p className="text-sm text-gray-600 mb-3 md:mb-4 hidden md:block">
                    This video series includes all the videos from our IELTS expert Jamie, who gives
                    thorough instruction on how to tackle specific questions type to achieve target scores.
                </p>

                <div className="text-orange-500 text-sm mt-auto md:mb-0">
                    🔥 {card.soldCount.toLocaleString()} sold
                </div>
            </div>

            {/* Price and Buy Button - Bottom on mobile, Right Side on desktop */}
            <div className="p-4 md:p-6 flex flex-row md:flex-col justify-between md:justify-center items-center md:items-stretch gap-2 md:gap-4 md:min-w-[200px] border-t md:border-t-0 md:border-l border-gray-100">
                <div className="flex flex-col items-start md:items-center">
                    <span className="font-bold text-lg md:text-2xl text-gray-900 md:mb-1">
                        {card.price} {card.currency}
                    </span>
                    {card.originalPrice && (
                        <span className="text-gray-400 line-through text-xs md:text-sm md:mb-1">
                            {card.originalPrice} {card.currency}
                        </span>
                    )}
                    <span className="text-xs text-gray-500 md:mb-4">
                        ~ {card.localPrice.toLocaleString()} {card.localCurrency}
                    </span>
                </div>

                <Link
                    href={card.url}
                    className={`${colors.button} text-white font-medium py-2 px-3 md:py-3 md:px-6 rounded-md transition-colors text-center whitespace-nowrap`}
                    aria-label={`Buy ${card.title}`}
                >
                    Buy Now
                </Link>
            </div>
        </div>
    );
} 