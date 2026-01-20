import { tv } from 'tailwind-variants';

const agendaTitleStyles = tv({
    slots: {
        base: [
            'sticky top-16 grid',
            'bg-foreground-100/50 backdrop-blur-xl rounded-3xl overflow-hidden',
            'md:grid-cols-4 md:gap-14',
        ],
        dayNumberWrapper: ['bg-primary p-6', 'md:col-span-1 md:p-8'],
        dayNumber: ['text-white text-xl font-semibold', 'md:text-3xl'],
        titleWrapper: [
            'flex items-center p-6',
            'md:col-span-3 md:pr-8 mr:py-8',
        ],
        title: ['text-xl font-semibold', 'md:text-3xl'],
    },
});

export { agendaTitleStyles };
