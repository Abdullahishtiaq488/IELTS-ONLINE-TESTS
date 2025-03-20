import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';

interface ExamLibraryTabsProps {
    currentTab: string;
}

const tabs = [
    { id: 'all', label: 'All Tests', icon: 'M4 6h16M4 10h16M4 14h16M4 18h16' },
    { id: 'academic', label: 'Academic Test', icon: 'M12 14l9-5-9-5-9 5 9 5z' },
    { id: 'general', label: 'General Training Test', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
];

export function ExamLibraryTabs({ currentTab }: ExamLibraryTabsProps) {
    const searchParams = useSearchParams();
    const skill = searchParams.get('skill') || 'all';

    return (
        <div className="flex flex-wrap gap-2 mb-6">
            {tabs.map((tab) => (
                <Link
                    key={tab.id}
                    href={`/ielts-exam-library?tab=${tab.id}&skill=${skill}`}
                    className={cn(
                        'flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors',
                        currentTab === tab.id
                            ? 'bg-blue-900 text-white'
                            : 'bg-white text-gray-600 hover:bg-gray-50'
                    )}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={tab.icon}
                        />
                    </svg>
                    {tab.label}
                </Link>
            ))}
        </div>
    );
} 