import { tv } from 'tailwind-variants';

const pricesSectionStyles = tv({
    slots: {
        base: [],
        content: ['flex flex-col gap-6', 'md:flex-row md:gap-8'],
        item: ['flex-1'],
    },
});

export { pricesSectionStyles };
