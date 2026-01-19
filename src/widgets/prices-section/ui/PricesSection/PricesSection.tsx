import type { Price } from 'content-collections';
import { PriceCard, Section, SectionHeading } from '@/shared/ui';

interface PricesSectionProps {
    className?: string;
    prices: Price[];
}

export default function PricesSection({
    className,
    prices,
}: PricesSectionProps) {
    const sortedPrices = [...prices].sort((a, b) => a.order - b.order);

    return (
        <Section id="prices" className={className}>
            <SectionHeading title="Стоимость участия" />

            <div className="flex gap-8">
                {sortedPrices.map((item) => (
                    <PriceCard
                        key={item._meta.path}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        salePrice={item.salePrice}
                        content={item.html}
                        className="flex-1"
                    />
                ))}
            </div>
        </Section>
    );
}
