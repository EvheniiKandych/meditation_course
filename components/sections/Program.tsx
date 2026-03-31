import type { ReactNode } from "react";
import { programRows } from "@/data/content";

export function Program(): ReactNode {
  return (
    <section id="program" className="flex flex-col justify-center min-h-screen py-10" aria-labelledby="program-title">
      <h2 id="program-title" className="font-heading text-3xl uppercase tracking-calm sm:text-4xl">
        The Program:
        <br />
        <span className="text-accent">4 Stages Of You</span>
      </h2>
      <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-card/40">
        <table className="w-full border-collapse text-left text-xs uppercase tracking-calm sm:text-sm">
          <caption className="sr-only">Course stages and expected outcomes</caption>
          <tbody>
            {programRows.map((row) => (
              <tr key={row.stage} className="border-b border-line last:border-b-0">
                <th scope="row" className="px-4 py-4 font-heading text-ink/75">
                  {row.stage}
                </th>
                <td className="px-4 py-4 font-body text-ink/90">{row.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
