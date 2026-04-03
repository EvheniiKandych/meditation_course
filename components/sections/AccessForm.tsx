"use client";

import { useState, type ReactNode, type FormEvent, type ChangeEvent, type CSSProperties } from "react";

export function AccessForm(): ReactNode {
  // Поля форми
  const [fullName, setFullName] = useState("");
  const [extraField, setExtraField] = useState("");
  const [email, setEmail] = useState("");
  const [noiseLevel, setNoiseLevel] = useState<number | null>(null);
  
  // Стани для кнопки та помилок
  const [buttonState, setButtonState] = useState<"initial" | "confirm" | "sending" | "sent" | "already_sent">("initial");
  const [previousData, setPreviousData] = useState<string | null>(null);
  const [hasSentOnce, setHasSentOnce] = useState(false); // Відстежуємо, чи відправляли вже хоч раз
  
  const [errors, setErrors] = useState<{
    fullName?: boolean;
    email?: boolean;
    noiseLevel?: boolean;
    extraField?: boolean;
  }>({});

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
    if (errors.fullName) setErrors({ ...errors, fullName: false });
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (errors.email) setErrors({ ...errors, email: false });
  };

  const handleNoiseLevelChange = (value: number) => {
    setNoiseLevel(value);
    if (errors.noiseLevel) setErrors({ ...errors, noiseLevel: false });
  };

  const handleExtraFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    setExtraField(e.target.value);
    if (errors.extraField) setErrors({ ...errors, extraField: false });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const newErrors = {
      fullName: fullName.trim() === "",
      email: !isEmailValid,
      noiseLevel: noiseLevel === null,
      extraField: extraField.trim() === "",
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some(error => error)) {
      // Якщо є помилки, скидаємо стан на initial, щоб знову можна було показати confirm
      if (buttonState !== "initial" && !hasSentOnce) {
         setButtonState("initial");
      }
      return; 
    }

    const currentData = JSON.stringify({ fullName, email, noiseLevel, extraField });

    // Якщо ми в initial і дані валідні
    if (buttonState === "initial") {
      setButtonState("confirm");
      return;
    }

    // Якщо натиснули після confirm або якщо вже колись відправляли
    if (buttonState === "confirm" || buttonState === "sent" || buttonState === "already_sent") {
      if (currentData === previousData) {
        setButtonState("already_sent");
        setTimeout(() => setButtonState("initial"), 3000);
      } else {
        // Якщо дані змінилися з моменту останньої відправки
        if (hasSentOnce && buttonState !== "confirm") {
            setButtonState("confirm");
            setHasSentOnce(false); // Дозволяємо показати текст згоди
            return;
        }

        setButtonState("sending");
        // TODO: SQL SERVER INTEGRATION HERE
        setTimeout(() => {
          setPreviousData(currentData);
          setHasSentOnce(true); 
          setButtonState("sent");
          setTimeout(() => setButtonState("initial"), 3000);
        }, 3000); 
      }
    }
  };

  const getButtonText = () => {
    switch (buttonState) {
      case "sending": return "SENDING...";
      case "sent": return "REQUEST SENT";
      case "already_sent": return <span className="text-[1.25rem]">REQUEST ALREADY SENT</span>; // Менший розмір
      default: return "REQUEST ACCESS";
    }
  };

  const noiseLevels = [
    { value: 1, size: 12, color: "#B3BDA4" },
    { value: 2, size: 14, color: "#EBDFCF" },
    { value: 3, size: 16, color: "#F5E4DA" },
    { value: 4, size: 18, color: "#F8D2BB" },
    { value: 5, size: 20, color: "#978672" },
  ];

  // Компонент для значка помилки
  const ErrorIcon = ({ show }: { show: boolean }) => {
    if (!show) return null;
    return (
      <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 w-[24px] h-[24px] bg-red-500 rounded-full flex items-center justify-center pointer-events-none">
        <span className="font-montserrat font-bold text-white text-[16px] leading-none mb-[2px]">!</span>
      </div>
    );
  };

  return (
    <section 
      id="access" 
      className="relative flex flex-col items-center min-h-screen pt-[138px] pb-20 w-full uppercase" 
      aria-labelledby="access-title"
    >
      {/* Фон градієнт */}
      <div 
        className="absolute inset-0 z-[-1]"
        style={{ background: "linear-gradient(to top, #FFFAE3 0%, #FFFFFF 100%)" }}
      />

      <div className="w-full max-w-[1440px] px-6 flex flex-col items-center">
        {/* Заголовок */}
        <div className="flex flex-col items-center justify-center w-full">
            <h2 
            id="access-title" 
            className="font-tenor text-4xl lg:text-[72px] leading-tight text-center bg-clip-text text-transparent animate-bg-pan-left"
            style={{
                /* Звичайна лінійна анімація "біжучої стрічки" для тексту (зправа наліво) */
                backgroundImage: 'linear-gradient(to right, #B3BDA4, #EBDFCF, #EFE1D3, #F5E4DA, #F8D2BB, #978672, #B3BDA4, #EBDFCF, #EFE1D3, #F5E4DA, #F8D2BB, #978672, #B3BDA4)',
                backgroundSize: '200% 100%'
            }}
            >
            SECURE YOUR ACCESS
            </h2>
        </div>

        {/* Форма */}
        <form onSubmit={handleSubmit} className="mt-[96px] flex flex-col items-center w-full gap-y-[48px]" noValidate>
          
          {/* Full Name */}
          <div className="relative w-full max-w-[800px]">
            <input
              type="text"
              name="fullName"
              placeholder="FULL NAME"
              value={fullName}
              onChange={handleNameChange}
              className="w-full bg-transparent font-montserrat font-light text-[24px] text-[#483B2B] placeholder:text-[#483B2B]/50 outline-none pb-[8px] border-b border-[#483B2B] uppercase"
            />
            <ErrorIcon show={!!errors.fullName} />
          </div>

          {/* Email */}
          <div className="relative w-full max-w-[800px]">
            <input
              type="email"
              name="email"
              placeholder="EMAIL"
              value={email}
              onChange={handleEmailChange}
              className="w-full bg-transparent font-montserrat font-light text-[24px] text-[#483B2B] placeholder:text-[#483B2B]/50 outline-none pb-[8px] border-b border-[#483B2B] uppercase"
            />
            <ErrorIcon show={!!errors.email} />
          </div>

          {/* Noise Level Range */}
          <div className="relative flex flex-col lg:flex-row lg:items-center justify-between w-full max-w-[800px] mt-4">
            <span className="font-montserrat font-light text-[24px] text-[#483B2B] mb-8 lg:mb-0">
              CURRENT NOISE LEVEL
            </span>
            
            <div className="relative w-full max-w-[316px] h-[20px] flex items-center justify-between mx-auto lg:mx-0">
              {/* Лінія */}
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#483B2B] -translate-y-1/2 z-0" />
              
              {/* Кружечки */}
              {noiseLevels.map((level) => {
                const isSelected = noiseLevel === level.value;
                // Залежний від кружечка розмір бордера, як ти просив
                const containerSize = level.size + 8; 
                return (
                  <button
                    key={level.value}
                    type="button"
                    onClick={() => handleNoiseLevelChange(level.value)}
                    className="relative z-10 rounded-full flex items-center justify-center transition-all group outline-none"
                    style={{ width: `${containerSize}px`, height: `${containerSize}px` }}
                  >
                    <span 
                      className={`rounded-full transition-all duration-200 flex items-center justify-center border-[1px] ${
                        isSelected 
                          ? 'border-[#483B2B]' 
                          : 'border-transparent group-hover:border-[#483B2B]'
                      }`}
                      style={{ width: '100%', height: '100%' }}
                    >
                      <span 
                        className="block rounded-full"
                        style={{
                          width: `${level.size}px`,
                          height: `${level.size}px`,
                          backgroundColor: level.color
                        }}
                      />
                    </span>
                  </button>
                );
              })}
            </div>
            {/* Оновлене позиціювання значка помилки для діапазону */}
            {errors.noiseLevel && (
              <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 w-[24px] h-[24px] bg-red-500 rounded-full flex items-center justify-center pointer-events-none">
                <span className="font-montserrat font-bold text-white text-[16px] leading-none mb-[2px]">!</span>
              </div>
            )}
          </div>

          {/* Primary Goal Field (moved here) */}
          <div className="relative w-full max-w-[800px] mt-4">
            <input
              type="text"
              name="extraField"
              placeholder="PRIMARY GOAL"
              value={extraField}
              onChange={handleExtraFieldChange}
              className="w-full bg-transparent font-montserrat font-light text-[24px] text-[#483B2B] placeholder:text-[#483B2B]/50 outline-none pb-[8px] border-b border-[#483B2B] uppercase"
            />
            <ErrorIcon show={!!errors.extraField} />
          </div>

          {/* Кнопка та Умови */}
          <div className="mt-[64px] flex flex-col items-center w-full relative">
            <button
              type="submit"
              disabled={buttonState === "sending"}
              className="relative inline-flex items-center justify-center rounded-full bg-transparent px-[40px] py-[16px] w-full max-w-[400px] h-[68px] text-[1.5rem] font-montserrat font-normal tracking-calm text-ink transition focus:outline-none overflow-hidden disabled:opacity-70 whitespace-nowrap group"
            >
              <span 
                className="absolute inset-0 z-0 rounded-full pointer-events-none animate-border-spin"
                style={{
                  /* Зациклений градієнт для кругової анімації бордера (як радар) */
                  background: 'conic-gradient(from var(--angle), #B3BDA4, #EBDFCF, #EFE1D3, #F5E4DA, #F8D2BB, #978672, #B3BDA4)',
                  padding: '4px',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'exclude'
                } as CSSProperties}
              />
              
              <span className="relative z-10 transition-colors duration-300">
                {getButtonText()}
              </span>
            </button>

            {/* Текст згоди, з'являється тільки на етапі 'confirm', НЕ показується якщо 'sent' або 'already_sent' */}
            {buttonState === "confirm" && !hasSentOnce && (
              <p className="absolute -bottom-8 font-montserrat font-normal text-[12px] text-red-600 normal-case text-center w-full">
                By clicking the button you agree to the terms of use of the site.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
