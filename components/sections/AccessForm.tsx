import type { ReactNode } from "react";

export function AccessForm(): ReactNode {
  return (
    <section id="access" className="flex flex-col justify-center min-h-screen py-10" aria-labelledby="access-title">
      <h2 id="access-title" className="font-heading text-3xl uppercase tracking-calm sm:text-4xl">
        Secure <span className="text-accent">Your Access</span>
      </h2>
      <form className="mt-8 rounded-2xl border border-line bg-card/40 p-5 shadow-soft" noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="flex flex-col text-xs uppercase tracking-calm text-ink/65">
            Full Name
            <input
              name="fullName"
              autoComplete="name"
              className="mt-2 w-full border-b border-line bg-transparent pb-2 text-sm outline-none transition focus:border-ink"
            />
          </label>
          <label className="flex flex-col text-xs uppercase tracking-calm text-ink/65">
            Email
            <input
              name="email"
              type="email"
              autoComplete="email"
              className="mt-2 w-full border-b border-line bg-transparent pb-2 text-sm outline-none transition focus:border-ink"
            />
          </label>
          <label className="flex flex-col text-xs uppercase tracking-calm text-ink/65 sm:col-span-2">
            Current Focus Level
            <select
              name="focusLevel"
              className="mt-2 w-full border-b border-line bg-transparent pb-2 text-sm outline-none transition focus:border-ink"
              defaultValue=""
            >
              <option value="" disabled>
                Select level
              </option>
              <option value="starter">Starter</option>
              <option value="regular">Regular Practice</option>
              <option value="advanced">Advanced</option>
            </select>
          </label>
        </div>
        <button
          type="submit"
          className="mt-8 inline-flex rounded-full border border-line px-7 py-3 text-xs uppercase tracking-calm transition hover:bg-bg focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2 focus:ring-offset-card/40"
        >
          Request Access
        </button>
      </form>
    </section>
  );
}
