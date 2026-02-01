import { tv } from 'tailwind-variants';

const speakerPositionStyles = tv({
    slots: {
        base: ['flex items-center gap-4 text-lg font-semibold'],
        icon: [
            'shrink-0 size-15 flex items-center justify-center',
            'text-primary bg-slate-100 rounded-xl',
        ],
    },
});

export { speakerPositionStyles };
