import * as v from 'valibot';

export const ContactFormSchema = v.object({
    name: v.string(),
    phone: v.pipe(v.string(), v.regex(/^[0-9]*$/)),
    email: v.pipe(v.string(), v.email('Неверный формат почты')),
    message: v.nullish(v.string()),
});

export type ContactFormType = v.InferOutput<typeof ContactFormSchema>;
