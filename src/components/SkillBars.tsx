"use client";

import { useEffect, useRef } from "react";
import type { Skill } from "@/sanity/types";

type SkillBarsProps = {
  skills: Skill[];
};

export function SkillBars({ skills }: SkillBarsProps) {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const bar = entry.target.querySelector<HTMLDivElement>("[data-bar]");
          if (bar) {
            const target = bar.dataset.width ?? "0";
            bar.style.width = "0";
            requestAnimationFrame(() => {
              bar.style.width = `${target}%`;
            });
          }
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.5 },
    );

    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="col-span-full">
        <h2 className="headline-font inline-block border-b border-white/12 pb-4 text-4xl font-medium">
          Capabilities
        </h2>
      </div>
      {skills.map((skill, i) => (
        <div
          key={skill._id}
          ref={(el) => {
            refs.current[i] = el;
          }}
          className="glass-panel relative overflow-hidden rounded-xl p-6"
        >
          <div className="scanning-line" style={{ animationDelay: `${i * 0.4}s` }} />
          <div className="relative z-10 mb-4 flex items-center justify-between">
            <span className="label-mono text-xs text-foreground">{skill.name}</span>
            <span className="label-mono text-xs text-cyan">{skill.score}%</span>
          </div>
          <div className="relative z-10 h-1 rounded bg-surface-variant">
            <div
              data-bar
              data-width={skill.score}
              className="scan-bar h-full rounded bg-cyan transition-all duration-1000 ease-out"
              style={{ width: `${skill.score}%` }}
            />
          </div>
        </div>
      ))}
    </section>
  );
}
