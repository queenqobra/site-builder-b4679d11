export const TournamentDetailsSection = (): JSX.Element => {
  return (
    <section id="info" className="relative w-full flex flex-col overflow-hidden">
      {/* RED BACKGROUND */}
      <img
        src="/pic_red.webp"
        className="absolute inset-0 w-full h-full object-cover opacity-90 z-0 pointer-events-none"
        alt="Red background"
      />

      {/* Tab navigation bar */}
      <div className="relative w-full flex justify-center shadow-[0px_4px_4px_#00000040]">
        <div className="w-full h-[40px] flex items-center justify-center bg-gradient-to-r from-[#2e2e2e] via-[#d9d9d9] to-[#2e2e2e]">
          <span className="font-literature text-black text-[18px] tracking-[2px] drop-shadow-[0_0_10px_black]">
            ИНФОРМАЦИЯ
          </span>
        </div>
      </div>

      <div className="absolute top-[40px] left-0 w-full h-[1500px] bg-gradient-to-b from-black via-black/40 to-transparent pointer-events-none z-0" />

      {/* Main content area */}
      <div className="flex w-full relative mt-[62px] flex-col items-center justify-center gap-[181px] pb-8">
        {/* Three info cards row */}
        <div className="flex items-center justify-center gap-[170px] z-10 self-stretch w-full flex-[0_0_auto]">
          {/* Card 1: Формат турнира */}
          <div className="relative w-[280px] h-[478px] flex flex-col items-center justify-start pt-6">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm border border-transparent [border-image:linear-gradient(140deg,rgba(0,0,0,0.69)_0%,rgba(141,141,141,0.69)_44%,rgba(102,102,102,0.69)_100%)_1]" />
            <div className="relative font-literature text-white text-[16px] tracking-[1px] drop-shadow-[0_0_12px_white] text-center mb-6">
              ФОРМАТ ТУРНИРА
            </div>
            <div className="absolute w-[99.29%] h-[46.24%] top-[43.92%] left-0 font-labor font-normal text-white text-[10px] text-center tracking-[0.30px] leading-[18px]">
              <span className="tracking-[0.03px]"><br /></span>
              <span className="text-xl tracking-[0.12px]">5X5<br /></span>
              <span className="tracking-[0.03px]"><br /></span>
              <span className="text-base tracking-[0.08px]">DOUBLE</span>
              <span className="tracking-[0.03px]"> ELIMINATION<br /><br /></span>
              <span className="text-base tracking-[0.08px]">CAPITAINS</span>
              <span className="tracking-[0.03px]"> MODE<br /><br />ИГРЫ </span>
              <span className="text-base tracking-[0.08px]">BO1</span>
              <span className="tracking-[0.03px]">, гранд-финал</span>
              <span className="text-base tracking-[0.08px]"> bo3<br /></span>
              <span className="tracking-[0.03px]"><br /></span>
              <span className="text-xl tracking-[0.12px]">32</span>
              <span className="text-base tracking-[0.08px]"> КОМАНДЫ</span>
            </div>
            <img src="/Star.png" alt="Star" className="scale-[6] absolute w-[90px] h-[90px] top-[22%] left-1/2 -translate-x-1/2 drop-shadow-[0_0_25px_white]" />
          </div>

          {/* Card 2: Даты проведения */}
          <div className="relative w-[280px] h-[478px] flex flex-col items-center justify-start pt-6">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm border border-transparent [border-image:linear-gradient(140deg,rgba(0,0,0,0.69)_0%,rgba(141,141,141,0.69)_44%,rgba(102,102,102,0.69)_100%)_1]" />
            <div className="relative font-literature text-white text-[16px] tracking-[1px] drop-shadow-[0_0_12px_white] text-center mb-6">
              ДАТЫ ПРОВЕДЕНИЯ
            </div>
            <div className="absolute w-full h-[40.53%] top-[50.17%] left-0 font-labor text-white text-[10px] tracking-[0.30px] leading-[30px] font-normal text-center">
              <span className="tracking-[0.03px]"><br />НАЧАЛО<br /></span>
              <span className="text-base tracking-[0.08px]">28.04.2026 15:00 ПО МСК<br /></span>
              <span className="tracking-[0.03px]"><br />КОНЕЦ<br /></span>
              <span className="text-base tracking-[0.08px]">30.04.2026 01:00 ПО МСК</span>
            </div>
            <img src="/Star.png" alt="Star" className="scale-[6] absolute w-[90px] h-[90px] top-[22%] left-1/2 -translate-x-1/2 drop-shadow-[0_0_25px_white]" />
          </div>

          {/* Card 3: Ограничение рейтинга */}
          <div className="relative w-[280px] h-[478px] flex flex-col items-center justify-start pt-6">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm border border-transparent [border-image:linear-gradient(140deg,rgba(0,0,0,0.69)_0%,rgba(141,141,141,0.69)_44%,rgba(102,102,102,0.69)_100%)_1]" />
            <div className="relative font-literature text-white text-[16px] tracking-[1px] drop-shadow-[0_0_12px_white] text-center mb-6">
              ОГРАНИЧЕНИЕ РЕЙТИНГА
            </div>
            <div className="absolute w-[93.59%] h-[18.38%] top-[50%] left-[3.56%] font-labor text-white text-[10px] tracking-[0.30px] leading-[40px] font-normal text-center">
              <span className="tracking-[0.03px]">ОГРАНИЧЕНИЯ ПО РЕЙТИНГУ НА КОМАНДУ <br /></span>
              <span className="text-base tracking-[0.08px]">30000</span>
            </div>
            <div className="absolute w-[93.59%] h-[18.38%] top-[71.12%] left-[3.56%] font-labor text-white text-[10px] tracking-[0.30px] leading-[30px] font-normal text-center">
              <span className="tracking-[0.03px]">ОГРАНИЧЕНИЯ ПО ИНДИВИДУАЛЬНОМУ РЕЙТИНГУ <br /></span>
              <span className="text-base tracking-[0.08px]">ОТСУТСТВУЮТ</span>
            </div>
            <img src="/Star.png" alt="Star" className="scale-[6] absolute w-[90px] h-[90px] top-[22%] left-1/2 -translate-x-1/2 drop-shadow-[0_0_25px_white]" />
          </div>
        </div>

        {/* Prize pool section */}
        <div className="relative z-10 w-[899px] h-[395px]">
          <div className="absolute w-[91.10%] h-[84.89%] top-[15.11%] left-[4.45%] bg-[#000000b2] border border-solid border-transparent backdrop-blur-[3.75px] [border-image:linear-gradient(113deg,rgba(0,0,0,0.69)_0%,rgba(141,141,141,0.69)_44%,rgba(102,102,102,0.69)_100%)_1]" />
          <div className="absolute w-[91.10%] h-[30.90%] top-0 left-[4.45%] flex items-center justify-center [text-shadow:0px_0px_9.36px_#ffffff] font-literature text-white text-[40px] tracking-[1.20px] leading-[0.1px] font-normal text-center">
            ПРИЗОВОЙ ФОНД
          </div>
          <div className="h-[25.83%] top-[30.90%] left-[4.45%] text-[35px] tracking-[1.05px] absolute w-[91.10%] flex items-center justify-center font-labor font-normal text-white text-center leading-[54px]">
            1 МЕСТО - 6500 РУБЛЕЙ
          </div>
          <div className="h-[31.41%] top-[45.30%] left-[4.34%] text-3xl tracking-[0.90px] absolute w-[91.10%] flex items-center justify-center font-labor font-normal text-white text-center leading-[54px]">
            2 МЕСТО - 3500 РУБЛЕЙ
          </div>
          <div className="h-[25.83%] top-[61.80%] left-[4.45%] text-xl tracking-[0.60px] absolute w-[91.10%] flex items-center justify-center font-labor font-normal text-white text-center leading-[54px]">
            3 МЕСТО - 2000 РУБЛЕЙ
          </div>
          <img src="/Star.png" alt="Star" className="scale-[6] absolute w-[90px] h-[90px] top-[45%] right-[90.5%] drop-shadow-[0_0_25px_white]" />
          <img src="/Star.png" alt="Star" className="scale-[6] absolute w-[90px] h-[90px] top-[45%] left-[95.5%] -translate-x-1/2 drop-shadow-[0_0_25px_white]" />
        </div>
      </div>

      {/* Bottom gradients */}
      <div className="absolute bottom-0 left-0 w-full h-[700px] bg-gradient-to-t from-black via-black/90 to-transparent z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-b from-transparent via-black/60 to-black pointer-events-none z-[1]" />
    </section>
  );
};
