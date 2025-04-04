'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Container } from './container';

export default function Carousel() {
    // Since these state variables are not used, we can remove them
    // const [isAnimating, setIsAnimating] = useState(false);

    return (
        <div className="relative w-full overflow-hidden" role="region" aria-roledescription="carousel" aria-label="Main promotional content">
            {/* Background SVG for styling */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-950 to-blue-900"></div>
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-blue-950 to-transparent"></div>
            </div>

            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] z-10">
                {/* Hero Section */}
                <div
                    className="absolute inset-0 opacity-100 translate-x-0"
                    role="group"
                    aria-roledescription="hero"
                    aria-label="Main Hero"
                >
                    <div className="absolute inset-0">
                        <Image
                            src="/images/carousel1.png"
                            alt="IELTS Practice background"
                            fill
                            className="object-cover opacity-60"
                            priority
                            quality={90}
                            sizes="100vw"
                            placeholder="blur"
                            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMwYjJjNjAiLz48L3N2Zz4="
                        />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 to-blue-950/60 backdrop-blur-[2px]">
                        <Container className="h-full py-8 flex flex-col md:flex-row">
                            <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-6">
                                <div className="space-y-4">
                                    <h2 className="text-white text-4xl md:text-5xl font-light tracking-wide">
                                        We take your
                                    </h2>
                                    <h3 className="text-white text-3xl md:text-4xl font-bold tracking-wide">
                                        IELTS score higher
                                    </h3>
                                </div>

                                <div className="bg-blue-900/20 backdrop-blur-md p-4 rounded-lg border border-blue-800/30">
                                    <p className="text-blue-100 text-base md:text-lg">
                                        Get ready for your 2025 IELTS exam by practicing our
                                        <span className="font-bold text-white"> IELTS mock tests</span>
                                        <span className="font-bold text-white"> for free</span>
                                    </p>
                                </div>

                                <div className="flex items-center space-x-4 mt-4">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-lg">
                                                <Image
                                                    src={`/images/testimon-f${i}.jpg`}
                                                    alt={`Student ${i}`}
                                                    width={40}
                                                    height={40}
                                                    className="w-full h-full object-cover"
                                                    placeholder="blur"
                                                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiM2NDc0OGIiLz48L3N2Zz4="
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-white text-sm">
                                        <span className="font-bold">50,000+</span> students are using our free services
                                    </p>
                                </div>

                                <a href="/ielts-exam-library" className="mt-4 relative group" aria-label="Start practicing IELTS tests">
                                    <span className="absolute inset-0 bg-gradient-to-br from-red-700 to-red-950 rounded-full opacity-80 group-hover:opacity-100 blur transition-all"></span>
                                    <span className="relative bg-gradient-to-br from-red-600 to-red-900 text-white px-8 py-3 rounded-full font-bold inline-block transition-transform group-hover:scale-105">
                                        Start Now
                                    </span>
                                </a>
                            </div>

                            <div className="w-full md:w-1/2 relative overflow-hidden mt-8 md:mt-0 flex items-center justify-center">
                                {/* YouTube Video using iframe */}
                                <div className="relative w-full max-w-[500px] aspect-video rounded-lg overflow-hidden shadow-2xl">
                                    <iframe
                                        src="https://www.youtube.com/embed/483rMP3rCk8?si=BILL1M5_VdQN5Lmw&autoplay=1&mute=1&modestbranding=1&rel=0"
                                        title="IELTS Preparation Video"
                                        allowFullScreen
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        className="absolute top-0 left-0 w-full h-full border-0"
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </div>
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    );
}