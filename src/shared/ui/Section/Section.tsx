import {
    sectionStyles,
    type SectionVariants,
    type SectionSlots,
} from './Section.styles';
import { SlotsToClasses } from '@heroui/react';

interface SectionProps extends SectionVariants {
    id?: string;
    className?: string;
    classNames?: SlotsToClasses<SectionSlots>;
    children: React.ReactNode;
}

export default function Section({
    id,
    className,
    classNames,
    direction,
    children,
}: SectionProps) {
    const styles = sectionStyles({ direction });

    return (
        <section
            id={id}
            className={styles.base({
                className: [className, classNames?.base],
            })}
        >
            <div className={styles.wrapper({ className: classNames?.wrapper })}>
                {children}
            </div>
        </section>
    );
}
