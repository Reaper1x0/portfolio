import Link from "next/link";
import { Icon } from "@/components/Icon";

const navItems = [
  { href: "/", label: "WebApps/SaaS" },
  { href: "/", label: "Websites" },
  { href: "/case-study", label: "Mobile Apps" },
  { href: "/about", label: "About Me" },
];

type SiteNavProps = {
  activePath?: string;
};

export function SiteNav({ activePath }: SiteNavProps) {
  return (
    <nav className="fixed top-8 left-1/2 z-50 flex w-[95%] min-w-[320px] -translate-x-1/2 items-center justify-between gap-4 rounded-full border border-white/10 bg-surface/70 px-4 py-3 shadow-2xl shadow-black/50 backdrop-blur-xl md:w-max md:min-w-[800px] md:gap-16 md:px-8">
      <Link href="/" className="headline-font text-2xl font-bold tracking-tight text-foreground">
        Musa B. Kashif
      </Link>
      <div className="hidden items-center gap-1 rounded-full border border-white/5 bg-white/5 px-2 py-1.5 md:flex">
        {navItems.map((item) => {
          const isActive = activePath === item.href && item.href !== "/";
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ease-out ${
                isActive
                  ? "bg-white/10 text-cyan shadow-[inset_0_0_10px_rgba(0,238,252,0.15)]"
                  : "text-muted hover:bg-white/10 hover:text-cyan"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
      <button
        type="button"
        className="rounded-full border border-white/10 bg-white/10 px-6 py-2.5 text-sm font-medium transition-all duration-300 ease-out hover:bg-cyan hover:text-[#00363a] hover:shadow-[0_0_20px_rgba(0,238,252,0.3)]"
      >
        <span className="hidden md:inline">Start Project</span>
        <Icon name="mail" size={20} className="md:hidden" />
      </button>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-outline/30 bg-surface px-6 py-20 md:px-20">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-8 md:flex-row">
        <p className="label-mono text-xs text-[#c9c6c5]">© 2024 Aetheris AI. Precision in every byte.</p>
        <div className="flex gap-6 text-sm text-muted">
          <a href="#" className="transition-colors duration-150 ease-out hover:text-cyan">
            LinkedIn
          </a>
          <a href="#" className="transition-colors duration-150 ease-out hover:text-cyan">
            GitHub
          </a>
          <a href="#" className="transition-colors duration-150 ease-out hover:text-cyan">
            Twitter
          </a>
          <a href="#" className="transition-colors duration-150 ease-out hover:text-cyan">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
