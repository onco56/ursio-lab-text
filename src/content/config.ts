import { defineCollection, z } from "astro:content";

// -------------------------
// TEXT-EINTRÄGE (stabilisiert für Seed-24)
// -------------------------
const texte = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),

    // optional, weil nicht in allen Seeds vorhanden:
    slug: z.string().optional(),
    description: z.string().optional(),
    subtitle: z.string().optional(),

    // SEO / Struktur:
    date: z.string().optional(),
    tags: z.array(z.string()).optional(),

    // Kompatibilität für verschiedene Seeds:
    draft: z.boolean().optional(),
    published: z.boolean().optional(),
  }),
});

// -------------------------
// SPARKS
// -------------------------
const sparks = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    mood: z.string().optional(),
    tags: z.array(z.string()).optional(),
    order: z.number().optional(),
  }),
});

// -------------------------
// WISSENSGARTEN
// -------------------------
const garten = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    category: z.string().optional(),
    summary: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

// -------------------------
// LANDINGPAGES
// -------------------------
const lp = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    heroTitle: z.string().optional(),
    heroSubtitle: z.string().optional(),
    order: z.number().optional(),
  }),
});

// -------------------------
// TOOLS & METHODEN
// -------------------------
const tools = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    complexity: z.number().optional(),
  }),
});

// -------------------------
// STARTSEITE  (A1 – korrekt definiert)
// -------------------------
const startseite = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

// -------------------------
// EXPORT
// -------------------------
export const collections = {
  texte,
  sparks,
  garten,
  lp,
  tools,
  startseite,
};