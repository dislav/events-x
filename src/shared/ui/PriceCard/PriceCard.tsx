import { Divider } from '@heroui/divider';

import { ContactFormButton } from '@/features/contact';
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
            <div className={styles.header()}>
                {title && <h4 className={styles.title()}>{title}</h4>}
                <div className={styles.priceWrapper()}>
                    <h2 className={styles.price()}>
                        {(salePrice ?? price).toLocaleString('ru')} ₽
                    </h2>
                    {salePrice && (
                        <span className={styles.salePrice()}>
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
                <ContactFormButton />
            </div>
        </div>
    );
}
