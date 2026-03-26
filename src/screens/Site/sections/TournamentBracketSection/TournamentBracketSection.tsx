import { useState } from "react";

interface MatchData {
  team1: string;
  team2: string;
  score1?: number;
  score2?: number;
}

const generatePlaceholderTeams = (count: number): string[] => {
  const teams: string[] = [];
  for (let i = 1; i <= count; i++) {
    teams.push(`Команда ${i}`);
  }
  return teams;
};

const MatchCard = ({ match, isCompact = false }: { match: MatchData; isCompact?: boolean }) => (
  <div className={`relative flex flex-col border border-[#333] bg-[#0a0a0a] ${isCompact ? 'w-[140px]' : 'w-[160px]'}`}>
    <div className="flex items-center justify-between px-2 py-1.5 border-b border-[#222] hover:bg-[#1a1a1a] transition-colors">
      <span className="font-labor text-[9px] text-[#ccc] tracking-wider truncate max-w-[100px]">
        {match.team1}
      </span>
      <span className="font-orbitron text-[10px] text-white ml-1">
        {match.score1 ?? "-"}
      </span>
    </div>
    <div className="flex items-center justify-between px-2 py-1.5 hover:bg-[#1a1a1a] transition-colors">
      <span className="font-labor text-[9px] text-[#ccc] tracking-wider truncate max-w-[100px]">
        {match.team2}
      </span>
      <span className="font-orbitron text-[10px] text-white ml-1">
        {match.score2 ?? "-"}
      </span>
    </div>
  </div>
);

const BracketColumn = ({
  matches,
  roundLabel,
  spacing = 0,
  isCompact = false,
}: {
  matches: MatchData[];
  roundLabel: string;
  spacing?: number;
  isCompact?: boolean;
}) => (
  <div className="flex flex-col items-center">
    <div className="font-literature text-[11px] text-[#888] tracking-wider mb-3 uppercase">
      {roundLabel}
    </div>
    <div className="flex flex-col items-center" style={{ gap: `${spacing}px` }}>
      {matches.map((match, i) => (
        <MatchCard key={i} match={match} isCompact={isCompact} />
      ))}
    </div>
  </div>
);

