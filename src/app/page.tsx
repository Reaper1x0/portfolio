import Link from "next/link";
import { CardArrow, CardIcon, GlassCard, SectionHeading, TagPill } from "@/components/GlassCard";
import { Icon } from "@/components/Icon";
import { SiteFooter, SiteNav } from "@/components/SiteShell";
import { sanityFetch } from "@/sanity/fetch";
import {
  FEATURED_CASE_STUDIES_QUERY,
  PROCESS_STEPS_QUERY,
  SECTORS_QUERY,
  STATS_QUERY,
} from "@/sanity/queries";
import type { FeaturedCaseStudy, ProcessStep, Sector, Stat } from "@/sanity/types";

const scanDelays = ["", "1s", "2s", "0.5s"];

export default async function Home() {
  const [stats, sectors, featured, process] = await Promise.all([
    sanityFetch<Stat[]>({ query: STATS_QUERY }),
    sanityFetch<Sector[]>({ query: SECTORS_QUERY }),
    sanityFetch<FeaturedCaseStudy[]>({ query: FEATURED_CASE_STUDIES_QUERY }),
    sanityFetch<ProcessStep[]>({ query: PROCESS_STEPS_QUERY }),
  ]);

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

        {stats.length > 0 && (
          <section className="border-y border-white/10 px-6 py-16 md:px-20">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat._id}>
                  <p className="headline-font mb-2 text-4xl font-bold text-cyan md:text-5xl">{stat.value}</p>
                  <p className="label-mono text-xs text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {sectors.length > 0 && (
          <section className="px-6 py-32 md:px-20">
            <SectionHeading
              title="Development Sectors"
              subtitle="Specialized engineering across AI systems, product platforms, and high-performance interfaces."
            />
            <div className="grid auto-rows-[320px] grid-cols-1 gap-2 md:grid-cols-12">
              {sectors.map((sector, i) => (
                <GlassCard
                  key={sector._id}
                  className={`flex flex-col justify-between p-8 ${sector.colSpan ?? "md:col-span-4"}`}
                  scanDelay={scanDelays[i]}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative z-10">
                    <CardIcon name={sector.icon} />
                    <h3 className="headline-font mb-2 text-[32px] leading-[40px] font-medium">{sector.title}</h3>
                    <p className="max-w-md text-sm leading-relaxed text-muted">{sector.description}</p>
                  </div>
                  <div
                    className={`relative z-10 flex items-end ${sector.tags?.length ? "justify-between" : "justify-end"}`}
                  >
                    {sector.tags && sector.tags.length > 0 && (
                      <div className="flex gap-2">
                        {sector.tags.map((tag) => (
                          <TagPill key={tag} label={tag} />
                        ))}
                      </div>
                    )}
                    <Link href="/case-study" aria-label={`View ${sector.title}`}>
                      <CardArrow />
                    </Link>
                  </div>
                </GlassCard>
              ))}
            </div>
          </section>
        )}

        {featured.length > 0 && (
          <section className="px-6 pb-32 md:px-20">
            <SectionHeading title="Selected Work" subtitle="Recent case studies with measurable outcomes." />
            <div className="grid gap-6 md:grid-cols-3">
              {featured.map((item, i) => (
                <GlassCard key={item._id} className="flex flex-col gap-6 p-8" scanDelay={`${i * 0.5}s`}>
                  <div className="flex items-center justify-between">
                    <span className="label-mono text-xs text-cyan">{item.category}</span>
                    {item.metric && (
                      <span className="label-mono text-xs text-[#8e9192]">{item.metric}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="headline-font mb-3 text-2xl font-medium">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted">{item.description}</p>
                  </div>
                  <Link
                    href={`/case-study/${item.slug}`}
                    className="inline-flex items-center gap-2 text-sm text-cyan transition-colors hover:text-foreground"
                  >
                    Read case study
                    <Icon name="arrow_forward" size={16} />
                  </Link>
                </GlassCard>
              ))}
            </div>
          </section>
        )}

        {process.length > 0 && (
          <section className="px-6 pb-32 md:px-20">
            <SectionHeading
              title="Engagement Model"
              subtitle="A repeatable process for shipping production-grade AI systems."
            />
            <div className="grid gap-6 md:grid-cols-3">
              {process.map((step, i) => (
                <GlassCard key={step._id} className="p-8" scanDelay={`${i * 0.4}s`}>
                  <Icon name={step.icon} size={28} className="mb-6 text-cyan" />
                  <h3 className="headline-font mb-3 text-2xl font-medium">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{step.text}</p>
                </GlassCard>
              ))}
            </div>
          </section>
        )}

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
