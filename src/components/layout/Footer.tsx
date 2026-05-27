// Footer
export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-text font-bold text-sm">
              <span className="text-accent">Earn</span>Gap
            </span>
            <span className="text-[10px] text-text-muted">© 2026</span>
          </div>
          <div className="flex items-center gap-6 text-xs text-text-muted">
            <a href="#" className="hover:text-text transition-colors">About</a>
            <a href="#" className="hover:text-text transition-colors">Methodology</a>
            <a href="#" className="hover:text-text transition-colors">API</a>
            <span className="text-text-muted/50">Data updates daily 09:00 UTC+8</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
