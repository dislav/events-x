import { tv } from 'tailwind-variants';

const agendaTitleStyles = tv({
    slots: {
        base: [
            'grid bg-foreground-100/50 backdrop-blur-xl rounded-3xl overflow-hidden',
            'md:grid-cols-4 md:gap-14',
        ],
        subtitleWrapper: ['bg-primary p-6', 'md:col-span-1 md:p-8'],
        subtitle: ['text-white text-lg font-semibold', 'md:text-3xl'],
        titleWrapper: [
            'flex items-center p-6',
            'md:col-span-3 md:pl-0 md:pr-8 mr:py-8',
        ],
        title: ['text-lg font-semibold', 'md:text-3xl'],
    },
});

export { agendaTitleStyles };
