'use client';

import { Section, VideoPoster } from '@/shared/ui';
import { Modal, ModalBody, ModalContent, useDisclosure } from '@heroui/modal';
import { Skeleton } from '@heroui/skeleton';
import { useState } from 'react';
import { cn } from '@heroui/react';

interface VideoPreviewProps {
    className?: string;
    poster: string;
    video: string;
}

export default function VideoPreview({
    className,
    poster,
    video,
}: VideoPreviewProps) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isLoaded, setIsLoaded] = useState(false);

    const onLoaded = () => {
        setIsLoaded(true);
    };

    return (
        <>
            <VideoPoster poster={poster} onClick={onOpen} />
            <Modal size="full" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    <ModalBody>
                        <Section className="my-auto py-0">
                            <div className="relative w-full max-w-360 pt-[56.25%]">
                                <div className="absolute inset-0">
                                    <Skeleton
                                        className="absolute inset-0 rounded-3xl data-[loaded=true]:pointer-events-none"
                                        isLoaded={isLoaded}
                                    />
                                    <iframe
                                        src="https://vkvideo.ru/video_ext.php?oid=-1415705&id=456252157&hash=5dc9ec5239c2a5c2&hd=4"
                                        allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
                                        frameBorder="0"
                                        allowFullScreen
                                        className={cn(
                                            'size-full rounded-3xl opacity-0',
                                            { ['opacity-100']: isLoaded }
                                        )}
                                        onLoadCapture={onLoaded}
                                    />
                                </div>
                            </div>
                        </Section>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}
