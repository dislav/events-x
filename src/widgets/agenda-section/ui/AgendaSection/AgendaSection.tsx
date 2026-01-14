import type { Agenda as AgendaType, Event, Speaker } from 'content-collections';

import { SpeakerCardCompact } from '@/entities/speaker';
import { AgendaItem, AgendaTitle } from '@/entities/agenda';
import { Section, SectionHeading } from '@/shared/ui';

interface AgendaProps {
    className?: string;
    agenda: AgendaType[];
    eventDays?: Event['days'];
    speakers?: Speaker[];
}

export default function AgendaSection({
    className,
    agenda,
    eventDays,
    speakers,
}: AgendaProps) {
    const agendaByDay = agenda.reduce(
        (acc, a) => {
            if (!acc[a.day]) acc[a.day] = [];
            acc[a.day].push(a);
            return acc;
        },
        {} as Record<number, AgendaType[]>
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

    const getDayInfo = (dayNumber: number) => {
        const eventDay = eventDays?.find((d) => d.number === dayNumber);
        if (eventDay) return eventDay;

        return { number: dayNumber, title: '', description: undefined };
    };

    return (
        <Section id="agenda" className={className}>
            <SectionHeading title="Программа" />

            <div className="flex flex-col gap-14">
                {Object.entries(agendaByDay).map(([day, items]) => (
                    <div key={day} className="flex flex-col gap-14">
                        <AgendaTitle
                            dayNumber={+day}
                            title={getDayInfo(+day).title}
                        />
                        <div className="flex flex-col gap-14">
                            {items.map((item) => {
                                const speakers = item.speakers
                                    ? item.speakers
                                          .map((name) => speakersByName[name])
                                          .filter(Boolean)
                                    : [];

                                return (
                                    <AgendaItem
                                        key={item._meta.path}
                                        time={item.time}
                                        title={item.title}
                                        content={item.html}
                                        speakers={
                                            speakers.length > 0 && (
                                                <div className="grid grid-cols-3 gap-8">
                                                    {speakers.map((s) => (
                                                        <SpeakerCardCompact
                                                            key={s._meta.path}
                                                            image={s.image}
                                                            name={s.name}
                                                            position={
                                                                s.mainPosition
                                                            }
                                                        />
                                                    ))}
                                                </div>
                                            )
                                        }
                                    />
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
