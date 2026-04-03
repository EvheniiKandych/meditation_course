import type { ReactNode } from "react";

export function Problem(): ReactNode {
  return (
    <section 
      id="noise" 
      className="flex flex-col justify-center min-h-screen pt-[187px] pb-[168px] px-6 lg:pl-[44px] lg:pr-[60px]"
      aria-labelledby="problem-title"
    >
      <div className="w-full mx-auto max-w-[1440px]">
        <h2
          id="problem-title"
          className="font-tenor text-4xl lg:text-[64px] uppercase leading-tight tracking-[0.1em] text-ink mt-[10px]">
          The Noise Is{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: 'linear-gradient(to right, #EBDFCF 0%, #F5E4DA 26%, #F8D2BB 51%, #978672 76%, #B3BDA4 100%)' }}>
              Constant
          </span>.
        </h2>
      </div>

      <div className="mt-[48px] grid grid-cols-1 gap-y-10 gap-x-[129px] lg:grid-cols-2 lg:grid-flow-col w-full mx-auto max-w-[1440px]">
        {/* Force grid layout:
            col 1: 01, 02
            col 2: 03, 04 
        */}
        <div className="flex flex-col gap-y-10">
            {problemItems.filter(item => item.id === "01" || item.id === "02").map((item) => (
            <article key={item.id} className="flex items-start gap-[16px] w-full max-w-[610px] mx-auto lg:mx-0">
                <span className="font-tenor text-[32px] leading-none text-[#483B2B] relative">
                  <span className="absolute inset-0 bg-[#FFF9DB] blur-[15px] rounded-full z-[-1] scale-150" />
                  <span className="relative z-10">{item.id}</span>
                </span>
                <p className="font-montserrat text-xl lg:text-[28px] leading-tight text-[#483B2B]">
                {item.firstPart}{" "}
                <span className="relative inline-block align-baseline pb-[0.04em]">
                    <span 
                    className="bg-clip-text text-transparent"
                    style={{ backgroundImage: item.gradient }}
                    >
                    {item.secondPart}
                    </span>
                    <span 
                    className="absolute bottom-0 left-0 h-[2px] w-full"
                    style={{ backgroundImage: item.gradient }} 
                    />
                </span>
                {item.thirdPart && (
                    <>
                    {" "}
                    {item.thirdPart}
                    </>
                )}
                </p>
            </article>
            ))}
        </div>
        <div className="flex flex-col gap-y-10">
            {problemItems.filter(item => item.id === "03" || item.id === "04").map((item) => (
            <article key={item.id} className="flex items-start gap-[16px] w-full max-w-[610px] mx-auto lg:mx-0">
                <span className="font-tenor text-[32px] leading-none text-[#483B2B] relative">
                  <span className="absolute inset-0 bg-[#FFF9DB] blur-[15px] rounded-full z-[-1] scale-150" />
                  <span className="relative z-10">{item.id}</span>
                </span>
                <p className="font-montserrat text-xl lg:text-[28px] leading-tight text-[#483B2B]">
                {item.firstPart}{" "}
                <span className="relative inline-block align-baseline pb-[0.04em]">
                    <span 
                    className="bg-clip-text text-transparent"
                    style={{ backgroundImage: item.gradient }}
                    >
                    {item.secondPart}
                    </span>
                    <span 
                    className="absolute bottom-0 left-0 h-[2px] w-full"
                    style={{ backgroundImage: item.gradient }} 
                    />
                </span>
                {item.thirdPart && (
                    <>
                    {" "}
                    {item.thirdPart}
                    </>
                )}
                </p>
            </article>
            ))}
        </div>
      </div>

      <div className="w-full mx-auto max-w-[1440px]">
        <p className="mt-[130px] font-tenor text-2xl lg:text-[28px] uppercase leading-tight tracking-[0.1em] text-[#483B2B]">
          This Isn't Just Stress. It's A Loss Of The Gap - That Vital Second
          <br/>
          Between A Thought And A Reaction.
        </p>
      </div>
    </section>
  );
}

const problemItems = [
    {
        id: "01",
        firstPart: "Digital",
        secondPart: "overstimulation",
        thirdPart: "",
        gradient: 'linear-gradient(to right, #F5E4DA 0%, #F8D2BB 26%, #978672 51%, #B3BDA4 76%, #EBDFCF 100%)',
    },
    {
        id: "02",
        firstPart: "The",
        secondPart: "illusion",
        thirdPart: "of being connected while feeling utterly hollow",
        gradient: 'linear-gradient(to right, #F8D2BB 0%, #978672 26%, #B3BDA4 51%, #EBDFCF 76%, #F5E4DA 100%)',
    },
    {
        id: "03",
        firstPart: "The",
        secondPart: "chronic hum",
        thirdPart: "of anxiety",
        gradient: 'linear-gradient(to right, #F8D2BB 0%, #978672 26%, #B3BDA4 51%, #EBDFCF 76%, #F5E4DA 100%)',
    },
    {
        id: "04",
        firstPart: "The",
        secondPart: "exhaustion",
        thirdPart: "of performing a life you don't have time to live",
        gradient: 'linear-gradient(to right, #F8D2BB 0%, #978672 26%, #B3BDA4 51%, #EBDFCF 76%, #F5E4DA 100%)',
    },
];
