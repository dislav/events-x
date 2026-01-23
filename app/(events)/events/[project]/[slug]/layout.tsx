import { Manrope } from 'next/font/google';
import { notFound } from 'next/navigation';
import { cn } from '@heroui/react';
import { allEvents } from 'content-collections';

import '@/app/globals.css';
import Providers from '@/app/providers';

const manrope = Manrope({
    variable: '--font-manrope',
    subsets: ['latin', 'cyrillic'],
    weight: ['400', '500', '600', '700', '800'],
});

export function generateStaticParams() {
    return allEvents.map((event) => {
        const [project, slug] = event._meta.path.split('/');

        return { project, slug };
    });
}

export default async function EventsLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ project: string; slug: string }>;
}>) {
    const { project, slug } = await params;
    const eventPath = `${project}/${slug}`;

    const event = allEvents.find((e) => e._meta.path === eventPath);
    if (!event) return notFound();

    return (
        <html lang="ru" className={manrope.variable}>
            <body
                className={cn('antialiased', event.theme)}
                data-theme={event.theme}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
