import Image from "next/image";
import { GlassCard, SectionHeading } from "@/components/GlassCard";
import { Icon } from "@/components/Icon";
import { SkillBars } from "@/components/SkillBars";
import { SiteFooter, SiteNav } from "@/components/SiteShell";

const timeline = [
  {
    period: "2021 — PRESENT",
    role: "Principal AI Engineer",
    text: "Architecting foundational models for enterprise SaaS solutions. Leading a team of researchers to optimize transformer models for latency-critical applications in financial tech. Reduced inference time by 40% across edge deployments.",
    active: true,
  },
  {
    period: "2018 — 2021",
    role: "Senior Machine Learning Architect",
    text: "Designed end-to-end ML pipelines for natural language processing tools. Implemented rigorous CI/CD practices for model training, ensuring deterministic and reproducible outcomes across cloud environments.",
  },
  {
    period: "2015 — 2018",
    role: "Data Scientist",
    text: "Developed predictive analytics models utilizing traditional ML algorithms. Built the foundational data lakes that later supported deep learning initiatives.",
  },
];

const certifications = [
  {
    icon: "cloud",
    title: "AWS Certified Machine Learning",
    description:
      "Specialty Certification validating expertise in building, tuning, and deploying ML models on AWS.",
  },
  {
    icon: "memory",
    title: "Google Cloud Professional ML Engineer",
    description:
      "Designing, building, and productionizing ML models to solve business challenges using Google Cloud technologies.",
  },
  {
    icon: "verified",
    title: "DeepLearning.AI Specialization",
    description:
      "Advanced sequence models, attention mechanisms, and foundational understanding of modern AI architectures.",
  },
];

const principles = [
  {
    icon: "psychology",
    title: "Quiet Intelligence",
    text: "Complex systems should feel effortless. I optimize for clarity, not spectacle.",
  },
  {
    icon: "precision_manufacturing",
    title: "Deterministic Delivery",
    text: "Probabilistic models, deterministic outcomes through rigorous validation and observability.",
  },
  {
    icon: "shield",
    title: "Production First",
    text: "Every prototype is designed with deployment, monitoring, and maintainability in mind.",
  },
];

const tools = [
  "Python",
  "PyTorch",
  "TensorFlow",
  "Next.js",
  "Kubernetes",
  "AWS",
  "GCP",
  "PostgreSQL",
  "Ray",
  "Docker",
];

export default function AboutPage() {
  return (
    <>
      <SiteNav activePath="/about" />
      <main className="mx-auto flex w-full max-w-[1440px] flex-col gap-[160px] px-6 pb-32 pt-40 md:px-20">
        <section className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
          <div className="flex flex-col gap-8 md:col-span-7">
            <h1 className="headline-font text-[40px] leading-[48px] font-bold md:text-[72px] md:leading-[80px]">
              The Philosophy of
              <br />
              <span className="text-cyan">AI Development.</span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted">
              Intelligence shouldn&apos;t be loud. My approach to artificial intelligence centers on
              &quot;Quiet Intelligence&quot;—building complex, highly sophisticated systems that operate
              with elegant simplicity. It&apos;s about crafting deterministic outcomes from probabilistic
              models, ensuring every deployment is an act of precision, not just computation.
            </p>
            <p className="max-w-2xl text-lg leading-relaxed text-muted">
              I work with founders and enterprise teams who need more than demos—they need systems that
              survive production load, regulatory scrutiny, and real-world edge cases.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="label-mono rounded border-l-2 border-cyan bg-surface-variant px-3 py-1 text-xs text-foreground">
                System Architect
              </span>
              <span className="label-mono rounded border-l-2 border-cyan bg-surface-variant px-3 py-1 text-xs text-foreground">
                Neural Networks
              </span>
              <span className="label-mono rounded border-l-2 border-cyan bg-surface-variant px-3 py-1 text-xs text-foreground">
                MLOps
              </span>
            </div>
          </div>
          <div className="relative h-[500px] w-full md:col-span-5">
            <GlassCard className="glow-hover relative h-full overflow-hidden transition-all duration-300" hoverGlow={false}>
              <Image
                src="/Me.png"
                alt="Musa B. Kashif portrait"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover opacity-90 mix-blend-luminosity"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <p className="label-mono mb-1 text-xs text-cyan">MUSA B. KASHIF</p>
                <p className="text-sm text-muted">AI Engineer · Product Architect</p>
              </div>
            </GlassCard>
          </div>
        </section>

        <section>
          <SectionHeading title="Core Principles" />
          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((item, i) => (
              <GlassCard key={item.title} className="p-8" scanDelay={`${i * 0.5}s`}>
                <Icon name={item.icon} size={28} className="mb-6 text-cyan" />
                <h3 className="headline-font mb-3 text-2xl font-medium">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.text}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-12">
          <h2 className="headline-font inline-block self-start border-b border-white/12 pb-4 text-[32px] font-medium">
            Trajectory
          </h2>
          <div className="ml-4 flex flex-col gap-16 border-l border-white/12">
            {timeline.map((item) => (
              <article key={item.period} className="relative pl-12">
                <span
                  className={`absolute -left-[6.5px] top-2 h-3 w-3 rounded-full ${
                    item.active
                      ? "bg-cyan shadow-[0_0_10px_rgba(0,238,252,0.8)]"
                      : "bg-outline"
                  }`}
                />
                <p className={`label-mono mb-2 text-xs ${item.active ? "text-cyan" : "text-[#8e9192]"}`}>
                  {item.period}
                </p>
                <h3 className="text-lg font-bold">{item.role}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <SkillBars />

        <section>
          <SectionHeading title="Technical Stack" subtitle="Tools and platforms used across production deployments." />
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="label-mono rounded-full border border-white/10 bg-surface-low px-4 py-2 text-xs text-muted"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-12">
          <h2 className="headline-font inline-block self-start border-b border-white/12 pb-4 text-[32px] font-medium">
            Certifications
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {certifications.map((cert, i) => (
              <GlassCard
                key={cert.title}
                className="glow-hover flex flex-col gap-4 p-8 transition-all duration-300"
                scanDelay={`${i * 0.6}s`}
              >
                <Icon name={cert.icon} size={36} filled className="text-cyan" />
                <h3 className="text-lg font-bold">{cert.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{cert.description}</p>
              </GlassCard>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
