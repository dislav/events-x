import { allEvents, allSpeakers } from 'content-collections';

import { TimelineSection } from '@/widgets/timeline-section';

export default function HomePage() {
    return (
        <main>
            <TimelineSection events={allEvents} speakers={allSpeakers} />
        </main>
    );
}
