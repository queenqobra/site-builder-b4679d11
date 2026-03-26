import { HeroBannerSection } from "./sections/HeroBannerSection";
import { NavigationHeaderSection } from "./sections/NavigationHeaderSection";
import { SocialMediaFooterSection } from "./sections/SocialMediaFooterSection";
import { TournamentBracketSection } from "./sections/TournamentBracketSection/TournamentBracketSection";
import { TournamentDetailsSection } from "./sections/TournamentDetailsSection/TournamentDetailsSection";

export const Site = (): JSX.Element => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative bg-black min-h-screen flex flex-col">
      {/* Fixed navigation */}
      <NavigationHeaderSection />

      {/* Hero with background */}
      <div className="relative w-full">
        {/* Background image */}
        <img
          className="w-full h-auto object-cover"
          alt="Background"
          src="/1background.png"
        />

        {/* Side decorations */}
        <img
          className="absolute top-0 left-0 w-[25vw] max-w-[460px] h-auto object-contain z-10 pointer-events-none"
          alt="Left decoration"
          src="/side-decor.png"
        />
        <img
          className="absolute top-0 right-0 w-[25vw] max-w-[460px] h-auto object-contain z-10 scale-x-[-1]"
          alt="Right decoration"
          src="/side-decor.png"
        />

        {/* Top dark gradient */}
        <div className="absolute top-0 left-0 w-full h-[20%] bg-gradient-to-b from-black via-black/80 to-transparent z-10 pointer-events-none" />

        {/* Bottom dark gradient */}
        <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none z-10" />

        {/* Hero content overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <HeroBannerSection />
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 bg-black">
        <TournamentDetailsSection />
        <TournamentBracketSection />
      </main>

      {/* Footer */}
      <SocialMediaFooterSection />

      {/* Arrow scroll-to-top button */}
      <div
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-8 h-[31px] bg-[url(/arrow.png)] bg-[100%_100%] z-50 cursor-pointer hover:opacity-80 transition-opacity"
      />
    </div>
  );
};
