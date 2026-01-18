import { MDXContent as RootMDXContent } from '@content-collections/mdx/react';

import { Section, SectionHeading, InfoCard } from '@/shared/ui';
import { VideoPreview } from '@/widgets/video-preview';

interface MdxContentProps {
    code: string;
}

export default function MdxContent({ code }: MdxContentProps) {
    return (
        <RootMDXContent
            code={code}
            components={{
                Section,
                SectionHeading,
                InfoCard,
                VideoPreview,
            }}
        />
    );
}
