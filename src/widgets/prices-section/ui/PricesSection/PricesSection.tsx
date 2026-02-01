import type { Price } from 'content-collections';

import { PriceCard, Section, SectionHeading } from '@/shared/ui';
import { pricesSectionStyles } from './PricesSection.styles';

interface PricesSectionProps {
    className?: string;
    prices: Price[];
}

export default function PricesSection({
    className,
    prices,
}: PricesSectionProps) {
    const isOnePrice = prices.length === 1;

    const styles = pricesSectionStyles({
        variant: isOnePrice ? 'onePrice' : 'default',
    });

    const sortedPrices = [...prices].sort((a, b) => a.order - b.order);

    return (
        <Section
            id="prices"
            className={styles.base({ className })}
            direction={isOnePrice ? 'row' : 'col'}
        >
            <div className={styles.wrapper()}>
                <SectionHeading
                    className={styles.heading()}
                    title="Стоимость"
                />

                <div className={styles.content()}>
                    {sortedPrices.map((item) => (
                        <PriceCard
                            key={item._meta.path}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            salePrice={item.salePrice}
                            content={item.html}
                            className={styles.item()}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
}
