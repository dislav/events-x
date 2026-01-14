import Image from 'next/image';

import { speakerCardCompactStyles } from './SpeakerCardCompact.styles';

interface SpeakerProps {
    className?: string;
    image: string;
    name: string;
    position?: string;
}

export default function SpeakerCardCompact({
    className,
    image,
    name,
    position,
}: SpeakerProps) {
    const styles = speakerCardCompactStyles();

    return (
        <div className={styles.base({ className })}>
            <Image
                src={image}
                alt={name}
                width={200}
                height={200}
                className={styles.image()}
            />
            <div className={styles.content()}>
                <h4 className={styles.name()}>{name}</h4>
                {position && <p className={styles.position()}>{position}</p>}
            </div>
        </div>
    );
}
