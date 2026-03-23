import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Noise } from "@/components/sections/Noise";
import { Method } from "@/components/sections/Method";
import { Program } from "@/components/sections/Program";
import { Benefits } from "@/components/sections/Benefits";
import { FAQ } from "@/components/sections/FAQ";
import { AccessForm } from "@/components/sections/AccessForm";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-bg text-ink">
      <div className="mx-auto w-full max-w-3xl px-6 pb-14 pt-8 sm:px-10">
        <Header />
        <Hero />
        <Noise />
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