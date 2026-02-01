import { tv } from 'tailwind-variants';

const agendaGroupStyles = tv({
    slots: {
        base: ['flex flex-col gap-6', 'md:gap-14'],
        header: ['sticky top-16'],
        content: ['flex flex-col gap-14'],
    },
});

export { agendaGroupStyles };
