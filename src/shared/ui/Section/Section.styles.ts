import { tv, VariantProps } from 'tailwind-variants';

const sectionStyles = tv({
    slots: {
        base: ['flex justify-center py-20'],
        wrapper: ['container'],
    },
    variants: {
        direction: {
            col: {
                wrapper: ['flex-col gap-16'],
            },
            row: {
                wrapper: ['flex-row items-start gap-8'],
            },
        },
    },
    defaultVariants: {
        direction: 'col',
    },
});

export type SectionVariants = VariantProps<typeof sectionStyles>;

export { sectionStyles };
