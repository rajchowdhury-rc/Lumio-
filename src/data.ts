import { TeamUseCase, UpdateArticle, StudioTemplate } from './types';

export const TRUST_COMPANIES = [
  'Northline',
  'Arcform',
  'Velo Group',
  'Juniper',
  'Meridian',
  'Kinetics',
  'Aether Lab',
  'Prism AI'
];

export const TEAM_USE_CASES: TeamUseCase[] = [
  {
    id: 'campaign-briefs',
    title: 'Campaign Briefs',
    description: 'Generate comprehensive briefs aligned with brand strategy.',
    category: 'Strategy',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChKRPJn1gSFDrt1GQDzfiU4I3yCzTQVQeuNO8ytisTcKlK31yEv5K86cdWMKJBg3GC95w5q1ERJKHJLKU3w-6SojCl15IPwtoKItbHfym_OWSwde4Lc_X0Q39r2NUE_oZu-ti8_Zs_OibuoUCAcJYE-cSQuZwNsvFjQJC5rdU9maW6xzUq0FkX5WNlRsxq4L4CR7oinVYlFK6v9BDjMPShHM5UEvXrG_3JYGqBIWaiRdb9MTmRBmaZdMBZC44wnynC-oFH9TaZlB9Q'
  },
  {
    id: 'social-assets',
    title: 'Social Assets',
    description: 'Ensure visual consistency across all channels.',
    category: 'Marketing',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABa0q5BJ_DreMgIZGB-8at3sYpuFks_tT431tznVrVWB2C49LzdUC651wzXTj9LD-7VYCWRRpo9bqyyAQ_b54KnjtoPjXSRfeIXbBgjwHXIr8Ojo51Y8MG8CC0mGtvupgQSf4RnLcvReiqPWlUs5L2KkemFlhV-MfAQAzfyxIvGWfFM2Orh3ChuU5A6sOS2VBQbJyPWAQcwMlr6YWpCbln_V8DC4Yo90e6mK4QAINc-FrScaJ_KPin-t6UJ12p4Dnl5CbWpvGS2GiO'
  },
  {
    id: 'sales-decks',
    title: 'Sales Decks',
    description: 'Empower reps with up-to-date, on-brand messaging.',
    category: 'Sales',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAsZf4UPkmlE6_mXYyjLE0rRS6z3wyPwTyXyHBEx2fzb_1GTK9oiAbqHMYNp1BpaU32inyxnVzpmayXVCbCKB_1Vo5pWerZ__YxCtY56FNpcHMwYf9urWgXAJQyGfscYHxMbULHWIsDeg5XCImbVDEPCwNhnAFC1xNYFgDTRv4KBYk1lGhIhBi4Pez_FSe2stW1TrgJkEhZUjpZcpgdrnwOaIDJo-2fibASWue5TrVKAp0CiX5ahI1LePNwx8xkgPfEO5mMALLcQWo'
  },
  {
    id: 'voice-guidelines',
    title: 'Voice Guidelines',
    description: "Codify your brand's unique tone and terminology.",
    category: 'Design',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5cY_8WSiYE8XLX9-TC1PN-9mihq_rEdAuIWhtvcYj7w3Jym37KSRruLnz0ZQY5zy1_DktUdT0RLTDQ4dIOGeKAvBWKyz6Fg4AS8M9VGl8uRkbhFz7qmqDNDpZ-CnVzYng1m39Wxi--hMoM4aMjONRhxBfdlgygDuhMZXzobuhZkCisfF6llXxrL9fOU48PhgyUNZx5V5gH-adc6HxffpgIWavNNpFCUnafc-d7HEDWlEQx3S8yVrTddmzqlMzQIOc0ib4Bxpxxe-W'
  }
];

