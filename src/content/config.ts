import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().or(z.date()).transform((val) => new Date(val)),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = { blog };
