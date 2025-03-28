import Image from 'next/image';
import Link from 'next/link';
import { PrepCard as PrepCardType } from '@/types/prep';

interface PrepCardProps {
    card: PrepCardType;
}

export function PrepCard({ card }: PrepCardProps) {
    // Define color schemes for each segment
    const colorScheme = {
        reading: {
            title: 'text-green-600',
            button: 'bg-green-600 hover:bg-green-700',
            shadow: 'hover:shadow-[0_0_15px_rgba(22,163,74,0.4)]',
            badge: 'bg-green-600'
        },
        writing: {
            title: 'text-amber-600',
            button: 'bg-amber-600 hover:bg-amber-700',
            shadow: 'hover:shadow-[0_0_15px_rgba(217,119,6,0.4)]',
            badge: 'bg-amber-600'
        },
        listening: {
            title: 'text-primary-600',
            button: 'bg-primary-600 hover:bg-primary-700',
            shadow: 'hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]',
            badge: 'bg-primary-600'
        },
        speaking: {
            title: 'text-pink-600',
            button: 'bg-pink-600 hover:bg-pink-700',
            shadow: 'hover:shadow-[0_0_15px_rgba(219,39,119,0.4)]',
            badge: 'bg-pink-600'
        },
        bestSeller: {
            title: 'text-primary-950',
            button: 'bg-primary-950 hover:bg-primary-900',
            shadow: 'hover:shadow-[0_0_15px_rgba(17,24,39,0.4)]',
            badge: 'bg-primary-950'
        }
    };

    // Default to bestSeller if no segment specified
    const segment = card.segment || (card.isBestSeller ? 'bestSeller' : 'speaking');
    const colors = colorScheme[segment];

    return (
        <div className={`bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full transition-all duration-300 ${colors.shadow}`}>
            {/* Card Image */}
            <div className="relative aspect-[4/3] w-full">
                <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    loading="lazy"
                />
                {/* NEW Label */}
                {card.isNew && (
                    <div className={`absolute top-3 left-3 ${colors.badge} text-white font-semibold py-1 px-3 rounded-md text-sm`}>
                        NEW
                    </div>
                )}
            </div>

            {/* Card Content */}
            <div className="p-3 sm:p-4 flex flex-col flex-grow">
                <h3 className={`text-base sm:text-lg font-semibold ${colors.title} mb-2 line-clamp-2`}>
                    {card.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-3 flex-grow">
                    {card.description}
                </p>

                {/* Sales Count */}
                <div className="flex items-center mb-3">
                    <span className="text-orange-500 text-xs sm:text-sm">
                        🔥 {card.soldCount.toLocaleString()} sold
                    </span>
                </div>

                {/* Price and Buy Button */}
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-1 sm:gap-2">
                            <span className="font-bold text-base sm:text-xl text-gray-900">
                                {card.price} {card.currency}
                            </span>
                            {card.originalPrice && (
                                <span className="text-gray-400 line-through text-xs sm:text-sm">
                                    {card.originalPrice} {card.currency}
                                </span>
                            )}
                        </div>
                        <span className="text-xs text-gray-500">
                            ~ {card.localPrice.toLocaleString()} {card.localCurrency}
                        </span>
                    </div>

                    <Link
                        href={card.url}
                        className={`${colors.button} text-white font-medium text-xs sm:text-sm py-1.5 sm:py-2 px-3 sm:px-4 rounded-md transition-colors`}
                        aria-label={`Buy ${card.title}`}
                    >
                        Buy Now
                    </Link>
                </div>
            </div>
        </div>
    );
} 