export const LATEST_UPDATES: UpdateArticle[] = [
  {
    id: 'update-1',
    tag: 'Product Update',
    date: 'Oct 12',
    title: 'Introducing Lumio Studio Analytics',
    summary: 'Evaluate content sentiment, brand coherence, and predictive engagement across all distributed marketing touchpoints before going live.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChKRPJn1gSFDrt1GQDzfiU4I3yCzTQVQeuNO8ytisTcKlK31yEv5K86cdWMKJBg3GC95w5q1ERJKHJLKU3w-6SojCl15IPwtoKItbHfym_OWSwde4Lc_X0Q39r2NUE_oZu-ti8_Zs_OibuoUCAcJYE-cSQuZwNsvFjQJC5rdU9maW6xzUq0FkX5WNlRsxq4L4CR7oinVYlFK6v9BDjMPShHM5UEvXrG_3JYGqBIWaiRdb9MTmRBmaZdMBZC44wnynC-oFH9TaZlB9Q',
    readTime: '4 min read'
  },
  {
    id: 'update-2',
    tag: 'Insights',
    date: 'Oct 08',
    title: 'The Modern Brand Architecture',
    summary: 'How distributed design systems and intelligent autonomous agent workflows are replacing static brand books forever.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAsZf4UPkmlE6_mXYyjLE0rRS6z3wyPwTyXyHBEx2fzb_1GTK9oiAbqHMYNp1BpaU32inyxnVzpmayXVCbCKB_1Vo5pWerZ__YxCtY56FNpcHMwYf9urWgXAJQyGfscYHxMbULHWIsDeg5XCImbVDEPCwNhnAFC1xNYFgDTRv4KBYk1lGhIhBi4Pez_FSe2stW1TrgJkEhZUjpZcpgdrnwOaIDJo-2fibASWue5TrVKAp0CiX5ahI1LePNwx8xkgPfEO5mMALLcQWo',
    readTime: '6 min read'
  },
  {
    id: 'update-3',
    tag: 'News',
    date: 'Sep 24',
    title: 'Lumio raises Series B to expand AI',
    summary: 'Accelerating our vision for enterprise-wide creative intelligence and autonomous on-brand campaign synthesis.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5cY_8WSiYE8XLX9-TC1PN-9mihq_rEdAuIWhtvcYj7w3Jym37KSRruLnz0ZQY5zy1_DktUdT0RLTDQ4dIOGeKAvBWKyz6Fg4AS8M9VGl8uRkbhFz7qmqDNDpZ-CnVzYng1m39Wxi--hMoM4aMjONRhxBfdlgygDuhMZXzobuhZkCisfF6llXxrL9fOU48PhgyUNZx5V5gH-adc6HxffpgIWavNNpFCUnafc-d7HEDWlEQx3S8yVrTddmzqlMzQIOc0ib4Bxpxxe-W',
    readTime: '3 min read'
  }
];

export const STUDIO_TEMPLATES: StudioTemplate[] = [
  {
    id: 'product-email',
    label: 'Pro Tier Launch Email',
    prompt: "Draft a product announcement email for the new 'Pro' tier, adopting our confident but approachable tone.",
    output: {
      headline: 'Meet Lumio Pro: Built for high-velocity teams',
      body: 'Today, we are elevating what is possible for creative organizations. Lumio Pro unlocks autonomous brand-safe synthesis, real-time contextual feedback loops, and limitless collaborative workspaces.',
      toneScore: '99.4% Brand Cohesion',
      suggestedChannels: ['Email Blast', 'In-App Banner', 'Release Notes']
    }
  },
  {
    id: 'social-campaign',
    label: 'Social Media Teaser',
    prompt: 'Create a succinct LinkedIn post highlighting autonomous AI agents unifying brand compliance.',
    output: {
      headline: 'Stop policing brand guidelines. Start amplifying them.',
      body: 'As enterprise teams scale, maintaining brand voice across 500+ daily assets shouldn’t be a manual bottleneck. Lumio operates as your organization’s real-time creative guardrail.',
      toneScore: '98.8% Brand Cohesion',
      suggestedChannels: ['LinkedIn', 'Twitter/X', 'Newsletter']
    }
  },
  {
    id: 'sales-pitch',
    label: 'Enterprise Deck Intro',
    prompt: 'Summarize the executive value proposition for VP of Brand & CMOs.',
    output: {
      headline: 'The Operating System for Modern Brand Intelligence',
      body: 'Consolidate disparate design files, voice parameters, and campaign repos into a singular authoritative intelligence engine that scales across global product, sales, and design teams.',
      toneScore: '100% Brand Cohesion',
      suggestedChannels: ['Pitch Deck Slide 1', 'Executive Summary']
    }
  }
];
