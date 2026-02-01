import {
    sectionHeadingStyles,
    type SectionHeadingVariants,
} from './SectionHeading.styles';

interface SectionHeadingProps extends SectionHeadingVariants {
    className?: string;
    subtitle?: string;
    title?: React.ReactNode;
    description?: React.ReactNode;
}

export default function SectionHeading({
    className,
    color,
    variant,
    direction,
    title,
    subtitle,
    description,
}: SectionHeadingProps) {
    const styles = sectionHeadingStyles({ color, variant, direction });

    return (
        <div className={styles.base({ className })}>
            {subtitle && (
                <div className={styles.heading()}>
                    <h4 className={styles.subtitle()}>{subtitle}</h4>
                </div>
            )}
            {(title || description) && (
                <div className={styles.content()}>
                    {title && <h2 className={styles.title()}>{title}</h2>}
                    {description && (
                        <p className={styles.description()}>{description}</p>
                    )}
                </div>
            )}
        </div>
    );
}
