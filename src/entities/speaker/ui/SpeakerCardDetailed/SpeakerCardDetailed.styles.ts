import { tv, VariantProps } from 'tailwind-variants';

const speakerCardDetailedStyles = tv({
    slots: {
        base: ['flex items-center gap-14'],
        imageWrapper: ['flex-1 flex justify-center aspect-square'],
        image: ['size-full rounded-full object-cover'],
        content: ['flex-1 flex flex-col gap-10 pr-6'],
        heading: ['flex flex-col gap-4'],
        mainPosition: ['font-semibold'],
        name: ['text-4xl font-semibold'],
        additionalPositions: ['flex flex-col gap-4'],
        additionalPositionItem: [],
    },
    variants: {
        direction: {
            default: [],
            reverse: {
                base: ['flex-row-reverse'],
                content: ['pl-6 pr-0'],
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
