import { tv } from 'tailwind-variants';

const agendaSectionStyles = tv({
    slots: {
        base: [],
        content: ['flex flex-col gap-14'],
        speakers: ['grid gap-6 md:grid-cols-3 md:gap-8'],
    },
});

export { agendaSectionStyles };
