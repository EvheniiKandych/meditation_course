import type { ReactNode } from "react";
import { Logo } from "@/components/ui/Logo";

export function Footer(): ReactNode {
  return (
    <footer className="mt-8 flex items-center justify-between border-t border-line pt-6 text-xs uppercase tracking-calm text-ink/55">
      <Logo className="text-lg font-medium" />
      <p>Mindful Systems</p>
    </footer>
  );
}
