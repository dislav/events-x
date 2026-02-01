import { agendaGroupStyles } from './AgendaGroup.styles';

interface AgendaGroupProps {
    className?: string;
    header?: React.ReactNode;
    children: React.ReactNode;
}

export default function AgendaGroup({
    className,
    header,
    children,
}: AgendaGroupProps) {
    const styles = agendaGroupStyles();

    return (
        <div className={styles.base({ className })}>
            <div className={styles.header()}>{header}</div>
            <div className={styles.content()}>{children}</div>
        </div>
    );
}
