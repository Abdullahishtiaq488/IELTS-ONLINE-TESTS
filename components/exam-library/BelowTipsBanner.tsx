import Image from 'next/image';
import Link from 'next/link';

export function BelowTipsBanner() {
    return (
        <div className="bg-yellow-400 rounded-xl overflow-hidden w-full" style={{ height: '700px' }}>
            <Link href="/ielts-1-to-1" className="block h-full">
                <div className="relative w-full h-full">
                    <Image 
                        src="/images/below-tips-banner1.png"
                        alt="IELTS 1 to 1"
                        className="object-cover"
                        fill
                        sizes="(max-width: 380px) 100vw"
                        priority
                    />
                </div>
            </Link>
        </div>
    );
} 