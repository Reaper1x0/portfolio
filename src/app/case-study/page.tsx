import Image from "next/image";
import Link from "next/link";
import { GlassCard } from "@/components/GlassCard";
import { Icon } from "@/components/Icon";
import { SiteFooter, SiteNav } from "@/components/SiteShell";

const stack = [
  { icon: "code", label: "Python 3.11" },
  { icon: "memory", label: "TensorFlow 2.x" },
  { icon: "database", label: "PostgreSQL Vector" },
  { icon: "web", label: "React / Next.js" },
  { icon: "cloud", label: "AWS SageMaker" },
];

const deliverables = [
  "Graph Neural Network inference service",
  "Real-time load prediction module",
  "Observability dashboard with anomaly alerts",
  "Zero-downtime migration runbook",
];

const approach = [
  {
    step: "01",
    title: "Audit & Baseline",
    text: "Profiled queue latency, packet loss, and resource starvation under peak volatility windows.",
  },
  {
    step: "02",
    title: "Topology Modeling",
    text: "Mapped transaction relationships as a dynamic graph with semantic vector clustering.",
  },
  {
    step: "03",
    title: "Production Rollout",
    text: "Phased deployment with shadow traffic validation before full cutover.",
  },
];

const bottleneckImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCqSB4kpUgQktMLrGPVBgxDv2Fcdpr94od2eCuzgZN6uYPMIU6Ks-FQj9JMAu7FuvwXcJ2v9begSBcLO6aXrWfAGpINWloTmEP9KW-gG1OIt6wkVoa6QEi-YA1l12zTTRCnDpg-hVZ7OZvcYcgrqeOot8mq6G-jx5ixbVyBOSM-74cynLRWQ4TfuGpvLtdz2xAxPk6ZLkwprxBRDQLQl3zTALM0Buw62XdIRJfRnAwv6q3907L1b8GolJbh3jGAsEY1xMeGfvJOww";

const topologyImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBuPxoZY-fnnFm2JQI3UIKBCo7GKJqwZLw-vwPEW273AcH2e3Wf9rS1-fnIFcTfTAqoEQ2HAk3ly17jg0KaT4GFBk6ns0v-lBDCumlD8XmJgpeD-4rZlZY5NAFy75C3zp1SBrj0WiS3CA5t-AmhUIK8DHiSxE0gSE0ZTMyo34T1Ibo5vNEEnbLvAlqaZ0BQQqvWB9gHKzm9iQinfKSv8G0gLcjklGOlMPnltYHHhF5wfyPxtwLHhn5cqoqzi3nlHDGIshnp5V7EcQ";

