import { useState } from "react";

/* ─── Shared Components ─── */

function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative backdrop-blur-[6px] bg-[rgba(10,18,13,0.6)] rounded-[16px] ${className}`}>
      <div aria-hidden className="absolute inset-0 border border-[rgba(74,222,128,0.15)] rounded-[16px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.5)] pointer-events-none" />
      <div className="relative">{children}</div>
    </div>
  );
}

function Badge({ children, variant = "green" }: { children: React.ReactNode; variant?: "green" | "orange" }) {
  const colors = variant === "green"
    ? "bg-[rgba(16,185,129,0.1)] border-[rgba(16,185,129,0.2)] text-[#34d399]"
    : "bg-[rgba(249,115,22,0.1)] border-[rgba(249,115,22,0.2)] text-[#fb923c]";
  return (
    <span className={`inline-flex px-[9px] py-[2px] rounded-[4px] border text-[11px] font-['IBM_Plex_Sans',sans-serif] ${colors}`}>
      {children}
    </span>
  );
}

/* ─── Chain definitions ─── */

const chainOptions = [
  { name: "Canton", color: "#10b981", icon: "C" },
  { name: "Ethereum", color: "#627eea", icon: "Ξ" },
];

/* ─── Bridge Card ─── */

function BridgeCard() {
  const [fromChain, setFromChain] = useState(0);
  const [toChain, setToChain] = useState(1);

  const swapChains = () => {
    const tmp = fromChain;
    setFromChain(toChain);
    setToChain(tmp);
  };

  return (
    <GlassCard className="max-w-[500px] w-full">
      <div className="p-6 flex flex-col gap-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="font-['Bricolage_Grotesque',sans-serif] font-bold text-[18px] text-white tracking-[-0.36px]">
            Bridge Assets
          </h3>
          <div className="flex items-center gap-3">
            <button className="text-[#6b7280] hover:text-[#34d399] transition-colors">
              <i className="fas fa-cog text-[14px]" />
            </button>
            <button className="text-[#6b7280] hover:text-[#34d399] transition-colors">
              <i className="fas fa-history text-[14px]" />
            </button>
          </div>
        </div>

        {/* From Network */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-[#6b7280] text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.5px]">
              From Network
            </span>
            <span className="text-[12px]">
              <span className="text-[#6b7280] font-['Inter',sans-serif]">Balance: </span>
              <span className="text-[#d1d5db] font-['Inter',sans-serif]">0.00</span>
              <button className="text-[#34d399] font-['IBM_Plex_Sans',sans-serif] font-bold ml-2 text-[11px] uppercase">
                Max
              </button>
            </span>
          </div>
          <div className="relative">
            <div className="bg-[#050a07] rounded-[16px] h-[66px] flex items-center px-4">
              {/* Chain selector */}
              <button
                onClick={() => setFromChain(fromChain === 0 ? 1 : 0)}
                className="flex items-center gap-2 bg-[rgba(255,255,255,0.05)] rounded-[10px] px-3 py-2 border border-[rgba(255,255,255,0.1)] mr-4 hover:bg-[rgba(255,255,255,0.08)] transition-colors"
              >
                <div
                  className="w-[20px] h-[20px] rounded-full flex items-center justify-center text-white text-[9px] font-bold"
                  style={{ backgroundColor: chainOptions[fromChain].color }}
                >
                  {chainOptions[fromChain].icon}
                </div>
                <span className="text-white text-[14px] font-['IBM_Plex_Sans',sans-serif] font-medium">
                  {chainOptions[fromChain].name}
                </span>
                <i className="fas fa-chevron-down text-[#6b7280] text-[10px]" />
              </button>
              <input
                type="text"
                placeholder="0.00"
                className="flex-1 bg-transparent text-[24px] font-['Inter',sans-serif] text-[#4b5563] placeholder-[#4b5563] outline-none text-right"
              />
            </div>
            <div aria-hidden className="absolute inset-0 border border-[rgba(255,255,255,0.1)] rounded-[16px] pointer-events-none" />
          </div>
        </div>

        {/* Swap direction */}
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-x-0 top-1/2 border-t border-[rgba(255,255,255,0.05)]" />
          <button
            onClick={swapChains}
            className="relative bg-[#0a120d] w-[36px] h-[36px] rounded-full flex items-center justify-center border border-[rgba(255,255,255,0.1)] hover:border-[rgba(74,222,128,0.3)] transition-colors z-10"
          >
            <i className="fas fa-exchange-alt text-[#9ca3af] text-[14px] rotate-90" />
          </button>
        </div>

        {/* To Network */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-[#6b7280] text-[11px] font-['Inter',sans-serif] uppercase tracking-[0.5px]">
              To Network
            </span>
            <span className="text-[#6b7280] text-[12px] font-['Inter',sans-serif]">
              Receive (Est.)
            </span>
          </div>
          <div className="relative">
            <div className="bg-[#050a07] rounded-[16px] h-[66px] flex items-center px-4">
              <button
                onClick={() => setToChain(toChain === 0 ? 1 : 0)}
                className="flex items-center gap-2 bg-[rgba(255,255,255,0.05)] rounded-[10px] px-3 py-2 border border-[rgba(255,255,255,0.1)] mr-4 hover:bg-[rgba(255,255,255,0.08)] transition-colors"
              >
                <div
                  className="w-[20px] h-[20px] rounded-full flex items-center justify-center text-white text-[9px] font-bold"
                  style={{ backgroundColor: chainOptions[toChain].color }}
                >
                  {chainOptions[toChain].icon}
                </div>
                <span className="text-white text-[14px] font-['IBM_Plex_Sans',sans-serif] font-medium">
                  {chainOptions[toChain].name}
                </span>
                <i className="fas fa-chevron-down text-[#6b7280] text-[10px]" />
              </button>
              <span className="flex-1 text-[#4b5563] text-[24px] font-['Inter',sans-serif] text-right">0.00</span>
            </div>
            <div aria-hidden className="absolute inset-0 border border-[rgba(255,255,255,0.1)] rounded-[16px] pointer-events-none" />
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col gap-2 border-t border-[rgba(255,255,255,0.05)] pt-4">
          {[
            { label: "Bridge Fee", value: "0.1%" },
            { label: "Gas Cost (Est.)", value: "~$12.50" },
            { label: "Time to arrival", value: "~5 mins", icon: "fa-bolt", highlight: true },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between">
              <span className="text-[#6b7280] text-[14px] font-['IBM_Plex_Sans',sans-serif]">{item.label}</span>
              <span className={`text-[14px] font-['Inter',sans-serif] flex items-center gap-1 ${item.highlight ? "text-[#34d399]" : "text-[#d1d5db]"}`}>
                {item.icon && <i className={`fas ${item.icon} text-[#f59e0b] text-[12px]`} />}
                {item.value}
              </span>
            </div>
          ))}
        </div>

        {/* Action button */}
        <button
          className="w-full py-4 rounded-[12px] flex items-center justify-center gap-2 text-[#022c22] text-[18px] font-['IBM_Plex_Sans',sans-serif] font-bold tracking-[1px] uppercase transition-all hover:brightness-110"
          style={{ backgroundImage: "linear-gradient(135deg, #4ade80, #166534)" }}
        >
          Connect Wallet
          <i className="fas fa-arrow-right text-[#022c22] opacity-70 text-[16px]" />
        </button>

        {/* Fine print */}
        <p className="text-[#6b7280] text-[11px] font-['IBM_Plex_Sans',sans-serif] text-center leading-[16px]">
          By bridging, you agree to Minted's{" "}
          <span className="text-[#9ca3af] underline">Terms of Service</span>.
          Powered by <span className="text-[#9ca3af]">LayerZero</span> technology.
        </p>
      </div>
    </GlassCard>
  );
}

