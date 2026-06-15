import Link from "next/link";
import { CardArrow, CardIcon, GlassCard, SectionHeading, TagPill } from "@/components/GlassCard";
import { Icon } from "@/components/Icon";
import { SiteFooter, SiteNav } from "@/components/SiteShell";

const stats = [
  { value: "8+", label: "Years Engineering" },
  { value: "40+", label: "Products Shipped" },
  { value: "94%", label: "Avg. Latency Gain" },
  { value: "12", label: "Enterprise Clients" },
];

const sectors = [
  {
    title: "AI SaaS Projects",
    icon: "memory",
    description:
      "Scalable cloud architectures integrating advanced LLMs and predictive models for enterprise automation.",
    tags: ["Python", "TensorFlow"],
    colSpan: "md:col-span-8",
    scanDelay: undefined,
    hasTags: true,
    href: "/case-study",
  },
  {
    title: "Web-App Dev",
    icon: "language",
    description: "High-performance React/Next.js platforms with deep analytical dashboards.",
    colSpan: "md:col-span-4",
    scanDelay: "1s",
    hasTags: false,
    href: "/case-study",
  },
  {
    title: "Website Development",
    icon: "web",
    description: "Immersive, conversion-optimized marketing assets utilizing WebGL and minimal physics.",
    colSpan: "md:col-span-5",
    scanDelay: "2s",
    hasTags: false,
    href: "/case-study",
  },
  {
    title: "App Development",
    icon: "smartphone",
    description:
      "Native iOS and Android environments engineered for zero-latency interactions and offline data sync.",
    tags: ["Swift", "Kotlin"],
    colSpan: "md:col-span-7",
    scanDelay: "0.5s",
    hasTags: true,
    href: "/case-study",
  },
];

const featured = [
  {
    title: "Quantum Node Architecture",
    category: "FinTech / AI",
    metric: "-94% latency",
    description: "Neural topology redesign for high-frequency trading infrastructure.",
    href: "/case-study",
  },
  {
    title: "Enterprise LLM Gateway",
    category: "SaaS",
    metric: "3.2M req/day",
    description: "Multi-tenant inference layer with policy routing and observability.",
    href: "/case-study",
  },
  {
    title: "Clinical Vision Pipeline",
    category: "Healthcare",
    metric: "99.1% accuracy",
    description: "Real-time diagnostic assist system deployed across 18 clinics.",
    href: "/case-study",
  },
];

