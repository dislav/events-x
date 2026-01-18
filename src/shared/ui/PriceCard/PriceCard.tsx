import { Button } from '@heroui/button';
import { Divider } from '@heroui/divider';

import { priceCardStyles } from './PriceCard.styles';
import { cn } from '@heroui/react';

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
            <div className={styles.header()}>
                {title && (
                    <h4 className="inline-flex text-lg border border-gray-200 rounded-lg px-2 py-1">
                        {title}
                    </h4>
                )}
                <div className="flex flex-col items-start gap-1">
                    <h2 className="text-primary text-5xl font-bold">
                        {(salePrice ?? price).toLocaleString('ru')} ₽
                    </h2>
                    {salePrice && (
                        <span
                            className={cn(
                                'relative text-gray-500 text-3xl',
                                'after:absolute after:top-1/2 after:left-0 after:w-full after:border-b-2 after:border-gray-500'
                            )}
                        >
                            {price.toLocaleString('ru')} ₽
                        </span>
                    )}
                </div>
                {description && <p>{description}</p>}
            </div>
            <div className={styles.body()}>
                <Divider className="bg-gray-200" />
                {content && (
                    <div
                        className={styles.content()}
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                )}
                <div>
                    <Button
                        size="lg"
                        color="primary"
                        radius="full"
                        className="font-semibold"
                        fullWidth
                    >
                        Регистрация
                    </Button>
                </div>
            </div>
        </div>
    );
}
