import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    category: z.enum([
      'AI Agent',
      'SaaS',
      'Educational AI',
      'Web Design',
      'Mobile',
      'Tool',
      'Dashboard',
      'Game',
      'Agency',
    ]),
    role: z.string(),
    year: z.string(),
    status: z.enum(['Live', 'Shipped', 'Beta', 'Prototype', 'Retired', 'Active']),
    stack: z.array(z.string()),
    aiAngle: z.string(),
    demoUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    metrics: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
        })
      )
      .optional(),
    featured: z.boolean().default(false),
    accent: z.string().optional(),
    order: z.number().default(100),
  }),
});

export const collections = { projects };
