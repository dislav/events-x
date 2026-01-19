'use client';

import { type SubmitHandler, useForm } from 'react-hook-form';
import { valibotResolver } from '@hookform/resolvers/valibot';
import { Input, Textarea } from '@heroui/input';
import { Button } from '@heroui/button';

import {
    ContactFormSchema,
    type ContactFormType,
} from '../../model/contactFormSchema';
import { createSheetData } from '../../api/createSheetData';
import { contactFormStyles } from './ContactForm.styles';

interface ContactFormProps {
    className?: string;
}

export default function ContactForm({ className }: ContactFormProps) {
    const styles = contactFormStyles();

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<ContactFormType>({
        resolver: valibotResolver(ContactFormSchema),
        defaultValues: { name: '', phone: '', email: '' },
    });

    const onSubmit: SubmitHandler<ContactFormType> = async (data) => {
        const { success } = await createSheetData(data);
        console.log(success);
    };

    return (
        <form
            className={styles.base({ className })}
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className={styles.fields()}>
                <Input
                    label="ФИО"
                    {...register('name')}
                    errorMessage={errors.name?.message}
                    isInvalid={!!errors.name}
                />
                <Input
                    label="Телефон"
                    {...register('phone')}
                    errorMessage={errors.phone?.message}
                    isInvalid={!!errors.phone}
                />
                <Input
                    label="Почта"
                    {...register('email')}
                    errorMessage={errors.email?.message}
                    isInvalid={!!errors.email}
                />
                <Textarea label="Сообщение" {...register('message')} />
            </div>
            <div className={styles.footer()}>
                <Button type="submit">Подать заявку</Button>
            </div>
        </form>
    );
}