const process = [
  {
    icon: "radar",
    title: "Discovery",
    text: "Map constraints, data topology, and success metrics before writing code.",
  },
  {
    icon: "architecture",
    title: "Architecture",
    text: "Design deterministic systems from probabilistic models with clear failure modes.",
  },
  {
    icon: "rocket_launch",
    title: "Deployment",
    text: "Ship with MLOps pipelines, monitoring, and rollback-safe release paths.",
  },
];

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="relative mx-auto w-full max-w-[1440px] pb-32 pt-40">
        <div className="pointer-events-none absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-cyan/5 blur-[120px]" />

        <section className="glow-bg relative flex min-h-[716px] flex-col items-start justify-center px-6 md:px-20">
          <div className="relative z-10 max-w-4xl">
            <div className="mb-8 inline-flex items-center gap-2 border-l-2 border-cyan pl-4">
              <span className="label-mono text-xs uppercase tracking-widest text-[#c9c6c5]">
                System Online
              </span>
            </div>
            <h1 className="headline-font mb-8 text-[40px] leading-[48px] font-bold tracking-tight md:text-[72px] md:leading-[80px]">
              Precision AI Engineering.
              <br />
              <span className="text-cyan opacity-90">Custom Software Built for the Future.</span>
            </h1>
            <p className="mb-12 max-w-2xl text-lg leading-relaxed text-muted">
              Architecting next-generation digital ecosystems. I combine hyper-minimalist design with
              complex machine learning capabilities to create authoritative enterprise solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/case-study"
                className="glass-panel group relative inline-flex overflow-hidden rounded-full border border-white/20 px-8 py-4 text-sm transition-all duration-300 hover:border-cyan hover:text-cyan"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Inquire for Custom Development
                  <Icon name="arrow_forward" size={18} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-8 py-4 text-sm text-muted transition-colors hover:border-white/20 hover:text-foreground"
              >
                <Icon name="person" size={18} />
                About Me
              </Link>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 px-6 py-16 md:px-20">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="headline-font mb-2 text-4xl font-bold text-cyan md:text-5xl">{stat.value}</p>
                <p className="label-mono text-xs text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 py-32 md:px-20">
          <SectionHeading
            title="Development Sectors"
            subtitle="Specialized engineering across AI systems, product platforms, and high-performance interfaces."
          />
          <div className="grid auto-rows-[320px] grid-cols-1 gap-2 md:grid-cols-12">
            {sectors.map((sector) => (
              <GlassCard
                key={sector.title}
                className={`flex flex-col justify-between p-8 ${sector.colSpan}`}
                scanDelay={sector.scanDelay}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10">
                  <CardIcon name={sector.icon} />
                  <h3 className="headline-font mb-2 text-[32px] leading-[40px] font-medium">{sector.title}</h3>
                  <p className="max-w-md text-sm leading-relaxed text-muted">{sector.description}</p>
                </div>
                <div
                  className={`relative z-10 flex items-end ${sector.hasTags ? "justify-between" : "justify-end"}`}
                >
                  {sector.tags && (
                    <div className="flex gap-2">
                      {sector.tags.map((tag) => (
                        <TagPill key={tag} label={tag} />
                      ))}
                    </div>
                  )}
                  <Link href={sector.href} aria-label={`View ${sector.title}`}>
                    <CardArrow />
                  </Link>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        <section className="px-6 pb-32 md:px-20">
          <SectionHeading title="Selected Work" subtitle="Recent case studies with measurable outcomes." />
          <div className="grid gap-6 md:grid-cols-3">
            {featured.map((item, i) => (
              <GlassCard key={item.title} className="flex flex-col gap-6 p-8" scanDelay={`${i * 0.5}s`}>
                <div className="flex items-center justify-between">
                  <span className="label-mono text-xs text-cyan">{item.category}</span>
                  <span className="label-mono text-xs text-[#8e9192]">{item.metric}</span>
                </div>
                <div>
                  <h3 className="headline-font mb-3 text-2xl font-medium">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-sm text-cyan transition-colors hover:text-foreground"
                >
                  Read case study
                  <Icon name="arrow_forward" size={16} />
                </Link>
              </GlassCard>
            ))}
          </div>
        </section>

        <section className="px-6 pb-32 md:px-20">
          <SectionHeading title="Engagement Model" subtitle="A repeatable process for shipping production-grade AI systems." />
          <div className="grid gap-6 md:grid-cols-3">
            {process.map((step, i) => (
              <GlassCard key={step.title} className="p-8" scanDelay={`${i * 0.4}s`}>
                <Icon name={step.icon} size={28} className="mb-6 text-cyan" />
                <h3 className="headline-font mb-3 text-2xl font-medium">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{step.text}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        <section className="mx-6 md:mx-20">
          <GlassCard className="relative overflow-hidden rounded-3xl p-12 md:p-16" scanDelay="0.2s">
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-cyan/10 blur-[100px]" />
            <div className="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <p className="label-mono mb-4 text-xs text-cyan">AVAILABLE FOR Q3 2026</p>
                <h2 className="headline-font mb-4 text-4xl font-medium">Let&apos;s build your next system.</h2>
                <p className="text-muted">
                  From architecture to deployment, I partner with teams that need precision engineering
                  for mission-critical AI products.
                </p>
              </div>
              <Link
                href="mailto:hello@musabkashif.com"
                className="inline-flex items-center gap-2 rounded-full bg-cyan px-8 py-4 text-sm font-medium text-[#00363a] transition-all hover:shadow-[0_0_25px_rgba(0,238,252,0.4)]"
              >
                <Icon name="mail" size={18} />
                Start a Project
              </Link>
            </div>
          </GlassCard>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