export default function CaseStudyPage() {
  return (
    <>
      <SiteNav activePath="/case-study" />
      <main className="mx-auto w-full max-w-[1440px] px-6 pb-[160px] pt-[160px] md:px-20">
        <header className="mb-[120px] max-w-4xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="tag-active label-mono rounded-sm px-3 py-1 text-xs text-muted">
              CASE STUDY
            </span>
            <span className="label-mono text-xs text-[#8e9192]">2024</span>
          </div>
          <h1 className="headline-font mb-8 text-[40px] leading-[48px] font-bold md:text-[72px] md:leading-[80px]">
            Quantum Node Architecture Redesign
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted">
            A complete overhaul of a legacy financial processing system, implementing advanced neural
            network clustering to reduce latency by 94% while maintaining absolute data integrity in
            high-frequency trading environments.
          </p>
        </header>

        <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-12">
          <aside className="mb-12 flex h-fit flex-col gap-8 lg:sticky lg:top-[160px] lg:col-span-3 lg:mb-0">
            <GlassCard className="overflow-hidden p-6">
              <h3 className="label-mono mb-4 text-xs uppercase text-cyan">Tech Stack</h3>
              <ul className="flex flex-col gap-3">
                {stack.map((item) => (
                  <li key={item.label} className="flex items-center gap-3">
                    <Icon name={item.icon} size={20} className="text-[#8e9192]" />
                    <span className="text-sm text-muted">{item.label}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
            <GlassCard className="p-6" scanDelay="1.5s">
              <h3 className="label-mono mb-4 text-xs uppercase text-cyan">Client Info</h3>
              <div className="space-y-4">
                <div>
                  <span className="label-mono mb-1 block text-xs text-[#8e9192]">Industry</span>
                  <span className="text-sm">FinTech / Trading</span>
                </div>
                <div>
                  <span className="label-mono mb-1 block text-xs text-[#8e9192]">Timeline</span>
                  <span className="text-sm">8 Months</span>
                </div>
                <div>
                  <span className="label-mono mb-1 block text-xs text-[#8e9192]">Team Size</span>
                  <span className="text-sm">6 Engineers</span>
                </div>
                <div>
                  <span className="label-mono mb-1 block text-xs text-[#8e9192]">Role</span>
                  <span className="text-sm">Lead AI Architect</span>
                </div>
              </div>
            </GlassCard>
            <GlassCard className="p-6" scanDelay="2s">
              <h3 className="label-mono mb-4 text-xs uppercase text-cyan">Deliverables</h3>
              <ul className="space-y-3">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted">
                    <Icon name="check_circle" size={16} className="mt-0.5 shrink-0 text-cyan" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </aside>

          <div className="flex flex-col gap-[120px] lg:col-span-9">
            <section className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
              <div className="order-2 flex flex-col gap-6 md:order-1">
                <div className="flex items-center gap-4">
                  <Icon name="warning" size={24} className="text-[#ffb4ab]" />
                  <h2 className="headline-font text-[32px] font-medium">The Bottleneck</h2>
                </div>
                <p className="text-lg leading-relaxed text-muted">
                  The existing infrastructure relied on linear processing queues. During market
                  volatility spikes, the system experienced severe latency degradation, occasionally
                  leading to milliseconds of delay—an unacceptable metric in algorithmic trading.
                </p>
                <p className="text-lg leading-relaxed text-muted">
                  We needed a solution that could predict load spikes and dynamically allocate
                  resources without manual intervention, treating data not as a stream, but as a
                  multi-dimensional topology.
                </p>
              </div>
              <div className="relative order-1 aspect-square w-full md:order-2 md:aspect-[4/3]">
                <GlassCard className="relative h-full min-h-[280px]" hoverGlow={false}>
                  <Image
                    src={bottleneckImage}
                    alt="Financial data visualization"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover opacity-60 mix-blend-screen"
                  />
                </GlassCard>
              </div>
            </section>

            <section>
              <h2 className="headline-font mb-8 inline-block border-b border-white/12 pb-4 text-[32px] font-medium">
                Implementation Approach
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {approach.map((item, i) => (
                  <GlassCard key={item.step} className="p-8" scanDelay={`${i * 0.4}s`}>
                    <p className="label-mono mb-4 text-xs text-cyan">{item.step}</p>
                    <h3 className="headline-font mb-3 text-xl font-medium">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted">{item.text}</p>
                  </GlassCard>
                ))}
              </div>
            </section>

            <section className="flex flex-col gap-12">
              <div className="max-w-3xl">
                <div className="mb-6 flex items-center gap-4">
                  <Icon name="architecture" size={24} className="text-cyan" />
                  <h2 className="headline-font text-[32px] font-medium">Neural Topology Architecture</h2>
                </div>
                <p className="mb-8 text-lg leading-relaxed text-muted">
                  We deployed a bespoke Graph Neural Network (GNN) that maps transaction relationships
                  in real-time. By treating the trading network as a fluid graph, the AI anticipates
                  bottlenecks before they occur, routing data packets through optimal sub-nodes.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <GlassCard className="flex flex-col gap-4 p-8" scanDelay="0.3s">
                  <Icon name="hub" size={24} className="text-[#8e9192]" />
                  <h4 className="text-lg font-bold">Node Clustering</h4>
                  <p className="text-sm text-muted">
                    Dynamic grouping of high-frequency data streams based on semantic vector similarity.
                  </p>
                </GlassCard>
                <GlassCard
                  className="group relative flex min-h-[280px] flex-col justify-end gap-4 overflow-hidden p-8 md:col-span-2"
                  scanDelay="0.8s"
                >
                  <div className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-40">
                    <Image
                      src={topologyImage}
                      alt="Neural network topology"
                      fill
                      sizes="(max-width: 768px) 100vw, 66vw"
                      className="object-cover mix-blend-screen"
                    />
                  </div>
                  <div className="relative z-10">
                    <Icon name="bolt" size={24} className="mb-2 text-cyan" />
                    <h4 className="text-lg font-bold">Predictive Allocation</h4>
                    <p className="max-w-md text-sm text-muted">
                      Using historical tensor data, the model achieves a 99.8% accuracy rate in
                      predicting resource starvation events 500ms before they manifest.
                    </p>
                  </div>
                </GlassCard>
              </div>
            </section>

            <GlassCard className="relative overflow-hidden rounded-3xl p-12 md:p-16" scanDelay="1.2s">
              <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-cyan/10 blur-[120px]" />
              <div className="relative z-10 mb-12 flex items-center gap-4">
                <Icon name="monitoring" size={24} />
                <h2 className="headline-font text-[32px] font-medium">Performance Metrics</h2>
              </div>
              <div className="relative z-10 grid grid-cols-1 gap-12 md:grid-cols-3">
                <div>
                  <div className="headline-font mb-2 text-[40px] font-bold text-cyan md:text-[72px] md:leading-[80px]">
                    -94%
                  </div>
                  <div className="border-t border-outline/30 pt-4 text-lg text-muted">
                    Reduction in peak-load latency across all node clusters.
                  </div>
                </div>
                <div>
                  <div className="headline-font mb-2 text-[40px] font-bold text-cyan md:text-[72px] md:leading-[80px]">
                    0.2ms
                  </div>
                  <div className="border-t border-outline/30 pt-4 text-lg text-muted">
                    Average response time during maximum market volatility.
                  </div>
                </div>
                <div>
                  <div className="headline-font mb-2 text-[40px] font-bold text-cyan md:text-[72px] md:leading-[80px]">
                    100%
                  </div>
                  <div className="border-t border-outline/30 pt-4 text-lg text-muted">
                    Data integrity maintained with zero dropped packets.
                  </div>
                </div>
              </div>
            </GlassCard>

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
