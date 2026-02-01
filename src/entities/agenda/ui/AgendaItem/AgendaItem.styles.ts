import { tv } from 'tailwind-variants';

const agendaItemStyles = tv({
    slots: {
        base: ['grid gap-4', 'md:grid-cols-4 md:gap-14'],
        timeWrapper: ['md:col-span-1 md:pl-8'],
        time: ['text-lg font-semibold', 'md:text-2xl'],
        info: [
            'flex flex-col gap-8 bg-foreground-50 border border-foreground-100 p-6 rounded-3xl',
            'md:col-span-3 md:p-8',
        ],
        content: ['flex flex-col gap-4'],
        title: ['text-xl font-semibold', 'md:text-3xl'],
        text: ['prose-sm', 'md:prose md:max-w-none'],
    },
});

export { agendaItemStyles };
