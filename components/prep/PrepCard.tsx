import Image from 'next/image';
import Link from 'next/link';
import { PrepCard as PrepCardType } from '@/types/prep';

interface PrepCardProps {
    card: PrepCardType;
}

export function PrepCard({ card }: PrepCardProps) {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full">
            {/* Card Image */}
            <div className="relative aspect-[4/3] w-full">
                <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                {/* NEW Label */}
                {card.isNew && (
                    <div className="absolute top-3 left-3 bg-rose-500 text-white font-semibold py-1 px-3 rounded-md text-sm">
                        NEW
                    </div>
                )}
            </div>

            {/* Card Content */}
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {card.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">
                    {card.description}
                </p>

                {/* Sales Count */}
                <div className="flex items-center mb-3">
                    <span className="text-orange-500 text-sm">
                        🔥 {card.soldCount.toLocaleString()} sold
                    </span>
                </div>

                {/* Price and Buy Button */}
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-xl text-gray-900">
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

                    <Link
                        href={card.url}
                        className="bg-rose-500 hover:bg-rose-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
                    >
                        Buy Now
                    </Link>
                </div>
            </div>
        </div>
    );
} 