import { tv, VariantProps } from 'tailwind-variants';

const speakerCardDetailedStyles = tv({
    slots: {
        base: ['flex flex-col gap-6', 'md:flex-row md:items-center md:gap-14'],
        imageWrapper: ['flex-1 flex justify-center aspect-square'],
        image: ['size-full rounded-full object-cover'],
        content: ['flex-1 flex flex-col gap-6', 'md:gap-10'],
        heading: ['flex flex-col gap-4'],
        mainPosition: ['font-semibold'],
        name: ['text-2xl font-semibold', 'md:text-4xl'],
        additionalPositions: ['flex flex-col gap-4'],
        additionalPositionItem: [],
    },
    variants: {
        direction: {
            default: [],
            reverse: {
                base: ['md:flex-row-reverse'],
            },
        },
    },
    defaultVariants: {
        direction: 'default',
    },
});

export type SpeakerCardDetailedVariants = VariantProps<
    typeof speakerCardDetailedStyles
>;

export { speakerCardDetailedStyles };
