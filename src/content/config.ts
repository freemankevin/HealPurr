import { defineCollection, z } from 'astro:content';
import { catIds } from '../config/cats';

const catsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    cat: z.enum(catIds),
    catName: z.string(),
    title: z.string(),
    date: z.date(),
    type: z.string(),
    doctor: z.string().optional(),
    weight: z.string().optional(),
    temperature: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  cats: catsCollection,
};