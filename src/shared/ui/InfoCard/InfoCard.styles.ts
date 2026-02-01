import { tv } from 'tailwind-variants';

const infoCardStyles = tv({
    slots: {
        base: [
            'flex flex-col items-start gap-6 bg-white rounded-3xl p-6',
            'md:gap-8 md:p-8',
        ],
        subtitle: [],
        content: ['flex flex-col gap-4'],
        title: ['text-gray-800 text-xl font-semibold', 'md:text-3xl'],
        description: ['text-gray-600', 'md:text-lg'],
    },
    variants: {},
});

export { infoCardStyles };
