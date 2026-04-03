"use client";

import { useState, type ReactNode } from "react";
import { faqItems } from "@/data/content";

export function FAQ(): ReactNode {
  // Стан для відстеження відкритого питання (тільки одне може бути відкрите одночасно)
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleOpen = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section 
      id="faq" 
      className="flex flex-col items-start min-h-screen pt-[232px] pb-20 w-full max-w-[1440px] mx-auto px-6 lg:pl-[91px] lg:pr-[91px]" 
      aria-labelledby="faq-title"
    >
      {/* Заголовок */}
      <h2 id="faq-title" className="font-tenor text-4xl lg:text-[72px] leading-tight text-[#000]">
        FAQ:{" "}
        <span 
          className="bg-clip-text text-transparent"
          style={{ backgroundImage: 'linear-gradient(to right, #F5E4DA 0%, #F8D2BB 26%, #978672 51%, #B3BDA4 76%, #EBDFCF 100%)' }}
        >
          FINAL CLARITY
        </span>
      </h2>

      {/* Список питань */}
      <div className="mt-[48px] w-full max-w-[1278px] flex flex-col gap-[32px]">
        {faqItems.map((item) => {
          const isOpen = openId === item.id;

          return (
            <div 
              key={item.id} 
              className="flex flex-col w-full relative"
            >
              {/* Рядок з питанням та іконкою */}
              <button
                onClick={() => toggleOpen(item.id)}
                className="flex items-center justify-between w-full h-[72px] bg-transparent cursor-pointer focus:outline-none group"
                aria-expanded={isOpen}
              >
                {/* Заголовок питання */}
                <span className="font-montserrat font-semibold text-lg lg:text-[32px] text-[#483B2B] uppercase mt-[4px] text-left">
                  {item.question}
                </span>

                {/* Анімована іконка Плюс/Мінус */}
                <div className="relative w-[32px] h-[32px] flex-shrink-0 flex items-center justify-center">
                  {/* Горизонтальна лінія (завжди видима) */}
                  <span className="absolute w-[24px] h-[2px] bg-[#483B2B] rounded-full" />
                  {/* Вертикальна лінія (повертається на 90 градусів і стає горизонтальною при відкритті) */}
                  <span 
                    className={`absolute w-[24px] h-[2px] bg-[#483B2B] rounded-full transition-transform duration-300 ease-in-out ${
                      isOpen ? 'rotate-0' : 'rotate-90'
                    }`} 
                  />
                </div>
              </button>

              {/* Контейнер для відповіді з анімацією висоти */}
              <div 
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100 mt-[16px]' : 'grid-rows-[0fr] opacity-0 mt-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="relative border-b-[2px] border-[#483B2B] pb-[24px] pt-[24px]">
                    <p className="font-montserrat font-normal text-xl lg:text-[24px] text-[#483B2B] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Нижня рамка, яка завжди видима, навіть коли закрито */}
              <div className={`w-full border-b-[2px] border-[#483B2B] transition-all duration-300 ${isOpen ? 'opacity-0 h-0' : 'opacity-100 mt-[16px] h-px'}`} />

            </div>
          );
        })}
      </div>
    </section>
  );
}
