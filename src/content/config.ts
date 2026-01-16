import { defineCollection, z } from 'astro:content';

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    author: z.object({
      name: z.string(),
      role: z.string().optional(),
      avatar: z.string().optional(),
      bio: z.string().optional(),
    }),
    coverImage: z.string(),
    category: z.string(),
    excerpt: z.string(),
    readTime: z.string().optional(),
  }),
});

export const collections = {
  'articles': articlesCollection,
};
