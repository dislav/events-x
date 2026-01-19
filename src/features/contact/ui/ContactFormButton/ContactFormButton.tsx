'use client';

import { Button, type ButtonProps } from '@heroui/button';
import { Modal, ModalContent, useDisclosure } from '@heroui/modal';

import { ContactForm } from '../ContactForm';
import { Section } from '@/shared/ui';

interface ContactFormButtonProps {
    buttonProps?: Omit<ButtonProps, 'onPress'>;
}

export default function ContactFormButton({
    buttonProps,
}: ContactFormButtonProps) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button
                size="lg"
                color="primary"
                radius="full"
                className="font-semibold"
                {...buttonProps}
                onPress={onOpen}
            >
                Регистрация
            </Button>

            <Modal size="full" isOpen={isOpen} onClose={onOpenChange}>
                <ModalContent>
                    <Section className="my-auto">
                        <div className="flex gap-8 bg-primary rounded-3xl p-8">
                            <div className="flex-1 flex flex-col gap-2">
                                <h2 className="text-white text-5xl font-semibold">
                                    Регистрация на событие
                                </h2>
                                <p className="text-lg text-white/85">
                                    Заполните форму обратной связи для
                                    регистрации в событии
                                </p>
                            </div>
                            <ContactForm className="flex-1" />
                        </div>
                    </Section>
                </ModalContent>
            </Modal>
        </>
    );
}
