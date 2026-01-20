import type { Speaker } from 'content-collections';

import { Section, SectionHeading } from '@/shared/ui';
import { SpeakerCardDetailed } from '@/entities/speaker';
import { speakersSectionStyles } from './SpeakersSection.styles';

interface SpeakersSectionProps {
    className?: string;
    speakers: Speaker[];
    eventSpeakers: string[];
}

export default function SpeakersSection({
    className,
    speakers,
    eventSpeakers,
}: SpeakersSectionProps) {
    const styles = speakersSectionStyles();

    const filterSpeakers = speakers.filter((s) =>
        eventSpeakers.includes(s._meta.fileName.split('.')[0])
    );

    return (
        <Section id="speakers" className={styles.base({ className })}>
            <SectionHeading title="Cпикеры" />

            <div className={styles.content()}>
                {filterSpeakers.map((speaker, index) => (
                    <SpeakerCardDetailed
                        key={speaker._meta.path}
                        direction={index % 2 !== 0 ? 'reverse' : 'default'}
                        name={speaker.name}
                        image={speaker.image}
                        mainPosition={speaker.mainPosition}
                        additionalPosition={speaker.additionalPositions}
                        className={styles.item()}
                    />
                ))}
            </div>
        </Section>
    );
}
