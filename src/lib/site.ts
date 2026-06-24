// Personal info, replace placeholders before deploying.

export const site = {
  name: 'VK',
  shortName: 'VK',
  initials: 'VK',
  role: 'Applied AI Solutions Architect · AWS-Certified Solutions Architect (Professional)',
  tagline:
    'Applied AI Solutions Architect, AWS Certified at the Professional level. 20+ years architecting secure, scalable cloud, now building AI products end-to-end.',
  bio: [
    'I build AI products. Privacy-first agents, kid-safe educational AI, production SaaS with real customers, on-device voice, every piece shipped, every piece used.',
    'I work end-to-end: model architecture and safety guardrails through to payments, OAuth, observability, and the unglamorous middle layer that decides whether a real customer stays. The work on this site spans local LLMs on Apple Silicon, multi-agent systems with row-level ACLs, and production websites that real businesses rely on.',
  ],
  location: 'United States',
  email: 'vkapoor09@gmail.com',
  resumePath: '/VK%20Kapoor%20-%20Resume%20(2026).pdf',
  photoPath: '/VK.jpg',
} as const;

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Work' },
  { href: '/about', label: 'About' },
] as const;

export const certifications = [
  {
    name: 'AWS Solutions Architect',
    level: 'Professional',
    issuer: 'Amazon Web Services',
    img: '/certs/aws-sa-professional.png',
    verifyUrl: 'https://www.credly.com/badges/4f1c84ea-95ee-4328-8e05-6e7e1026dc34/public_url',
  },
  {
    name: 'AWS Security',
    level: 'Specialty',
    issuer: 'Amazon Web Services',
    img: '/certs/aws-security-specialty.png',
    verifyUrl: 'https://www.credly.com/badges/7892f127-b6e2-4b24-bf9c-295a6228132d/public_url',
  },
  {
    name: 'Microsoft Azure',
    level: 'Fundamentals',
    issuer: 'Microsoft',
    img: '/certs/azure-fundamentals.png',
    verifyUrl: 'https://www.credly.com/badges/69571edc-6ed9-4e87-96d1-96dfd0794f8f/public_url',
  },
] as const;

export const cloud = {
  summary:
    "Before the AI work, and right alongside it, I've spent 20+ years as a cloud and solutions architect: leading large on-premises-to-AWS migrations for government and enterprise, designing to the AWS Well-Architected Framework, and owning security and cost from day one.",
  highlights: [
    {
      title: 'Government cloud migrations at scale',
      body: 'Lead Cloud Architect on a U.S. state driver-license system migrating to AWS, serving millions of residents. Deputy architect on a state health-and-human-services platform migration, leading the unstructured-data workstream from NetApp ONTAP to AWS FSx.',
    },
    {
      title: 'Security & compliance (DevSecOps)',
      body: 'Disaster recovery in AWS GovCloud, STIG/DISA hardening across the estate, and guardrails with Security Hub, WAF, GuardDuty, Config, and IAM Access Analyzer.',
    },
    {
      title: 'Cost optimization (FinOps)',
      body: 'Led a FinOps initiative on a state government cloud migration that cut compute spend roughly 50%, about $760K a year, through EC2/RDS right-sizing, Savings Plans, and Cost Explorer dashboards. A separate custom mobile app replaced licensed software for another $300K a year. Tooling: Cost Explorer, Budgets, Trusted Advisor, Savings Plans.',
    },
  ],
} as const;

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
    label: 'AWS / Cloud',
    items: [
      'EC2, S3, RDS, Lambda, VPC',
      'IAM, CloudFormation, CloudWatch',
      'FSx for NetApp ONTAP, EBS, EFS',
      'Security Hub, WAF, GuardDuty, Config',
      'Cost Explorer, Budgets, Savings Plans',
      'Well-Architected Framework, GovCloud',
      'CloudEndure DR, Route 53',
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
