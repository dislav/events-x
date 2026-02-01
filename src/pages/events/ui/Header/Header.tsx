'use client';

import type { Event } from 'content-collections';

import { ContactFormButton } from '@/features/contact';
import { useScrollTo } from '@/shared/lib/useScrollTo';

interface HeaderProps {
    className?: string;
    logo?: React.ReactNode;
    menu?: Event['menu'];
}

export default function Header({ className, logo, menu }: HeaderProps) {
    const { registerAnchor } = useScrollTo({
        transition: { duration: 1.2, ease: [0.2, 0.85, 0.25, 1] },
    });

    return (
        <header className="sticky top-0 h-16 flex justify-center gap-4 py-4 z-100">
            <div className="container items-center justify-between">
                {logo && <div className="flex items-center">{logo}</div>}
                <div className="hidden items-center gap-4 md:flex">
                    {menu &&
                        menu.map((item) => (
                            <a
                                key={item.href}
                                className="inline-flex font-medium rounded-full bg-white px-3.5 py-2"
                                {...registerAnchor(item.href)}
                            >
                                {item.label}
                            </a>
                        ))}
                    <ContactFormButton
                        buttonProps={{ className: 'h-10 px-3.5' }}
                    />
                </div>
            </div>
        </header>
    );
}
