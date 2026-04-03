"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Header } from "@/components/sections/Header";

export function Hero(): ReactNode {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // gradient animation
  useEffect(() => {
    // Set state to true after a slight delay so the browser can render the initial state
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50); // 50ms is enough to guarantee triggering the CSS transition
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col pt-8" aria-labelledby="hero-title">
      {/* Initial background (bg-bg) */}
      <div className="absolute inset-0 z-[-2] bg-bg" />
      
      {/* Background gradient with fade-in animation */}
      <div 
        className="absolute inset-0 z-[-1] transition-opacity duration-[2000ms] ease-out"
        style={{
          background: "linear-gradient(to top, #FFFAE3 0%, #FFFFFF 100%)",
          opacity: isLoaded ? 1 : 0
        }}
      />
        {/*end of animation*/}

      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-[75px] flex flex-col h-full flex-1">
        <Header />

        <div className="flex-1 flex flex-col justify-center items-center pb-20">
          <h1 id="hero-title" className="font-tenor text-center text-4xl uppercase leading-tight tracking-calm text-ink sm:text-6xl">
            Find the <span className="inline-block border-b border-[#978672] pb-1 mx-2">
                  <span className="text-brand-g">G</span>
                  <span className="text-brand-a">A</span>
                  <span className="text-brand-p">P</span>
              </span>
            <br />
            between your thoughts
          </h1>
          <a
            href="#noise"
            className="mt-8 relative inline-flex items-center justify-center rounded-full bg-transparent py-[16px] w-full max-w-[300px] h-[68px] text-[1.5rem] font-montserrat font-normal tracking-calm text-ink transition focus:outline-none group overflow-hidden"
          >
            {/* Анімований градієнтний бордер */}
            <span 
              className="absolute inset-0 z-0 rounded-full pointer-events-none animate-border-spin"
              style={{
                /* Зациклений градієнт для кругової анімації бордера */
                background: 'conic-gradient(from var(--angle), #B3BDA4, #EBDFCF, #EFE1D3, #F5E4DA, #F8D2BB, #978672, #B3BDA4)',
                padding: '4px',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'exclude'
              } as React.CSSProperties}
            />
            {/* Текст кнопки поверх всіх шарів */}
            <span className="relative z-10 transition-colors duration-300 uppercase">
              Explore More
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
