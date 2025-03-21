import Image from 'next/image';
import Link from 'next/link';
import { Zap, ChevronDown, ChevronLeft, ChevronRight, BookOpen, Headphones, Edit, Mic } from 'lucide-react';
import { useState } from 'react';

interface MockTestCardsProps {
    currentSkill: string;
}

interface MonthTest {
    testNumber: number;
    testsTaken: number;
}

interface Month {
    name: string;
    totalTests: number;
    practiceTests: MonthTest[];
}

const generatePracticeTests = (baseCount: number): MonthTest[] => {
    return Array.from({ length: 4 }, (_, i) => ({
        testNumber: i + 1,
        testsTaken: Math.floor(baseCount / (i + 2))
    }));
};

const mockTests = [
    {
        id: '2024',
        image: '/images/mock-test-2024.png',
        title: 'IELTS Mock Test 2024',
        months: [
            {
                name: 'January',
                totalTests: 4498818,
                practiceTests: [
                    { testNumber: 1, testsTaken: 845201 },
                    { testNumber: 2, testsTaken: 394063 },
                    { testNumber: 3, testsTaken: 282341 },
                    { testNumber: 4, testsTaken: 210557 }
                ]
            },
            {
                name: 'February',
                totalTests: 1777122,
                practiceTests: [
                    { testNumber: 1, testsTaken: 264519 },
                    { testNumber: 2, testsTaken: 172398 },
                    { testNumber: 3, testsTaken: 125407 },
                    { testNumber: 4, testsTaken: 127025 }
                ]
            },
            {
                name: 'March',
                totalTests: 787076,
                practiceTests: [
                    { testNumber: 1, testsTaken: 106439 },
                    { testNumber: 2, testsTaken: 67119 },
                    { testNumber: 3, testsTaken: 58733 },
                    { testNumber: 4, testsTaken: 57787 }
                ]
            },
            { name: 'April', totalTests: 382849, practiceTests: generatePracticeTests(382849) },
            { name: 'May', totalTests: 270195, practiceTests: generatePracticeTests(270195) },
            { name: 'June', totalTests: 467784, practiceTests: generatePracticeTests(467784) },
            { name: 'July', totalTests: 174474, practiceTests: generatePracticeTests(174474) },
            { name: 'August', totalTests: 102703, practiceTests: generatePracticeTests(102703) },
            { name: 'September', totalTests: 98765, practiceTests: generatePracticeTests(98765) },
            { name: 'October', totalTests: 87654, practiceTests: generatePracticeTests(87654) },
            { name: 'November', totalTests: 76543, practiceTests: generatePracticeTests(76543) },
            { name: 'December', totalTests: 65432, practiceTests: generatePracticeTests(65432) }
        ]
    },
    {
        id: '2023',
        image: '/images/mock-test-2023.png',
        title: 'IELTS Mock Test 2023',
        months: [
            { name: 'January', totalTests: 899831, practiceTests: generatePracticeTests(899831) },
            { name: 'February', totalTests: 469707, practiceTests: generatePracticeTests(469707) },
            { name: 'March', totalTests: 324814, practiceTests: generatePracticeTests(324814) },
            { name: 'April', totalTests: 289654, practiceTests: generatePracticeTests(289654) },
            { name: 'May', totalTests: 245678, practiceTests: generatePracticeTests(245678) },
            { name: 'June', totalTests: 234567, practiceTests: generatePracticeTests(234567) },
            { name: 'July', totalTests: 198765, practiceTests: generatePracticeTests(198765) },
            { name: 'August', totalTests: 187654, practiceTests: generatePracticeTests(187654) },
            { name: 'September', totalTests: 176543, practiceTests: generatePracticeTests(176543) },
            { name: 'October', totalTests: 165432, practiceTests: generatePracticeTests(165432) },
            { name: 'November', totalTests: 154321, practiceTests: generatePracticeTests(154321) },
            { name: 'December', totalTests: 143210, practiceTests: generatePracticeTests(143210) }
        ]
    },
    {
        id: '2022',
        image: '/images/mock-test-2022.png',
        title: 'IELTS Mock Test 2022',
        months: [
            { name: 'January', totalTests: 132109, practiceTests: generatePracticeTests(132109) },
            { name: 'February', totalTests: 121098, practiceTests: generatePracticeTests(121098) },
            { name: 'March', totalTests: 110987, practiceTests: generatePracticeTests(110987) },
            { name: 'April', totalTests: 109876, practiceTests: generatePracticeTests(109876) },
            { name: 'May', totalTests: 98765, practiceTests: generatePracticeTests(98765) },
            { name: 'June', totalTests: 87654, practiceTests: generatePracticeTests(87654) },
            { name: 'July', totalTests: 76543, practiceTests: generatePracticeTests(76543) },
            { name: 'August', totalTests: 65432, practiceTests: generatePracticeTests(65432) },
            { name: 'September', totalTests: 54321, practiceTests: generatePracticeTests(54321) },
            { name: 'October', totalTests: 43210, practiceTests: generatePracticeTests(43210) },
            { name: 'November', totalTests: 32109, practiceTests: generatePracticeTests(32109) },
            { name: 'December', totalTests: 21098, practiceTests: generatePracticeTests(21098) }
        ]
    }
];

