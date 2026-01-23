import { notFound } from 'next/navigation';
import { allPages } from 'content-collections';
import { Section, SectionHeading } from '@/shared/ui';

export function generateStaticParams() {
    return allPages.map((page) => ({ slug: page._meta.path }));
}

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const page = allPages.find((page) => page._meta.path === slug);
    if (!page) return notFound();

    return (
        <Section>
            <SectionHeading title={page.title} />

            <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: page.html }}
            />
        </Section>
    );
}
