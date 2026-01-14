import { MDXContent as RootMDXContent } from '@content-collections/mdx/react';

import { Section, SectionHeading } from '@/shared/ui';

interface MdxContentProps {
    code: string;
}

export default function MdxContent({ code }: MdxContentProps) {
    return (
        <RootMDXContent code={code} components={{ Section, SectionHeading }} />
    );
}
