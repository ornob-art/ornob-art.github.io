import { z, defineCollection } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.string(),
    category: z.string(),
    badge: z.string(),
    readTime: z.string(),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    excerpt: z.string(),
  }),
});

export const collections = {
  'posts': postsCollection,
};
