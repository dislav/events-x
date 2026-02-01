import { tv } from 'tailwind-variants';

const pricesSectionStyles = tv({
    slots: {
        base: [],
        content: ['grid gap-6', 'md:grid-cols-3 md:gap-8'],
        item: ['flex-1'],
    },
});

export { pricesSectionStyles };
