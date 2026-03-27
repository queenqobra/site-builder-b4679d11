const WhiteCell = () => (
  <div className="w-[120px] sm:w-[150px] md:w-[180px] h-[24px] sm:h-[28px] flex items-center px-3 rounded-full bg-gradient-to-b from-white via-[#e6e6e6] to-[#9e9e9e] shadow-[0_0_12px_rgba(255,255,255,0.6)] text-black text-[8px] sm:text-[10px] tracking-[2px] font-orbitron">
    TEAM
  </div>
);

const RedCell = () => (
  <div className="w-[120px] sm:w-[150px] md:w-[180px] h-[24px] sm:h-[28px] flex items-center px-3 rounded-full bg-gradient-to-b from-[#8b0000] via-[#cc0000] to-[#5a0000] shadow-[0_0_15px_rgba(255,0,0,0.4)] text-white text-[8px] sm:text-[10px] tracking-[2px] font-orbitron">
    TEAM
  </div>
);

const BlackCell = ({ label = "TEAM" }: { label?: string }) => (
  <div className="w-[160px] sm:w-[200px] md:w-[240px] h-[32px] sm:h-[38px] flex items-center px-4 rounded-full bg-gradient-to-b from-[#2a2a2a] to-black shadow-[0_0_30px_rgba(0,0,0,0.8)] text-white text-[9px] sm:text-[11px] tracking-[2px] font-orbitron">
    {label}
  </div>
);

export const TournamentBracketSection = () => {
  return (
    <section className="relative w-full min-h-[1200px] sm:min-h-[1400px] overflow-hidden">
      {/* ОБЛАКА */}
      <img
        src="/clouds.webp"
        alt="Clouds"
        className="absolute bottom-0 w-full z-[1] pointer-events-none"
      />

      {/* ГРАДИЕНТЫ */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-[2] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-black via-black/90 to-transparent z-[2] pointer-events-none" />

      {/* ЛУНА — выглядывает наполовину из-за footer */}
      <img
        src="/moon.png"
        alt="Moon"
        className="absolute bottom-[-50%] left-1/2 -translate-x-1/2 w-[600px] sm:w-[700px] z-[3] pointer-events-none"
        style={{ filter: "blur(1px) drop-shadow(0 0 80px red)" }}
      />

      {/* СЕТКА */}
      <div className="relative z-[10] w-full flex justify-center pt-[80px] sm:pt-[120px] px-4">
        <div className="relative w-full max-w-[1400px]">
          {/* РАМКА */}
          <div className="absolute inset-0 border border-white/10 pointer-events-none" />

          {/* TOI фон */}
          <img
            src="/TOIgrid.png"
            alt="TOI Grid"
            className="absolute inset-0 w-full h-full object-fill opacity-[0.07] pointer-events-none"
          />

          {/* Bracket images */}
          <img src="/bracket-white.png" alt="Bracket lines" className="absolute inset-0 w-full h-full object-fill z-[1] pointer-events-none" />
          <img src="/bracket-red.png" alt="Bracket red lines" className="absolute inset-0 w-full h-full object-fill z-[3] pointer-events-none" />

          {/* КАПСУЛЫ */}
          <div className="relative z-[2] py-8 sm:py-12 px-2 sm:px-6">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 items-start justify-between">

              {/* === БЕЛЫЕ: Столб 1 (16 ячеек) === */}
              <div className="flex flex-col gap-[6px] sm:gap-[8px]">
                {[...Array(16)].map((_, i) => <WhiteCell key={`w1-${i}`} />)}
              </div>

              {/* === БЕЛЫЕ: Столб 2 (16 ячеек) === */}
              <div className="flex flex-col gap-[6px] sm:gap-[8px]">
                {[...Array(16)].map((_, i) => <WhiteCell key={`w2-${i}`} />)}
              </div>

              {/* === ФИНАЛИСТЫ (чёрные, слева от красных) === */}
              <div className="flex flex-col items-center justify-center gap-4 self-center">
                <BlackCell />
                <BlackCell />
                <div className="text-red-500 text-[10px] sm:text-xs tracking-[2px] font-orbitron mt-1">
                  BO3
                </div>
              </div>

              {/* === КРАСНЫЕ: Столб 1 (16 ячеек) === */}
              <div className="flex flex-col gap-[6px] sm:gap-[8px]">
                {[...Array(16)].map((_, i) => <RedCell key={`r1-${i}`} />)}
              </div>

              {/* === КРАСНЫЕ: Столб 2 (16 ячеек) === */}
              <div className="flex flex-col gap-[6px] sm:gap-[8px]">
                {[...Array(16)].map((_, i) => <RedCell key={`r2-${i}`} />)}
              </div>
            </div>
          </div>

          {/* ЛОГО */}
          <img
            src="/red-logo.png"
            alt="Red Logo"
            className="absolute right-4 sm:right-[40px] top-4 sm:top-[40px] w-[150px] sm:w-[250px] md:w-[300px] z-[4] pointer-events-none drop-shadow-[0_0_100px_red]"
          />
        </div>
      </div>
    </section>
  );
};
