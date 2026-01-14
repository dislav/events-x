import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allAgenda, allEvents, allSpeakers } from 'content-collections';

import { Header, Hero } from '@/shared/ui';
import { AgendaSection } from '@/widgets/agenda-section';
import { SpeakersSection } from '@/widgets/speakers-section';
import { MDXContent } from '@/widgets/mdx-content';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ project: string; slug: string }>;
}): Promise<Metadata> {
    const { project, slug } = await params;
    const event = allEvents.find((e) => e._meta.path === `${project}/${slug}`);

    return {
        title: event?.meta.title,
        description: event?.meta.description,
    };
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

    const projectSpeakers = allSpeakers.filter(
        (s) => s._meta.directory === project
    );

    console.log({ event });

    return (
        <>
            <Header />

            <main>
                <Hero
                    title={event.title}
                    description={event.description}
                    image={event.image}
                    dates={event.dates}
                    city={event.city}
                    address={event.address}
                />

                <MDXContent code={event.mdx} />

                {eventAgenda.length > 0 && (
                    <AgendaSection
                        agenda={eventAgenda}
                        eventDays={event.days}
                        speakers={projectSpeakers}
                    />
                )}

                {event.speakers && event.speakers.length > 0 && (
                    <SpeakersSection
                        speakers={projectSpeakers}
                        eventSpeakers={event.speakers}
                    />
                )}
            </main>
        </>
    );
}
