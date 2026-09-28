import { SolutionItem, TeamMember, PrincipleItem, TestimonialItem, BlogPost, PricingPlan, FAQItem, Project } from '../types';

export const HERO_CONTENT = {
  tag: 'GENESIS',
  headingLine1: 'Your dedicated offshore team built,',
  headingHighlight: 'around your busines.',
  description: 'Driven by results. UK-led standards. Global delivery Reduce operational costs, increase capacity and scale with dedicated professionals working as an extension of your team. Whether you need one specialist or an entire function, Genesis gives you the people and operational support to grow without the overhead of expanding your internal workforce',
  ctaText: 'How we help',
};

export const PARTNERS_SECTION = {
  heading: 'We work alongside your team —\nfrom the boardroom to the build.',
  description: 'Local hiring is expensive. Finding the right people takes time. And growing administrative workloads can pull your team away from higher-value work.Genesis builds dedicated offshore teams around your business, giving you the capacity to grow while significantly reducing your operational cost base',
  rating: '1000',
  ratingLabel: 'Professionals placed',
  clientAvatars: [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
  ],
  statsNumber: '75%',
  statsLabel: 'Potential operational cost savings',
  videoTitle: 'See how we approach a new engagement',
  videoDuration: '3:25 min',
  videoThumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
};

export const PARTNER_LOGOS = [
  { name: 'Stripe', logoSvg: 'https://framerusercontent.com/images/XTdYweCh4Izx9tbuzuuc8QOZaE.png' },
  { name: 'Linear', logoSvg: 'https://framerusercontent.com/images/di60tfY5RAHL818W1TUlG3zq8.png' },
  { name: 'Notion', logoSvg: 'https://framerusercontent.com/images/yY0ymM9OWPyQ9oSOkkw1HoP5SM.png' },
  { name: 'Ramp', logoSvg: 'https://framerusercontent.com/images/KmjdcAQvDesabilIEWdTSQzn7U.png' },
];

export const SOLUTIONS_ITEMS: SolutionItem[] = [
  {
    id: 'strategy-positioning',
    number: '01',
    category: 'Strategy',
    title: 'Strategy & brand positioning',
    tagline: 'Where to play, and how to win',
    description: 'We sharpen market definition, evaluate competitive positioning, and build robust moats so your leadership team acts with conviction and distinct advantage.',
    deliverables: [
      'Comprehensive market & competitor analysis',
      'Value proposition & defensible positioning matrix',
      'Long-term capital & resource allocation roadmap',
      'Board-level strategic synthesis & executive decks',
    ],
    impactMetric: '3.4x',
    impactLabel: 'Average enterprise valuation uplift over 24 months',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'growth-gtm',
    number: '02',
    category: 'Growth',
    title: 'Growth & smart go-to-market',
    tagline: 'Turn ambition into a pipeline',
    description: 'Transform strategic intent into repeatable, high-converting revenue channels by aligning commercial economics, pricing discipline, and sales motions.',
    deliverables: [
      'Ideal Customer Profile (ICP) & account tiering',
      'Value-based pricing architecture & contract structuring',
      'Sales enablement & outbound pipeline playbook',
      'Retention loops & customer lifetime expansion',
    ],
    impactMetric: '+142%',
    impactLabel: 'Qualified commercial pipeline expansion in Q1-Q2',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'operating-model',
    number: '03',
    category: 'Operations',
    title: 'Operating model & efficiency',
    tagline: 'Do more with what you have',
    description: 'Eliminate organizational friction, streamline decision rights, and architect resilient workflows that allow your company to scale without bloat.',
    deliverables: [
      'Cross-functional organizational blueprint',
      'Decision governance & RACI authority frameworks',
      'Unit-level productivity & cost optimization audit',
      'KPI scorecard & leadership executive dashboards',
    ],
    impactMetric: '-28%',
    impactLabel: 'Reduction in operational cycle time across departments',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'transformation-change',
    number: '04',
    category: 'Transformation',
    title: 'Transformation & change',
    tagline: 'Make big change actually stick',
    description: 'Most change quietly stalls in the first hard quarter. We embed with teams through the critical 90-day window to guarantee lasting cultural adoption.',
    deliverables: [
      '90-day transformation war room playbook',
      'Leadership alignment workshops & communication cadence',
      'Change champions network & feedback telemetry',
      'Post-launch execution governance and review',
    ],
    impactMetric: '94%',
    impactLabel: 'Milestone completion rate on targeted initiative roadmaps',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=80',
  },
];

