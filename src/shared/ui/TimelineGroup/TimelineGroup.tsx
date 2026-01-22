import { timelineGroupStyles } from './TimelineGroup.styles';

interface TimelineSectionProps {
    className?: string;
    date: React.ReactNode;
    children: React.ReactNode;
}

export default function TimelineGroup({
    className,
    date,
    children,
}: TimelineSectionProps) {
    const styles = timelineGroupStyles();

    return (
        <div className={styles.base({ className })}>
            <div className={styles.date()}>
                <div className={styles.dateInner()}>{date}</div>
            </div>
            <div className={styles.content()}>{children}</div>
        </div>
    );
}
