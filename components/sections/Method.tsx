import type { ReactNode } from "react";
import { methodItems } from "@/data/content";

export function Method(): ReactNode {
  return (
    <section id="method" className="flex flex-col items-center min-h-screen pt-[120px] pb-20 w-full" aria-labelledby="method-title">
      {/* Заголовок */}
      <h2 id="method-title" className="font-tenor text-[72px] leading-tight tracking-[0.1em] text-[#000] text-center">
        The Method
      </h2>

      {/* Підзаголовок (градієнтний) */}
      <p 
        className="mt-[32px] font-montserrat font-semibold text-[32px] text-center bg-clip-text text-transparent"
        style={{ backgroundImage: 'linear-gradient(to right, #B3BDA4 0%, #EBDFCF 26%, #F5E4DA 51%, #F8D2BB 76%, #978672 100%)' }}
      >
          The Noise is Constant. Your reaction doesn't have to be.
      </p>

      {/* Основний текст */}
      <div className="mt-[16px] w-full max-w-[1278px] tracking-[0.1em]">
        <p className="font-montserrat font-normal text-[28px] text-[#483B2B] leading-snug">
          We don't teach you to "stop thinking." We teach you to{' '}
          <span className="relative inline-block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #978672, #978672)' }}>
            master the space
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#978672]" />
          </span>{' '}
          between thoughts. Our method is a three-stage deconstruction of mental clutter:
        </p>
      </div>

      {/* Блок з картками (через Grid) */}
      <div className="mt-[64px] grid grid-cols-1 lg:grid-cols-3 gap-[32px] w-full max-w-[1278px]">
        {methodItems.map((item, index) => (
          <article 
            key={item.id} 
            className="flex flex-col relative w-full lg:w-[405px] h-[248px] rounded-3xl overflow-hidden"
          >
            {/* Окремий шар для напівпрозорого градієнтного фону */}
            <div 
              className="absolute inset-0 opacity-50"
              style={{ 
                /* Аналогія з окулярами: градієнт розтягнутий на 315.55% (щоб покрити всі 3 картки і відступи) */
                backgroundImage: 'linear-gradient(to right, #B3BDA4 0%, #EBDFCF 26%, #F5E4DA 51%, #F8D2BB 76%, #978672 100%)',
                backgroundSize: '315.55% 100%',
                /* Зміщуємо фон для кожної картки, щоб створити ефект єдиного неперервного градієнта */
                backgroundPosition: index === 0 ? '0% 0%' : index === 1 ? '50% 0%' : '100% 0%'
              }}
            />
            
            {/* Контент картки (має бути поверх фону, тому relative z-10) */}
            <div className="relative z-10 w-full h-full">
              {/* Порядковий номер та Заголовок картки */}
              <div className="absolute top-[32px] left-[41px] flex items-start">
                <span className="font-tenor text-[28px] text-[#483B2B] leading-none pt-[0.1em]">
                  {item.id}
                </span>
                <h3 className="ml-[16px] font-montserrat font-normal text-[24px] text-[#483B2B] leading-tight whitespace-pre-line">
                  {item.title}
                </h3>
              </div>

              {/* Текст з підзаголовком (mixed bold words) */}
              <div className="absolute bottom-[32px] left-[41px] right-[41px] font-montserrat text-[16px] text-[#483B2B] leading-relaxed">
                <p>
                  {item.text.split(new RegExp(`(${item.boldText1}|${item.boldText2})`, 'gi')).map((part, i) => {
                    if (part.toLowerCase() === item.boldText1.toLowerCase() || part.toLowerCase() === item.boldText2.toLowerCase()) {
                      return <span key={i} className="font-bold">{part}</span>;
                    }
                    return <span key={i}>{part}</span>;
                  })}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
