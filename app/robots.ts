import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  // AI assistants increasingly answer health questions directly and cite the
  // sources they were allowed to read. Explicitly allowing the major AI search
  // and training crawlers keeps Dr. Sanjana's practice eligible to be surfaced
  // and cited in ChatGPT, Claude, Perplexity, Gemini, and Copilot answers.
  // Several of these bots default to NOT reading a site unless named, so listing
  // them is an opt-in for AI visibility (AEO/GEO), not just the wildcard rule.
  const aiCrawlers = [
    'GPTBot', // OpenAI training
    'OAI-SearchBot', // ChatGPT search/citation
    'ChatGPT-User', // ChatGPT browsing on user request
    'ClaudeBot', // Anthropic training
    'Claude-Web', // Anthropic
    'Claude-SearchBot', // Claude citation crawler
    'anthropic-ai', // Anthropic
    'PerplexityBot', // Perplexity index
    'Perplexity-User', // Perplexity on user request
    'Google-Extended', // Gemini / Vertex grounding
    'Applebot-Extended', // Apple Intelligence
    'Bingbot', // feeds Microsoft Copilot
    'CCBot', // Common Crawl (feeds many models)
  ];

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Only block non-public endpoints. Do NOT disallow /_next/ — that blocks
        // CSS, JS, and /_next/image, which Search Console flags as blocked render resources.
        disallow: ['/api/'],
      },
      // Explicit allow for every named AI crawler — same access as humans, minus
      // the private API routes. Opts the site in to AI answer citations.
      {
        userAgent: aiCrawlers,
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
