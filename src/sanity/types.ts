import type { SanityImageSource } from "@sanity/image-url";

export type Stat = {
  _id: string;
  value: string;
  label: string;
};

export type Sector = {
  _id: string;
  title: string;
  icon: string;
  description: string;
  tags?: string[];
  colSpan?: string;
};

export type FeaturedCaseStudy = {
  _id: string;
  title: string;
  slug: string;
  category: string;
  metric?: string;
  description: string;
};

export type ProcessStep = {
  _id: string;
  icon: string;
  title: string;
  text: string;
};

export type Principle = {
  _id: string;
  icon: string;
  title: string;
  text: string;
};

export type TimelineEntry = {
  _id: string;
  period: string;
  role: string;
  text: string;
  active?: boolean;
};

export type Skill = {
  _id: string;
  name: string;
  score: number;
};

export type Tool = {
  _id: string;
  name: string;
};

export type Certification = {
  _id: string;
  icon: string;
  title: string;
  description: string;
};

export type CaseStudy = {
  _id: string;
  title: string;
  slug: string;
  year: string;
  category: string;
  metric?: string;
  description: string;
  techStack?: Array<{ _key: string; icon: string; label: string }>;
  clientInfo?: {
    industry?: string;
    timeline?: string;
    teamSize?: string;
    role?: string;
  };
  deliverables?: string[];
  bottleneckTitle?: string;
  bottleneckBody?: string[];
  bottleneckImage?: SanityImageSource;
  approachSteps?: Array<{ _key: string; step: string; title: string; text: string }>;
  architectureTitle?: string;
  architectureDescription?: string;
  architectureHighlights?: Array<{
    _key: string;
    icon: string;
    title: string;
    text: string;
    featured?: boolean;
  }>;
  topologyImage?: SanityImageSource;
  performanceMetrics?: Array<{ _key: string; value: string; description: string }>;
};
