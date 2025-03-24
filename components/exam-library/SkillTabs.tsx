import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Grid, Headphones, BookOpen, Edit, Mic } from 'lucide-react';

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

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'grid': return <Grid className="h-4 w-4 mr-2" aria-hidden="true" />;
            case 'headphones': return <Headphones className="h-4 w-4 mr-2" aria-hidden="true" />;
            case 'book-open': return <BookOpen className="h-4 w-4 mr-2" aria-hidden="true" />;
            case 'edit': return <Edit className="h-4 w-4 mr-2" aria-hidden="true" />;
            case 'mic': return <Mic className="h-4 w-4 mr-2" aria-hidden="true" />;
            default: return null;
        }
    };

    return (
        <nav aria-label="Skill filters">
            <ul className="flex flex-wrap gap-2 mb-6">
                {skills.map((skill) => (
                    <li key={skill.id}>
                        <Link
                            key={skill.id}
                            href={`/ielts-exam-library?tab=${tab}&skill=${skill.id}`}
                            className={cn(
                                'flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                                currentSkill === skill.id
                                    ? 'bg-white text-primary-900 shadow-sm border-b-2 border-primary-900'
                                    : 'bg-white text-tertiary-600 hover:text-primary-900'
                            )}
                            aria-current={currentSkill === skill.id ? 'page' : undefined}
                        >
                            <span className="flex items-center gap-2">
                                {getIcon(skill.icon)}
                                {skill.label}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
} 