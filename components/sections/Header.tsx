import type { ReactNode } from "react";

export function Header(): ReactNode {
  return (
    <header className="mb-16 flex items-center justify-between text-xs uppercase tracking-calm text-ink/60">
      <p className="font-heading text-sm text-ink/50">V-02</p>
      <nav aria-label="Main navigation" className="font-body">
        <ul className="flex gap-4">
          <li><a href="#method" className="hover:text-ink transition-colors">Method</a></li>
          <li><a href="#program" className="hover:text-ink transition-colors">Program</a></li>
          <li><a href="#access" className="hover:text-ink transition-colors">Access</a></li>
        </ul>
      </nav>
    </header>
  );
}
