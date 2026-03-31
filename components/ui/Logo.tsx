import type { ReactNode } from "react";

type LogoProps = {
  className?: string;
};

/**
 * Reusable VOID logo component with multi-colored letters.
 */
export function Logo({ className = "" }: LogoProps): ReactNode {
  return (
    <p className={`font-logo tracking-widest ${className}`}>
      <span className="text-brand-v">V</span>
      <span className="text-brand-o">O</span>
      <span className="text-brand-i">I</span>
      <span className="text-brand-d">D</span>
    </p>
  );
}
