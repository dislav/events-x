import { tv } from 'tailwind-variants';

const contactFormStyles = tv({
    slots: {
        base: ['flex flex-col gap-6'],
        fields: ['flex flex-col gap-2'],
        footer: [],
    },
});

export { contactFormStyles };
