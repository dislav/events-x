import type { SvgIconName } from './types';
import { iconStyles } from './Icon.styles';

interface IconProps {
    className?: string;
    name: SvgIconName;
}

export default function Icon({ className, name }: IconProps) {
    const styles = iconStyles();

    return (
        <svg className={styles.base({ className })}>
            <use href={`/sprite.svg#${name}`} />
        </svg>
    );
}
