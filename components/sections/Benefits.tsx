import type { ReactNode } from "react";
import { benefitItems } from "@/data/content";

export function Benefits(): ReactNode {
  return (
    <section className="flex flex-col justify-center min-h-screen py-10" aria-labelledby="benefits-title">
      <h2 id="benefits-title" className="font-heading text-3xl uppercase tracking-calm sm:text-4xl">
        Benefits:
        <br />
        <span className="text-accent">The Void Outcome</span>
      </h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {benefitItems.map((item) => (
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
