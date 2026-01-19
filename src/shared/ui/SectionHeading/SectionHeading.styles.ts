import { tv, VariantProps } from 'tailwind-variants';

const sectionHeadingStyles = tv({
    slots: {
        base: ['flex gap-8'],
        heading: ['flex flex-col items-start'],
        subtitle: ['font-semibold rounded-full px-5 py-2.5'],
        content: ['flex flex-col'],
        title: ['text-5xl font-semibold'],
        description: ['text-lg font-medium'],
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
                base: [],
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
