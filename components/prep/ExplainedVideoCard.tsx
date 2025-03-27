import Image from 'next/image';
import Link from 'next/link';

export function ExplainedVideoCard() {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex transition-shadow hover:shadow-primary-200">
            {/* Card Image - Left Side */}
            <div className="relative w-[280px] min-w-[280px]">
                <Image
                    src="/images/ieltsgrammer101.png"
                    alt="All IELTS Explained Videos"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 280px, 280px"
                />
                <div className="absolute top-3 left-3 bg-rose-500 text-white font-semibold py-1 px-3 rounded-md text-sm">
                    BEST SELLER
                </div>
            </div>

            {/* Card Content - Middle */}
            <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold text-primary-950 mb-3">
                    All IELTS Explained Videos
                </h3>

                <p className="text-gray-600 mb-4">
                    High quality video series Guide by an experienced IELTS expert Exclusive content with strategy and tips for IELTS tests Lifetime access
                </p>

                <p className="text-gray-600 mb-4">
                    This video series includes all the videos from our IELTS expert Jamie, who gives thorough instruction on how to tackle specific questions type to achieve target scores.
                </p>

                <div className="text-orange-500 text-sm mt-auto">
                    🔥 5,524 sold
                </div>
            </div>

            {/* Price and Buy Button - Right Side */}
            <div className="p-6 flex flex-col justify-center gap-4 min-w-[200px] border-l border-gray-100">
                <div className="flex flex-col items-center">
                    <span className="font-bold text-2xl text-gray-900 mb-1">
                        1.99 USD
                    </span>
                    <span className="text-xs text-gray-500 mb-4">
                        ~ 557.70 PKR
                    </span>
                </div>

                <Link
                    href="/course/ielts-explained"
                    className="bg-primary-950 hover:bg-primary-900 text-white font-medium py-3 px-6 rounded-md transition-colors text-center"
                >
                    Buy Now
                </Link>
            </div>
        </div>
    );
} 