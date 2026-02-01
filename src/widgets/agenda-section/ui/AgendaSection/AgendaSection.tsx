import type { Agenda as AgendaType, Event, Speaker } from 'content-collections';

import { SpeakerCardCompact } from '@/entities/speaker';
import { AgendaGroup, AgendaItem, AgendaTitle } from '@/entities/agenda';
import { Section, SectionHeading } from '@/shared/ui';

import { agendaSectionStyles } from './AgendaSection.styles';

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
    const styles = agendaSectionStyles();

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
        <Section id="agenda" className={styles.base({ className })}>
            <SectionHeading
                color="primary"
                subtitle="Программа"
                title="Подробная программа мероприятия"
            />

            <div className={styles.content()}>
                {Object.entries(agendaByKey).map(([key, items]) => {
                    const agendaInfo = agendaInfoByKey[key] || {};

                    return (
                        <AgendaGroup
                            key={key}
                            header={
                                agendaInfo && (
                                    <AgendaTitle
                                        subtitle={agendaInfo.subtitle}
                                        title={agendaInfo.title}
                                    />
                                )
                            }
                        >
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
                                                <div
                                                    className={styles.speakers()}
                                                >
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
                        </AgendaGroup>
                    );
                })}
            </div>
        </Section>
    );
}
