import { tv } from 'tailwind-variants';

const eventCardStyles = tv({
    slots: {
        base: [
            'flex flex-col-reverse gap-6 bg-slate-50 border border-slate-200 rounded-3xl p-6',
            'md:flex-row md:gap-8 md:p-8',
        ],
        content: ['flex flex-col gap-4'],
        time: ['text-gray-600 font-semibold'],
        title: ['text-gray-800 text-lg font-semibold', 'md:text-2xl'],
        description: ['text-sm text-gray-600', 'md:text-base'],
        info: ['flex flex-col gap-2'],
        infoItem: [
            'flex items-center gap-2 text-gray-600',
            '[&_>_svg]:shrink-0 [&_>_svg]:size-4',
        ],
        imageWrapper: ['shrink-0 md:w-1/4'],
        image: ['size-full object-cover rounded-xl'],
    },
});

export { eventCardStyles };
