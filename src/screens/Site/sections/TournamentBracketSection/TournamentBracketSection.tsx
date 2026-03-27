export const TournamentBracketSection = () => {
  return (
    <section className="relative w-full min-h-[1400px] overflow-hidden">

      {/* ☁️ ОБЛАКА */}
      <img
        src="/clouds.webp"
        alt="Clouds"
        className="absolute bottom-0 w-full z-[1] pointer-events-none"
      />

      {/* 🌫 ГРАДИЕНТ ПОВЕРХ ОБЛАКОВ */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-[2] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-black via-black/90 to-transparent z-[2] pointer-events-none" />

      {/* ЛУНА */}
      <img
        src="/moon.png"
        alt="Moon"
        className="absolute bottom-[-300px] left-1/2 -translate-x-1/2 w-[700px] z-[3] pointer-events-none"
        style={{ filter: "blur(1px) drop-shadow(0 0 80px red)" }}
      />

      {/* ================== СЕТКА (НОВЫЙ СЛОЙ) ================== */}
      <div className="relative z-[10] w-full flex justify-center pt-[120px]">
        <div className="relative w-[90%] max-w-[1400px]">

          {/* РАМКА */}
          <div className="absolute inset-0 border border-white/10 pointer-events-none" />

          {/* TOI фон */}
          <img
            src="/TOIgrid.png"
            alt="TOI Grid"
            className="absolute inset-0 w-full h-full object-fill opacity-[0.07] pointer-events-none"
          />

          {/* БЕЛЫЕ ЛИНИИ */}
          <img
            src="/bracket-white.png"
            alt="Bracket lines"
            className="absolute inset-0 w-full h-full object-fill z-[1] pointer-events-none"
          />

          {/* КРАСНЫЕ ЛИНИИ */}
          <img
            src="/bracket-red.png"
            alt="Bracket red lines"
            className="absolute inset-0 w-full h-full object-fill z-[3] pointer-events-none"
          />

          {/* ===== КАПСУЛЫ ===== */}
          <div className="relative z-[2] min-h-[700px]">

            {/* ЛЕВАЯ КОЛОНКА */}
            <div className="absolute left-[40px] top-[60px] flex flex-col gap-[10px]">
              {[...Array(16)].map((_, i) => (
                <div
                  key={i}
                  className="w-[180px] h-[28px] flex items-center px-4 rounded-full bg-gradient-to-b from-white via-[#e6e6e6] to-[#9e9e9e] shadow-[0_0_20px_white,0_0_40px_white] text-black text-[10px] tracking-[2px] font-orbitron"
                >
                  TEAM
                </div>
              ))}
            </div>

            {/* ВТОРАЯ КОЛОНКА */}
            <div className="absolute left-[320px] top-[120px] flex flex-col gap-[40px]">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="w-[180px] h-[28px] flex items-center px-4 rounded-full bg-gradient-to-b from-white via-[#e6e6e6] to-[#9e9e9e] shadow-[0_0_20px_white] font-orbitron text-black text-[10px]"
                >
                  TEAM
                </div>
              ))}
            </div>

            {/* ТРЕТЬЯ КОЛОНКА */}
            <div className="absolute left-[600px] top-[180px] flex flex-col gap-[80px]">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-[180px] h-[28px] flex items-center px-4 rounded-full bg-gradient-to-b from-white via-[#e6e6e6] to-[#9e9e9e] shadow-[0_0_20px_white] font-orbitron text-black text-[10px]"
                >
                  TEAM
                </div>
              ))}
            </div>

            {/* ПЕРЕД ФИНАЛОМ */}
            <div className="absolute left-[850px] top-[230px] flex flex-col gap-[120px]">
              {[...Array(2)].map((_, i) => (
                <div
                  key={i}
                  className="w-[180px] h-[28px] flex items-center px-4 rounded-full bg-gradient-to-b from-white via-[#e6e6e6] to-[#9e9e9e] shadow-[0_0_20px_white] font-orbitron text-black text-[10px]"
                >
                  TEAM
                </div>
              ))}
            </div>

            {/* ===== ФИНАЛ ===== */}
            <div className="absolute right-[120px] top-[200px] flex flex-col items-center gap-6">
              <div className="w-[260px] h-[42px] flex items-center px-6 rounded-full bg-gradient-to-b from-[#2a2a2a] to-black shadow-[0_0_30px_black,0_0_80px_black] text-white tracking-[2px] font-orbitron">
                TEAM
              </div>
              <div className="w-[260px] h-[42px] flex items-center px-6 rounded-full bg-gradient-to-b from-[#2a2a2a] to-black shadow-[0_0_30px_black,0_0_80px_black] text-white tracking-[2px] font-orbitron">
                TEAM
              </div>
              <div className="text-red-500 text-xs tracking-[2px] font-orbitron">
                BO3
              </div>
            </div>
          </div>

          {/* ЛОГО */}
          <img
            src="/red-logo.png"
            alt="Red Logo"
            className="absolute right-[40px] top-[180px] w-[300px] z-[2] pointer-events-none drop-shadow-[0_0_100px_red]"
          />
        </div>
      </div>
    </section>
  );
};
