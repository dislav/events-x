import Image from 'next/image';
import { Chip } from '@heroui/chip';
import type { Speaker } from 'content-collections';

import {
    speakerCardDetailedStyles,
    type SpeakerCardDetailedVariants,
} from './SpeakerCardDetailed.styles';
import { SpeakerPosition } from '../SpeakerPosition';

interface SpeakerCardDetailedProps extends SpeakerCardDetailedVariants {
    className?: string;
    name: string;
    image: string;
    mainPosition: string;
    additionalPosition?: Speaker['additionalPositions'];
}

export default function SpeakerCardDetailed({
    className,
    direction,
    name,
    image,
    mainPosition,
    additionalPosition,
}: SpeakerCardDetailedProps) {
    const styles = speakerCardDetailedStyles({ direction });

    return (
        <div className={styles.base({ className })}>
            <div className={styles.imageWrapper()}>
                <Image
                    src={image}
                    alt={name}
                    width={1000}
                    height={1000}
                    className={styles.image()}
                />
            </div>
            <div className={styles.content()}>
                <div className={styles.heading()}>
                    <Chip
                        size="lg"
                        color="primary"
                        variant="flat"
                        classNames={{ content: styles.mainPosition() }}
                    >
                        {mainPosition}
                    </Chip>
                    <h3 className={styles.name()}>{name}</h3>
                </div>
                {additionalPosition && additionalPosition.length > 0 && (
                    <div className={styles.additionalPositions()}>
                        {additionalPosition.map((position) => (
                            <SpeakerPosition
                                key={position.title}
                                icon={position.icon}
                                title={position.title}
                                className={styles.additionalPositionItem()}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
