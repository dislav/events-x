import Image from 'next/image';
import { Button } from '@heroui/button';
import { CalendarIcon, MapPinIcon } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';
import type { Event } from 'content-collections';

interface HeroProps {
    className?: string;
    title: string;
    description?: string;
    image?: string;
    days: Event['days'];
    city: string;
    address: string;
}

export default function Hero({
    className,
    title,
    description,
    image,
    days,
    city,
    address,
}: HeroProps) {
    return (
        <section className="relative h-dvh flex justify-center -mt-16">
            <div className="w-full max-w-360 flex gap-8 px-4">
                <div className="w-1/2 flex flex-col gap-8 pt-36 pr-8 pb-20">
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
                    <div className="flex flex-col gap-4 pr-20">
                        <div className="flex items-center gap-4">
                            <div className="shrink-0 size-10 flex items-center justify-center text-white bg-primary rounded-full">
                                <CalendarIcon className="size-5" />
                            </div>
                            <div className="font-semibold">
                                {days
                                    .map((d) => format(parseISO(d.date), 'd'))
                                    .join(' и ')}{' '}
                                {format(parseISO(days[0].date), 'MMMM yyyy', {
                                    locale: ru,
                                })}{' '}
                                года с {days[0].timeFrom} до {days[0].timeTo}
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="shrink-0 size-10 flex items-center justify-center text-white bg-primary rounded-full">
                                <MapPinIcon className="size-5" />
                            </div>
                            <div className="font-semibold">
                                г. {city}, {address}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {image && (
                <Image
                    src={image}
                    alt={title}
                    width={1200}
                    height={1200}
                    className="absolute left-1/2 w-1/2 h-full object-cover"
                />
            )}
        </section>
    );
}
