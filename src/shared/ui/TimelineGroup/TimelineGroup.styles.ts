import { tv } from 'tailwind-variants';

const timelineGroupStyles = tv({
    slots: {
        base: [
            'relative flex flex-col items-start gap-4 pl-8 pb-8',
            'before:absolute before:left-[7px] before:top-4 before:h-full before:border-l before:border-dashed before:border-l-2 before:border-gray-300',
            'last:pb-0 last:before:mask-b-from-50% last:before:mask-b-to-100%',
        ],
        date: [
            'relative sticky top-16 -ml-8 pl-8 z-10',
            'before:absolute before:left-2 before:top-4 before:size-2.5 before:bg-primary before:outline before:outline-2 before:outline-white before:rounded-full before:-translate-x-1/2',
        ],
        dateInner: [
            'border border-gray-200 bg-white/80 backdrop-blur-md rounded-full px-3 py-2',
        ],
        content: ['flex flex-col gap-4'],
    },
});

export { timelineGroupStyles };
