'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Clock, Book, BarChart3 } from 'lucide-react';

export default function MockTestSection() {
    // Mock test data
    const mockTests = [
        {
            id: 1,
            category: "Academic",
            title: "Reading Mock Test 1",
            description: "Full-length IELTS Academic Reading practice test",
            image: "/images/mock-test1.jpg",
            questions: 40,
            time: "60 minutes",
            difficulty: "Medium",
            testLink: "/mock-tests/academic-reading/1"
        },
        {
            id: 2,
            category: "Academic",
            title: "Writing Mock Test 1",
            description: "Full-length IELTS Academic Writing practice test",
            image: "/images/mock-test2.jpg",
            questions: 2,
            time: "60 minutes",
            difficulty: "Hard",
            testLink: "/mock-tests/academic-writing/1"
        },
        {
            id: 3,
            category: "General",
            title: "Reading Mock Test 1",
            description: "Full-length IELTS General Training Reading practice test",
            image: "/images/mock-test3.jpg",
            questions: 40,
            time: "60 minutes",
            difficulty: "Medium",
            testLink: "/mock-tests/general-reading/1"
        }
    ];

    // Get category color based on name
    const getCategoryColor = (category) => {
        return category === "Academic" ? "#c86478" : "#faaa5a";
    };

    return (
        <section className="w-full py-16 bg-gray-50">
            {/* Section Header */}
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
                        Free IELTS Mock Tests
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Practice with our high-quality IELTS mock tests that simulate the real exam experience
                    </p>
                </div>

                {/* Featured Test Banner */}
                <div className="relative bg-blue-950 rounded-xl overflow-hidden mb-16">
                    <div className="absolute inset-0 opacity-30">
                        <Image
                            src="/images/mock-test1.jpg"
                            alt="IELTS Mock Tests"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center">
                        <div className="md:w-2/3 mb-6 md:mb-0 md:pr-10">
                            <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                                100+ Free IELTS Practice Tests
                            </h3>
                            <p className="text-blue-100 text-lg mb-6">
                                Our comprehensive collection includes Academic and General Training tests for Reading, Writing, Listening, and Speaking
                            </p>
                            <Link
                                href="/mock-tests"
                                className="inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-400 text-blue-950 font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                            >
                                Explore All Tests
                            </Link>
                        </div>
                        <div className="md:w-1/3 flex justify-center">
                            <div className="relative h-40 w-40 md:h-56 md:w-56 bg-yellow-500 rounded-full flex items-center justify-center p-4">
                                <div className="text-center">
                                    <div className="text-4xl md:text-5xl font-bold text-blue-950">100+</div>
                                    <div className="text-xl md:text-2xl font-bold text-blue-950">Free Tests</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mock Test Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {mockTests.map((test) => {
                        const categoryColor = getCategoryColor(test.category);

                        return (
                            <div
                                key={test.id}
                                className="rounded-lg overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full transform transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1 relative"
                                style={{
                                    borderWidth: '2px',
                                    borderStyle: 'solid',
                                    borderColor: 'transparent',
                                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = categoryColor;
                                    e.currentTarget.style.boxShadow = `0 10px 25px -5px ${categoryColor}40, 0 0 15px -10px ${categoryColor}`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'transparent';
                                    e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
                                }}
                            >
                                {/* Category header - as a sticker on top of image */}
                                <div className="relative h-56 overflow-hidden rounded-t-lg">
                                    {/* Card background image */}
                                    <div className="absolute inset-0 transition-transform duration-700 ease-out">
                                        <Image
                                            src={test.image}
                                            alt={test.title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>

                                    {/* Category sticker on top */}
                                    <div className="absolute top-0 left-0 z-20">
                                        <div
                                            className="py-2 px-5 rounded-br-xl"
                                            style={{ backgroundColor: categoryColor }}
                                        >
                                            <span className="font-medium text-white">{test.category}</span>
                                        </div>
                                    </div>

                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80 transition-opacity duration-300">
                                        {/* Title info */}
                                        <div className="absolute bottom-16 left-0 p-4 text-white">
                                            <h3 className="text-xl font-bold leading-tight mb-1">
                                                {test.title}
                                            </h3>
                                            <p className="text-sm text-white/90">{test.description}</p>
                                        </div>

                                        {/* Test type section */}
                                        <div className="absolute bottom-0 left-0 right-0 px-4 py-2.5 flex items-center bg-black/40 backdrop-blur-sm">
                                            <span className="text-sm text-white font-medium">IELTS {test.category}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Test Details with icons */}
                                <div className="px-4 pt-4 pb-3 mt-2">
                                    <div className="space-y-2.5">
                                        <div className="flex items-center text-sm text-gray-600 group">
                                            <div className="w-8 h-8 flex items-center justify-center rounded-full mr-3 transition-colors duration-300 group-hover:bg-gray-50"
                                                style={{ backgroundColor: 'transparent' }}>
                                                <Book className="w-4 h-4 text-gray-400 transition-colors duration-300" />
                                            </div>
                                            <span><span className="font-medium">{test.questions}</span> Questions</span>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-600 group">
                                            <div className="w-8 h-8 flex items-center justify-center rounded-full mr-3 transition-colors duration-300 group-hover:bg-gray-50"
                                                style={{ backgroundColor: 'transparent' }}>
                                                <Clock className="w-4 h-4 text-gray-400 transition-colors duration-300" />
                                            </div>
                                            <span>{test.time} Duration</span>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-600 group">
                                            <div className="w-8 h-8 flex items-center justify-center rounded-full mr-3 transition-colors duration-300 group-hover:bg-gray-50"
                                                style={{ backgroundColor: 'transparent' }}>
                                                <BarChart3 className="w-4 h-4 text-gray-400 transition-colors duration-300" />
                                            </div>
                                            <span><span className="font-medium">{test.difficulty}</span> Difficulty</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Start Test button */}
                                <div className="px-4 pb-4 mt-auto">
                                    <Link href={test.testLink} passHref>
                                        <button
                                            className="w-full py-2.5 text-center font-medium rounded-md transition-all duration-300 text-white hover:shadow-md active:translate-y-px overflow-hidden relative"
                                            style={{ backgroundColor: categoryColor }}
                                        >
                                            <span className="relative z-10">Start Test</span>
                                            <div className="absolute inset-0 opacity-0 hover:opacity-20 bg-white transition-opacity duration-300"></div>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* View All Tests Link */}
                <div className="text-center mt-12">
                    <Link
                        href="/mock-tests"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                    >
                        View all mock tests
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
} 