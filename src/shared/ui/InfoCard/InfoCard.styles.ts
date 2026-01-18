import { tv } from 'tailwind-variants';

const infoCardStyles = tv({
    slots: {
        base: ['flex flex-col gap-8 bg-white rounded-3xl p-8'],
        subtitle: [],
        content: ['flex flex-col gap-4'],
        title: ['text-gray-800 text-3xl font-semibold'],
        description: ['text-gray-600 text-lg'],
    },
    variants: {},
});

export { infoCardStyles };
