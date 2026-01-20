import { agendaItemStyles } from './AgendaItem.styles';

interface AgendaItemProps {
    className?: string;
    time: string;
    title: string;
    content?: string;
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
                <span className={styles.time()}>{time}</span>
            </div>
            <div className={styles.info()}>
                <div className={styles.content()}>
                    <h3 className={styles.title()}>{title}</h3>
                    {content && (
                        <div
                            className={styles.text()}
                            dangerouslySetInnerHTML={{ __html: content }}
                        />
                    )}
                </div>
                {speakers}
            </div>
        </div>
    );
}