/* ─── Recent Activity (right side) ─── */

function RecentActivity() {
  const activities = [
    { action: "Bridge to Eth", amount: "500 mUSD", time: "2 mins ago", status: "Pending", variant: "orange" as const },
    { action: "Deposit", amount: "1,200 mUSD", time: "8 mins ago", status: "Success", variant: "green" as const },
  ];

  return (
    <GlassCard className="max-w-[280px] w-full">
      <div className="p-5 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <i className="fas fa-history text-[#34d399] text-[12px]" />
          <span className="text-white text-[14px] font-['IBM_Plex_Sans',sans-serif] font-bold">Recent Activity</span>
        </div>

        <div className="flex flex-col gap-3">
          {activities.map((a, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className={`w-[28px] h-[28px] rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                a.variant === "green" ? "bg-[rgba(16,185,129,0.2)]" : "bg-[rgba(249,115,22,0.2)]"
              }`}>
                <i className={`fas ${a.variant === "green" ? "fa-check" : "fa-exchange-alt"} text-[11px] ${
                  a.variant === "green" ? "text-[#34d399]" : "text-[#fb923c]"
                }`} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-white text-[13px] font-['IBM_Plex_Sans',sans-serif] font-medium">{a.action}</span>
                  <span className="text-[#d1d5db] text-[13px] font-['Inter',sans-serif]">{a.amount}</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[#6b7280] text-[11px] font-['IBM_Plex_Sans',sans-serif]">{a.time}</span>
                  <Badge variant={a.variant}>{a.status}</Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}

/* ─── Page ─── */

export default function BridgePage() {
  return (
    <div className="flex flex-col items-center gap-10 py-8">
      {/* Title */}
      <div className="text-center flex flex-col gap-3">
        <h1
          className="font-['Bricolage_Grotesque',sans-serif] font-bold text-[48px] tracking-[-1px] bg-clip-text bg-gradient-to-r from-[#8afda5] to-[#f59e0b]"
          style={{ WebkitTextFillColor: "transparent" }}
        >
          Cross-Chain Bridge
        </h1>
        <p className="text-[#9ca3af] text-[18px] font-['IBM_Plex_Sans',sans-serif] leading-[28px]">
          Securely transfer your mUSD between Canton and Ethereum networks<br />
          with near-instant finality.
        </p>
      </div>

      {/* Bridge + Recent Activity */}
      <div className="flex gap-6 items-start justify-center w-full flex-wrap">
        <BridgeCard />
        <RecentActivity />
      </div>
    </div>
  );
}
