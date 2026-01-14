import { cn } from '@heroui/react';

interface AgendaTitleProps {
    className?: string;
    dayNumber: number;
    title?: string;
}

export default function AgendaTitle({
    className,
    dayNumber,
    title,
}: AgendaTitleProps) {
    return (
        <div
            className={cn(
                'sticky top-16 grid grid-cols-4 gap-14',
                'bg-foreground-100/50 backdrop-blur-xl rounded-3xl overflow-hidden',
                className
            )}
        >
            <div className="col-span-1 bg-primary p-8">
                <h3 className="text-white text-3xl font-semibold">
                    День {dayNumber}
                </h3>
            </div>
            <div className="col-span-3 flex items-center pr-8 py-8">
                <h3 className="text-3xl font-semibold">{title}</h3>
            </div>
        </div>
    );
}
