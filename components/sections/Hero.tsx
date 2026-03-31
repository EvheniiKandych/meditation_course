"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Header } from "@/components/sections/Header";

export function Hero(): ReactNode {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Встановлюємо стан у true через невелику затримку, щоб браузер встиг відрендерити початковий стан
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50); // 50ms достатньо для гарантованого тригера CSS transition
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col pt-8" aria-labelledby="hero-title">
      {/* Стартовий фон (bg-bg) */}
      <div className="absolute inset-0 z-[-2] bg-bg" />
      
      {/* Фоновий градієнт з анімацією появи */}
      <div 
        className="absolute inset-0 z-[-1] transition-opacity duration-[2000ms] ease-out"
        style={{
          background: "linear-gradient(to top, #FFFAE3 0%, #FFFFFF 100%)",
          opacity: isLoaded ? 1 : 0
        }}
      />
      
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[75px] flex flex-col h-full flex-1">
        <Header />
        
        <div className="flex-1 flex flex-col justify-center items-center pb-20">
          <h1
            id="hero-title"
            className="font-heading text-center text-4xl uppercase leading-tight tracking-calm text-ink sm:text-6xl"
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
        </div>
      </div>
    </section>
  );
}