export const TICKER_ITEMS = [
  'customized solutions',
  'risk management',
  'strategic insights',
  'precision execution',
  'enterprise resilience',
  'boardroom clarity',
];

export const CTA_TICKER_STATS = [
  { value: '18+', label: 'Years of combined partner experience' },
  { value: '200+', label: 'Engagements delivered worldwide' },
  { value: '98%', label: 'Executive retention and repeat advisory rate' },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'elena-duarte',
    name: 'Elena Duarte',
    role: 'Managing Partner',
    bio: 'Former senior partner leading global transformation. Has advised 40+ enterprise boards across North America and Europe on strategic repositioning and capital allocation.',
    experience: '16+ yrs strategy advisory',
    image: 'https://framerusercontent.com/images/dxU8KygiB939sjdMxAph5QwYpM.jpg',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'marcus-bello',
    name: 'Marcus Bello',
    role: 'Partner, Growth',
    bio: 'Ex-operator and GTM executive who scaled two high-growth tech firms from $15M to $180M ARR. Specializes in commercial economics and modern enterprise sales motions.',
    experience: '12+ yrs enterprise GTM',
    image: 'https://framerusercontent.com/images/XYx2CCUbeMfrXajl6QB5bEPjv4.jpg',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'priya-nair',
    name: 'Priya Nair',
    role: 'Partner, Strategy',
    bio: 'Extensive background in market architecture, regulatory navigation, and supply chain restructuring. Trusted advisor to Fortune 500 leadership.',
    experience: '14+ yrs corporate strategy',
    image: 'https://framerusercontent.com/images/Dnmwwk24FihmPa3SrXoJHiqGTsQ.jpg',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'sarah-cameron',
    name: 'Sarah Cameron',
    role: 'Principal, Operations',
    bio: 'Leads our organizational design and post-merger integration practice. Passionate about translating complex strategy into crisp day-to-day execution.',
    experience: '10+ yrs operational design',
    image: 'https://framerusercontent.com/images/B33oXattYmDIpLTNseats83yI7c.jpg',
    linkedin: 'https://linkedin.com',
  },
];

