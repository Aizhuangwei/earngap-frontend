// CTA Banner
export function CTABanner() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 mb-20">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#4ade80]/10 via-[#0a0a0f] to-[#60a5fa]/10 border border-[#1e1e2a] p-8 md:p-12 text-center">
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
        
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4ade80]/10 border border-[#4ade80]/20 mb-4">
            <span className="text-[10px] text-[#4ade80] font-medium">BETA — FREE TO USE</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-[#e8e8ed] mb-3">
            Start Spotting Opportunities
          </h2>
          <p className="text-sm text-[#7a7a8e] max-w-lg mx-auto mb-6">
            Join early access. No credit card required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2.5 rounded-lg bg-[#111118] border border-[#1e1e2a] text-sm text-[#e8e8ed] w-64 focus:outline-none focus:border-[#4ade80] placeholder:text-[#5a5a6e]"
            />
            <a href="#" className="px-6 py-2.5 rounded-lg bg-[#4ade80] text-black text-sm font-semibold hover:bg-[#3bc86e] transition-all whitespace-nowrap">
              Get Early Access
            </a>
          </div>

          <p className="text-[10px] text-[#5a5a6e] mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
