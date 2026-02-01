import type { Metadata } from 'next';
import Script from 'next/script';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Link } from '@heroui/link';
import {
    allAgenda,
    allPrices,
    allEvents,
    allSpeakers,
} from 'content-collections';

import { GradualBlur, Hero } from '@/shared/ui';
import { MDXContent } from '@/widgets/mdx-content';
import { AgendaSection } from '@/widgets/agenda-section';
import { PricesSection } from '@/widgets/prices-section';
import { SpeakersSection } from '@/widgets/speakers-section';
import { ContactsSection } from '@/widgets/contacts-section';

import { Header } from '../Header';
import { Footer } from '../Footer';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ project: string; slug: string }>;
}): Promise<Metadata> {
    const { project, slug } = await params;
    const eventPath = `${project}/${slug}`;

    const event = allEvents.find((e) => e._meta.path === eventPath);
    if (!event) return notFound();

    return { title: `${event.title} · Диалог`, description: event.description };
}

export async function generateStaticParams() {
    return allEvents.map((e) => {
        const [project, slug] = e._meta.path.split('/');

        return { project, slug };
    });
}

export default async function EventPage({
    params,
}: {
    params: Promise<{ project: string; slug: string }>;
}) {
    const { project, slug } = await params;
    const eventPath = `${project}/${slug}`;

    const event = allEvents.find((e) => e._meta.path === eventPath);

    if (!event) return notFound();

    const eventAgenda = allAgenda.filter(
        (a) => a._meta.directory === eventPath
    );

    const eventPrices = allPrices.filter(
        (p) => p._meta.directory === eventPath
    );

    const projectSpeakers = allSpeakers.filter(
        (s) => s._meta.directory === project
    );

    const logo = event.logo && (
        <Link href={slug}>
            <Image
                src={event.logo}
                alt={event.title}
                width={400}
                height={100}
                className="w-auto h-12"
            />
        </Link>
    );

    return (
        <>
            <Script
                id="yandex-maps"
                src="https://api-maps.yandex.ru/v3/?apikey=6f80d552-2d6f-49ae-9c5b-c535f525b719&lang=ru_RU"
                strategy="beforeInteractive"
            />

            <GradualBlur />

            <Header logo={logo} menu={event.menu} />

            <main className="flex flex-col">
                <Hero
                    title={event.hero.title}
                    description={event.hero.description}
                    image={event.hero.image}
                    days={event.days}
                    location={event.location}
                />

                <MDXContent code={event.mdx} />

                {eventAgenda.length > 0 && (
                    <AgendaSection
                        agenda={eventAgenda}
                        speakers={projectSpeakers}
                        agendaInfo={event.agenda}
                    />
                )}

                {eventPrices.length > 0 && (
                    <PricesSection
                        className="bg-slate-100"
                        prices={eventPrices}
                    />
                )}

                {event.speakers && event.speakers.length > 0 && (
                    <SpeakersSection
                        speakers={projectSpeakers}
                        eventSpeakers={event.speakers}
                    />
                )}

                <ContactsSection
                    contacts={event.contacts}
                    socials={event.socials}
                    location={event.location}
                />
            </main>

            <Footer
                logo={logo}
                copyright={event.footer.copyright}
                fromYear={event.footer.fromYear}
            />
        </>
    );
}
