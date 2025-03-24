import Link from 'next/link';

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav className="flex mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2" role="list">
                {items.map((item, index) => (
                    <li key={item.href} className="flex items-center">
                        {index > 0 && (
                            <span className="mx-2 text-primary-400" aria-hidden="true">/</span>
                        )}
                        <Link
                            href={item.href}
                            className={`text-sm ${index === items.length - 1
                                    ? 'text-primary-600 font-medium'
                                    : 'text-primary-500 hover:text-primary-700 hover:underline focus:outline-none focus:ring-2 focus:ring-primary-400 rounded'
                                }`}
                            aria-current={index === items.length - 1 ? 'page' : undefined}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ol>
        </nav>
    );
} 