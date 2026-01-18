import { sectionStyles, type SectionVariants } from './Section.styles';

interface SectionProps extends SectionVariants {
    id?: string;
    className?: string;
    children: React.ReactNode;
}

export default function Section({
    id,
    className,
    direction,
    children,
}: SectionProps) {
    const styles = sectionStyles({ direction });

    return (
        <section id={id} className={styles.base({ className })}>
            <div className={styles.wrapper()}>{children}</div>
        </section>
    );
}
