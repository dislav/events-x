'use client';

import { cn } from '@heroui/react';
import { Skeleton } from '@heroui/skeleton';
import type { YMapLocationRequest } from 'ymaps3';

import { useYMaps } from '@/shared/lib/ymaps';

interface MapProps {
    className?: string;
    location: YMapLocationRequest;
}

export default function YandexMap({ className, location }: MapProps) {
    const { ymaps, reactify } = useYMaps();

    if (!ymaps || !reactify) {
        return <Skeleton className={cn('size-full', className)} />;
    }

    const {
        YMap,
        YMapDefaultSchemeLayer,
        YMapDefaultFeaturesLayer,
        // YMapMarker,
    } = reactify.module(ymaps);

    return (
        <YMap className={className} location={reactify.useDefault(location)}>
            <YMapDefaultSchemeLayer />
            <YMapDefaultFeaturesLayer />

            {/*<YMapMarker coordinates={reactify.useDefault([location])}>*/}
            {/*    <section>MARKER</section>*/}
            {/*</YMapMarker>*/}
        </YMap>
    );
}
