import { tv } from 'tailwind-variants';

const heroStyles = tv({
    slots: {
        base: ['relative pt-0', 'md:h-dvh md:py-0 md:-mt-16'],
        wrapper: ['flex-col-reverse', 'md:flex-col'],
        body: [
            'h-full flex flex-col gap-6',
            'md:w-1/2 md:gap-8 md:pt-36 md:pb-20 md:pr-8',
        ],
        content: [
            'flex-1 flex flex-col items-start justify-center gap-6',
            'md:gap-8',
        ],
        title: [
            'text-foreground-800 text-3xl font-bold [&_>_span]:text-primary',
            'md:text-[56px]/14',
        ],
        description: ['text-foreground-600 text-lg font-medium', 'md:text-2xl'],
        controls: ['w-full flex items-center gap-4', 'md:w-auto'],
        controlItem: ['flex-1 font-semibold', 'md:flex-auto'],
        info: ['flex flex-col gap-4'],
        image: [
            'aspect-square h-full object-cover rounded-3xl',
            'md:absolute md:left-1/2 md:w-1/2 md:rounded-none',
        ],
    },
});

export { heroStyles };
