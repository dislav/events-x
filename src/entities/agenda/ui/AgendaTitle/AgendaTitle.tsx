import { agendaTitleStyles } from './AgendaTitle.styles';

interface AgendaTitleProps {
    className?: string;
    subtitle: string;
    title: string;
}

export default function AgendaTitle({
    className,
    subtitle,
    title,
}: AgendaTitleProps) {
    const styles = agendaTitleStyles();

    return (
        <div className={styles.base({ className })}>
            <div className={styles.subtitleWrapper()}>
                <h3 className={styles.subtitle()}>{subtitle}</h3>
            </div>
            <div className={styles.titleWrapper()}>
                <h3 className={styles.title()}>{title}</h3>
            </div>
        </div>
    );
}
