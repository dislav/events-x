import { cn } from '@heroui/react';

interface AgendaItemProps {
    className?: string;
    time: string;
    title: string;
    content?: string;
    speakers?: React.ReactNode;
}

export default function AgendaItem({
    className,
    time,
    title,
    content,
    speakers,
}: AgendaItemProps) {
    return (
        <div className={cn('grid grid-cols-4 gap-14', className)}>
            <div className="col-span-1 pl-8">
                <span className="text-2xl font-semibold">{time}</span>
            </div>
            <div className="col-span-3 flex flex-col gap-8 bg-foreground-50 border border-foreground-100 p-8 rounded-3xl">
                <div className="flex flex-col gap-4">
                    <h3 className="text-3xl font-semibold">{title}</h3>
                    {content && (
                        <div
                            className="prose max-w-none"
                            dangerouslySetInnerHTML={{ __html: content }}
                        />
                    )}
                </div>
                {speakers}
            </div>
        </div>
    );
}
