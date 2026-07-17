import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      subtitle: z.string().optional(),
      image: image(),
      date: z.coerce.date(),
      tag: z.string().default('Tips'),
    }),
});

const tips = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tips' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image().optional(),
      date: z.coerce.date(),
      tag: z.string().default('Tips'),
      readMins: z.number().optional(),
    }),
});

export const collections = { blog, tips };
