export interface Project {
  id: string;
  number: string;
  title: string;
  client: string;
  category: string;
  year: string;
  description: string;
  impact: string;
  heroImage: string;
  galleryImages: string[];
  tags: string[];
  deliverables: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    avatar: string;
  };
}

export interface SolutionItem {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  deliverables: string[];
  impactMetric: string;
  impactLabel: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  experience: string;
  image: string;
  linkedin: string;
}

export interface PrincipleItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  quote: string;
  highlight: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  stats?: string;
  statsLabel?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  format: string;
  timeline: string;
  fee: string;
  isPopular: boolean;
  features: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
