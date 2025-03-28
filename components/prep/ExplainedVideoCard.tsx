import Image from 'next/image';
import Link from 'next/link';

export function ExplainedVideoCard() {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row transition-all duration-300 hover:shadow-[0_0_15px_rgba(17,24,39,0.4)]">
            {/* Card Image - Left Side (Top on mobile) */}
            <div className="relative w-full h-[200px] md:w-[280px] md:h-auto md:min-w-[280px]">
                <Image
                    src="/images/ieltsgrammer101.png"
                    alt="All IELTS Explained Videos"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 280px"
                    priority={false}
                    loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-primary-950 text-white font-semibold py-1 px-3 rounded-md text-sm">
                    BEST SELLER
                </div>
            </div>

            {/* Card Content - Middle */}
            <div className="p-4 md:p-6 flex-grow">
                <h3 className="text-lg md:text-xl font-semibold text-primary-950 mb-2 md:mb-3">
                    All IELTS Explained Videos
                </h3>

                <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                    High quality video series Guide by an experienced IELTS expert Exclusive content with strategy and tips for IELTS tests Lifetime access
                </p>

                <p className="text-sm text-gray-600 mb-3 md:mb-4 hidden md:block">
                    This video series includes all the videos from our IELTS expert Jamie, who gives thorough instruction on how to tackle specific questions type to achieve target scores.
                </p>

                <div className="text-orange-500 text-sm mt-auto md:mb-0">
                    🔥 5,524 sold
                </div>
            </div>

            {/* Price and Buy Button - Bottom on mobile, Right Side on desktop */}
            <div className="p-4 md:p-6 flex flex-row md:flex-col justify-between md:justify-center items-center md:items-stretch gap-2 md:gap-4 md:min-w-[200px] border-t md:border-t-0 md:border-l border-gray-100">
                <div className="flex flex-col items-start md:items-center">
                    <span className="font-bold text-lg md:text-2xl text-gray-900 md:mb-1">
                        1.99 USD
                    </span>
                    <span className="text-xs text-gray-500 md:mb-4">
                        ~ 557.70 PKR
                    </span>
                </div>

                <Link
                    href="/course/ielts-explained"
                    className="bg-primary-950 hover:bg-primary-900 text-white font-medium py-2 px-3 md:py-3 md:px-6 rounded-md transition-colors text-center whitespace-nowrap"
                    aria-label="Buy All IELTS Explained Videos"
                >
                    Buy Now
                </Link>
            </div>
        </div>
    );
} 