import Image from 'next/image';
import Link from 'next/link';

export function BelowTipsBanner() {
    return (
        <div className="bg-accent-400 rounded-xl overflow-hidden w-full" style={{ height: '700px' }} role="banner" aria-label="IELTS 1 to 1 promotional banner">
            <Link 
                href="/ielts-1-to-1" 
                className="block h-full"
                aria-label="Learn more about IELTS 1 to 1 coaching services"
            >
                <div className="relative w-full h-full">
                    <Image 
                        src="/images/below-tips-banner1.png"
                        alt="IELTS 1 to 1 coaching services - personalized preparation for your exam"
                        className="object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                        loading="eager"
                    />
                </div>
            </Link>
        </div>
    );
} 