import { cn } from '@heroui/react';

interface SectionHeadingProps {
    className?: string;
    subtitle?: string;
    title: React.ReactNode;
    description?: React.ReactNode;
}

export default function SectionHeading({
    className,
    title,
    subtitle,
    description,
}: SectionHeadingProps) {
    return (
        <div className={cn('flex flex-col items-start gap-4', className)}>
            {subtitle && (
                <h4 className="font-semibold bg-primary-50 rounded-full px-5 py-2.5">
                    {subtitle}
                </h4>
            )}
            <h2 className="text-5xl font-semibold">{title}</h2>
            {description && (
                <p className="text-lg font-medium">{description}</p>
            )}
        </div>
    );
}
