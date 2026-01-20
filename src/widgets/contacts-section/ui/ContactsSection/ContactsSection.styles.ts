import { tv } from 'tailwind-variants';

const contactsSectionStyles = tv({
    slots: {
        base: [],
        wrapper: ['flex flex-col gap-6', 'md:flex-row md:gap-8'],
        column: ['flex-1'],
        contacts: [],
        map: ['rounded-3xl overflow-hidden'],
        socials: ['flex items-center gap-2'],
        socialItem: [],
    },
});

export { contactsSectionStyles };
