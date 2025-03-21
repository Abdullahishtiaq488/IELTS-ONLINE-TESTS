'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from './container';

export default function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [slideDirection, setSlideDirection] = useState('next');

    // Animation elements refs for custom timing
    const arrowsContainerRef = useRef<HTMLDivElement>(null);
    const linesContainerRef = useRef<HTMLDivElement>(null);
    const personRef = useRef<HTMLDivElement>(null);

    const nextSlide = useCallback(() => {
        if (!isAnimating) {
            setIsAnimating(true);
            setSlideDirection('next');
            setCurrentSlide((prev) => (prev + 1) % 2);
        }
    }, [isAnimating]);

    const prevSlide = useCallback(() => {
        if (!isAnimating) {
            setIsAnimating(true);
            setSlideDirection('prev');
            setCurrentSlide((prev) => (prev - 1 + 2) % 2);
        }
    }, [isAnimating]);

    // Auto slide effect
    useEffect(() => {
        const timer = setInterval(nextSlide, 8000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    // Reset animation state after transition
    useEffect(() => {
        const timer = setTimeout(() => setIsAnimating(false), 700);
        return () => clearTimeout(timer);
    }, [currentSlide]);

    // Setup continuous animations for slide 2
    useEffect(() => {
        if (currentSlide === 1 && arrowsContainerRef.current && linesContainerRef.current && personRef.current) {
            const arrowsContainer = arrowsContainerRef.current;
            const linesContainer = linesContainerRef.current;
            const person = personRef.current;

            // Setup continuous animations for arrows (bottom-left to top-right)
            arrowsContainer.querySelectorAll('.arrow-element').forEach(arrow => {
                const element = arrow as HTMLElement;
                
                // Set initial position
                element.style.opacity = '0';
                element.style.transform = 'translate(0, 0)';
                
                // Create animation function for continuous movement
                const animateArrow = () => {
                    // Random start delay
                    const delay = Math.random() * 5000;
                    
                    setTimeout(() => {
                        // Start visible
                        element.style.opacity = '1';
                        element.style.transition = 'transform 15s linear, opacity 2s ease-in-out';
                        
                        // Move diagonally from bottom-left to top-right
                        // Reduced movement range to keep arrows closer to the person
                        element.style.transform = 'translate(80%, -80%)';
                        
                        // Fade out near the end
                        setTimeout(() => {
                            element.style.opacity = '0';
                        }, 13000);
                        
                        // Reset after animation completes
                        setTimeout(() => {
                            element.style.transition = 'none';
                            element.style.transform = 'translate(0, 0)';
                            
                            // Restart animation
                            animateArrow();
                        }, 15000);
                    }, delay);
                };
                
                // Start the animation cycle
                animateArrow();
            });

            // Setup continuous animations for lines (top-right to bottom-left)
            linesContainer.querySelectorAll('.line-element').forEach(line => {
                const element = line as HTMLElement;
                
                // Set initial position
                element.style.opacity = '0';
                element.style.transform = 'translate(0, 0)';
                
                // Create animation function for continuous movement
                const animateLine = () => {
                    // Random start delay
                    const delay = Math.random() * 5000;
                    
                    setTimeout(() => {
                        // Start visible
                        element.style.opacity = '1';
                        element.style.transition = 'transform 15s linear, opacity 2s ease-in-out';
                        
                        // Move diagonally from top-right to bottom-left
                        // Reduced movement range to keep lines closer to the person
                        element.style.transform = 'translate(-80%, 80%)';
                        
                        // Fade out near the end
                        setTimeout(() => {
                            element.style.opacity = '0';
                        }, 13000);
                        
                        // Reset after animation completes
                        setTimeout(() => {
                            element.style.transition = 'none';
                            element.style.transform = 'translate(0, 0)';
                            
                            // Restart animation
                            animateLine();
                        }, 15000);
                    }, delay);
                };
                
                // Start the animation cycle
                animateLine();
            });

            // Reset and restart person animation
            person.classList.remove('animate-slide-up');
            void person.offsetWidth;
            setTimeout(() => {
                person.classList.add('animate-slide-up');
            }, 500);
        }
        
        // Cleanup animations when slide changes
        return () => {
            if (arrowsContainerRef.current && linesContainerRef.current) {
                arrowsContainerRef.current.querySelectorAll('.arrow-element').forEach(arrow => {
                    const element = arrow as HTMLElement;
                    element.style.transition = 'none';
                    element.style.opacity = '0';
                });
                
                linesContainerRef.current.querySelectorAll('.line-element').forEach(line => {
                    const element = line as HTMLElement;
                    element.style.transition = 'none';
                    element.style.opacity = '0';
                });
            }
        };
    }, [currentSlide]);

    return (
        <div className="relative w-full overflow-hidden">
            {/* Background SVG for styling */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-950 to-blue-900"></div>
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-blue-950 to-transparent"></div>
            </div>

            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] z-10">
                {/* ===== SLIDE 1: Platinum Member ===== */}
                <div
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${currentSlide === 0
                        ? 'opacity-100 translate-x-0'
                        : slideDirection === 'next'
                            ? 'opacity-0 -translate-x-full'
                            : 'opacity-0 translate-x-full'
                        }`}
                >
                    <div className="absolute inset-0">
                        <Image
                            src="/images/carousel1.png"
                            alt="IELTS Partnership"
                            fill
                            className="object-cover opacity-60"
                            priority
                            quality={90}
                            sizes="100vw"
                            placeholder="blur"
                            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMwYjJjNjAiLz48L3N2Zz4="
                        />

                        {/* Animated background elements */}
                        <div className="absolute top-20 right-40 animate-float-slow opacity-30">
                            <Image
                                src="/images/hero-line-1.svg"
                                alt=""
                                width={40}
                                height={40}
                                aria-hidden="true"
                            />
                        </div>
                        <div className="absolute bottom-40 left-20 animate-float-medium opacity-30">
                            <Image
                                src="/images/hero-line-3.svg"
                                alt=""
                                width={40}
                                height={40}
                                aria-hidden="true"
                            />
                        </div>
                        <div className="absolute top-1/3 left-1/4 animate-float-medium opacity-30">
                            <Image
                                src="/images/hero-arrow-2.svg"
                                alt=""
                                width={40}
                                height={40}
                                aria-hidden="true"
                            />
                        </div>
                        <div className="absolute bottom-1/3 right-1/3 animate-float-slow opacity-30">
                            <Image
                                src="/images/hero-arrow-9.svg"
                                alt=""
                                width={40}
                                height={40}
                                aria-hidden="true"
                            />
                        </div>
                    </div>

                    <div className="absolute inset-0 bg-blue-950/30 backdrop-blur-sm">
                        <Container className="h-full py-8 flex flex-col md:flex-row">
                            <div className="w-full md:w-1/2 flex flex-col justify-center items-start space-y-6 md:pr-8">
                                <div className="flex items-center gap-6">
                                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-lg shadow-lg transition-transform hover:scale-105">
                                        <Image
                                            src="/images/intergreat-logo-en.svg"
                                            alt="InterGreat Logo"
                                            width={120}
                                            height={40}
                                            className="h-8 w-auto"
                                        />
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-lg shadow-lg transition-transform hover:scale-105">
                                        <Image
                                            src="/images/iot-logo-en.svg"
                                            alt="IOT Logo"
                                            width={120}
                                            height={40}
                                            className="h-8 w-auto"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="text-white text-lg font-light tracking-wide">Proud to be</div>
                                    <div className="flex flex-col items-start gap-3">
                                        <div className="relative">
                                            <Image
                                                src="/images/iot-banner-text-platinum.svg"
                                                alt="Platinum"
                                                width={200}
                                                height={60}
                                                className="h-12 w-auto"
                                            />
                                            <div className="absolute -inset-1 bg-blue-400/10 rounded-lg -z-10 blur-md"></div>
                                        </div>
                                        <div className="text-white text-4xl font-bold tracking-widest"
                                            style={{
                                                WebkitTextStroke: '1px white',
                                                WebkitTextFillColor: 'transparent'
                                            }}>
                                            MEMBER
                                        </div>
                                    </div>
                                    <p className="text-white/90 text-lg leading-relaxed max-w-lg">
                                        of the British Council Partnership Programme.
                                    </p>
                                </div>

                                <button className="mt-4 relative group">
                                    <span className="absolute inset-0 bg-gradient-to-br from-red-700 to-red-950 rounded-full opacity-80 group-hover:opacity-100 blur transition-all"></span>
                                    <span className="relative bg-gradient-to-br from-red-600 to-red-900 text-white px-8 py-3 rounded-full font-bold inline-block transition-transform group-hover:scale-105">
                                        Learn More
                                    </span>
                                </button>
                            </div>

                            <div className="w-full md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
                                <div className="relative w-full max-w-[400px] aspect-[4/3]">
                                    <Image
                                        src="/images/IEG-certificate ielts.png"
                                        alt="IELTS Certificate"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 400px"
                                        className="object-contain scale-110"
                                        placeholder="blur"
                                        blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMGYyNzRkIi8+PC9zdmc+"
                                    />
                                    <div className="absolute -inset-2 bg-blue-400/20 rounded-xl -z-10 blur-xl"></div>
                                </div>
                            </div>
                        </Container>
                    </div>
                </div>

                {/* ===== SLIDE 2: IELTS Score Higher ===== */}
                <div
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${currentSlide === 1
                        ? 'opacity-100 translate-x-0'
                        : slideDirection === 'next'
                            ? 'opacity-0 translate-x-full'
                            : 'opacity-0 -translate-x-full'
                        }`}
                >
                    <div className="absolute inset-0">
                        <Image
                            src="/images/carousel2.jpg"
                            alt="IELTS Practice"
                            fill
                            className="object-cover opacity-50"
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
                                        Get ready for your 2025 IELTS exam by practicing our 100+ IELTS mock tests
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
                                        <span className="font-bold">28,000,000+</span> students are using our free services
                                    </p>
                                </div>

                                <button className="mt-4 relative group">
                                    <span className="absolute inset-0 bg-gradient-to-br from-red-700 to-red-950 rounded-full opacity-80 group-hover:opacity-100 blur transition-all"></span>
                                    <span className="relative bg-gradient-to-br from-red-600 to-red-900 text-white px-8 py-3 rounded-full font-bold inline-block transition-transform group-hover:scale-105">
                                        Start Now
                                    </span>
                                </button>
                            </div>

                            <div className="w-full md:w-1/2 relative overflow-hidden mt-8 md:mt-0">
                                {/* Animated flowing arrows and lines */}
                                <div className="absolute inset-0">
                                    <div className="relative w-full h-full">
                                        {/* Lines flowing from top-right to bottom-left */}
                                        <div ref={linesContainerRef} className="absolute inset-0 flex items-center justify-center">
                                            {/* Line 1 */}
                                            <div className="line-element absolute right-[45%] top-[20%] opacity-0">
                                                <Image
                                                    src="/images/hero-line-1.svg"
                                                    alt=""
                                                    width={50}
                                                    height={50}
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            {/* Line 2 */}
                                            <div className="line-element absolute right-[40%] top-[25%] opacity-0">
                                                <Image
                                                    src="/images/hero-line-3.svg"
                                                    alt=""
                                                    width={60}
                                                    height={60}
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            {/* Line 3 */}
                                            <div className="line-element absolute right-[55%] top-[15%] opacity-0">
                                                <Image
                                                    src="/images/hero-line-1.svg"
                                                    alt=""
                                                    width={40}
                                                    height={40}
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            {/* Line 4 */}
                                            <div className="line-element absolute right-[50%] top-[30%] opacity-0">
                                                <Image
                                                    src="/images/hero-line-3.svg"
                                                    alt=""
                                                    width={45}
                                                    height={45}
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            {/* Line 5 */}
                                            <div className="line-element absolute right-[60%] top-[20%] opacity-0">
                                                <Image
                                                    src="/images/hero-line-1.svg"
                                                    alt=""
                                                    width={55}
                                                    height={55}
                                                    aria-hidden="true"
                                                />
                                            </div>
                                        </div>

                                        {/* Arrows flowing from bottom-left to top-right */}
                                        <div ref={arrowsContainerRef} className="absolute inset-0 flex items-center justify-center">
                                            {/* Arrow 1 */}
                                            <div className="arrow-element absolute left-[45%] bottom-[30%] opacity-0">
                                                <Image
                                                    src="/images/hero-arrow-6.svg"
                                                    alt=""
                                                    width={30}
                                                    height={30}
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            {/* Arrow 2 */}
                                            <div className="arrow-element absolute left-[50%] bottom-[35%] opacity-0">
                                                <Image
                                                    src="/images/hero-arrow-9.svg"
                                                    alt=""
                                                    width={35}
                                                    height={35}
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            {/* Arrow 3 */}
                                            <div className="arrow-element absolute left-[55%] bottom-[25%] opacity-0">
                                                <Image
                                                    src="/images/hero-arrow-2.svg"
                                                    alt=""
                                                    width={25}
                                                    height={25}
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            {/* Arrow 4 */}
                                            <div className="arrow-element absolute left-[40%] bottom-[40%] opacity-0">
                                                <Image
                                                    src="/images/hero-arrow-3.svg"
                                                    alt=""
                                                    width={32}
                                                    height={32}
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            {/* Arrow 5 */}
                                            <div className="arrow-element absolute left-[60%] bottom-[30%] opacity-0">
                                                <Image
                                                    src="/images/hero-arrow-6.svg"
                                                    alt=""
                                                    width={28}
                                                    height={28}
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            {/* Arrow 6 */}
                                            <div className="arrow-element absolute left-[45%] bottom-[45%] opacity-0">
                                                <Image
                                                    src="/images/hero-arrow-9.svg"
                                                    alt=""
                                                    width={33}
                                                    height={33}
                                                    aria-hidden="true"
                                                />
                                            </div>
                                        </div>

                                        {/* Main arrow with person */}
                                        <div className="absolute inset-0 flex items-end justify-center">
                                            <div className="relative mb-20 w-3/4 max-w-[200px]">
                                                <Image
                                                    src="/images/hero-arrow-1.svg"
                                                    alt="Big Arrow"
                                                    width={200}
                                                    height={150}
                                                    className="w-full h-auto"
                                                />

                                                {/* Person on top */}
                                                <div ref={personRef} className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full opacity-0">
                                                    <Image
                                                        src="/images/hero-person.svg"
                                                        alt="Person"
                                                        width={60}
                                                        height={160}
                                                        className="w-auto h-auto"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                </div>
            </div>

            {/* Navigation buttons with enhanced styling */}
            <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/5 hover:bg-white/15 backdrop-blur-sm p-3 rounded-full border border-white/10 transition-all duration-300 shadow-lg hover:scale-110"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6 text-white/90" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/5 hover:bg-white/15 backdrop-blur-sm p-3 rounded-full border border-white/10 transition-all duration-300 shadow-lg hover:scale-110"
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6 text-white/90" />
            </button>

            {/* Enhanced indicators with animations */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-4 z-20">
                {[0, 1].map((index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`group relative transition-all duration-300 ${index === currentSlide ? 'scale-110' : 'scale-100 opacity-70'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    >
                        <span className={`block w-3 h-3 rounded-full transition-all duration-500 ${index === currentSlide
                            ? 'bg-yellow-400 scale-100'
                            : 'bg-white/60 scale-90 group-hover:scale-100 group-hover:bg-white'
                            }`}></span>
                        {index === currentSlide && (
                            <span className="absolute inset-0 bg-yellow-400/50 rounded-full animate-ping"></span>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
} 