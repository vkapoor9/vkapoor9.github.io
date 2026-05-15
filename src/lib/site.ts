// Personal info — replace placeholders before deploying.

export const site = {
  name: 'VK',
  shortName: 'VK',
  initials: 'VK',
  role: 'Applied AI Engineer · AI Solutions Architect',
  tagline:
    'Builds AI products end-to-end — from model architecture and safety guardrails to payments, voice, and real users.',
  bio: [
    'I build AI products. Privacy-first agents, kid-safe educational AI, production SaaS with real customers, on-device voice — every piece shipped, every piece used.',
    'I work end-to-end: model architecture and safety guardrails through to payments, OAuth, observability, and the unglamorous middle layer that decides whether a real customer stays. The work on this site spans local LLMs on Apple Silicon, multi-agent systems with row-level ACLs, and a paid commercial engagement with a real client.',
  ],
  location: 'United States',
  email: 'EMAIL_PLACEHOLDER@example.com',
  linkedinUrl: 'LINKEDIN_URL_PLACEHOLDER',
  githubUrl: 'GITHUB_URL_PLACEHOLDER',
  twitterUrl: '',
  resumePath: '/VK%20Kapoor%20-%20Resume%202-Page%20(2026).pdf',
  photoPath: '/manu.jpg',
} as const;

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Work' },
  { href: '/about', label: 'About' },
] as const;

export const skillGroups = [
  {
    label: 'AI / ML',
    items: [
      'Anthropic Claude (Sonnet 4.6, Opus 4.7)',
      'Ollama (qwen3.5, gemma3)',
      'MLX + speculative decoding',
      'Groq + multi-model fallback',
      'pgvector / RAG',
      'Voice (STT/TTS/VAD, Kokoro, parakeet, Silero)',
      'Evals & A/B (OpenRouter)',
      'Prompt caching, system-prompt design',
    ],
  },
  {
    label: 'Languages & Runtimes',
    items: ['TypeScript', 'Python', 'Node.js 22', 'Bun', 'Swift / SwiftUI', 'SQL'],
  },
  {
    label: 'Frameworks',
    items: [
      'Next.js 15 / 16',
      'Astro 5',
      'React 19',
      'React Native (Expo)',
      'FastAPI',
      'Vercel AI SDK',
      'Tailwind v4',
      'Drizzle ORM',
    ],
  },
  {
    label: 'Data & Infra',
    items: [
      'PostgreSQL + pgvector',
      'MySQL',
      'SQLite + sqlite-vec',
      'Supabase',
      'Proxmox / LXC',
      'Docker / Compose',
      'Cloudflare Tunnel',
      'systemd / launchd / PM2',
    ],
  },
  {
    label: 'Product',
    items: [
      'Stripe / Lemon Squeezy',
      'OAuth (Google, Apple)',
      'Chrome Extensions (MV3)',
      'WordPress / Kadence',
      'SEO + JSON-LD + llms.txt',
    ],
  },
] as const;
