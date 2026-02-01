import Image from 'next/image';

import { Icon } from '@/shared/ui';
import { eventCardStyles } from './EventCard.styles';

interface EventCardProps {
    className?: string;
    time: string;
    title: string;
    description?: string;
    speakers?: string;
    location?: string;
    image: string;
}

export default function EventCard({
    className,
    time,
    title,
    description,
    speakers,
    location,
    image,
}: EventCardProps) {
    const styles = eventCardStyles();

    return (
        <div className={styles.base({ className })}>
            <div className={styles.content()}>
                <div className={styles.info()}>
                    <div className={styles.time()}>{time}</div>
                    <h2 className={styles.title()}>{title}</h2>
                    {description && (
                        <p className={styles.description()}>{description}</p>
                    )}
                </div>
                <div className={styles.info()}>
                    <div className={styles.infoItem()}>
                        <Icon name="user" />
                        {speakers}
                    </div>
                    <div className={styles.infoItem()}>
                        <Icon name="map-pin" />
                        {location}
                    </div>
                </div>
            </div>
            <div className={styles.imageWrapper()}>
                <div className="relative pt-[100%]">
                    <div className="absolute inset-0">
                        <Image
                            src={image}
                            alt={title}
                            width={240}
                            height={240}
                            className={styles.image()}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
