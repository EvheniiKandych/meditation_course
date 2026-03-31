import type { ReactNode } from "react";
import { Logo } from "@/components/ui/Logo";

export function Header(): ReactNode {
  return (
    <header className="mb-16 flex items-center justify-between text-xs tracking-calm text-ink/60">
        <Logo className="text-[32px] sm:text-[40px] md:text-[50px] leading-none font-medium h-[60px] flex items-center" />

        <nav aria-label="Main navigation" className="font-nav font-normal text-base">
            <ul className="flex gap-4 text-ink">
                <li><a href="#method">The Method</a></li>
                <li><a href="#program">Program</a></li>
                <li><a href="#access">About</a></li>
            </ul>
      </nav>
    </header>
  );
}
