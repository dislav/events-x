import { tv, VariantProps } from 'tailwind-variants';

const sectionHeadingStyles = tv({
    slots: {
        base: ['flex gap-6', 'md:gap-8'],
        heading: ['flex flex-col items-start'],
        subtitle: ['font-semibold rounded-full px-5 py-2.5'],
        content: ['flex flex-col gap-6'],
        title: ['text-gray-800 text-2xl font-semibold', 'md:text-5xl'],
        description: ['text-gray-600 text-xl'],
    },
    variants: {
        color: {
            default: {
                subtitle: ['text-gray-800 bg-white'],
            },
            primary: {
                subtitle: ['text-white bg-primary'],
            },
        },
        variant: {
            solid: {},
            flat: {},
        },
        direction: {
            row: {
                base: ['flex-col', 'md:flex-row'],
                heading: ['flex-1'],
                content: ['flex-1'],
            },
            col: {
                base: ['flex-col'],
            },
        },
    },
    compoundVariants: [
        {
            color: 'primary',
            variant: 'flat',
            class: {
                subtitle: ['text-gray-800 bg-primary-100'],
            },
        },
    ],
    defaultVariants: {
        color: 'default',
        variant: 'solid',
        direction: 'row',
    },
});

export type SectionHeadingVariants = VariantProps<typeof sectionHeadingStyles>;

export { sectionHeadingStyles };
