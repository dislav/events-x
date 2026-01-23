import { Link } from '@heroui/link';
import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';
import type { Event, Speaker } from 'content-collections';

import { EventCard } from '@/entities/event';
import { Section, SectionHeading, TimelineGroup } from '@/shared/ui';

interface TimelineSectionProps {
    className?: string;
    events: Event[];
    speakers?: Speaker[];
}

export default function TimelineSection({
    className,
    events,
    speakers,
}: TimelineSectionProps) {
    const eventsByDate = events.reduce(
        (acc, e) => {
            e.days.forEach((day) => {
                if (!acc[day.date]) acc[day.date] = [];
                acc[day.date].push(e);
            });

            return acc;
        },
        {} as Record<string, Event[]>
    );

    const speakersByName = speakers
        ? speakers.reduce(
              (acc, s) => {
                  acc[s._meta.fileName.split('.')[0]] = s;
                  return acc;
              },
              {} as Record<string, Speaker>
          )
        : {};

    return (
        <Section id="timeline" className={className}>
            <SectionHeading title="Ближайшие события" />

            <div className="flex flex-col">
                {Object.entries(eventsByDate).map(([date, events]) => {
                    const parsedDate = parseISO(date);

                    return (
                        <TimelineGroup
                            key={date}
                            date={
                                <span className="text-gray-500 font-semibold">
                                    <span className="text-gray-800">
                                        {format(parsedDate, 'dd MMM', {
                                            locale: ru,
                                        })}
                                    </span>{' '}
                                    {format(parsedDate, 'EEEE', {
                                        locale: ru,
                                    })}
                                </span>
                            }
                        >
                            {events.map((event) => (
                                <Link
                                    key={event._meta.path}
                                    href={`/events/${event._meta.path}`}
                                >
                                    <EventCard
                                        className="w-full"
                                        time={`${event.days[0].timeFrom} – ${event.days[0].timeTo}`}
                                        title={event.title}
                                        description={event.description}
                                        speakers={event.speakers
                                            ?.map(
                                                (s) => speakersByName[s]?.name
                                            )
                                            .filter(Boolean)
                                            .join(', ')}
                                        location={event.location.title}
                                        image={event.image}
                                    />
                                </Link>
                            ))}
                        </TimelineGroup>
                    );
                })}
            </div>
        </Section>
    );
}
