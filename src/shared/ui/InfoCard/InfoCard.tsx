import { infoCardStyles } from './InfoCard.styles';

interface IconTextCardProps {
    className?: string;
    subtitle: React.ReactNode;
    title: React.ReactNode;
    description?: React.ReactNode;
}

export default function InfoCard({
    className,
    subtitle,
    title,
    description,
}: IconTextCardProps) {
    const styles = infoCardStyles();

    return (
        <div className={styles.base({ className })}>
            <div className={styles.subtitle()}>{subtitle}</div>
            <div className={styles.content()}>
                <h2 className={styles.title()}>{title}</h2>
                {description && (
                    <div className={styles.description()}>{description}</div>
                )}
            </div>
        </div>
    );
}
