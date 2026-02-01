import { tv } from 'tailwind-variants';

const pricesSectionStyles = tv({
    slots: {
        base: [],
        wrapper: [],
        heading: [],
        content: ['flex gap-6', 'md:grid-cols-3 md:gap-8'],
        item: ['flex-1'],
    },
    variants: {
        variant: {
            default: {},
            onePrice: {
                wrapper: ['grid gap-6', 'md:grid-cols-3 md:gap-8'],
                content: ['md:col-span-2'],
            },
        },
    },
});

export { pricesSectionStyles };
