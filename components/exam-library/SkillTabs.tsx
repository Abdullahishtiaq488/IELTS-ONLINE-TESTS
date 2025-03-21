import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';

interface SkillTabsProps {
    currentSkill: string;
}

const skills = [
    { id: 'all', label: 'All Skills', icon: 'grid' },
    { id: 'listening', label: 'Listening', icon: 'headphones' },
    { id: 'reading', label: 'Reading', icon: 'book-open' },
    { id: 'writing', label: 'Writing', icon: 'edit' },
    { id: 'speaking', label: 'Speaking', icon: 'mic' },
];

export function SkillTabs({ currentSkill }: SkillTabsProps) {
    const searchParams = useSearchParams();
    const tab = searchParams.get('tab') || 'all';

    return (
        <div className="flex flex-wrap gap-2 mb-6">
            {skills.map((skill) => (
                <Link
                    key={skill.id}
                    href={`/ielts-exam-library?tab=${tab}&skill=${skill.id}`}
                    className={cn(
                        'flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                        currentSkill === skill.id
                            ? 'bg-white text-primary-900 shadow-sm border-b-2 border-primary-900'
                            : 'bg-white text-gray-600 hover:text-primary-900'
                    )}
                >
                    <span className="flex items-center gap-2">
                        {skill.label}
                    </span>
                </Link>
            ))}
        </div>
    );
} 