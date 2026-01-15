import { tv } from 'tailwind-variants';

const priceCardStyles = tv({
    slots: {
        base: ['flex flex-col gap-8 bg-gray-100 rounded-3xl p-8'],
    },
    variants: {},
});

export { priceCardStyles };
