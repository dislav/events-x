import { speakerPositionStyles } from './SpeakerPosition.styles';

interface SpeakerPositionProps {
    className?: string;
    icon?: string;
    title: string;
}

export default function SpeakerPosition({
    className,
    icon,
    title,
}: SpeakerPositionProps) {
    const styles = speakerPositionStyles();

    return (
        <div className={styles.base({ className })}>
            {icon && <div className={styles.icon()}>{icon}</div>}
            {title}
        </div>
    );
}
