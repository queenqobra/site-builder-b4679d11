export const HeroBannerSection = (): JSX.Element => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
      {/* Logo area with wings - all float together */}
      <div className="relative w-[90vw] max-w-[700px] h-[50vw] max-h-[420px] animate-[float_4s_ease-in-out_infinite]">
        {/* Wing LEFT */}
        <img
          src="/wing.png"
          alt="Left wing"
          className="absolute top-[15%] left-[-18%] w-[30%] h-auto pointer-events-none"
        />
        {/* Wing RIGHT */}
        <img
          src="/wing1.png"
          alt="Right wing"
          className="absolute top-[15%] right-[-18%] w-[30%] h-auto pointer-events-none"
        />
        {/* Central logo */}
        <img
          src="/TOIlogo.png"
          alt="TOI Logo"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none"
        />
      </div>

      {/* Red decorative lines */}
      <div className="flex flex-col items-center gap-1.5 w-full max-w-[700px] mt-2">
        <div className="w-full h-[1px] bg-red-600 opacity-70" />
        <div className="w-full h-[1px] bg-red-600 opacity-40" />
      </div>

      {/* Stats section - all same size, same height */}
      <div className="flex items-start justify-center gap-8 sm:gap-16 mt-4">
        {/* КОМАНДЫ */}
        <div className="flex flex-col items-center">
          <span className="font-literature text-white/35 text-[10px] sm:text-[12px] tracking-[0.3px]">
            КОМАНДЫ
          </span>
          <span
            className="text-[#d3d3d3] text-[28px] sm:text-[36px] leading-none drop-shadow-[0_0_15px_white]"
            style={{ fontFamily: "'Antic Didone', serif" }}
          >
            32
          </span>
        </div>

        {/* ПРИЗОВОЙ ФОНД */}
        <div className="flex flex-col items-center">
          <span className="font-literature text-white/35 text-[10px] sm:text-[12px] tracking-[0.3px]">
            ПРИЗОВОЙ ФОНД
          </span>
          <div className="flex items-baseline">
            <span
              className="text-[#d3d3d3] text-[28px] sm:text-[36px] leading-none tracking-[1.2px] drop-shadow-[0_0_15px_white]"
              style={{ fontFamily: "'Antic Didone', serif" }}
            >
              12000
            </span>
            <span className="font-literature text-[#d3d3d3] text-[12px] sm:text-[14px] ml-1 drop-shadow-[0_0_10px_white]">
              РУБ
            </span>
          </div>
        </div>

        {/* МАТЧЕЙ */}
        <div className="flex flex-col items-center">
          <span className="font-literature text-white/35 text-[10px] sm:text-[12px] tracking-[0.3px]">
            МАТЧЕЙ
          </span>
          <div className="flex items-baseline">
            <span
              className="text-[#d3d3d3] text-[28px] sm:text-[36px] leading-none drop-shadow-[0_0_15px_white]"
              style={{ fontFamily: "'Antic Didone', serif" }}
            >
              62
            </span>
            <span className="font-literature text-[#d3d3d3] text-[12px] sm:text-[14px] ml-1 drop-shadow-[0_0_10px_white]">
              +1
            </span>
          </div>
        </div>
      </div>

      {/* CTA - УЧАСТВОВАТЬ */}
      <div className="mt-4 sm:mt-6">
        <span className="bg-[linear-gradient(134deg,#420200_0%,#ff0600_35%,#370000_50%,#ff0600_65%,#420200_100%)] bg-[length:300%_100%] bg-clip-text text-transparent font-kudry text-[40px] sm:text-[65px] md:text-[85px] cursor-pointer animate-[shineSmooth_15s_linear_infinite] hover:scale-[1.08] transition-transform duration-300">
          УЧАСТВОВАТЬ
        </span>
      </div>

      {/* Subtitle */}
      <div className="mt-3 sm:mt-5">
        <span className="font-labor text-[#a7a7a7] text-[14px] sm:text-[20px] tracking-[0.9px]">
          Докажи своё превосходство
        </span>
      </div>
    </div>
  );
};
