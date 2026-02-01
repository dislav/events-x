import type { Agenda as AgendaType, Event, Speaker } from 'content-collections';

import { SpeakerCardCompact } from '@/entities/speaker';
import { AgendaItem, AgendaTitle } from '@/entities/agenda';
import { Section, SectionHeading } from '@/shared/ui';

interface AgendaProps {
    className?: string;
    agenda: AgendaType[];
    speakers?: Speaker[];
    agendaInfo?: Event['agenda'];
}

export default function AgendaSection({
    className,
    agenda,
    speakers,
    agendaInfo,
}: AgendaProps) {
    const agendaInfoByKey = agendaInfo
        ? agendaInfo.reduce(
              (acc, i) => {
                  acc[i.key] = i;
                  return acc;
              },
              {} as Record<
                  string,
                  { key: string; title: string; subtitle: string }
              >
          )
        : {};

    const agendaByKey = agenda.reduce(
        (acc, a) => {
            if (!acc[a.key]) acc[a.key] = [];
            acc[a.key].push(a);

            return acc;
        },
        {} as Record<string, AgendaType[]>
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
        <Section id="agenda" className={className}>
            <SectionHeading title="Программа" />

            <div className="flex flex-col gap-14">
                {Object.entries(agendaByKey).map(([key, items]) => {
                    const agendaInfo = agendaInfoByKey[key] || {};

                    return (
                        <div key={key} className="flex flex-col gap-14">
                            {agendaInfo && (
                                <AgendaTitle
                                    subtitle={agendaInfo.subtitle}
                                    title={agendaInfo.title}
                                />
                            )}
                            <div className="flex flex-col gap-14">
                                {items.map((item) => {
                                    const speakers = item.speakers
                                        ? item.speakers
                                              .map(
                                                  (name) => speakersByName[name]
                                              )
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
                                                    <div className="grid gap-6 md:grid-cols-3 md:gap-8">
                                                        {speakers.map((s) => (
                                                            <SpeakerCardCompact
                                                                key={
                                                                    s._meta.path
                                                                }
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
                    );
                })}
            </div>
        </Section>
    );
}
