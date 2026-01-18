import Image from 'next/image';
import { cn } from '@heroui/react';
import { Button } from '@heroui/button';
import { Link } from '@heroui/link';
import { MapPinIcon } from 'lucide-react';
import { format, parseISO, isSameMonth } from 'date-fns';
import { ru } from 'date-fns/locale';

import type { Event } from 'content-collections';
import { Section } from '@/shared/ui';

interface HeroProps {
    className?: string;
    title: string;
    description?: string;
    image?: string;
    days: Event['days'];
    location: Event['location'];
}

export default function Hero({
    className,
    title,
    description,
    image,
    days,
    location,
}: HeroProps) {
    const sameMonth = days.every((d) =>
        isSameMonth(parseISO(days[0].date), parseISO(d.date))
    );

    const locationContent = (
        <div className="flex items-center gap-4">
            <div className="size-12 shrink-0 flex items-center justify-center border border-primary rounded-lg overflow-hidden">
                <MapPinIcon className="size-5" />
            </div>
            <div className="flex flex-col gap-0.5">
                <div className="text-gray-800 font-semibold">
                    {location.title}
                </div>
                {location.address && (
                    <div className="text-gray-500 text-sm font-semibold">
                        {location.address}
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <Section className={cn('relative h-dvh py-0 -mt-16', className)}>
            <div className="w-1/2 h-full flex flex-col gap-8 pt-36 pr-8 pb-20">
                <div className="flex-1 flex flex-col items-start justify-center gap-8">
                    <h1
                        className="text-foreground-800 text-[56px]/14 font-bold [&_>_span]:text-primary"
                        dangerouslySetInnerHTML={{ __html: title }}
                    />
                    {description && (
                        <p className="text-foreground-600 text-2xl font-medium">
                            {description}
                        </p>
                    )}
                    <div className="flex items-center gap-4">
                        <Button
                            size="lg"
                            color="primary"
                            radius="full"
                            className="font-semibold"
                        >
                            Регистрация
                        </Button>
                        <Button
                            size="lg"
                            color="primary"
                            variant="bordered"
                            radius="full"
                            className="font-semibold"
                        >
                            Программа
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            {days.map((d) => {
                                const date = parseISO(d.date);

                                return (
                                    <div
                                        key={d.date}
                                        className="size-12 shrink-0 flex flex-col text-center border border-primary rounded-lg overflow-hidden"
                                    >
                                        <div className="text-white text-xs font-semibold bg-primary p-0.5">
                                            {format(date, 'MMM', {
                                                locale: ru,
                                            })}
                                        </div>
                                        <div className="flex-1 flex items-center justify-center text-base/5 font-semibold">
                                            {format(date, 'd')}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <div className="text-gray-800 font-semibold">
                                {days
                                    .map((d, index) => {
                                        const date = parseISO(d.date);

                                        return `${format(date, `d${!sameMonth || (sameMonth && index === days.length - 1) ? ' MMMM' : ''}`, { locale: ru })}`;
                                    })
                                    .join(' и ')}
                                {', '}
                                {parseISO(days[0].date).getFullYear()}
                            </div>
                            <div className="text-gray-500 text-sm font-semibold">
                                {days[0].timeFrom} – {days[0].timeTo} GMT+3
                            </div>
                        </div>
                    </div>
                    {location.url ? (
                        <Link href={location.url} target="_blank">
                            {locationContent}
                        </Link>
                    ) : (
                        locationContent
                    )}
                </div>
            </div>
            {image && (
                <Image
                    src={image}
                    alt="Hero image"
                    width={1200}
                    height={1200}
                    className="absolute left-1/2 w-1/2 h-full object-cover"
                />
            )}
        </Section>
    );
}
