import { PrepCard as PrepCardType } from '@/types/prep';
import { PrepCard } from './PrepCard';
import { HorizontalCard } from './HorizontalCard';

interface PrepCardListProps {
    cards: PrepCardType[];
    isBestSellerPage?: boolean;
}

export function PrepCardList({ cards, isBestSellerPage = false }: PrepCardListProps) {
    if (isBestSellerPage) {
        // Best seller page - show all cards as vertical
        return (
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Best Sellers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((card) => (
                        <PrepCard key={card.id} card={card} />
                    ))}
                </div>
            </div>
        );
    } else {
        // Regular skill page - only show horizontal cards
        return (
            <div className="mb-12 space-y-6">
                {cards.map((card) => (
                    <HorizontalCard key={card.id} card={card} />
                ))}
            </div>
        );
    }
} 