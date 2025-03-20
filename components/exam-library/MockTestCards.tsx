import Image from 'next/image';
import Link from 'next/link';
import { Zap, ChevronDown } from 'lucide-react';

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
            { name: 'August', totalTests: 102703, practiceTests: generatePracticeTests(102703) }
        ]
    },
    {
        id: '2023',
        image: '/images/mock-test-2023.png',
        title: 'IELTS Mock Test 2023',
        months: [
            { name: 'January', totalTests: 899831, practiceTests: generatePracticeTests(899831) },
            { name: 'February', totalTests: 469707, practiceTests: generatePracticeTests(469707) },
            { name: 'March', totalTests: 324814, practiceTests: generatePracticeTests(324814) }
        ]
    }
];

export function MockTestCards({ currentSkill }: MockTestCardsProps) {
    const VISIBLE_ITEMS = 4; // Number of items to show before the gradient overlay

    return (
        <div className="space-y-8">
            {mockTests.map((mockTest) => (
                <div key={mockTest.id} className="bg-white rounded-xl p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Book Image */}
                        <div className="w-full md:w-48 flex-shrink-0">
                            <Image
                                src={mockTest.image}
                                alt={mockTest.title}
                                width={200}
                                height={280}
                                className="w-full max-w-[200px] mx-auto md:w-full h-auto rounded-xl"
                            />
                        </div>

                        {/* Test Content and Tabs */}
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-blue-900 mb-4">{mockTest.title}</h2>
                            <p className="text-gray-600 mb-6">Practice with our latest collection of IELTS mock tests</p>

                            <div className="relative">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {mockTest.months.slice(0, VISIBLE_ITEMS).map((month) => (
                                        currentSkill === 'all' ? (
                                            // All Skills View - Show month summary
                                            <Link
                                                key={month.name}
                                                href={`/mock-test/${mockTest.id}/${month.name.toLowerCase()}`}
                                                className="p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors"
                                            >
                                                <h3 className="font-medium text-gray-700">{month.name}</h3>
                                                <div className="flex items-center text-gray-500 text-sm mt-1">
                                                    <Zap className="h-4 w-4 mr-1 text-yellow-500" />
                                                    {month.totalTests.toLocaleString()} tests taken
                                                </div>
                                            </Link>
                                        ) : (
                                            // Specific Skill View - Show individual practice tests
                                            month.practiceTests.map((practiceTest) => (
                                                <Link
                                                    key={`${month.name}-${practiceTest.testNumber}`}
                                                    href={`/mock-test/${mockTest.id}/${month.name.toLowerCase()}/${currentSkill.toLowerCase()}-${practiceTest.testNumber}`}
                                                    className="p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors"
                                                >
                                                    <div className="text-sm text-blue-900">
                                                        {month.name} {currentSkill} Practice Test {practiceTest.testNumber}
                                                    </div>
                                                    <div className="flex items-center text-gray-500 text-xs mt-1">
                                                        <Zap className="h-3 w-3 mr-1 text-yellow-500" />
                                                        {practiceTest.testsTaken.toLocaleString()} tests taken
                                                    </div>
                                                </Link>
                                            ))
                                        )
                                    ))}
                                </div>

                                {/* Gradient Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />

                                {mockTest.months.length > VISIBLE_ITEMS && (
                                    <div className="mt-2 text-center relative">
                                        <button className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium">
                                            View more {currentSkill === 'all' ?
                                                mockTest.months.length - VISIBLE_ITEMS :
                                                (mockTest.months.length - VISIBLE_ITEMS) * 4} tests
                                            <ChevronDown className="h-4 w-4" />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}