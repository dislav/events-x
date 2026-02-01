import { agendaItemStyles } from './AgendaItem.styles';

interface AgendaItemProps {
    className?: string;
    time?: string;
    title?: string;
    content: React.ReactNode;
    speakers?: React.ReactNode;
}

export default function AgendaItem({
    className,
    time,
    title,
    content,
    speakers,
}: AgendaItemProps) {
    const styles = agendaItemStyles();

    return (
        <div className={styles.base({ className })}>
            <div className={styles.timeWrapper()}>
                {time && <span className={styles.time()}>{time}</span>}
            </div>
            <div className={styles.info()}>
                <div className={styles.content()}>
                    {title && <h3 className={styles.title()}>{title}</h3>}
                    {typeof content === 'string' ? (
                        <div
                            className={styles.text()}
                            dangerouslySetInnerHTML={{
                                __html: content,
                            }}
                        />
                    ) : (
                        content
                    )}
                </div>
                {speakers}
            </div>
        </div>
    );
}
