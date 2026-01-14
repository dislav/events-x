import { cn } from '@heroui/react';

interface SectionProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
}

export default function Section({ id, className, children }: SectionProps) {
    return (
        <section id={id} className={cn('flex justify-center py-20', className)}>
            <div className="w-full max-w-360 flex flex-col gap-16 px-4">
                {children}
            </div>
        </section>
    );
}
