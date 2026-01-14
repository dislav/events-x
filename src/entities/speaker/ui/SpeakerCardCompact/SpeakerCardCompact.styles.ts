import { tv } from 'tailwind-variants';

const speakerCardCompactStyles = tv({
    slots: {
        base: ['flex items-center gap-4'],
        image: ['size-28 rounded-full object-cover'],
        content: ['flex flex-col justify-center gap-1'],
        name: ['text-lg/6 font-semibold'],
        position: ['text-sm'],
    },
});

export { speakerCardCompactStyles };
