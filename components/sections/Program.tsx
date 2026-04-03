import type { ReactNode } from "react";
import { programRows } from "@/data/content";

export function Program(): ReactNode {
  return (
    <section id="program" className="flex flex-col items-center min-h-screen pt-[70px] pb-20 w-full uppercase" aria-labelledby="program-title">
      {/* Заголовок */}
      <div className="w-full max-w-[1440px] px-6 lg:px-0 lg:pl-[91px]">
        <h2 id="program-title" className="font-tenor text-4xl lg:text-[72px] leading-tight text-[#000]">
          THE PROGRAM:
          <br />
          <span 
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(to right, #F8D2BB 0%, #978672 26%, #B3BDA4 51%, #EBDFCF 76%, #F5E4DA 100%)' }}
          >
            4 STAGES OF VOID
          </span>
        </h2>
      </div>

      {/* Список етапів */}
      <div className="mt-[16px] w-full max-w-[1278px] px-6 lg:px-0 flex flex-col gap-[32px]">
        {programRows.map((row, index) => (
          <div 
            key={index} 
            className="flex items-center justify-between w-full min-h-[108px] bg-[#FFF] rounded-[32px] px-[24px] lg:px-[48px] py-[30px] border border-[#F8D2BB]"
            style={{ boxShadow: '0px 8px 4px 0px rgba(248, 210, 187, 0.50)' }}
          >
            <span className="font-montserrat font-semibold text-lg lg:text-[32px] text-[#483B2B] leading-none uppercase">
              {row.stage}
            </span>
            <span className="font-montserrat font-semibold text-lg lg:text-[32px] text-[#483B2B] leading-none text-right uppercase">
              {row.result}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
