import Image from "next/image";
import Link from "next/link";
import { GlassCard } from "@/components/GlassCard";
import { Icon } from "@/components/Icon";
import { SiteFooter, SiteNav } from "@/components/SiteShell";
import { getImageUrl } from "@/sanity/image";
import type { CaseStudy } from "@/sanity/types";

type CaseStudyViewProps = {
  caseStudy: CaseStudy;
};

export function CaseStudyView({ caseStudy }: CaseStudyViewProps) {
  const bottleneckImage = getImageUrl(caseStudy.bottleneckImage);
  const topologyImage = getImageUrl(caseStudy.topologyImage);
  const highlights = caseStudy.architectureHighlights ?? [];
  const regularHighlights = highlights.filter((item) => !item.featured);
  const featuredHighlight = highlights.find((item) => item.featured);

  return (
    <>
      <SiteNav activePath="/case-study" />
      <main className="mx-auto w-full max-w-[1440px] px-6 pb-[160px] pt-[160px] md:px-20">
        <header className="mb-[120px] max-w-4xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="tag-active label-mono rounded-sm px-3 py-1 text-xs text-muted">
              CASE STUDY
            </span>
            <span className="label-mono text-xs text-[#8e9192]">{caseStudy.year}</span>
          </div>
          <h1 className="headline-font mb-8 text-[40px] leading-[48px] font-bold md:text-[72px] md:leading-[80px]">
            {caseStudy.title}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted">{caseStudy.description}</p>
        </header>

        <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-12">
          <aside className="mb-12 flex h-fit flex-col gap-8 lg:sticky lg:top-[160px] lg:col-span-3 lg:mb-0">
            {caseStudy.techStack && caseStudy.techStack.length > 0 && (
              <GlassCard className="overflow-hidden p-6">
                <h3 className="label-mono mb-4 text-xs uppercase text-cyan">Tech Stack</h3>
                <ul className="flex flex-col gap-3">
                  {caseStudy.techStack.map((item) => (
                    <li key={item._key} className="flex items-center gap-3">
                      <Icon name={item.icon} size={20} className="text-[#8e9192]" />
                      <span className="text-sm text-muted">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            )}

            {caseStudy.clientInfo && (
              <GlassCard className="p-6" scanDelay="1.5s">
                <h3 className="label-mono mb-4 text-xs uppercase text-cyan">Client Info</h3>
                <div className="space-y-4">
                  {caseStudy.clientInfo.industry && (
                    <div>
                      <span className="label-mono mb-1 block text-xs text-[#8e9192]">Industry</span>
                      <span className="text-sm">{caseStudy.clientInfo.industry}</span>
                    </div>
                  )}
                  {caseStudy.clientInfo.timeline && (
                    <div>
                      <span className="label-mono mb-1 block text-xs text-[#8e9192]">Timeline</span>
                      <span className="text-sm">{caseStudy.clientInfo.timeline}</span>
                    </div>
                  )}
                  {caseStudy.clientInfo.teamSize && (
                    <div>
                      <span className="label-mono mb-1 block text-xs text-[#8e9192]">Team Size</span>
                      <span className="text-sm">{caseStudy.clientInfo.teamSize}</span>
                    </div>
                  )}
                  {caseStudy.clientInfo.role && (
                    <div>
                      <span className="label-mono mb-1 block text-xs text-[#8e9192]">Role</span>
                      <span className="text-sm">{caseStudy.clientInfo.role}</span>
                    </div>
                  )}
                </div>
              </GlassCard>
            )}

            {caseStudy.deliverables && caseStudy.deliverables.length > 0 && (
              <GlassCard className="p-6" scanDelay="2s">
                <h3 className="label-mono mb-4 text-xs uppercase text-cyan">Deliverables</h3>
                <ul className="space-y-3">
                  {caseStudy.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted">
                      <Icon name="check_circle" size={16} className="mt-0.5 shrink-0 text-cyan" />
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            )}
          </aside>

          <div className="flex flex-col gap-[120px] lg:col-span-9">
            {(caseStudy.bottleneckBody?.length || bottleneckImage) && (
              <section className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                <div className="order-2 flex flex-col gap-6 md:order-1">
                  <div className="flex items-center gap-4">
                    <Icon name="warning" size={24} className="text-[#ffb4ab]" />
                    <h2 className="headline-font text-[32px] font-medium">
                      {caseStudy.bottleneckTitle ?? "The Bottleneck"}
                    </h2>
                  </div>
                  {caseStudy.bottleneckBody?.map((paragraph) => (
                    <p key={paragraph} className="text-lg leading-relaxed text-muted">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {bottleneckImage && (
                  <div className="relative order-1 aspect-square w-full md:order-2 md:aspect-[4/3]">
                    <GlassCard className="relative h-full min-h-[280px]" hoverGlow={false}>
                      <Image
                        src={bottleneckImage}
                        alt={caseStudy.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover opacity-60 mix-blend-screen"
                      />
                    </GlassCard>
                  </div>
                )}
              </section>
            )}

            {caseStudy.approachSteps && caseStudy.approachSteps.length > 0 && (
              <section>
                <h2 className="headline-font mb-8 inline-block border-b border-white/12 pb-4 text-[32px] font-medium">
                  Implementation Approach
                </h2>
                <div className="grid gap-6 md:grid-cols-3">
                  {caseStudy.approachSteps.map((item, i) => (
                    <GlassCard key={item._key} className="p-8" scanDelay={`${i * 0.4}s`}>
                      <p className="label-mono mb-4 text-xs text-cyan">{item.step}</p>
                      <h3 className="headline-font mb-3 text-xl font-medium">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-muted">{item.text}</p>
                    </GlassCard>
                  ))}
                </div>
              </section>
            )}

            {(caseStudy.architectureTitle ||
              caseStudy.architectureDescription ||
              highlights.length > 0) && (
              <section className="flex flex-col gap-12">
                <div className="max-w-3xl">
                  <div className="mb-6 flex items-center gap-4">
                    <Icon name="architecture" size={24} className="text-cyan" />
                    <h2 className="headline-font text-[32px] font-medium">
                      {caseStudy.architectureTitle ?? "Architecture"}
                    </h2>
                  </div>
                  {caseStudy.architectureDescription && (
                    <p className="mb-8 text-lg leading-relaxed text-muted">
                      {caseStudy.architectureDescription}
                    </p>
                  )}
                </div>
                {highlights.length > 0 && (
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {regularHighlights.map((item, i) => (
                      <GlassCard key={item._key} className="flex flex-col gap-4 p-8" scanDelay={`${i * 0.3}s`}>
                        <Icon name={item.icon} size={24} className="text-[#8e9192]" />
                        <h4 className="text-lg font-bold">{item.title}</h4>
                        <p className="text-sm text-muted">{item.text}</p>
                      </GlassCard>
                    ))}
                    {featuredHighlight && (
                      <GlassCard
                        className="group relative flex min-h-[280px] flex-col justify-end gap-4 overflow-hidden p-8 md:col-span-2"
                        scanDelay="0.8s"
                      >
                        {topologyImage && (
                          <div className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-40">
                            <Image
                              src={topologyImage}
                              alt={featuredHighlight.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 66vw"
                              className="object-cover mix-blend-screen"
                            />
                          </div>
                        )}
                        <div className="relative z-10">
                          <Icon name={featuredHighlight.icon} size={24} className="mb-2 text-cyan" />
                          <h4 className="text-lg font-bold">{featuredHighlight.title}</h4>
                          <p className="max-w-md text-sm text-muted">{featuredHighlight.text}</p>
                        </div>
                      </GlassCard>
                    )}
                  </div>
                )}
              </section>
            )}

            {caseStudy.performanceMetrics && caseStudy.performanceMetrics.length > 0 && (
              <GlassCard className="relative overflow-hidden rounded-3xl p-12 md:p-16" scanDelay="1.2s">
                <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-cyan/10 blur-[120px]" />
                <div className="relative z-10 mb-12 flex items-center gap-4">
                  <Icon name="monitoring" size={24} />
                  <h2 className="headline-font text-[32px] font-medium">Performance Metrics</h2>
                </div>
                <div className="relative z-10 grid grid-cols-1 gap-12 md:grid-cols-3">
                  {caseStudy.performanceMetrics.map((metric) => (
                    <div key={metric._key}>
                      <div className="headline-font mb-2 text-[40px] font-bold text-cyan md:text-[72px] md:leading-[80px]">
                        {metric.value}
                      </div>
                      <div className="border-t border-outline/30 pt-4 text-lg text-muted">
                        {metric.description}
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            )}

            <GlassCard className="p-10 md:p-12" scanDelay="1.6s">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl">
                  <p className="label-mono mb-3 text-xs text-cyan">NEXT PROJECT</p>
                  <h3 className="headline-font mb-3 text-3xl font-medium">Explore more work</h3>
                  <p className="text-muted">
                    See how similar architecture patterns were applied across SaaS, healthcare, and
                    enterprise automation products.
                  </p>
                </div>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm transition-colors hover:border-cyan hover:text-cyan"
                >
                  Back to portfolio
                  <Icon name="arrow_forward" size={16} />
                </Link>
              </div>
            </GlassCard>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
