import type { ReactNode } from "react";
import { benefitItems } from "@/data/content";

export function Benefits(): ReactNode {
  return (
    <section id="benefits" className="relative flex flex-col items-center min-h-screen pt-[224px] pb-20 w-full uppercase overflow-hidden" aria-labelledby="benefits-title">
      
      {/* Absolute Glow Background */}
      <div
        className="absolute w-[543px] h-[509px] rounded-full bg-[#FFF9DB] z-[0] blur-[100px] pointer-events-none"
        style={{ top: '177px', left: '-134px', transform: 'translate3d(0,0,0)', willChange: 'transform' }}
      />

      {/* Заголовок (Вирівняний по правому краю) */}
      <div className="relative z-10 w-full max-w-[1440px] pr-6 lg:pr-[91px] flex justify-end">
        <h2 id="benefits-title" className="font-tenor text-4xl lg:text-[72px] leading-tight text-[#000] text-right">
          BENEFITS:
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(to right, #B3BDA4 0%, #EBDFCF 26%, #F5E4DA 51%, #F8D2BB 76%, #978672 100%)' }}
          >
            THE VOID OUTCOME
          </span>
        </h2>
      </div>

      {/* Блок з картками (через Grid) */}
      <div className="relative z-10 mt-[64px] grid grid-cols-1 lg:grid-cols-3 gap-[32px] w-full max-w-[1278px] px-6 lg:px-0">
        {benefitItems.map((item) => (
          <article
            key={item.id}
            className="flex flex-col relative w-full lg:w-[405px] h-[248px] bg-[#FFF] rounded-[24px] border border-[#978672]"
            style={{ boxShadow: '0px 4px 4px 0px rgba(151, 134, 114, 0.50)' }}
          >
            {/* Порядковий номер та Заголовок картки */}
            <div className="absolute top-[32px] left-[41px] flex items-start">
              <span className="font-tenor text-[28px] text-[#483B2B] leading-none pt-[0.1em]">
                {item.id}
              </span>
              <h3 className="ml-[16px] font-montserrat font-normal text-[24px] text-[#483B2B] leading-tight whitespace-pre-line">
                {item.title}
              </h3>
            </div>

            {/* Текст з mixed bold words */}
            <div className="absolute bottom-[32px] left-[41px] right-[41px] font-montserrat text-[16px] text-[#483B2B] leading-relaxed normal-case">
              <p>
                {item.text.split(new RegExp(`(${item.boldText1}|${item.boldText2})`, 'gi')).map((part, i) => {
                  if (part.toLowerCase() === item.boldText1.toLowerCase() || part.toLowerCase() === item.boldText2.toLowerCase()) {
                    return <span key={i} className="font-bold">{part}</span>;
                  }
                  return <span key={i}>{part}</span>;
                })}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
