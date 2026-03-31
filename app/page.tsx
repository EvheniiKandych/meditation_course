import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Method } from "@/components/sections/Method";
import { Program } from "@/components/sections/Program";
import { Benefits } from "@/components/sections/Benefits";
import { FAQ } from "@/components/sections/FAQ";
import { AccessForm } from "@/components/sections/AccessForm";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen text-ink relative">
      <Hero />
      <div className="mx-auto w-full max-w-[1440px] px-6 pb-14 sm:px-10">
        <Problem />
        <Method />
        <Program />
        <Benefits />
        <FAQ />
        <AccessForm />
        <Footer />
      </div>
    </main>
  );
}