// Helper function to get skill icon
const getSkillIcon = (skill: string) => {
    switch (skill.toLowerCase()) {
        case 'listening':
            return <Headphones className="h-4 w-4 mr-1" />;
        case 'reading':
            return <BookOpen className="h-4 w-4 mr-1" />;
        case 'writing':
            return <Edit className="h-4 w-4 mr-1" />;
        case 'speaking':
            return <Mic className="h-4 w-4 mr-1" />;
        default:
            return null;
    }
};

// Get month color based on name (for visual variety)
const getMonthColor = (month: string): string => {
    const colors = {
        'January': 'from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 border-blue-200',
        'February': 'from-pink-50 to-pink-100 hover:from-pink-100 hover:to-pink-200 border-pink-200',
        'March': 'from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 border-green-200',
        'April': 'from-yellow-50 to-yellow-100 hover:from-yellow-100 hover:to-yellow-200 border-yellow-200',
        'May': 'from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 border-purple-200',
        'June': 'from-red-50 to-red-100 hover:from-red-100 hover:to-red-200 border-red-200',
        'July': 'from-indigo-50 to-indigo-100 hover:from-indigo-100 hover:to-indigo-200 border-indigo-200',
        'August': 'from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 border-orange-200',
        'September': 'from-teal-50 to-teal-100 hover:from-teal-100 hover:to-teal-200 border-teal-200',
        'October': 'from-cyan-50 to-cyan-100 hover:from-cyan-100 hover:to-cyan-200 border-cyan-200',
        'November': 'from-amber-50 to-amber-100 hover:from-amber-100 hover:to-amber-200 border-amber-200',
        'December': 'from-emerald-50 to-emerald-100 hover:from-emerald-100 hover:to-emerald-200 border-emerald-200'
    };
    
    return colors[month as keyof typeof colors] || 'from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 border-gray-200';
};

