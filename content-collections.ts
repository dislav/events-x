import * as v from 'valibot';
import * as path from 'path';

import { defineCollection, defineConfig } from '@content-collections/core';
import { compileMarkdown } from '@content-collections/markdown';
import { compileMDX } from '@content-collections/mdx';

const contentDir = 'content';

const speakers = defineCollection({
    name: 'speakers',
    directory: path.join(contentDir, 'speakers'),
    include: '**/*.md',
    schema: v.object({
        name: v.string(),
        image: v.string(),
        mainPosition: v.string(),
        additionalPositions: v.optional(
            v.array(
                v.object({
                    icon: v.optional(v.string()),
                    title: v.string(),
                })
            )
        ),
        content: v.string(),
    }),
});

const agenda = defineCollection({
    name: 'agenda',
    directory: path.join(contentDir, 'agenda'),
    include: '**/*.md',
    schema: v.object({
        day: v.number(),
        time: v.string(),
        title: v.string(),
        speakers: v.optional(v.array(v.string())),
        content: v.string(),
    }),
    transform: async (document, context) => {
        const html = await compileMarkdown(context, document);

        return { ...document, html };
    },
});

const prices = defineCollection({
    name: 'prices',
    directory: path.join(contentDir, 'prices'),
    include: '**/*.md',
    schema: v.object({
        title: v.optional(v.string()),
        description: v.optional(v.string()),
        price: v.number(),
        salePrice: v.optional(v.number()),
        content: v.string(),
    }),
    transform: async (document, context) => {
        const html = await compileMarkdown(context, document);

        return { ...document, html };
    },
});

const events = defineCollection({
    name: 'events',
    directory: path.join(contentDir, 'events'),
    include: '**/*.mdx',
    schema: v.object({
        title: v.string(),
        description: v.optional(v.string()),
        image: v.optional(v.string()),
        city: v.string(),
        address: v.string(),
        hero: v.object({
            title: v.string(),
            description: v.optional(v.string()),
            image: v.string(),
        }),
        days: v.array(
            v.object({
                number: v.number(),
                date: v.pipe(v.string(), v.isoDate()),
                timeFrom: v.string(),
                timeTo: v.string(),
                title: v.optional(v.string()),
                description: v.optional(v.string()),
            })
        ),
        speakers: v.optional(v.array(v.string())),
        contacts: v.object({
            organizer: v.string(),
            address: v.optional(v.string()),
            phones: v.optional(v.array(v.string())),
            emails: v.optional(v.array(v.string())),
        }),
        map: v.optional(
            v.object({
                latitude: v.number(),
                longitude: v.number(),
                zoom: v.optional(v.number()),
            })
        ),
        socials: v.optional(
            v.array(
                v.object({
                    type: v.picklist([
                        'vkontakte',
                        'telegram',
                        'telegram_channel',
                        'website',
                    ]),
                    url: v.pipe(v.string(), v.url()),
                })
            )
        ),
        footer: v.object({
            copyright: v.string(),
            fromYear: v.optional(v.number()),
        }),
        content: v.string(),
    }),
    transform: async (document, context) => {
        const mdx = await compileMDX(context, document);

        return { ...document, mdx };
    },
});

export default defineConfig({
    collections: [speakers, agenda, prices, events],
});
