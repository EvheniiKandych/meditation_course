import type { ReactNode } from "react";

export function Problem(): ReactNode {
  return (
    <section className="flex flex-col justify-center min-h-screen py-10" aria-labelledby="problem-title">
      <h2 id="problem-title" className="font-heading text-3xl uppercase tracking-calm sm:text-4xl">
        The Noise Is <span className="text-accent">Constant.</span>
      </h2>
      <div className="mt-8 grid gap-6 text-sm text-ink/80 sm:grid-cols-2">
        <article className="rounded-2xl border border-line bg-card/40 p-4">
          <p className="font-heading text-base uppercase tracking-calm text-ink/70">01 Digital Flow</p>
          <p className="mt-2">The stream of inputs compresses your attention into short cycles.</p>
        </article>
        <article className="rounded-2xl border border-line bg-card/40 p-4">
          <p className="font-heading text-base uppercase tracking-calm text-ink/70">02 The Echo</p>
          <p className="mt-2">Repetitive thought loops make it harder to switch into deep rest.</p>
        </article>
      </div>
      <p className="mt-8 font-heading text-sm uppercase tracking-calm text-ink/70">
        There is one silent place inside all of this. We train to find it.
      </p>
    </section>
  );
}
