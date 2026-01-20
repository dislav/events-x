import { agendaTitleStyles } from './AgendaTitle.styles';

interface AgendaTitleProps {
    className?: string;
    dayNumber: number;
    title?: string;
}

export default function AgendaTitle({
    className,
    dayNumber,
    title,
}: AgendaTitleProps) {
    const styles = agendaTitleStyles();

    return (
        <div className={styles.base({ className })}>
            <div className={styles.dayNumberWrapper()}>
                <h3 className={styles.dayNumber()}>День {dayNumber}</h3>
            </div>
            <div className={styles.titleWrapper()}>
                <h3 className={styles.title()}>{title}</h3>
            </div>
        </div>
    );
}
