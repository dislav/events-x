import { Button } from '@heroui/button';

import { priceCardStyles } from './PriceCard.styles';

interface PriceCardProps {
    className?: string;
    title?: string;
    description?: string;
    price: number;
    salePrice?: number;
    content?: string;
    isRecommended?: boolean;
}

export default function PriceCard({
    className,
    title,
    description,
    price,
    salePrice,
    content,
    isRecommended,
}: PriceCardProps) {
    const styles = priceCardStyles();

    return (
        <div className={styles.base({ className })}>
            {(title || description) && (
                <div>
                    {title && (
                        <h2 className="text-4xl font-semibold">{title}</h2>
                    )}
                    {description && <p>{description}</p>}
                </div>
            )}
            {content && (
                <div
                    className="flex-1 prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            )}
            <div>
                <Button size="lg" color="primary" radius="full" fullWidth>
                    Регистрация
                </Button>
            </div>
        </div>
    );
}