export const TournamentBracketSection = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<"upper" | "lower">("upper");
  const teams = generatePlaceholderTeams(32);

  // Upper bracket: 16 → 8 → 4 → 2 → 1
  const upperR1: MatchData[] = [];
  for (let i = 0; i < 16; i++) {
    upperR1.push({ team1: teams[i * 2], team2: teams[i * 2 + 1] });
  }
  const upperR2: MatchData[] = Array(8).fill(null).map((_, i) => ({
    team1: `Победитель ${i * 2 + 1}`, team2: `Победитель ${i * 2 + 2}`,
  }));
  const upperR3: MatchData[] = Array(4).fill(null).map((_, i) => ({
    team1: `UB QF ${i * 2 + 1}`, team2: `UB QF ${i * 2 + 2}`,
  }));
  const upperSF: MatchData[] = Array(2).fill(null).map((_, i) => ({
    team1: `UB SF ${i * 2 + 1}`, team2: `UB SF ${i * 2 + 2}`,
  }));
  const upperFinal: MatchData[] = [{ team1: "UB Финалист 1", team2: "UB Финалист 2" }];

  // Lower bracket
  const lowerR1: MatchData[] = Array(8).fill(null).map((_, i) => ({
    team1: `LB R1 ${i * 2 + 1}`, team2: `LB R1 ${i * 2 + 2}`,
  }));
  const lowerR2: MatchData[] = Array(4).fill(null).map((_, i) => ({
    team1: `LB R2 ${i * 2 + 1}`, team2: `LB R2 ${i * 2 + 2}`,
  }));
  const lowerR3: MatchData[] = Array(2).fill(null).map((_, i) => ({
    team1: `LB R3 ${i * 2 + 1}`, team2: `LB R3 ${i * 2 + 2}`,
  }));
  const lowerFinal: MatchData[] = [{ team1: "LB Финалист 1", team2: "LB Финалист 2" }];

  return (
    <section className="relative w-full py-16 px-4">
      {/* Section title */}
      <div className="text-center mb-8">
        <h2 className="font-literature text-white text-[32px] tracking-[1px] drop-shadow-[0_0_10px_#ffffff55]">
          СЕТКА ТУРНИРА
        </h2>
        <div className="w-[200px] h-[1px] bg-gradient-to-r from-transparent via-[#666] to-transparent mx-auto mt-3" />
      </div>

      {/* Bracket tabs */}
      <div className="flex items-center justify-center gap-0 mb-8">
        <button
          onClick={() => setActiveTab("upper")}
          className={`px-8 py-2.5 font-labor text-sm tracking-widest transition-all border border-[#333] ${
            activeTab === "upper"
              ? "bg-gradient-to-r from-[#8b0000] to-[#450000] text-white border-[#8b0000]"
              : "bg-[#0a0a0a] text-[#888] hover:text-white hover:border-[#555]"
          }`}
        >
          UPPER BRACKET
        </button>
        <button
          onClick={() => setActiveTab("lower")}
          className={`px-8 py-2.5 font-labor text-sm tracking-widest transition-all border border-[#333] border-l-0 ${
            activeTab === "lower"
              ? "bg-gradient-to-r from-[#8b0000] to-[#450000] text-white border-[#8b0000]"
              : "bg-[#0a0a0a] text-[#888] hover:text-white hover:border-[#555]"
          }`}
        >
          LOWER BRACKET
        </button>
      </div>

      {/* Bracket grid */}
      <div className="overflow-x-auto pb-4">
        {activeTab === "upper" ? (
          <div className="flex items-start gap-6 min-w-max mx-auto justify-center">
            <BracketColumn matches={upperR1} roundLabel="Раунд 1" spacing={4} isCompact />
            <BracketColumn matches={upperR2} roundLabel="Раунд 2" spacing={40} />
            <BracketColumn matches={upperR3} roundLabel="Четвертьфинал" spacing={116} />
            <BracketColumn matches={upperSF} roundLabel="Полуфинал" spacing={270} />
            <BracketColumn matches={upperFinal} roundLabel="Финал UB" spacing={0} />
          </div>
        ) : (
          <div className="flex items-start gap-6 min-w-max mx-auto justify-center">
            <BracketColumn matches={lowerR1} roundLabel="LB Раунд 1" spacing={4} isCompact />
            <BracketColumn matches={lowerR2} roundLabel="LB Раунд 2" spacing={40} />
            <BracketColumn matches={lowerR3} roundLabel="LB Раунд 3" spacing={116} />
            <BracketColumn matches={lowerFinal} roundLabel="LB Финал" spacing={0} />
          </div>
        )}
      </div>

      {/* Grand Final */}
      <div className="flex flex-col items-center mt-12">
        <div className="font-literature text-[#d4af37] text-[14px] tracking-widest mb-3 uppercase drop-shadow-[0_0_8px_#d4af3755]">
          ГРАНД-ФИНАЛ (BO3)
        </div>
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#8b0000] via-[#d4af37] to-[#8b0000] opacity-30 blur-sm" />
          <div className="relative flex flex-col border border-[#d4af37]/40 bg-[#0a0a0a] w-[200px]">
            <div className="flex items-center justify-between px-3 py-2 border-b border-[#333]">
              <span className="font-labor text-[10px] text-[#d4af37] tracking-wider">ПОБЕДИТЕЛЬ UB</span>
              <span className="font-orbitron text-[11px] text-white">-</span>
            </div>
            <div className="flex items-center justify-between px-3 py-2">
              <span className="font-labor text-[10px] text-[#ccc] tracking-wider">ПОБЕДИТЕЛЬ LB</span>
              <span className="font-orbitron text-[11px] text-white">-</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
