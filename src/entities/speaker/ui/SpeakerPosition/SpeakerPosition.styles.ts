import { tv } from 'tailwind-variants';

const speakerPositionStyles = tv({
    slots: {
        base: ['flex items-center gap-4 text-lg font-semibold'],
        icon: [
            'size-15 flex items-center justify-center',
            'text-primary bg-gray-50 rounded-xl',
        ],
    },
});

export { speakerPositionStyles };
