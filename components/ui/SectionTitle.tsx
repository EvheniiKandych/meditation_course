import type { ReactNode } from "react";

type SectionTitleProps = {
  top: string;
  accent?: string;
};

/**
 * Reusable title component.
 * Ensures consistent typography and semantic HTML heading across all sections.
 */
export function SectionTitle({ top, accent }: SectionTitleProps): ReactNode {
  return (
    <h2 className="font-cormorant text-3xl uppercase tracking-calm text-ink/90 sm:text-4xl">
      {top}
      {accent ? <span className="text-accent"> {accent}</span> : null}
    </h2>
  );
}
