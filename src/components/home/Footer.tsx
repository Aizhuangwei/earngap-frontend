// Footer
export function Footer() {
  return (
    <footer className="border-t border-[#1e1e2a] py-8">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-[#4ade80] flex items-center justify-center">
              <span className="text-black text-[9px] font-bold">E</span>
            </div>
            <span className="text-sm text-[#e8e8ed] font-bold">
              <span className="text-[#4ade80]">Earn</span>Gap
            </span>
            <span className="text-[10px] text-[#5a5a6e]">Wealth Intelligence Hub</span>
          </div>

          <div className="flex items-center gap-6 text-xs text-[#5a5a6e]">
            <a href="#" className="hover:text-[#7a7a8e] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#7a7a8e] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#7a7a8e] transition-colors">Disclaimer</a>
            <a href="#" className="hover:text-[#7a7a8e] transition-colors">Contact</a>
          </div>

          <div className="text-[10px] text-[#3a3a4e]">
            &copy; {new Date().getFullYear()} EarnGap. Not financial advice.
          </div>
        </div>
      </div>
    </footer>
  );
}
