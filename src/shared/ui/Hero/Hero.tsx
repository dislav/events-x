import Image from 'next/image';
import { Button } from '@heroui/button';
import { Link } from '@heroui/link';
import { format, parseISO, isSameMonth } from 'date-fns';
import { ru } from 'date-fns/locale';

import type { Event } from 'content-collections';
import { ContactFormButton } from '@/features/contact';
import { Section, Icon } from '@/shared/ui';
import { heroStyles } from './Hero.styles';

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
    const styles = heroStyles();

    const sameMonth = days.every((d) =>
        isSameMonth(parseISO(days[0].date), parseISO(d.date))
    );

    const datesContent = (
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
    );

    const locationContent = (
        <div className="flex items-center gap-4">
            <div className="size-12 shrink-0 flex items-center justify-center border border-primary rounded-lg overflow-hidden">
                <Icon className="size-5" name="location-pin" />
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
        <Section
            id="hero"
            className={className}
            classNames={{
                base: styles.base(),
                wrapper: styles.wrapper(),
            }}
        >
            <div className={styles.body()}>
                <div className={styles.content()}>
                    <h1
                        className={styles.title()}
                        dangerouslySetInnerHTML={{ __html: title }}
                    />
                    {description && (
                        <p className={styles.description()}>{description}</p>
                    )}
                    <div className={styles.controls()}>
                        <ContactFormButton
                            buttonProps={{ className: styles.controlItem() }}
                        />
                        <Button
                            size="lg"
                            color="primary"
                            variant="bordered"
                            radius="full"
                            className={styles.controlItem()}
                        >
                            Программа
                        </Button>
                    </div>
                </div>
                <div className={styles.info()}>
                    {datesContent}
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
                    className={styles.image()}
                />
            )}
        </Section>
    );
}
