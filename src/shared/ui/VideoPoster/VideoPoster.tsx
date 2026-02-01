import Image from 'next/image';
import { cn } from '@heroui/react';

import { Icon } from '@/shared/ui';

interface VideoProps {
    className?: string;
    poster: string;
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export default function VideoPoster({
    className,
    poster,
    onClick,
}: VideoProps) {
    return (
        <div
            className={cn(
                'relative flex items-center justify-center rounded-3xl pt-[56.25%] cursor-pointer overflow-hidden',
                className
            )}
            onClick={onClick}
        >
            <div className="absolute inset-0">
                <Image
                    src={poster}
                    alt="Video Poster"
                    width={1920}
                    height={1080}
                    className="size-full object-cover"
                />

                <div className="absolute top-1/2 left-1/2 size-16 text-white bg-primary flex items-center justify-center rounded-2xl -translate-1/2">
                    <Icon className="size-5" name="play" />
                </div>
            </div>
        </div>
    );
}
