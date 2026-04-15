import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	schema: z.object({
		title: z.string(),
		pubDate: z.coerce.date(),
		description: z.string(),
		author: z.string(),
		image: z.string().optional(),
		tags: z.array(z.string()),
	}),
});

export const collections = { blog };
