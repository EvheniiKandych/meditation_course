import type { ReactNode } from "react";
import { Logo } from "@/components/ui/Logo";
//logo ond navigation
export function Header(): ReactNode {
  return (
    <header className="mb-16 flex items-center justify-between text-xs tracking-calm text-nav">
        <Logo className="text-[32px] sm:text-[40px] md:text-[50px] leading-none font-medium h-[60px] flex items-center" />

        <nav aria-label="Main navigation" className="font-montserrat font-light text-base">
            <ul className="flex gap-12">
                <li><a href="#method">The Method</a></li>
                <li><a href="#program">Program</a></li>
                <li><a href="#benefits">About</a></li>
            </ul>
      </nav>
    </header>
  );
}
