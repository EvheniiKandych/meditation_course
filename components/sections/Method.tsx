import type { ReactNode } from "react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { methodItems } from "@/data/content";

export function Method(): ReactNode {
  return (
    <section id="method" className="flex flex-col justify-center min-h-screen py-10" aria-labelledby="method-title">
      <SectionTitle top="The" accent="Method" />
      <p className="mt-5 max-w-2xl text-sm text-ink/80">
        We use a repeatable structure that makes your practice stable. Each element has a specific role in
        calming the nervous system and sharpening attention.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {methodItems.map((item) => (
          <article key={item.id} className="rounded-2xl border border-line bg-card p-4 shadow-soft">
            <p className="font-heading text-xs uppercase tracking-calm text-accent">#{item.id}</p>
            <h3 className="mt-2 font-heading text-xl uppercase tracking-calm">{item.title}</h3>
            <p className="mt-2 text-sm text-ink/75">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
