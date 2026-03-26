export const HeroBannerSection = (): JSX.Element => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center px-4">
      {/* Clouds at the bottom */}
      <img
        className="absolute bottom-0 left-0 w-full h-auto object-cover pointer-events-none z-0"
        alt="Clouds background"
        src="/clouds.webp"
      />

      <div className="relative z-10 flex flex-col items-center justify-center gap-4">
        {/* Logo area with wings */}
        <div className="relative w-[580px] h-[277px] flex-shrink-0">
          {/* Right wing */}
          <div className="absolute top-[25px] left-[410px] w-[153px] h-[165px] bg-[url(/wing.png)] bg-[100%_100%]" />
          {/* Left wing */}
          <div className="absolute top-[25px] right-[410px] w-[153px] h-[165px] bg-[url(/wing.png)] bg-[100%_100%] scale-x-[-1]" />
          {/* Central logo */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[240px] bg-[url(/TOIlogo.png)] bg-contain bg-center bg-no-repeat" />
        </div>

        {/* Stats section */}
        <div className="flex items-center justify-center gap-12 mt-[-20px]">
          {/* КОМАНДЫ stat */}
          <div className="flex flex-col items-center">
            <span className="font-literature text-[#ffffff57] text-[10px] tracking-[0.3px] leading-[74px]">
              КОМАНДЫ
            </span>
            <span className="text-[#d3d3d3] text-[40px] leading-[30px] mt-[-20px] drop-shadow-[0_0_21px_#d3d3d3]" style={{ fontFamily: "'Antic Didone', serif" }}>
              32
            </span>
          </div>

          {/* ПРИЗОВОЙ ФОНД stat */}
          <div className="flex flex-col items-center">
            <span className="font-literature text-[#ffffff57] text-[10px] tracking-[0.3px] leading-[33px]">
              ПРИЗОВОЙ ФОНД
            </span>
            <span className="text-[#d3d3d3] text-[40px] tracking-[1.2px] leading-[40px] mt-[-5px] drop-shadow-[0_0_13px_#d3d3d3]" style={{ fontFamily: "'Antic Didone', serif" }}>
              12000
              <span className="font-literature text-[15px] tracking-[0.07px] leading-[30px]">
                РУБ
              </span>
            </span>
          </div>

          {/* ЗАВЕРШЕННЫХ stat */}
          <div className="flex flex-col items-center">
            <span className="font-literature text-[#ffffff57] text-[10px] tracking-[0.3px] leading-[33px]">
              ЗАВЕРШЕННЫХ
            </span>
            <span className="text-[#d3d3d3] text-[40px] leading-[30px] mt-[-5px] drop-shadow-[0_0_21px_#d3d3d3]" style={{ fontFamily: "'Antic Didone', serif" }}>
              150+
            </span>
          </div>
        </div>

        {/* CTA - УЧАСТВОВАТЬ */}
        <div className="mt-4">
          <span className="bg-[linear-gradient(134deg,rgba(255,6,0,1)_25%,rgba(66,2,0,1)_76%)] bg-clip-text text-transparent font-kudry text-[70px] tracking-[2.1px] leading-[170px] cursor-pointer hover:opacity-80 transition-opacity">
            УЧАСТВОВАТЬ
          </span>
        </div>

        {/* Subtitle */}
        <div className="mt-[-40px]">
          <span className="font-labor text-[#a7a7a7] text-[10px] tracking-[0.9px]">
            Докажи своё превосходство
          </span>
        </div>
      </div>
    </section>
  );
};