export const PRINCIPLES_DATA: PrincipleItem[] = [
  {
    id: 'outcomes-over-output',
    title: 'Outcomes over output',
    subtitle: 'The measure is progress, not the size of the slide deck.',
    description: "We'd rather be genuinely useful than technically right — the goal is your progress, not ours. We hold every single engagement to a fair standard we'd want as clients: clear thinking, honest counsel, and work we're proud to sign off on.",
    quote: "We'd rather be genuinely useful than technically right — the goal is your progress, not ours.",
    highlight: 'Precision and judgment are where trust is earned.',
  },
  {
    id: 'straight-talk-always',
    title: 'Straight talk, always',
    subtitle: 'Directness is respect. We tell you what the data says.',
    description: 'We do not sell boilerplate frameworks or tell you what sounds comfortable. If a strategic initiative is misaligned with market realities, we surface it immediately with defensible evidence and pragmatic alternatives.',
    quote: 'If we see an assumption that will fail at implementation, we say it on day one.',
    highlight: 'Courageous candor creates the fastest path to clarity.',
  },
  {
    id: 'rigor-then-judgment',
    title: 'Rigor, then judgment',
    subtitle: 'Exhaustive analysis combined with seasoned operator intuition.',
    description: 'Data without context is noise; intuition without data is reckless. We invest seriously in empirical research and stress-testing before synthesizing it into actionable judgment that your executive committee can rally behind.',
    quote: 'Rigor gets you the facts; seasoned judgment tells you what to do with them.',
    highlight: 'Built for leaders who carry the weight of the final decision.',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'daniel-roth',
    quote: 'Consilio turned months of circular debate into a clear plan in weeks — then stayed to make sure it actually happened.',
    author: 'Daniel Roth',
    role: 'CEO',
    company: 'Meridian Logistics',
    avatar: 'https://framerusercontent.com/images/9N75gxHckeTX9pwdT7sqmJznf30.jpg',
    stats: '+42%',
    statsLabel: 'EBITDA margin expansion',
  },
  {
    id: 'elena-rostova',
    quote: 'The level of senior partner immersion was unlike anything we experienced with legacy consulting firms. They felt like an extension of our executive suite.',
    author: 'Elena Rostova',
    role: 'Chief Strategy Officer',
    company: 'Novum Health Group',
    avatar: 'https://framerusercontent.com/images/c8rZRsPlu7j4G2ysQ92eOT1SQ.jpg',
    stats: '14',
    statsLabel: 'Hospital systems integrated',
  },
  {
    id: 'alex-chen',
    quote: 'Our Board had three conflicting views on international expansion. Consilio delivered the empirical clarity and alignment we desperately needed.',
    author: 'Alex Chen',
    role: 'Founder & Chairman',
    company: 'ScaleWave Cloud Systems',
    avatar: 'https://framerusercontent.com/images/SHNQhPCrBXVwYbhDELNDpeytaw.jpg',
    stats: '3.2x',
    statsLabel: 'Enterprise contract acceleration',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'read-market-before-turns',
    slug: 'how-to-read-any-market-well-before-it-turns',
    title: 'How to read any market well, before it turns',
    category: 'Strategy',
    readTime: '6 min read',
    date: 'August 14, 2026',
    author: 'Elena Duarte',
    excerpt: 'The subtle signs that a market is about to shift usually show up early. Here is how seasoned operators diagnose customer sentiment, capital flows, and pricing elasticity before macro headlines catch up.',
    content: `When a market turns, lagging indicators like quarterly revenue and sales bookings are the last to blink. The earliest warnings appear in subtle friction points: lengthened sales cycles, pushback on payment terms, and shifting customer procurement priorities.\n\nTo build resilient strategy, leadership teams must separate transient noise from structural realignment. This briefing outlines our 4-point diagnostic framework for spotting tectonic inflection points twelve to eighteen months before they become common consensus.`,
    image: 'https://framerusercontent.com/images/HQHfPgkZervQ98JHtcSGd4s14c.jpg',
  },
  {
    id: 'change-that-sticks-first-90-days',
    slug: 'change-that-really-sticks-your-first-90-days',
    title: 'Change that really sticks: your first 90 days',
    category: 'Execution',
    readTime: '8 min read',
    date: 'July 28, 2026',
    author: 'Sarah Cameron',
    excerpt: "Most change quietly stalls in the first hard quarter. Here's what really lasts — from setting up accountable governance to engineering early symbolic wins that earn institutional trust.",
    content: `Over 70% of organizational restructuring programs fail to achieve their stated objectives. The primary culprit is rarely flawed analysis; it is executive fatigue and fragmented communication.\n\nDuring the first 90 days, momentum is either locked in or permanently squandered. We share our battle-tested operating cadence for running a lightweight transformation governance office without drowning teams in bureaucratic status meetings.`,
    image: 'https://framerusercontent.com/images/Dnmwwk24FihmPa3SrXoJHiqGTsQ.jpg',
  },
  {
    id: 'what-good-scorecard-measures',
    slug: 'what-a-good-scorecard-actually-measures',
    title: 'What a good scorecard actually measures',
    category: 'Leadership',
    readTime: '5 min read',
    date: 'June 19, 2026',
    author: 'Marcus Bello',
    excerpt: "A very busy dashboard full of numbers isn't the same as real clarity. How to prune vanity metrics down to the handful of vital signs that drive authentic decision-making.",
    content: `When leadership teams track everything, they effectively monitor nothing. Dashboards with thirty gauges create an illusion of control while obscuring systemic bottlenecks.\n\nA great executive scorecard answers three questions with zero ambiguity: Where are we losing velocity? Which unit economics are degrading? And which strategic bet requires an immediate capital reallocation?`,
    image: 'https://framerusercontent.com/images/B33oXattYmDIpLTNseats83yI7c.jpg',
  },
];

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'meridian-logistics',
    number: '01',
    title: 'Meridian Logistics Network',
    client: 'Meridian Global',
    category: 'Operational Restructuring & GTM',
    year: '2025–2026',
    description: 'Consilio partnered with the Board and Executive Committee of Meridian Logistics across a 16-month comprehensive restructuring. We redesigned regional routing economics, overhauled enterprise sales contracts, and embedded a modern performance scorecard.',
    impact: 'Engineered a 42% EBITDA uplift within 12 months while boosting driver and operations retention by 34%.',
    heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&auto=format&fit=crop&q=80',
    ],
    tags: ['Supply Chain', 'Org Design', 'Commercial Strategy', 'EBITDA Optimization'],
    deliverables: [
      'Fleet routing and margin contribution model',
      'Unified enterprise pricing schedule',
      'Executive governance cadence',
      'Post-restructuring talent mapping',
    ],
    metrics: [
      { label: 'EBITDA Expansion', value: '+42%' },
      { label: 'Contract Cycle Time', value: '-38%' },
      { label: 'Enterprise Retainer', value: '$48M ARR' },
    ],
    testimonial: {
      quote: 'Consilio turned months of circular debate into a clear plan in weeks — then stayed to make sure it actually happened.',
      author: 'Daniel Roth',
      role: 'Chief Executive Officer',
      avatar: 'https://framerusercontent.com/images/9N75gxHckeTX9pwdT7sqmJznf30.jpg',
    },
  },
  {
    id: 'apex-cloud',
    number: '02',
    title: 'Apex Cloud Systems Repositioning',
    client: 'Apex Technologies',
    category: 'Growth Architecture & Category Positioning',
    year: '2025',
    description: 'Conducted rigorous customer win/loss analysis and pricing architecture redesign to transition Apex from mid-market point solution to a tier-1 enterprise infrastructure player ahead of Series C financing.',
    impact: 'Tripled average annual contract value (ACV) and established category leadership across financial service verticals.',
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&auto=format&fit=crop&q=80',
    ],
    tags: ['B2B SaaS', 'Category Positioning', 'GTM Enablement', 'Pricing Strategy'],
    deliverables: [
      'Enterprise ICP definition matrix',
      'Tiered consumption pricing calculator',
      'Executive advisory sales playbook',
      'Series C narrative & data room diligence',
    ],
    metrics: [
      { label: 'Enterprise ACV', value: '3.2x' },
      { label: 'Sales Win Rate', value: '64%' },
      { label: 'Capital Raised', value: '$65M' },
    ],
    testimonial: {
      quote: 'They brought sharp analytical discipline and immediate credibility to our go-to-market transformation.',
      author: 'Alex Chen',
      role: 'Founder & CEO',
      avatar: 'https://framerusercontent.com/images/SHNQhPCrBXVwYbhDELNDpeytaw.jpg',
    },
  },
  {
    id: 'novum-health',
    number: '03',
    title: 'Novum Health Operating Integration',
    client: 'Novum Healthcare Group',
    category: 'Post-Merger Integration & Org Architecture',
    year: '2024–2025',
    description: 'Post-merger integration of three regional healthcare systems comprising 14 acute-care hospitals and 18,000 employees under a unified clinical and administrative operating model.',
    impact: 'Unlocked $92M in recurring procurement and operational synergies while improving clinician satisfaction scores.',
    heroImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&auto=format&fit=crop&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=900&auto=format&fit=crop&q=80',
    ],
    tags: ['Healthcare', 'Post-Merger Integration', 'Org Design', 'Synergy Realization'],
    deliverables: [
      'Centralized shared-service design',
      'Clinical procurement harmonization',
      'Cross-hospital culture blueprint',
      'Consolidated executive reporting',
    ],
    metrics: [
      { label: 'Synergies Realized', value: '$92M' },
      { label: 'Hospital Systems', value: '14' },
      { label: 'Integration Timeline', value: '9 Months' },
    ],
    testimonial: {
      quote: 'Consilio navigated complex medical leadership and administrative politics with incredible finesse and clarity.',
      author: 'Elena Rostova',
      role: 'Chief Strategy Officer',
      avatar: 'https://framerusercontent.com/images/c8rZRsPlu7j4G2ysQ92eOT1SQ.jpg',
    },
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'strategic-sprint',
    name: 'Strategic Clarity Sprint',
    subtitle: 'For leadership teams confronting a single critical decision or inflection point.',
    format: 'Intensive 3-Week Engagement',
    timeline: '3 Weeks',
    fee: 'Fixed Engagement Fee',
    isPopular: false,
    features: [
      'Rapid diagnostic of existing commercial and market data',
      'Direct interview access with 10–15 key stakeholders and customers',
      'Empirical market modeling & risk/reward scenario matrix',
      'Full-day executive committee working session',
      'Final Board-ready decision memorandum and delivery roadmap',
      'Dedicated Managing Partner commitment',
    ],
  },
  {
    id: 'growth-architecture',
    name: 'Growth & GTM Architecture',
    subtitle: 'Comprehensive repositioning and pipeline acceleration for scaling firms.',
    format: '8-Week Collaborative Build',
    timeline: '8 Weeks',
    fee: 'Project & Milestone Based',
    isPopular: true,
    features: [
      'Full commercial architecture and revenue engine audit',
      'Value-based pricing overhaul & contract tiering',
      'Sales motion redesign and pipeline velocity enablement',
      'Customer lifetime retention & expansion framework',
      'Weekly cross-functional steering committee sessions',
      '30-day post-launch transition support & telemetry',
    ],
  },
  {
    id: 'executive-advisory',
    name: 'Retained Executive Advisory',
    subtitle: 'Ongoing strategic counsel, pressure-testing, and transformation oversight.',
    format: 'Quarterly Dedicated Retainer',
    timeline: 'Ongoing / 6-Month Min',
    fee: 'Monthly Strategic Retainer',
    isPopular: false,
    features: [
      'Direct 24/7 partner access for CEO and Board members',
      'Bi-weekly strategic review and capital allocation check-ins',
      'Ad hoc diligence and rapid evaluation of M&A / partnership opportunities',
      'Continuous leadership coaching and scorecard reviews',
      'Priority team allocation for emergent operational sprints',
      'Guaranteed non-compete exclusivity within your vertical',
    ],
  },
];

