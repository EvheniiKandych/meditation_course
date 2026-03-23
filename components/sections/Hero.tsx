import type { ReactNode } from "react";

export function Hero(): ReactNode {
  return (
    <section className="mb-20 text-center" aria-labelledby="hero-title">
      <h1
        id="hero-title"
        className="font-heading text-4xl uppercase leading-tight tracking-calm text-ink sm:text-6xl"
      >
        Find the <span className="text-accent">gap</span>
        <br />
        between your thoughts
      </h1>
      <a
        href="#access"
        className="mt-8 inline-flex rounded-full border border-line px-7 py-3 text-xs uppercase tracking-calm text-ink transition hover:bg-card focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2 focus:ring-offset-bg"
      >
        Explore More
      </a>
    </section>
  );
}
