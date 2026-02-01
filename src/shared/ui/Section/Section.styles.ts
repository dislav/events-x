import { tv, VariantProps } from 'tailwind-variants';
import { SlotsToClasses } from '@heroui/react';

const sectionStyles = tv({
    slots: {
        base: ['flex justify-center py-12', 'md:py-24'],
        wrapper: ['container'],
    },
    variants: {
        direction: {
            col: {
                wrapper: ['flex-col gap-8', 'md:gap-16'],
            },
            row: {
                wrapper: ['flex-col items-start gap-8', 'md:flex-row'],
            },
        },
    },
    defaultVariants: {
        direction: 'col',
    },
});

export type SectionVariants = VariantProps<typeof sectionStyles>;

export type SectionSlots = keyof ReturnType<typeof sectionStyles>;

export { sectionStyles };
