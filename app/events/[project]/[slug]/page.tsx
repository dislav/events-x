import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
    allAgenda,
    allPrices,
    allEvents,
    allSpeakers,
} from 'content-collections';
import Script from 'next/script';

import {
    Contacts,
    Header,
    Hero,
    YandexMap,
    Section,
    SectionHeading,
    PriceCard,
} from '@/shared/ui';
import { AgendaSection } from '@/widgets/agenda-section';
import { SpeakersSection } from '@/widgets/speakers-section';
import { MDXContent } from '@/widgets/mdx-content';
import Social from '@/shared/ui/Social/Social';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ project: string; slug: string }>;
}): Promise<Metadata> {
    const { project, slug } = await params;
    const event = allEvents.find((e) => e._meta.path === `${project}/${slug}`);

    return {
        title: event?.title,
        description: event?.description,
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

    const eventPrices = allPrices.filter(
        (p) => p._meta.directory === eventPath
    );

    const projectSpeakers = allSpeakers.filter(
        (s) => s._meta.directory === project
    );

    console.log({ event, eventPrices });

    return (
        <>
            <Script
                id="yandex-maps"
                src="https://api-maps.yandex.ru/v3/?apikey=6f80d552-2d6f-49ae-9c5b-c535f525b719&lang=ru_RU"
                strategy="beforeInteractive"
            />

            <Header />

            <main>
                <Hero
                    title={event.hero.title}
                    description={event.hero.description}
                    image={event.hero.image}
                    days={event.days}
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

                {eventPrices.length > 0 && (
                    <Section id="prices">
                        <SectionHeading title="Стоимость участия" />

                        <div className="flex gap-8">
                            {eventPrices.map((item) => (
                                <PriceCard
                                    key={item._meta.path}
                                    title={item.title}
                                    description={item.description}
                                    price={item.price}
                                    salePrice={item.salePrice}
                                    content={item.html}
                                    className="flex-1"
                                />
                            ))}
                        </div>
                    </Section>
                )}

                {event.speakers && event.speakers.length > 0 && (
                    <SpeakersSection
                        speakers={projectSpeakers}
                        eventSpeakers={event.speakers}
                    />
                )}

                <Section id="contacts">
                    <div className="flex gap-8">
                        <div className="flex-1">
                            <Contacts
                                organizer={event.contacts.organizer}
                                address={event.contacts.address}
                                phones={event.contacts.phones}
                                emails={event.contacts.emails}
                                socials={
                                    event.socials && (
                                        <div className="flex items-center gap-2">
                                            {event.socials.map((social) => (
                                                <Social
                                                    key={social.url}
                                                    url={social.url}
                                                    type={social.type}
                                                />
                                            ))}
                                        </div>
                                    )
                                }
                            />
                        </div>

                        {event.map && (
                            <div className="flex-1">
                                <YandexMap
                                    className="rounded-3xl overflow-hidden"
                                    location={{
                                        center: [
                                            event.map.latitude,
                                            event.map.longitude,
                                        ],
                                        zoom: event.map.zoom,
                                    }}
                                />
                            </div>
                        )}
                    </div>
                </Section>
            </main>
        </>
    );
}
