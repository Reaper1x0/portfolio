import type { ReactNode } from "react";
import { Icon } from "@/components/Icon";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  scanDelay?: string;
  hoverGlow?: boolean;
};

export function GlassCard({
  children,
  className = "",
  scanDelay,
  hoverGlow = true,
}: GlassCardProps) {
  return (
    <div
      className={`glass-panel group relative overflow-hidden rounded-xl transition-all duration-300 ${
        hoverGlow ? "cyan-glow-hover" : ""
      } ${className}`}
    >
      <div className="scanning-line" style={scanDelay ? { animationDelay: scanDelay } : undefined} />
      {children}
    </div>
  );
}

export function CardIcon({ name }: { name: string }) {
  return (
    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5">
      <Icon name={name} size={22} className="text-cyan" />
    </div>
  );
}

export function CardArrow() {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors group-hover:border-cyan/50 group-hover:bg-cyan/20">
      <Icon name="arrow_outward" size={20} className="text-foreground" />
    </span>
  );
}

export function TagPill({ label }: { label: string }) {
  return (
    <span className="label-mono rounded border border-white/5 bg-surface-low px-3 py-1 text-xs text-[#8e9192]">
      {label}
    </span>
  );
}

export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-16">
      <h2 className="headline-font mb-4 text-[32px] leading-[40px] font-medium">{title}</h2>
      {subtitle && <p className="mb-4 max-w-2xl text-muted">{subtitle}</p>}
      <div className="h-1 w-12 rounded-full bg-cyan/50" />
    </div>
  );
}