export function MockTestCards({ currentSkill }: MockTestCardsProps) {
    const VISIBLE_ITEMS = 4; // Number of items to show before the gradient overlay
    const CARDS_PER_PAGE = 2; // Number of test cards to show per page
    const [expandedMonths, setExpandedMonths] = useState<{ [key: string]: boolean }>({});
    const [currentPage, setCurrentPage] = useState(1);
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);

    const toggleExpand = (testId: string) => {
        setExpandedMonths(prev => ({
            ...prev,
            [testId]: !prev[testId]
        }));
    };

    const getVisibleMonths = (months: Month[], testId: string) => {
        return expandedMonths[testId] ? months : months.slice(0, VISIBLE_ITEMS);
    };

    const getRemainingTests = (months: Month[], testId: string) => {
        if (expandedMonths[testId]) return 0;
        return currentSkill === 'all'
            ? months.length - VISIBLE_ITEMS
            : (months.length - VISIBLE_ITEMS) * 4;
    };

    // Pagination logic
    const totalPages = Math.ceil(mockTests.length / CARDS_PER_PAGE);
    const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
    const visibleTests = mockTests.slice(startIndex, startIndex + CARDS_PER_PAGE);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        // Reset expanded state when changing pages
        setExpandedMonths({});
    };

    return (
        <div className="space-y-8">
            {visibleTests.map((mockTest) => (
                <div key={mockTest.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Book Image */}
                        <div className="w-full md:w-48 flex-shrink-0">
                            <div className="relative group">
                                <Image
                                    src={mockTest.image}
                                    alt={mockTest.title}
                                    width={200}
                                    height={280}
                                    className="w-full max-w-[200px] mx-auto md:w-full h-auto rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300 transform group-hover:scale-[1.02]"
                                />
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>

                        {/* Test Content and Tabs */}
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-primary-900 mb-4">{mockTest.title}</h2>
                            <p className="text-gray-600 mb-6">Practice with our latest collection of IELTS mock tests</p>

                            <div className="relative">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {getVisibleMonths(mockTest.months, mockTest.id).map((month) => (
                                        currentSkill === 'all' ? (
                                            // All Skills View - Show month summary
                                            <Link
                                                key={month.name}
                                                href={`/mock-test/${mockTest.id}/${month.name.toLowerCase()}`}
                                                className={`p-4 rounded-lg border bg-gradient-to-br ${getMonthColor(month.name)} transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md`}
                                                onMouseEnter={() => setHoveredCard(`${mockTest.id}-${month.name}`)}
                                                onMouseLeave={() => setHoveredCard(null)}
                                            >
                                                <h3 className="font-medium text-gray-700 flex items-center">
                                                    <span className={`inline-block w-2 h-2 rounded-full mr-2 bg-primary-500 ${hoveredCard === `${mockTest.id}-${month.name}` ? 'animate-pulse' : ''}`}></span>
                                                    {month.name}
                                                </h3>
                                                <div className="flex items-center text-gray-500 text-sm mt-1">
                                                    <Zap className={`h-4 w-4 mr-1 text-accent-500 ${hoveredCard === `${mockTest.id}-${month.name}` ? 'animate-bounce' : ''}`} />
                                                    {month.totalTests.toLocaleString()} tests taken
                                                </div>
                                            </Link>
                                        ) : (
                                            // Specific Skill View - Show individual practice tests
                                            month.practiceTests.map((practiceTest) => (
                                                <Link
                                                    key={`${month.name}-${practiceTest.testNumber}`}
                                                    href={`/mock-test/${mockTest.id}/${month.name.toLowerCase()}/${currentSkill.toLowerCase()}-${practiceTest.testNumber}`}
                                                    className={`p-4 rounded-lg border bg-gradient-to-br ${getMonthColor(month.name)} transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md relative overflow-hidden group`}
                                                    onMouseEnter={() => setHoveredCard(`${mockTest.id}-${month.name}-${practiceTest.testNumber}`)}
                                                    onMouseLeave={() => setHoveredCard(null)}
                                                >
                                                    <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-transparent border-r-primary-500/20 group-hover:border-r-primary-500/40 transition-colors"></div>
                                                    <div className="text-sm text-primary-900 font-medium flex items-center">
                                                        {getSkillIcon(currentSkill)}
                                                        {month.name} {currentSkill} Practice Test {practiceTest.testNumber}
                                                    </div>
                                                    <div className="flex items-center text-gray-500 text-xs mt-1">
                                                        <Zap className={`h-3 w-3 mr-1 text-accent-500 ${hoveredCard === `${mockTest.id}-${month.name}-${practiceTest.testNumber}` ? 'animate-pulse' : ''}`} />
                                                        {practiceTest.testsTaken.toLocaleString()} tests taken
                                                    </div>
                                                </Link>
                                            ))
                                        )
                                    ))}
                                </div>

                                {/* Gradient Overlay - Only show when not expanded */}
                                {!expandedMonths[mockTest.id] && (
                                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                                )}

                                {getRemainingTests(mockTest.months, mockTest.id) > 0 && (
                                    <div className="mt-4 text-center relative">
                                        <button
                                            onClick={() => toggleExpand(mockTest.id)}
                                            className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-primary-50 text-primary-600 hover:bg-primary-100 hover:text-primary-700 font-medium transition-colors shadow-sm hover:shadow"
                                        >
                                            {expandedMonths[mockTest.id] ? 'Show less' : `View more ${getRemainingTests(mockTest.months, mockTest.id)} tests`}
                                            <ChevronDown className={`h-4 w-4 transition-transform ${expandedMonths[mockTest.id] ? 'rotate-180' : ''}`} />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-8">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="p-2 rounded-lg border border-gray-200 hover:border-primary-500 hover:bg-primary-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>

                    <div className="flex items-center gap-2">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`px-4 py-2 rounded-lg border transition-all duration-300 ${currentPage === page
                                    ? 'bg-primary-600 text-white border-primary-600 shadow-md'
                                    : 'border-gray-200 hover:border-primary-500 hover:bg-primary-50 hover:shadow'
                                    }`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="p-2 rounded-lg border border-gray-200 hover:border-primary-500 hover:bg-primary-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </div>
            )}
        </div>
    );
}