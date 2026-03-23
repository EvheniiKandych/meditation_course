import type { ReactNode } from "react";
import { faqItems } from "@/data/content";

export function FAQ(): ReactNode {
  return (
    <section className="mb-20" aria-labelledby="faq-title">
      <h2 id="faq-title" className="font-heading text-3xl uppercase tracking-calm sm:text-4xl">
        FAQ: <span className="text-accent">Final Clarity</span>
      </h2>
      <div className="mt-8 divide-y divide-line rounded-2xl border border-line bg-card/30">
        {faqItems.map((item) => (
          <details key={item.id} className="group px-4 py-3">
            <summary className="flex cursor-pointer list-none items-center justify-between text-sm uppercase tracking-calm focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2 focus:ring-offset-card/30 rounded">
              {item.question}
              <span aria-hidden="true" className="text-xl leading-none text-accent transition group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="pt-2 text-sm text-ink/80">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
