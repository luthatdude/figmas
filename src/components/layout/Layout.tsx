import { Link, useLocation } from "react-router-dom";
import svgPaths from "../../imports/svg-fv8vzdsefb";

const navLinks = [
  { to: "/", label: "Mint" },
  { to: "/stake", label: "Stake" },
  { to: "/lend-borrow", label: "Lend/Borrow" },
  { to: "/bridge", label: "Bridge" },
];

function Navigation() {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-[6px] bg-[rgba(0,0,0,0.6)] border-b border-[rgba(255,255,255,0.05)] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.5)]">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between px-8 h-[80px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <svg className="w-[57px] h-[40px]" fill="none" viewBox="0 0 57 40">
            <path d={svgPaths.p1c152280} fill="#10F09C" />
          </svg>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`font-['Bricolage_Grotesque',sans-serif] text-[20px] transition-colors ${
                  isActive
                    ? "text-[#00ff6f]"
                    : "text-[#00ff6f]/60 hover:text-[#00ff6f]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-6">
          {/* Network indicator */}
          <div className="flex flex-col items-end">
            <span className="text-[#6b7280] text-[10px] font-['Inter',sans-serif] uppercase">Network</span>
            <div className="flex items-center gap-1">
              <div className="w-[6px] h-[6px] rounded-full bg-[#05dd0c]" />
              <span className="text-[#05dd0c] text-[12px] font-['Inter',sans-serif]">Canton Mainnet</span>
            </div>
          </div>

          {/* Connect Wallet */}
          <button className="relative bg-[rgba(255,255,255,0.05)] rounded-[12px] px-6 py-[11px] flex items-center gap-2 transition-all hover:bg-[rgba(255,255,255,0.08)]">
            <div className="absolute inset-0 border border-[rgba(255,255,255,0.1)] rounded-[12px] pointer-events-none" />
            <i className="fas fa-wallet text-[#34d399] text-[16px]" />
            <span className="font-['IBM_Plex_Sans',sans-serif] font-medium text-white text-[16px]">
              Connect Wallet
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-[rgba(0,0,0,0.2)] border-t border-[rgba(255,255,255,0.05)]">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between px-4 py-8">
        <span className="text-[#6b7280] text-[14px] font-['IBM_Plex_Sans',sans-serif]">
          © 2026 Minted
        </span>
        <div className="flex items-center gap-6">
          <a href="#" className="text-[#9ca3af] text-[18px] hover:text-[#34d399] transition-colors">
            <i className="fab fa-twitter" />
          </a>
          <a href="#" className="text-[#9ca3af] text-[18px] hover:text-[#34d399] transition-colors">
            <i className="fab fa-discord" />
          </a>
          <a href="#" className="text-[#9ca3af] text-[18px] hover:text-[#34d399] transition-colors">
            <i className="fab fa-github" />
          </a>
          <a href="#" className="text-[#9ca3af] text-[18px] hover:text-[#34d399] transition-colors">
            <i className="fas fa-book" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#020402] relative overflow-hidden">
      {/* Background glow effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-[rgba(2,44,34,0.3)] rounded-full blur-[100px]" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-[rgba(20,83,45,0.15)] rounded-full blur-[80px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgb(74, 222, 128) 1px, transparent 1px), linear-gradient(90deg, rgb(74, 222, 128) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <Navigation />

      <main className="relative z-10 max-w-[1280px] mx-auto px-8 py-12">
        {children}
      </main>

      <Footer />
    </div>
  );
}
