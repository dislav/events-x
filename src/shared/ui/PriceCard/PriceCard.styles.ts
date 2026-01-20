import { tv } from 'tailwind-variants';

const priceCardStyles = tv({
    slots: {
        base: ['flex flex-col bg-white rounded-3xl'],
        header: ['flex flex-col items-start gap-4 p-6', 'md:gap-6 md:p-8'],
        title: [
            'inline-flex border border-gray-200 rounded-lg px-2 py-1',
            'md:text-lg',
        ],
        priceWrapper: ['flex flex-col items-start gap-0.5', 'md:gap-1'],
        price: ['text-primary text-3xl font-bold', 'md:text-5xl'],
        salePrice: [
            'relative text-gray-500 text-xl',
            'after:absolute after:top-1/2 after:left-0 after:w-full after:border-b-2 after:border-gray-500',
            'md:text-3xl',
        ],
        body: [
            'flex-1 flex flex-col gap-4 pb-6 px-6',
            'md:gap-6 md:pb-8 md:px-8',
        ],
        content: ['flex-1 prose max-w-none'],
    },
    variants: {},
});

export { priceCardStyles };
