import type { ReactNode } from "react";

export function Footer(): ReactNode {
  return (
    <footer className="mt-8 flex items-center justify-between border-t border-line pt-6 text-xs uppercase tracking-calm text-ink/55">
      <p className="font-heading">V-02</p>
      <p>Mindful Systems</p>
    </footer>
  );
}
