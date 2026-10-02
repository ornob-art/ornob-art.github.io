import { z, defineCollection } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    category: z.string(),
    date: z.string().optional().nullable(),
    badge: z.string().optional().nullable(),
    readTime: z.string().optional().nullable(),
    featured: z.boolean().default(false).optional().nullable(),
    image: z.string().optional().nullable(),
    excerpt: z.string().optional().nullable(),
    password: z.string().optional().nullable(),
  }),
});

export const collections = {
  'posts': postsCollection,
};
