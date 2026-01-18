import { tv } from 'tailwind-variants';

const priceCardStyles = tv({
    slots: {
        base: ['flex flex-col bg-white rounded-3xl'],
        header: ['flex flex-col items-start gap-6 p-8'],
        body: ['flex-1 flex flex-col gap-6 pb-8 px-8'],
        content: ['flex-1 prose max-w-none'],
    },
    variants: {},
});

export { priceCardStyles };
