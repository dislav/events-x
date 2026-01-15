'use client';

import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import type { Reactify } from '@yandex/ymaps3-types/reactify';

export const useYMaps = () => {
    const [ymaps, setYmaps] = useState<typeof ymaps3 | null>(null);
    const [reactify, setReactify] = useState<Reactify | null>(null);

    useEffect(() => {
        const loadYMaps = async () => {
            if (typeof window === 'undefined') return;

            const [ymaps3React] = await Promise.all([
                ymaps3.import('@yandex/ymaps3-reactify'),
                ymaps3.ready,
            ]);

            const reactifyInstance = ymaps3React.reactify.bindTo(
                React,
                ReactDOM
            );

            setYmaps(ymaps3);
            setReactify(reactifyInstance);
        };

        loadYMaps();
    }, []);

    return { ymaps, reactify };
};