export const FAQS_DATA: FAQItem[] = [
  {
    category: 'Engagements',
    question: 'How quickly can a Consilio engagement begin?',
    answer: 'We typically mobilize a dedicated team within 7 to 10 business days following scoping alignment. Because we maintain strict partner capacity constraints, we only accept 4 new client engagements per quarter.',
  },
  {
    category: 'Team',
    question: 'Who will actually work on our account?',
    answer: 'Every Consilio engagement is personally led by a named Partner who has operator and C-suite experience. You will never see junior associates or bait-and-switch staffing on your account.',
  },
  {
    category: 'Approach',
    question: 'How do you differentiate from legacy strategy firms?',
    answer: 'Legacy firms charge premium fees for junior teams to build 200-page slide decks, then exit. Consilio focuses on concise, actionable synthesis, embeds directly with your executives, and stays accountable for delivery through the build phase.',
  },
  {
    category: 'Confidentiality',
    question: 'How do you handle confidentiality and industry exclusivity?',
    answer: 'We operate under stringent non-disclosure agreements and offer complete category exclusivity during active retainer and strategic advisory partnerships.',
  },
  {
    category: 'Structure',
    question: 'What is the commitment required from our internal team?',
    answer: 'We design our process to respect executive time. Typically, leadership commits 2-3 hours weekly for key synthesis check-ins, while we carry the heavy analytical and documentation lifting.',
  },
];
