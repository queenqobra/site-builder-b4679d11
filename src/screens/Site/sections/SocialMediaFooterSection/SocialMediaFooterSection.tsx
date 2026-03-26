export const SocialMediaFooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-[linear-gradient(90deg,rgba(78,69,75,1)_0%,rgba(180,159,173,1)_45%,rgba(77,76,77,1)_97%)] py-6">
      <div className="flex items-center justify-center gap-16 flex-wrap px-8">
        {/* Social media icons */}
        <div className="flex items-center gap-6">
          <a href="#" className="hover:opacity-80 transition-opacity">
            <img src="/Telegram.png" className="w-8 h-8 object-contain" alt="Telegram" />
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity">
            <img src="/discord.png" className="w-8 h-8 object-contain" alt="Discord" />
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity">
            <img src="/youtube.png" className="w-8 h-8 object-contain" alt="YouTube" />
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity">
            <img src="/tiktok.png" className="w-8 h-8 object-contain" alt="TikTok" />
          </a>
        </div>

        {/* Center logo */}
        <img
          src="/logo.png"
          alt="TOI Logo"
          className="h-[90px] object-contain"
        />

        {/* Navigation links */}
        <div className="flex items-center gap-10">
          <a href="#" className="font-labor text-black text-sm tracking-[0.42px] hover:opacity-70 transition-opacity">
            ИНФОРМАЦИЯ
          </a>
          <a href="#" className="font-labor text-black text-sm tracking-[0.42px] hover:opacity-70 transition-opacity">
            РЕГЛАМЕНТ
          </a>
        </div>
      </div>
    </footer>
  );
};
